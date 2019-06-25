import React, { Component } from 'react';
import MusicaPlaylist from './MusicaPlaylist'
import {View, ScrollView, Text, StyleSheet, StatusBar} from 'react-native';
import axios from './axiosintercept'

export default class ShowPlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

    async fetchMusic() {
      const playlist_id = ''
      try { 
        const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)
        //alert(JSON.stringify(data))
        this.setState({items: data.items})
        }
        catch(err) {
          throw new Error(err)
        }
      
    }
    componentDidMount() {
      this.fetchMusic()
    }
    render() {
      let resp = [];

      //alert(JSON.stringify(this.state.items))

      //tamanho da playlist
      let SIZE = this.state.items.length;

      for (let i = 0; i < SIZE; i++) 
        resp.push(
          <View key={i}>
            <ArtistaMusica
              artista={this.state.items[i].track.artists[0].name}
              musica={this.state.items[i].track.name}
              urlImg={this.state.items[i].track.album.images[0].url}
            />
          </View>
        );

        return (
         <View style={styles.mainView}>
           <StatusBar hidden={true} />
        <View style={styles.toolBar}>
          <Text style={styles.inviteTitle}> Playlist </Text>
</View>

          
            <ScrollView>
              <View style= {StyleSheet.showMusics}>        
                {resp}
              </View>
            </ScrollView>
         

          <View style = {styles.footer}>
            <Text style = {styles.footerText}> StreamUs </Text>
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

  showMusics: {
    
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
 footer: {
  
      height: 50,
      marginTop: 20,
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

 toolBar: {
  
      flexDirection: 'row',
      height: 50,
      backgroundColor: '#191414',
      justifyContent: 'center',
      alignItens: 'center',
  
    },
  
    inviteTitle: {
  
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
  
},

});
