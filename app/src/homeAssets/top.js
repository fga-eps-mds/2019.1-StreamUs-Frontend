import React from 'react';

import {
    View, Text, StyleSheet
} from "react-native"

class Top extends React.Component {
    render() {

        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    StreamUs
                </Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    view: {

        flexDirection: 'row',
        height: 70,
        backgroundColor: 'black',


    },

    text: {
        flex: 1,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
        marginTop: 20,
        marginLeft: 15,

    }


})

export default Top