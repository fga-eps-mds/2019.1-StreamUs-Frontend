import React, { Component } from 'react';
import ArtistaMusica from './ArtistaMusica'
import {View, Text} from 'react-native';
import axios from './axiosintercept'

export default class ShowPlaylist extends Component {
    async fetchMusic() {
      const playlist_id = '' //id da playlist a ser mostrada
      try { 
        const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)
        alert(JSON.stringify(data.items))
        return data;
        }
        catch(err) {
          throw new Error(err)
        }
      
    }
    componentDidMount() {
        this.fetchMusic()
    }
    render() {
        return (
            <View>        
              <ArtistaMusica artista='artista' musica='musica'/>
              <Text onClick={() => this.fetchMusic()}>aloo</Text>
            </View>
        );
    }
}