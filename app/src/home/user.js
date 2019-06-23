import React ,{Component } from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import styles from './usuarioLogadoStyle';


export default  class User extends Component 
{
  state ={
    nome:this.props.nome,
    foto:this.props.foto,
  }
  
    render(){
      return(

        <View style={{flex :1}}>
        <View style={styles.perfilBorda}>

            <View style={styles.userImageView}>
              
                <Image style={styles.userProfileImage}
         
          source={{uri:`${this.state.foto}` }}
              />
            </View>

            <View style={my.userInfoView}>
              <Text style={styles.nome}>{this.state.nome}</Text>
            </View>

          </View>
      </View>
      )
    }
}
const my = StyleSheet.create({
  userInfoView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 5,
    }
})

