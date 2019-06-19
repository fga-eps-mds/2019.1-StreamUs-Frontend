import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'black',
    },
  
    itemSeparator :{
  
      marginLeft: 15,
      height: 0.5,
      width: '90%',
      backgroundColor: '#FFFFFF'
  
    },
  
    textStyle: {
      padding: 10,
      marginLeft: 15,
      color: 'white',
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor: '#FFFFFF',
    },
    toolBar: {
  
      flexDirection: 'row',
      height: 50,
      marginBottom: 70,
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
    buttonOptions: {
  
      flexDirection: 'row',
      justifyContent: 'center',
      alignItens: 'center',
      marginTop: 15,
  
    },
    botao: {
  
      alignItens: 'center',
      justifyContent: 'center',
      backgroundColor: '#1DB954',
      width: 150,
      height: 40,
      borderRadius: 20,
      marginLeft: 5,
      marginRight: 5,
  
    },
    textoBotao: {
  
      textAlign: 'center',
      fontSize: 15,
      color: '#FFFFFF',
      fontWeight: 'bold',
  
    },
  });

export default styles;
