import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    botao: {

        justifyContent: 'center',
        backgroundColor: '#1DB954',
        width: 150,
        height: 40,
        borderRadius: 20,
        elevation: 5,

        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS

    },

    textoBotao: {

        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',

    },

    textInput: {

        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        width: 250,
        borderRadius: 20,
        backgroundColor: 'white',

        elevation: 5,

        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS

    },

    texto: {

        fontSize: 17,
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',

    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',

    }
});

export default styles;