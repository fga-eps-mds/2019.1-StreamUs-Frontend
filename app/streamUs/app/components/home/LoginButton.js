import React, { Component } from 'react'
import { Button, Containner, TextButton, Icon } from './styles'
// import { refreshTokens } from '../Helper'
import spotifyIcon from '../../assets/Spotify_Icon_RGB_White.png'
import Spotify from 'rn-spotify-sdk'

export default class LoginButton extends Component {
  constructor (props) {
    super(props)
    this.state = { accessTokenAvailable: false, spotifyInitialized: false }
    this.onPressButton = this.onPressButton.bind(this)
  }
  async initializeIfNeeded () {
    // initialize Spotify if it hasn't been initialized yet
    if (!await Spotify.isInitializedAsync()) {
      // initialize spotify
      const spotifyOptions = {
        'clientID': '<INSERT-YOUR-CLIENT-ID-HERE>',
        'sessionUserDefaultsKey': 'SpotifySession',
        'redirectURL': 'examplespotifyapp://auth',
        'scopes': ['user-read-private', 'playlist-read', 'playlist-read-private', 'streaming']
      }
      const loggedIn = await Spotify.initialize(spotifyOptions)
      // update UI state
      this.setState({
        spotifyInitialized: true
      })
      // handle initialization
      if (loggedIn) {
        this.setState({ accessTokenAvailable: true })
      }
    } else {
      // update UI state
      this.setState({
        spotifyInitialized: true
      })
      // handle logged in
      if (await Spotify.isLoggedInAsync()) {
        this.setState({ accessTokenAvailable: true })
      }
    }
  }

  onPressButton () {
    Spotify.login().then(loggedIn => {
      if (loggedIn) {
        this.setState({ accessTokenAvailable: true })
      }
    })
  }
  componentDidMount () {
    this.initializeIfNeeded()
  }
  render () {
    return (
      <Containner key='containner-login-button'>
        <Button
          onPress={this.onPressButton}
          activeOpacity={0.5}
          key='button-login'
        >
          <Icon source={spotifyIcon} key='spotify-login-icon' />
          <TextButton key='text-login-button'>LOGAR COM SPOTIFY</TextButton>
        </Button>
      </Containner>
    )
  }
}
