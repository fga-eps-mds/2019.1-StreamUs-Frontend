import React, { Component } from 'react';
import {Button, Image, View, Text } from 'react-native';

export default class ArtistaMusica extends Component {
    render() {
      return (
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: this.props.urlImg}}
          />
          <Text>Artista: {this.props.artista}</Text>
          <Text>Música: {this.props.musica}</Text>
          <Button title="addTrack">
            <Text>
              Adicionar
            </Text>
          </Button>
        </View>
      );
    }
  }

