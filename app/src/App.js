import  React from 'react';
import {
  ScrollView,
  Image,
  StatusBar,
  Text,
  View,
  StyleSheet
} from 'react-native';
import User from './home/user';
import styles from './home/usuarioLogadoStyle';
export default class App extends React.Component {
  state = {
    nomePlaylist: 'Massacration',
    qtnUsers: 11,
    users: [],
  };
  render() {
    let nome = 'Pikachu';
    let urlimg =
      'http://cdn.shopify.com/s/files/1/0257/6087/products/Pikachu_Single_Front_dc998741-c845-43a8-91c9-c1c97bec17a4.png?v=1523938908';


    return (
      <View style= {{flex:1}}>
        <StatusBar hidden={true} />

        <Text>
          {`${this.state.nomePlaylist}\nMembros:\t\t${this.state.qtnUsers}
            `}
        </Text>
          <User nome={nome} foto={urlimg} />
    
        <View style={styles.footer}>
          <Text style={styles.footerText}>StreamUs</Text>
        </View>
    </View>
    );
  }
}
