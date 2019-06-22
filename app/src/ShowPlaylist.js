import React, { Component } from 'react';
import ArtistaMusica from './ArtistaMusica'
import {View, ScrollView, Text, StyleSheet} from 'react-native';
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
         // <View style={styles.mainView}>
            <ScrollView>
              <View style= {StyleSheet.showMusics}>        
                {resp}
              </View>
            </ScrollView>
         // </View>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
});