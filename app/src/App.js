import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native';
import { default as ArtistaMusica } from './ArtistaMusica';

// const obj =[] objeto de teste
const axios = require('axios')
let obj = [{
  artista: "Lucas",
  musica: "My songL"
},
{
  artista: "Iago",
  musica: "My songXX"
},
{
  artista: "Marcelo",
  musica: "My songI"
},
{
  artista: "JV",
  musica: "My songI"
},
{
  artista: "Bahia",
  musica: "My songI"
},
{
  artista: "Baiano",
  musica: "My songI"
},
{
  artista: "Clemente",
  musica: "My songI"
},
{
  artista: "Mudin",
  musica: "My songI"
},
{
  artista: "Ygor",
  musica: "My songY"
}

];

const url = 'https://api.spotify.com/v1/search?q=despacito&type=track&limit=10'
const accessToken = 'BQADUOZpvx4S1pFkF9BjqvQ3SPjqgRMXREjCm1DbHPqmz25Q2f7lHwy680apfIgFkjWHbJqM6YMR2XAJEAVHvtIQO5JXZ7M-jW0syb23Pw6_J97Pb3D5d_biSFN8M-JMTuYCxNfWaJ41MCqmMGxe4UvWwdQZ-LtcvmiMDTnzdgS50Z8pDAF8OcZ7cj-NjZabaeFmDobyeIoLeBLjplo8uDFI8Sj1hzCCGv7qkCfRbmWQBC60XpzazYjUh86bFh-4mIjN1F-qKsLTQmhTYQYB'

const urlImg =
  'https://facebook.github.io/react-native/docs/assets/favicon.png';

export default class FormExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  render() {
    let resp = [];
    //let res = [];

    fetch(url, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        response.json()
        console.log(response)
        obj = response.tracks.items
        alert(response)
      })
      .catch(error => {
        console.log(error)
      });

    //tamanho do resultado da busca
    let SIZE = obj.length;
    for (let i = 0; i < SIZE; i++) {
      resp.push(

        <View key={i}>
          <ArtistaMusica
            artista={obj[i].artista}
            musica={obj[i].musica}
            urlImg={urlImg}
          />
        </View>

      );
    }
    return (
      <View style={styles.mainView}>

        <StatusBar hidden={true} />
        <View style={styles.toolBar}>
          <Text style={styles.addMusicTitle}> Adicionar Música </Text>
        </View>



        <ScrollView>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInputStyle}
              placeholder="Buscar música..."
              paddingLeft={20}
              onChangeText={(searchText) => this.setState({ searchText })} />
          </View>

          <View style={styles.showMusics}>
            {resp}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}> StreamUs </Text>
        </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'

  },

  toolBar: {

    flexDirection: 'row',
    height: 50,
    backgroundColor: '#191414',
    justifyContent: 'center',
    alignItens: 'center',

  },

  addMusicTitle: {

    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

  },

  footer: {

    height: 50,
    backgroundColor: '#191414',
    justifyContent: 'center',
    alignItens: 'center',

  },

  footerText: {

    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'

  },

  showMusics: {

    flex: 1,
    flexDirection: 'column',
    alignItens: 'center',
    marginTop: 10,

  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
  },

  textInputView: {
    heigth: 60,
    flex: 1,
    marginTop: 10
  },



})
