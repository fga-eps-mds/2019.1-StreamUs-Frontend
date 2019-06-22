import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

export default class ArtistaMusica extends Component {
  render() {
    return (
      <View>
        <View style={styles.align}>
          <View style={{ marginLeft: 10 }}>
            <Image style={{ width: 50, height: 50 }} source={{ uri: this.props.urlImg }} />
          </View>

          <View style={styles.viewItem}>

            <Text style={styles.texto}>  Música: {this.props.musica}</Text>
            <Text style={styles.texto}>  Artista: {this.props.artista}</Text>

          </View>

          <View style={styles.viewBotao}>
            <TouchableOpacity style={styles.botao} >
              <Text style={styles.textoBotao}>
                Adicionar
            </Text>
            </TouchableOpacity >
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
  texto: {

    fontSize: 15,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',

  },

  botao: {

    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    width: 100,
    height: 30,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0.5,


  },

  textoBotao: {

    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
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