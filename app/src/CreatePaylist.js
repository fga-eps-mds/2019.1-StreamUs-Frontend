import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { SearchBar } from './SearchBar';

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <SearchBar/>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>NomeDaMusica</Text>
                <Text note numberOfLines={1}>Nome do Artista</Text>
                <Text note numberOfLines={1}>Duração </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Excluir</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <Button rounded success>
            <Text>Criar Playlist</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}