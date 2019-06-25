import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

export default class MusicaPlaylist extends Component {
  render() {
    return (
      <View>
        <View style={styles.align}>
          <View style={{ marginLeft: 10 }}>
            <Image style={{ width: 50, height: 50 }} source={{ uri: this.props.urlImg }} />
          </View>

          <View style={styles.viewItem}>

            <Text style={styles.textoMusica}> {this.props.musica}</Text>
            <Text style={styles.textoArtista}> {this.props.artista}</Text>

          </View>

        </View>
        <View >

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  align: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    borderWidth: 0.5,
    borderBottomColor: 'white',
    marginBottom: 1,

  },

  textoMusica: {

    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',

  },

  textoArtista: {

    fontSize: 13,
    textAlign: 'left',
    color: 'gray',
    fontWeight: 'bold',

  },

  viewBotao: {

    marginLeft: 35

  },

  viewItem: {
    marginLeft: 10,
    width: 200

  },

});