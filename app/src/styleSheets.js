import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    botao: {

        justifyContent: 'center',
        backgroundColor: '#1DB954',
        width: 150,
        height: 40,
        borderRadius: 20,
        elevation: 5,

        shadowColor: '#5b5b5b', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS

    },

    textoBotao: {

        textAlign: 'center',
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold',

    },

    textInput: {

        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        width: 250,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',

        elevation: 5, //Android
        

        shadowColor: '#5b5b5b', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS

    },

    texto: {

        fontSize: 17,
        textAlign: 'left',
        color: 'white',
        fontWeight: 'bold',

    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',

    },
    fundo :{
      flex: 1,
      backgroundColor: '#191414',
    },
});

export default styles;