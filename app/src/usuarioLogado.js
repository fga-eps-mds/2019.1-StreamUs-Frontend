import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView , Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default class App extends React.Component {
  render() {
    const user = {
  "display_name":"JMWizzler",
  "email":"email@example.com",
  "external_urls":{
  "spotify":"https://open.spotify.com/user/wizzler"
  },
  "href":"https://api.spotify.com/v1/users/wizzler",
  "id":"wizzler",
  "images":{
  "height":null,
  "url": 'https://facebook.github.io/react-native/docs/assets/favicon.png',
  "width":null
  },
  "product":"premium",
  "type":"user",
  "uri":"spotify:user:wizzler"
}

    return (

      <View style = {styles.mainView}>
        <StatusBar hidden = {true}/>

        <View style = {styles.toolBar}>
        </View>
        
        <View style = {{flex :1, backgroundColor :'red'}}> 
        
        
          <View style = {{  flexDirection : 'row', backgroundColor : 'white', height : 100}}>
            <View style = {styles.userImageView}>
              <Image style={styles.userProfileImage} source={{ uri: user.images.url}} />
            </View>
          
            <View style = {styles.userInfoView}>
              <Text style = {styles.userInfoText}>{user.display_name}</Text>
                <Text style = {styles.userInfoText}>{user.email}</Text>
              <Text style = {styles.userInfoText}>{user.id}</Text>
            </View>

          </View>
       

        </View>

        <View style = {styles.footer}>
        
        </View>

      </View>
     
    );

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
  

      footer: {
      
      height: 50,
      marginTop: 10,
      backgroundColor: '#191414',
      justifyContent: 'center',
      alignItens: 'center',
  
    },

    userImageView : {
      flexDirection : 'column',
      height :100,
      width : 100,
      backgroundColor : 'blue',
    },

    userInfoView : {
      flex: 1,
      flexDirection : 'column',
      backgroundColor : 'green',
      margin : 5
    },

    userInfoText : {
      marginLeft: 10,
      marginTop : 5,
      color : 'white',
      fontSize : 15

    },

    userProfileImage : {
      width: 80,
      height: 80,
      margin : 10

    },

});
