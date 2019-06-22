import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';


const axios = require('axios')
const acess_token = 'BQAwrykr5xtpMxYKf1lDtCkK96ButJc562Ee9bKDV-kIcrEXQJI9PNqZEG_ZNInstqOfu-nywDbVZuSfViGUih2NjI9eifw4m0C3OaoJAHZoaw5YpCD6n6hah1N3B_z-dBsJ9yxss8Js89MdpM70wRAk_lipVsA_U5TIf1r4dJY7uohgRopzsSTVtrW7QULjHdgMpKAB7W_fXvNZJRbSNPyxW6nZ1wWoK_fnLeynUyOWc7BxWUth9JE6uc2T9eROFD5vfHbznQ5_AnIkZVQM'

const user_id = '12154583081'

export default class App extends React.Component {
  state = {
    usuario: {}
  };

  componentDidMount() {
    this.getPlaylistTrack(user_id);
  }

  async getPlaylistTrack(user_id) {
    if (user_id) {
      try {
        let { data } = await axios.get(`https://api.spotify.com/v1/users/${user_id}`, { headers: { Authorization: 'Bearer ' + acess_token } })


        this.setState({ usuario: data })
        return data

      }
      catch (err) {
        throw new Error(err)
      }

    }
  }

  render() {


    const data1 = this.getPlaylistTrack(user_id)


    const user = {
      "display_name": "JMWizzler",
      "email": "email@example.com",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/wizzler"
      },
      "href": "https://api.spotify.com/v1/users/wizzler",
      "id": "wizzler",
      "images": [{
        "height": null,
        "url": 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        "width": null
      }],
      "product": "premium",
      "type": "user",
      "uri": "spotify:user:wizzler"
    }

    return (

      <View style={styles.mainView}>
        <StatusBar hidden={true} />

        <View style={styles.toolBar}>
          <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Perfil </Text>
        </View>

        <View style={{ flex: 1 }}>


          <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 100 }}>

            <View style={styles.userImageView}>
              <Image style={styles.userProfileImage}
                source={{ uri: this.state.usuario.images[0].url }} />
            </View>

            <View style={styles.userInfoView}>
              <Text style={styles.userInfoText}>{this.state.usuario.display_name}</Text>
              <Text style={styles.userInfoText}>{this.state.usuario.id}</Text>
            </View>

          </View>


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

        </View>

        <View style={styles.footer}>

        </View>

      </View>

    )
  }

}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black'
  },
  toolBar: {

    flexDirection: 'row',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#191414',
    justifyContent: 'center',
    alignItens: 'center',

  },


  footer: {

    height: 50,
    marginTop: 10,
    backgroundColor: '#191414',
    justifyContent: 'center',
    alignItens: 'center',

  },

  userImageView: {
    flexDirection: 'column',
    height: 100,
    width: 100,
    backgroundColor: 'white',
  },

  userInfoView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    margin: 5
  },

  userInfoText: {
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
    fontSize: 15

  },

  userProfileImage: {
    width: 90,
    height: 90,
    margin: 5

  },

  botao: {
    alignItens: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    borderColor: 'white',
    width: 250,
    height: 40,
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 0.5,




  },

  textoBotao: {

    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',

  },


});