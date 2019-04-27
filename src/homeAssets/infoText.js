import React from 'react';
import {
    View, Text, StyleSheet
} from "react-native";

class TextInfo extends React.Component {
    render() {
        return (
            <View style={styles.view}>

                <Text style={styles.mainText}>
                    StreamUs
            </Text>

                <Text style={styles.minorText}>
                    Uma nova forma de ouvir música.
                    Crie playlists colaborativas,adicione e remova músicas, ouça com seus amigos
                                        simultaneamente.
            </Text>




            </View>
        )
    }

}
const styles = StyleSheet.create({

    view: {
        flex: 1,
        alignItems: 'center',

    },

    mainText: {
        flex: 1,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },

    minorText: {
        flex: 1,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    }

})

export default TextInfo