import React from 'react'
import { Dimensions } from 'react-native'
import LoginButton from '../../components/home/LoginButton'
import HeaderHome from '../../components/home/HeaderHome'
import TextHome from '../../components/home/TextHome'
import backgroundImage from '../../assets/home-background.jpg'
import { Containner, ImageBackground } from './styles'

const { width: deviceWidth, height: deviceHeigth } = Dimensions.get('window')

const Home = () => (
  <Containner>
    <ImageBackground deviceSize={{ deviceHeigth, deviceWidth }} source={backgroundImage}>
      <HeaderHome />
      <TextHome />
      <LoginButton />
    </ImageBackground>
  </Containner>
)
export default Home
