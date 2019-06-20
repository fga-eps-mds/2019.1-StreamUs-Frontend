import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Keyboard
} from 'react-native';
import { default as ArtistaMusica } from './ArtistaMusica';
import Pesquisa from './pesquisa';

// const obj =[] objeto de teste
const axios = require('axios');

let accessToken = 'BQC9RFgUhyRnNlQPYwLiY3p347zAKHHhVOa9eZZyHyBdpZplInhrH0ouOxxWzPfYkTds8MX4ENFCwJ_vWz2qDmPReK9xiJGMOkDmD5HDkcnAK_ee11AnW9ieDXz3IKxZsWQCYMyAJoJ3iGoHofJnylancHqcqKckkZel_dsmeUvge1b6Xg';

let obj = [
  {
    artista: 'Lucas',
    musica: 'My songL',
  },
  {
    artista: 'Iago',
    musica: 'My songXX',
  },
  {
    artista: 'Marcelo',
    musica: 'My songI',
  },
  {
    artista: 'JV',
    musica: 'My songI',
  },
  {
    artista: 'Bahia',
    musica: 'My songI',
  },
  {
    artista: 'Baiano',
    musica: 'My songI',
  },
  {
    artista: 'Clemente',
    musica: 'My songI',
  },
  {
    artista: 'Mudin',
    musica: 'My songI',
  },
  {
    artista: 'Ygor',
    musica: 'My songY',
  },
];


const urlImg = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

const pesquisar = async (key) => {
  
  let url = `https://api.spotify.com/v1/search?q=${key}&type=track&limit=10`;
  console.log( "Pesquisar.url : "+ url)
  try {
    console.log('Try: Pesquisar()')
    
    let {data} = await axios.get(url, {headers: {"Authorization": 'Bearer ' + global.accessToken,
                                                "Accept": "application/json",
          	                                    "Content-Type": "application/json"}});
    console.log(data)
    return data;
  }catch(err) {
    console.log('Catch: Pesquisar()')
    console.log(err)
    throw new Error(err)
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      input:''
    };
  }

  handleKeyUp = (e) => {
      if(e.nativeEvent.key == "Enter"){
          console.log('enter')
          Keyboard.dismiss;
      }
    }

  render() {
    let resp = [];
    //let res = [];
    
    //tamanho do resultado da busca
    let SIZE = obj.length;
    for (let i = 0; i < SIZE; i++) 
      resp.push(
        <View key={i}>
          <ArtistaMusica
            artista={obj[i].artista}
            musica={obj[i].musica}
            urlImg={urlImg}
          />
        </View>
      );
    
    return (
      <View style={styles.mainView}>
        <StatusBar hidden={true} />
        <View style={styles.toolBar}>
          <Text style={styles.addMusicTitle}> Adicionar Música </Text>
        </View>

        <ScrollView>
          
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Buscar música..."
              paddingLeft={20}
              onSubmitEditing={(searchText) => {pesquisar(this.state.searchText)}}
              onChangeText={searchText => this.setState({ searchText })}
              onKeyUp={e => {
                  if(e.nativeEvent.key == "Enter"){
                    console.log('enter')
                     Keyboard.dismiss;
      }
    }}
            />
          </View>

          <View style={styles.showMusics}>{resp}</View>
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
    justifyContent: 'center',
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
    textAlign: 'center',
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
    marginTop: 10,
  },
});
