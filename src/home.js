import React from 'react';
import LoginButton from './homeAssets/loginButton'
import Top from './homeAssets/top'
import TextInfo from './homeAssets/infoText'
import {
    View, Text, ImageBackground, StyleSheet, Dimensions
} from "react-native";
const { width: deviceWidth, height: deviceHeigth } = Dimensions.get('window')
class Home extends React.Component {

    render() {
        return (

            <View style={styles.view}>

                <ImageBackground style={styles.image}

                    source={require('./homeAssets/home-background.jpg')}>

                    <Top />
                    <TextInfo />





                    <LoginButton />
                </ImageBackground>
            </View>
        )

    }

}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    image: {
        width: deviceWidth,
        height: deviceHeigth,


    },

    textMain: {
        flex: 1,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',


    },


});



export default Home