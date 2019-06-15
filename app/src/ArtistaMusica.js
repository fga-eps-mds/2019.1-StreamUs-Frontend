import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity, Image, View, Text } from 'react-native';

export default class ArtistaMusica extends Component {
    render() {
      return (
        <View >
        <View style={styles.align}>
          <View>
            <Image style={{width: 50, height: 50}} source={{uri: this.props.urlImg}} />
          </View>
          <View>
            <Text>  Artista: {this.props.artista}</Text>
            <Text>  Música: {this.props.musica}</Text>
          </View>
        </View>
        <View >
          <TouchableOpacity >
            <Text>
              Adicionar
            </Text>
          </TouchableOpacity >
        </View>  
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  align: {
    flexDirection: 'row'
  }
  });
