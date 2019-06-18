//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
//import react in our code.
 
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  StatusBar
} from 'react-native';
//import all the components we are going to use.
 
export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }
  
  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/nicaloribeiro/testing/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.userName ? item.userName.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          marginLeft: 15,
          height: 0.5,
          width: '90%',
          backgroundColor: '#FFFFFF',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
      <StatusBar hidden = {true}/>
      <View style = {styles.toolBar}>
        <Text style = {styles.inviteTitle}> Convidar amigos</Text>
      </View>
      
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Busque aqui..."
          paddingLeft = {20}
        />
        <FlatList style = {{color : 'black',}}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Alert.alert(
                  'Adicionar na sala ?',
                  `Adicionar ${item.userName} ?`,
                  
                  [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Adicionar', onPress: this.onAdd(item) },
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
        <View style = {styles.buttonOptions}>
        <TouchableOpacity style = {styles.botao}>
          <Text style =  {styles.textoBotao} > VOLTAR </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.footer}>
          <Text style = {styles.footerText}> StreamUs</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor : 'black',
  },
  textStyle: {
    padding: 10,
    marginLeft : 15,
    color : 'white',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft : 15,
    marginRight : 15,   
    backgroundColor: '#FFFFFF',
  },
   toolBar: {

    flexDirection: 'row',
    height: 50,
    marginBottom : 70,
    backgroundColor: '#191414',
    justifyContent: 'center',
    alignItens: 'center',

  },
  
  inviteTitle: {

    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

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
   buttonOptions: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItens: 'center',
    marginTop: 15,

  },
  botao: {

    alignItens: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    width: 150,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,

  },
   textoBotao: {

    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',

  },
});