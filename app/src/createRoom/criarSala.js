import React, { Component } from 'react';
import {
  TextInput,
  StatusBar,
  View,
  Text,
  Picker,
  TouchableOpacity,
  Switch
} from 'react-native';

import styles from './criarSalaStyle'

export default class TelaConfig extends Component {
  state = {
    user: '',
    roomName: 'Sua sala',
    permission: 'private',
    streamid: false,
  };
  getStream = () => {
    return `${this.state.streamid}`;
  };

  updatePermission = permission => {
    this.setState({ permission: permission });
  };

  updateRoomName = roomName => {
    this.setState({ roomName: roomName });
  };
  updateUser = user => {
    this.setState({ user: user });
  };

  updateStreamID = streamid => {
    this.setState({ streamid: streamid })
  }

  onCreate = () => {
    let name = 0;
    let perm = 0;
    this.state.roomName !== '' ? (name = 1) : (name = 0);
    this.state.permission !== '' ? (perm = 1) : (perm = 0);
    if (name != 0 && perm != 0) {
      alert('É possível salvar !');
    } else {
      alert('Preencha os campos obrigatórios.');
    }
  };

  onBack = () => {
    alert('Voltar !');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={true} />

        <View style={styles.toolBar}>
          <Text style={styles.editRoomTitle}> Criar sala </Text>
        </View>
        <View style={styles.inputArea}>
          <View style={styles.mainInputArea}>
            <Text style={styles.texto}> Nome da sala * </Text>

            <View style={styles.itensPosition}>
              <TextInput
                style={styles.textInput}
                placeholder={'Sua sala'}
                paddingLeft={15}
                onChangeText={this.updateRoomName}
                maxLength={40}
              />
            </View>

            <Text style={styles.texto}>Permissão da sala * </Text>

            <View style={styles.itensPosition}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.permission}
                onValueChange={this.updatePermission}>
                <Picker.Item label="Privada" value="private" />
                <Picker.Item label="Pública" value="public" />
              </Picker>
            </View>

            <View style={styles.itensPosition}>
              <Text style={styles.texto}> Permitir entrada por StreamId ?  </Text>
              <Switch
                style={{ backgroundColor: 'white', height: 20, }}
                onValueChange={this.updateStreamID}
                value={this.state.streamid}

              />
            </View>

            <View style={styles.buttonOptions}>
              <TouchableOpacity style={styles.botao} onPress={this.onCreate}>
                <Text style={styles.textoBotao}> CRIAR </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao} onPress={this.onBack}>
                <Text style={styles.textoBotao}> VOLTAR </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textoInfo}> * Campos obrigatórios. </Text>
          </View>

        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>StreamUs</Text>
        </View>
      </View>
    );
  }
}

