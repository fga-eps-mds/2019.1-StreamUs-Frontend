import React, { Component } from 'react';
import {
  Container, Header, Content, List, ListItem,
  Thumbnail, Text, Left, Body, Right, Button, View,
  StyleSheet, TouchableOpacity
} from 'native-base';

const convertMsToMinutes = time => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
export default class Track extends Component {
  constructor(props) {
    super()
  }

  addTrack = (name, id) => {

    if (name.length >= 3) {
      const url = `https://api.spotify.com/v1/audio-features/${id}`
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          response.json()
          console.log(response);
        })
        .catch(error => {
          console.log(erro);
        });
    }

    fieldTracks = {
      'id': response.id,
      'uri': response.uri,
      'track_href': response.track_href,
      'analysis_url': responde.analysis_url,
      'type': responde.type
    }
  }

  render() {
    const { track } = this.props

    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: 'https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee' }} />
        </Left>
        <Body>
          <Text>{track.name}</Text>
          <Text note numberOfLines={1}>{track.artists}</Text>
          <Text note numberOfLines={1}>{convertMsToMinutes(track.duration_ms)} </Text>
        </Body>
        <Right>
          <Button transparent danger>
            <Text>Excluir</Text>
          </Button>
        </Right>
      </ListItem>)
  }
}