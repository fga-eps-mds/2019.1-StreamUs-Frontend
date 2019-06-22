import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './usuarioLogadoStyle'


const axios = require('axios')
const acess_token = '' //Deve vir com o login - Fazer import

const user_id = '' //Deve vir com o logion - Fazer import

export default class UsuarioLogado extends React.Component {
  state = {
    usuario: {},
    image: {}
  };

  componentDidMount() {
    this.getPlaylistTrack(user_id);
  }

  async getPlaylistTrack(user_id) {
    if (user_id) {
      try {
        let { data } = await axios.get(`https://api.spotify.com/v1/users/${user_id}`,
          {
            headers:
              { Authorization: 'Bearer ' + acess_token }
          })

        this.setState({ usuario: data, image: data.images[0].url })

      }
      catch (err) {
        throw new Error(err)
      }

    }
  }

  render() {


    let getData = this.getPlaylistTrack(user_id)
    console.log(this.state.usuario.images)

    return (

      <View style={styles.mainView}>
        <StatusBar hidden={true} />

        <View style={styles.toolBar}>
          <Text style={{ fontSize: 30, marginTop: 5, color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Perfil </Text>
        </View>

        <View style={{ flex: 1 }}>


          <View style={styles.perfilBorda}>

            <View style={styles.userImageView}>
              <Image style={styles.userProfileImage}
                source={{ uri: `${this.state.image}` }}
              />
            </View>

            <View style={styles.userInfoView}>
              <Text style={styles.userInfoText}>{this.state.usuario.display_name}</Text>
            </View>

          </View>

          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}> Minhas Salas </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}> Criar Sala </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}> Entrar em sala </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>StreamUs</Text>
        </View>

      </View>

    )
  }

}

