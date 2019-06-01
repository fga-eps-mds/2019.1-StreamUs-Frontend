import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { refreshTokens } from '../Helper';
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


class LoginButton extends React.Component {
  constructor() {
    super();
    this.state = { accessTokenAvailable: false };
  }

  async onPressButton() {
    const avalaible = await refreshTokens();
    this.setState({ accessTokenAvailable: avalaible });
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
