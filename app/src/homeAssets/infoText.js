import React from 'react';
import {
    View, Text, StyleSheet, Image
} from "react-native";

class TextInfo extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Image
                    style={styles.logo}
                    source={require('./icon.png')} />

                <Text style={styles.minorText}>
                    Uma nova forma de ouvir músicas em grupo.{"\n"}
                    Crie playlists colaborativas.{"\n"}
                    Adicione e remova músicas.{"\n"}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({

    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.49)'

    },

    minorText: {
        flex: 1,
        marginTop: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',

    },

    logo: {
        flex: 1,
        paddingTop: 100,
        paddingLeft: 150,
        margin: 20,
        resizeMode: 'stretch',

    }

})

export default TextInfo