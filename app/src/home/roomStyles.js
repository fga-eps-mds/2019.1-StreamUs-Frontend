import { StyleSheet } from 'react-native'

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

    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    perfilBorda: {
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25,
        height: 115,

    },
    footer: {

        height: 50,
        marginTop: 10,
        backgroundColor: '#191414',
        justifyContent: 'center',
        alignItens: 'center',

    }, footerText: {

        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    userImageView: {
        flexDirection: 'column',
        height: 100,
        width: 100,

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
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',

    },

    userProfileImage: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 50,

    },

    botao: {
        alignItens: 'center',
        justifyContent: 'center',
        backgroundColor: '#1DB954',
        borderColor: 'white',
        width: 150,
        height: 20,
        borderRadius: 25,
        marginBottom: 5,

    },

    inviteTitle: {

        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',

    },

    textoBotao: {

        textAlign: 'center',
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },


});

export default styles
