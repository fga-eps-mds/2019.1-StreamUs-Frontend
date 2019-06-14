import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'


export default class EditRoom extends Component {

    state = { permission: '' }
    updatePermission = (permission) => {
        this.setState({ permission: permission })
    }

    render() {
        return (
            <View style={stylesx.container}>
                <View style={stylesx.cont2}>
                    <Text style={styles.titulo} > EDITAR SALA  </Text>
                    <Text style={styles.texto} >  Nome da sala </Text>
                    <TextInput style={styles.textInput}
                        placeholder='Digite o nome da sala'
                        paddingLeft={5}>
                    </TextInput>
                    <Text style={styles.texto}> Permissão da sala </Text>
                    <Picker
                        selectedValue={this.state.permission}
                        style={{ marginTop: 5, borderRadius: 20, height: 30, width: 150, backgroundColor: 'white', }}
                        onValueChange={this.updatePermission}
                    >
                        <Picker.Item label="Pública" value="public" />
                        <Picker.Item label="Privada" value="private" />
                    </Picker>
                </View>
                <View style={stylesx.cont3}>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}> SALVAR </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}> VOLTAR </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const stylesx = StyleSheet.create({
    container: {
        flex: 1,
        //alignItens: 'center',
        //justifyContent: 'center',
        backgroundColor: '#191414',
    },
    cont2: {
        marginTop: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItens: 'center',
        backgroundColor: '#191414',
    },
    cont3: {
        flexDirection: 'row',

    },

});
