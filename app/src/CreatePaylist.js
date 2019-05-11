import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  button: {
    margin: '10%',
    backgroundColor: '#1DB954',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
  },
});

export default class CreatePlaylist extends Component {
  render() {
    let tracks = []
    for (let i = 0; i < 10; i++) {
      tracks.push(<ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: 'https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee' }} />
        </Left>
        <Body>
          <Text>NomeDaMusica</Text>
          <Text note numberOfLines={1}>Nome do Artista</Text>
          <Text note numberOfLines={1}>Duração </Text>
        </Body>
        <Right>
          <Button transparent danger>
            <Text>Excluir</Text>
          </Button>
        </Right>
      </ListItem>)
    }
    return (
      <Container>
        <Header />
        <SearchBar />
        <Content>
          <List>
            {tracks}
          </List>
          <Body>
            <Button style={styles.button} rounded>
              <Text style={styles.textButton}>Criar Playlist</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}