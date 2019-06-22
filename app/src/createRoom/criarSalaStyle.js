import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainInputArea: {
      flex: 1,
      flexDirection: 'column',
      alignItens: 'center',
      justifyContent: 'center',
    },
  
    mainContainer: {
      flex: 1,
      backgroundColor: '#191414',
      justifyContent: 'center',
    },
  
    itensPosition: {
      flexDirection: 'row',
      alignItens: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
  
    inputArea: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItens: 'center',
      marginTop: 50,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 50,
      borderRadius: 20,
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
  
    textInput: {
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
    },
  
    toolBar: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
  
    texto: {
      fontSize: 17,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  
    editRoomTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
    },
  
    textoInfo: {
      fontSize: 10,
      marginLeft: 10,
      marginTop: 10,
      textAlign: 'left',
      color: 'white',
      fontWeight: 'bold',
    },
  
    footer: {
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItens: 'center',
    },
  
    footerText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    picker: {
      marginTop: 5,
      width: 150,
      height: 30,
      color: 'black',
      backgroundColor: 'white'
  
    },
  });

  export default styles