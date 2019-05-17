import React from 'react';
import {
  View, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';
import LoginButton from './homeAssets/LoginButton';
import backgroundImage from './homeAssets/home-background.jpg';
import Top from './homeAssets/top';
import TextInfo from './homeAssets/infoText';

const { width: deviceWidth, height: deviceHeigth } = Dimensions.get('window');
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  image: {
    width: deviceWidth,
    height: deviceHeigth,
  },

  textMain: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Arial',
  },
});
class Home extends React.PureComponent {
  render() {
    return (
      <View style={styles.view}>
        <ImageBackground style={styles.image} source={backgroundImage}>
          <Top />
          <TextInfo />
          <LoginButton />
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
