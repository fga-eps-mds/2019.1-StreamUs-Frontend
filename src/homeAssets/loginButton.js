import React from 'react';

import {
    View, StyleSheet, Text, TouchableOpacity, Image
} from "react-native"

class LoginButton extends React.Component {
    render() {
        return (

            <View style={styles.size}>


                <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}>
                    <Image
                        style={styles.IconStyle}
                        source={require('./Spotify_Icon_RGB_White.png')}
                    />
                    <Text style={styles.TextStyle}>
                        LOGAR COM SPOTIFY
    </Text>
                </TouchableOpacity>


            </View>
        )

    }
}

const styles = StyleSheet.create({
    size: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    IconStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    ButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1DB954',
        height: 35,
        width: 250,
        borderRadius: 5,
        margin: 5,
    },

    TextStyle: {
        color: "#fff",
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        margin: 10,
    },

});

export default LoginButton