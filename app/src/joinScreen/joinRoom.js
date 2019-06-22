import * as React from 'react';
import { Text, View, StatusBar, TouchableOpacity, TextInput, FlatList, Alert, ActivityIndicator } from 'react-native';
import styles from './joinRoomStyle'



export default class JoinRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, text: '' };
        this.arrayholder = [];
    }

    componentDidMount() {
        return fetch('https://my-json-server.typicode.com/nicaloribeiro/testing/rooms')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: this.arrayholder
                    },
                    function () {
                        let j = 0;
                        for (let i = 0; i < responseJson.length; i++) {
                            if (responseJson[i].type == 'public') {
                                this.arrayholder[j] = responseJson[i];
                                j++;
                            }
                        }

                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    SearchFilterFunction(text) {

        const newData = this.arrayholder.filter(function (item) {

            const itemData = item.roomName ? item.roomName.toUpperCase() : ''.toUpperCase();
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
            <View style={styles.mainView}>
                <StatusBar hidden={true} />

                <View style={styles.toolBar}>
                    <Text style={styles.toolBarTitle}> Entrar em sala </Text>
                </View>


                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    placeholder="Digite aqui..."
                    paddingLeft={20}
                />



                <FlatList style={{ color: 'white', }}
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => Alert.alert(
                            'Deseja entrar na sala ?',
                            `${item.roomName} `,
                            [
                                { text: 'Cancelar', style: 'cancel' },
                                { text: 'Entrar', }, //adicionar função aqui onPress
                            ],
                            { cancelable: false }

                        )} >
                            <Text style={styles.textStyle}>{item.roomName}</Text>
                        </TouchableOpacity>
                    )}
                    enableEmptySections={true}
                    keyExtractor={(item, index) => index}
                />


                <View style={styles.voltarArea}>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}> Voltar </Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.footer}>
                    <Text style={styles.footerText}> StreamUs </Text>
                </View>

            </View>
        );
    }
}