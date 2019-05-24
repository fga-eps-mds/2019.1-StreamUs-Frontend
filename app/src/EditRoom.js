import React, { Component } from 'react';
import { Container, Content, List, Item, ListItem, Input, Form, Button, Text, Right, Icon } from 'native-base';
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1DB954',
    height: '30pt',
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: '12pt',
  },
  excluirSala: {
    flexDirection: 'row',
    marginTop: '2%',
    justifyContent: 'center'
  },
  listItem: {
    flex: 1,
    height: '10pt',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  textNomedaSala: {
    color: 'white',
    fontSize: '14pt'
  },
  textListItem: {
    color: '#1DB954',
    fontSize: '14pt'
  }
});

export default class EditRoom extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#191414', padding: '5%'}}>
        <Content>
          <Form>
            <Item>
              <Input style={[styles.listItem, styles.textNomedaSala]} placeholder="Nome da Sala" maxLength={50} />
              <Button style={styles.button}>
                <Text style={styles.textButton}>Alterar</Text>
              </Button>
            </Item>
          </Form>
          <List>
          <ListItem>
              <Button style={styles.listItem}>
                <Text style={styles.textListItem}>Adicionar playlist</Text>
              </Button>
            </ListItem>
            <ListItem>
              <Button style={styles.listItem}>
                <Text style={styles.textListItem}>Adicionar amigo</Text>
              </Button>
            </ListItem>
            <ListItem>
              <Button style={styles.listItem}>
                <Text style={styles.textListItem}>Remover amigo</Text>
              </Button>
            </ListItem>
          </List>
          <View style={styles.excluirSala}>
            <Button style={styles.button}>
              <Text style={styles.textButton}>Excluir Sala</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}