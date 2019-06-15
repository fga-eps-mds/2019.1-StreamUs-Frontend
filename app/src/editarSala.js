import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, TextInput, Alert, StatusBar } from 'react-native'



export default class EditarSala extends Component {
  constructor(props) {
    super(props);
    this.state = { roomName: '', permission: '' };
  }

  updatePermission = (permission) => {
    this.setState({ permission: permission })
  }

  onDeleteBTN = () => {
    alert('Sala deletada !');
  }
  onSaveBTN = () => {
    let name = 0
    let perm = 0
    this.state.roomName !== '' ? name = 1 : name = 0;
    this.state.permission !== '' ? perm = 1 : perm = 0;
    if (name != 0 && perm != 0) {
      alert('É possível salvar !')
    } else {
      alert('Preencha os campos obrigatórios.')
    }

  }
  render() {
    return (


      <View style={styles.mainContainer}>
          <StatusBar hidden={true} />
        <View style={styles.toolBar}>
          <Text style={styles.editRoomTitle} > Editar sala  </Text>
        </View>
        <View style={styles.inputArea}>
          <View style={styles.mainInputArea}>
            < Text style={styles.texto} >  Nome da sala * </Text>

            <View style={styles.itensPosition}>
              <TextInput style={styles.textInput}
                placeholder='Digite aqui...'
                paddingLeft={10}
                onChangeText={(roomName) => this.setState({ roomName })} />
            </View>

            <Text style={styles.texto}> Permissão da sala * </Text>

            <View style={styles.itensPosition}>
              <Picker
                selectedValue={this.state.permission}
                style={styles.picker}
                onValueChange={this.updatePermission}
              >
                <Picker.Item label="Selecione..." value="" />
                <Picker.Item label="Pública" value="public" />
                <Picker.Item label="Privada" value="private" />
              </Picker>
            </View>

            <View style={styles.itensPosition}>
              <TouchableOpacity style={styles.apagar}
                onPress={() => Alert.alert(
                  'Deletar Sala',
                  'Deseja realmente deletar a sala ?',
                  [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Deletar', onPress: this.onDeleteBTN },
                  ],
                  { cancelable: false }

                )} >
                <Text style={styles.textoBotao}> DELETAR SALA </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonOptions}>
              <TouchableOpacity style={styles.botao}
                onPress={this.onSaveBTN}>
                <Text style={styles.textoBotao}> SALVAR </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
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

const styles = StyleSheet.create({

  mainInputArea: {

    flex: 1,
    flexDirection: 'column',
    alignItens: 'center',
    justifyContent: 'center',

  },

  mainContainer: {

    flex: 1,
    backgroundColor: '#191414',
    justifyContent: 'center',

  },

  itensPosition: {

    flexDirection: 'row',
    alignItens: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,

  },

  inputArea: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItens: 'center',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 50,
    borderRadius: 20,

  },

  buttonOptions: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItens: 'center',
    marginTop: 15,

  },

  apagar: {

    justifyContent: 'center',
    borderColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,

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

  textInput: {

    height: 40,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',

  },

  toolBar: {

    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',

  },

  texto: {

    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',

  },

  editRoomTitle: {

    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

  },

  textoInfo: {

    fontSize: 10,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },

  footer: {

    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItens: 'center',

  },

  footerText: {

    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'

  },

  picker: {
    marginTop: 5,
    width: 150,
    height: 30,
    color: 'white'
  },

});