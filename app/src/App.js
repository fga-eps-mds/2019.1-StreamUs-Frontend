import React, { Component } from 'react';
import {Button, Image, View, Text } from 'react-native';
import { default as ArtistaMusica} from './ArtistaMusica';



// const obj =[] objeto de teste
const obj = [
  {
    artista: "Lucas",
    musica: "My songL"
  },
  {
    artista: "Iago",
    musica: "My songI"
  },
  {
    artista: "Ygor",
    musica: "My songY"
  }
]


const urlImg = 'https://facebook.github.io/react-native/docs/assets/favicon.png'

export default class FormExample extends Component {
  render() {
    let res = [];

    //tamanho do resultado da busca
    let SIZE = obj.length
    for (let i = 0; i < SIZE; i++) {
      res.push(
        <View key={i}>
          <ArtistaMusica artista={obj[i].artista} musica={obj[i].musica}  urlImg ={urlImg} />
        </View>
      )
    }
    return (

      <View>
        <Text>
          Musica{"\n\n"} 
        </Text>

        {res}
      </View>

    );
  }
}