import React, { Component } from 'react';
import {InputGroup, Input, List, ListItem, Container } from 'native-base';
import { Button, Text } from 'native-base';
import { CheckBox, Body } from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, heigth: screenHeigth} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    heigth: screenHeigth,
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#191414'
    },
  list: {
    width: screenWidth/2,
  },

  button: {
    backgroundColor: '#1DB954',
    padding: '10%',
    alignSelf: 'center'
  },

  text: {
    color: 'white'
  }
})


export default class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {checked: {streamId: false}, nameRoom: ''}
  }
  setText(event, propsName) {
    this.setState({[propsName]: event.target.value})
  }
  render() {
    return (
      <Container style={styles.container}>
          <List style={styles.list}>
           <ListItem>
            <InputGroup >
              <Input style={styles.text} inlineLabel label='NAME' placeholder='Nome da Sala' onChange={(event) => this.setText(event, 'nameRoom')}/>
            </InputGroup>
            </ListItem>

            <ListItem>
              <CheckBox
              color = '#1DB954'
              key={'streamId'} 
              checked={this.state.checked.streamId} 
              onPress={() => this.setState({checked: {streamId: !this.state.checked.streamId}})} 
              />
                <Body>
                  <Text style={styles.text} >Permitir a entrada de membros por StreamId</Text>
                </Body>
            </ListItem>
          <Button style={styles.button}><Text>Criar!</Text></Button>
          </List>
        </Container>
    )
  }
}
