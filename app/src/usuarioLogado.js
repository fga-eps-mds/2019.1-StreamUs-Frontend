import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView , Image, TouchableOpacity, AsyncStorage} from 'react-native';


const axios = require('axios')
const acess_token = 'BQA2c0pcH44_9y-1FndaEdgG0UpLtpVGBzrgmyxduCMTBy9wxm6PsK7lB5TAkMaJ1FqZ8FcQ3AWOanmpKjbLzk8BezjOTpRrR2phUBJ7kJSSU4qIjQrxGHmyBG-QmbgSotHW2gWnuKazzttk2rLH8n0O8YNYKBNoyJlUV_spOD9MTYLQ7R9nRfFvphVI9dJ8a7ef8NmfBPvSE2r0G5SXVHpETb7S1AjyiHiIp6kGYosIVv5FaHWILyAMgGqAXK5k_4uROb9lfHZf4myHdCeB'

const user_id = '12154583081'

export default class UsuarioLogado extends React.Component {
  state = {
       usuario: {},
       image:{}
};

componentDidMount() {
       this.getPlaylistTrack(user_id);
}

   async getPlaylistTrack (user_id) {
    if (user_id) {
      try { 
    let {data} = await axios.get(`https://api.spotify.com/v1/users/${user_id}`, {headers: {Authorization: 'Bearer ' + acess_token}})    
      
      this.setState({ usuario: data, image: data.images[0].url })     
      
      }
      catch(err) {
        throw new Error(err)
      }
      
    }
   }

  render() {

 
  let getData =  this.getPlaylistTrack(user_id)
  console.log(this.state.usuario.images)

    const user = {
  "display_name":"JMWizzler",
  "email":"email@example.com",
  "external_urls":{
  "spotify":"https://open.spotify.com/user/wizzler"
  },
  "href":"https://api.spotify.com/v1/users/wizzler",
  "id":"wizzler",
  "images":[{
  "height":null,
  "url": 'https://facebook.github.io/react-native/docs/assets/favicon.png',
  "width":null
  }],
  "product":"premium",
  "type":"user",
  "uri":"spotify:user:wizzler"
}

    return (

      <View style = {styles.mainView}>
        <StatusBar hidden = {true}/>

        <View style = {styles.toolBar}>
          <Text style = {{fontSize : 30, marginTop: 5, color : 'white', fontWeight : 'bold', textAlign : 'center'}}> Perfil </Text>
        </View>
        
        <View style = {{flex :1}}> 
        
        
          <View style = {styles.perfilBorda}>
            
            <View style = {styles.userImageView}>
             <Image style = {styles.userProfileImage} 
             source={{ uri: `${this.state.image}` }}
             />
            </View>
            
            <View style = {styles.userInfoView}>
              <Text style = {styles.userInfoText}>{this.state.usuario.display_name}</Text>
            </View>

          </View>

        <ScrollView>
        <View style = {{alignItems : 'center'}}>
          <TouchableOpacity style = {styles.botao}>
            <Text style = {styles.textoBotao}> Minhas Salas </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.botao}>
            <Text style = {styles.textoBotao}> Criar Sala </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.botao}>
            <Text style = {styles.textoBotao}> Entrar em sala </Text>
          </TouchableOpacity>
       </View>
      </ScrollView>
        </View>

        <View style = {styles.footer}>
          <Text style ={styles.footerText}>StreamUs</Text>
        </View>

      </View>
     
    )
    }

  }

const styles = StyleSheet.create({
  mainView : {
    flex : 1,
    backgroundColor : 'black'
  },
    toolBar: {
  
      flexDirection: 'row',
      height: 50,
      marginBottom: 10,
      backgroundColor: '#191414',
      justifyContent: 'center',
      alignItens: 'center',
     
    },
    perfilBorda:{ 
             flexDirection : 'row',
             marginLeft:25 ,
             marginRight:25,
             height : 115,              
             },
  

      footer: {
      
      height: 50,
      marginTop: 10,
      backgroundColor: '#191414',
      justifyContent: 'center',
      alignItens: 'center',
  
    }, footerText: 
    {      fontSize: 15,     color: 'white',     fontWeight: 'bold',     textAlign: 'center'    },

    userImageView : {
      flexDirection : 'column',
      height : 100,
      width : 100,
      // backgroundColor : 'black',
    },

    userInfoView : {
      flex: 1,
      flexDirection : 'column',
      backgroundColor : 'black',
      margin : 5
    },

    userInfoText : {
      marginLeft: 10,
      marginTop : 5,
      color : 'white',
      fontSize : 25,
      textAlign:'center',
      fontWeight: 'bold',

    },

    userProfileImage : {
      width: 100,
      height: 100,
      margin : 5,
      borderRadius:50,

    },

    botao: {
    alignItens: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    borderColor : 'white',
    width: 250,
    height: 50,
    marginTop : 25,
    borderRadius: 25,
    borderWidth: 0.5,
     },

   textoBotao: {

    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },


});
