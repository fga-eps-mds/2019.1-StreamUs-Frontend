import React from 'react';
import {Text,View, TextInput, TouchableOpacity} from 'react-native';

export default class Pesquisa extends React.Component{
    state = {
        musica: "",
        artista: ""
    }
    handleMusica = (text) => {
        this.setState({ musica: text })
    }
    handleArtista = (text) => {
        this.setState({ artista: text })
    }

    pesquisa = (musica = '', artista = '') => {
        alert(musica + " de " + artista)
    }
    render(){
    return(

        <View>            
                <TextInput
                placeholder="Musica"
                maxLength={20}
                autoCapitalize="none"
                onChangeText={this.handleMusica}/>
            
                <TextInput
                placeholder="Artista"
                maxLength={20}
                autoCapitalize="none"
                onChangeText={this.handleArtista}/>

                <TouchableOpacity onPress={()=>
                    // alert(this.state.artista +" -- "+this.state.musica)
                    {}
                }>
                    <Text>Pesquisar</Text>
                </TouchableOpacity>            
        </View>
    )
}
}
