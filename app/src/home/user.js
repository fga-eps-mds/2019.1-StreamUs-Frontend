import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './roomStyles';


export default class User extends Component {
  state = {
    nome: this.props.nome,
    foto: this.props.foto,
    members: this.props.members
  }

  render() {
    return (
      <View style={my.userInfoView}>
        <Text style={styles.textStyle}>Membros : {this.state.members}</Text>
      </View>
    )
  }
}
const my = StyleSheet.create({
  userInfoView: {
    flexDirection: 'column',
    margin: 5,
  }
})

