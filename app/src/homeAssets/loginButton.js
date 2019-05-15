import React from 'react';
import {
  Linking,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import { AuthSession } from 'expo';

import { encode as btoa } from 'base-64';
import spotifyIcon from './Spotify_Icon_RGB_White.png';

const styles = StyleSheet.create({
  size: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.49)',
  },

  IconStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  ButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    height: 35,
    width: 250,
    borderRadius: 5,
    margin: 5,
  },

  TextStyle: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    margin: 10,
  },
});

const getSpotifyCredentials = async () => {
  const res = await fetch('/api/spotify-credentials');
  const spotifyCredentials = res.data;
  return spotifyCredentials;
};

const scopesArr = [
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-library-modify',
  'user-library-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-read-recently-played',
  'user-top-read',
];
const scopes = scopesArr.join(' ');

const getAuthorizationCode = async () => {
  let result;
  try {
    const credentials = await getSpotifyCredentials(); // we wrote this function above
    const redirectUrl = AuthSession.getRedirectUrl(); // this will be something like https://auth.expo.io/@your-username/your-app-slug
    result = await AuthSession.startAsync({
      authUrl: `${'https://accounts.spotify.com/authorize'
        + '?response_type=code'
        + '&client_id='}${credentials.clientId}${
        scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
      }&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
  } catch (err) {
    console.error(err);
  }
  const { code } = result.params;
  return code;
};

const getTokens = async () => {
  try {
    const authorizationCode = await getAuthorizationCode(); // we wrote this function above
    const credentials = await getSpotifyCredentials(); // we wrote this function above (could also run this outside of the functions and store the credentials in local scope)
    const credsB64 = btoa(`${credentials.clientId}:${credentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        credentials.redirectUri
      }`,
    });
    const responseJson = await response.json();
    // destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
    } = responseJson;

    const expirationTime = new Date().getTime() + expiresIn * 1000;
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('expirationTime', expirationTime);
  } catch (err) {
    console.error(err);
  }
};
export const refreshTokens = async () => {
  try {
    const credentials = await getSpotifyCredentials(); // we wrote this function above
    const credsB64 = btoa(`${credentials.clientId}:${credentials.clientSecret}`);
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });
    const responseJson = await response.json();
    if (responseJson.error) {
      await getTokens();
    } else {
      const {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        expires_in: expiresIn,
      } = responseJson;

      const expirationTime = new Date().getTime() + expiresIn * 1000;
      await AsyncStorage.setItem('accessToken', newAccessToken);
      if (newRefreshToken) {
        await AsyncStorage.setItem('refreshToken', newRefreshToken);
      }
      await AsyncStorage.setItem('expirationTime', expirationTime);
    }
  } catch (err) {
    console.error(err);
  }
};
class LoginButton extends React.Component {
  constructor() {
    super();
    this.state = { accessTokenAvailable: '' };
  }

  onPressButton() {
    Linking.openURL('https://api.streamusmusic.app/login');
  }

  async componentDidMount() {
    const tokenExpirationTime = await AsyncStorage.getItem('expirationTime');
    if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
      await refreshTokens();
    } else {
      this.setState({ accessTokenAvailable: true });
    }
  }

  render() {
    return (
      <View style={styles.size}>
        <TouchableOpacity
          onPress={this.onPressButton}
          style={styles.ButtonStyle}
          activeOpacity={0.5}
        >
          <Image style={styles.IconStyle} source={spotifyIcon} />
          <Text style={styles.TextStyle}>LOGAR COM SPOTIFY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginButton;
