import React, { Component } from 'react';
import {ArtistaMusica} from './ArtistaMusica'
import {View} from 'react-native';


export default class ShowPlaylist extends Component {
    render() {
        return (
            <View>
                <ArtistaMusica artista='artista' musica='musica'/>
            </View>
        );
    }
}