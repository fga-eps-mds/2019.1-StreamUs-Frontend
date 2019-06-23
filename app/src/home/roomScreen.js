import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import User from './user';
import styles from './roomStyles';
export default class App extends React.Component {
  state = {
    nomeSala: 'Massacration',
    qtnUsers: 11,
    users: [],
  };
  render() {

    return (
      <View style={styles.mainView}>
        <StatusBar hidden={true} />

        <View style={styles.toolBar}>
          <Text style={styles.inviteTitle}> Sala {this.state.nomeSala} </Text>
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#191414', borderBottomWidth: 2, height: 100 }}>

          <View style={{ flexDirection: 'column', marginLeft: 5 }}>
            <User members={this.state.qtnUsers} />
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}> VOLTAR </Text>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'column', height: 70, marginLeft: 30, marginTop: 10, }}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}> EDITAR SALA </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}> CONVIDAR MEMBROS </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}> EDITAR PLAYLIST </Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
          <ScrollView>
            <Text> Aqui fica a playlist </Text>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>StreamUs</Text>
        </View>

      </View>
    );
  }
}
