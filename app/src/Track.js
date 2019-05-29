import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';

const convertMsToMinutes = time => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
export default class Track extends Component {
  constructor(props) {
    super()
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