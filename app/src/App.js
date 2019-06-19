import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { default as ArtistaMusica } from './ArtistaMusica';

// const obj =[] objeto de teste
const axios = require('axios')
let obj = [{
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
  
];

const url = 'https://api.spotify.com/v1/search?q=despacito&type=track&limit=10'
const accessToken = 'BQADUOZpvx4S1pFkF9BjqvQ3SPjqgRMXREjCm1DbHPqmz25Q2f7lHwy680apfIgFkjWHbJqM6YMR2XAJEAVHvtIQO5JXZ7M-jW0syb23Pw6_J97Pb3D5d_biSFN8M-JMTuYCxNfWaJ41MCqmMGxe4UvWwdQZ-LtcvmiMDTnzdgS50Z8pDAF8OcZ7cj-NjZabaeFmDobyeIoLeBLjplo8uDFI8Sj1hzCCGv7qkCfRbmWQBC60XpzazYjUh86bFh-4mIjN1F-qKsLTQmhTYQYB'

const urlImg =
  'https://facebook.github.io/react-native/docs/assets/favicon.png';

export default class FormExample extends Component {
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
      <View>
        <Text>Musica{'\n\n'}</Text>
        {resp}
       
      </View>
      
    );
    
  }
}
