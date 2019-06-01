import { AuthSession } from 'expo';
import SpotifyWebAPI from 'spotify-web-api-js';
import { encode as btoa } from 'base-64';
import { AsyncStorage } from 'react-native';

const getSpotifyCredentials = async () => {
  const res = await fetch('https://api.streamusmusic.app/api/spotify-credentials');
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
    const credentials = await getSpotifyCredentials();
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
    const authorizationCode = await getAuthorizationCode();
    const credentials = await getSpotifyCredentials();
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
    const credentials = await getSpotifyCredentials();
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
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getValidSPObj = async () => {
  const tokenExpirationTime = await AsyncStorage.getItem('expirationTime');
  if (new Date().getTime() > tokenExpirationTime) {
    // access token has expired, so we need to use the refresh token
    await refreshTokens();
  }
  const accessToken = await AsyncStorage.getItem('accessToken');
  const sp = new SpotifyWebAPI();
  await sp.setAccessToken(accessToken);
  return sp;
};
