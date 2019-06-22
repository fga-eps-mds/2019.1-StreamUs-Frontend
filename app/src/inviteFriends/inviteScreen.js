import React, { Component } from 'react';

import { Text, View, FlatList, TextInput, ActivityIndicator, Alert, TouchableOpacity, StatusBar } from 'react-native';
import styles from './inviteStyles'
export default class InviteFriends extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('COLOCAR ENDPOINT AQUI')  //Fazer get no banco de dados
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  SearchFilterFunction(text) {

    const newData = this.arrayholder.filter(function (item) {

      const itemData = item.userName ? item.userName.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;

    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={styles.itemSeparator} />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (

      <View style={styles.viewStyle}>
        <StatusBar hidden={true} />
        <View style={styles.toolBar}>
          <Text style={styles.inviteTitle}> Convidar amigos </Text>
        </View>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          placeholder="Digite aqui..."
          paddingLeft={20}
        />

        <FlatList style={{ color: 'black', }}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Alert.alert(
              'Adicionar na sala ?',
              `Adicionar ${item.userName} ?`,
              [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Adicionar', }, //adicionar função aqui onPress
              ],
              { cancelable: false }

            )} >
              <Text style={styles.textStyle}>{item.userName}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index}
        />

        <View style={styles.buttonOptions}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao} > VOLTAR </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> StreamUs</Text>
        </View>

      </View>
    );
  }
}
