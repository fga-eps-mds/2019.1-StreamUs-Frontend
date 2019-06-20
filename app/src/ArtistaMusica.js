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
            <Text style = {styles.texto}>  Artista: {this.props.artista}</Text>
            <Text style = {styles.texto}>  Música: {this.props.musica}</Text>
          </View>

          <TouchableOpacity style = {styles.botao} >
            <Text style = {styles.textoBotao}>
              Adicionar
            </Text>
          </TouchableOpacity >
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
    height : 70,
    alignItems : 'center',
    borderWidth : 1,
    borderBottomColor : 'white'

  },
   texto: {

    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',

  },

   botao: {

    alignItens: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    width: 100,
    height: 30,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,

  },
  buttonPos : {
    alignItems : 'right',
  },
  textoBotao: {

    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',

  },

  });
