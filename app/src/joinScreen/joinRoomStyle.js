import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },

    toolBar: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#191414',
        justifyContent: 'center',
        alignItens: 'center',

    },

    toolBarTitle: {

        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 5,

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

    voltarArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        margin: 15,
        backgroundColor: '#FFFFFF',
    },
    itemSeparator: {

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

});
export default styles;