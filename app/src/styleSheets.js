import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


/*export default class ButtonStyle extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>CRIAR PLAYLIST</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                />
            </View>
        );
    }
}*/

const styles = StyleSheet.create({

    botao: {
        justifyContent: 'center',
        backgroundColor: '#1DB954',
        width: 180,
        height: 45,
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
        flexDirection: 'row',
        //editavel conforme necessidade margin:50, 
        height: 40, //editavel conforme necessidade
        width: 250, //editavel conforme necessidade
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,    
      },

});

export default styles;