import React, { Component } from 'react';
import { View, InputGroup, Input, List, ListItem } from 'native-base';
import { Button, Text } from 'native-base';
import { CheckBox, Body } from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, heigth: screenHeigth} = Dimensions.get('window')

const styles = StyleSheet.create({
  view: {
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
    width: screenWidth/5,
    backgroundColor: '#1DB954'

  },
})


export default class FormExample extends Component {
  constructor(props) {
    super(props)
    this.state = {checked: {streamId: false}, nameRoom: ''}
  }
  setText(event, propsName) {
    this.setState({[propsName]: event.target.value})
  }
  render() {
    return (
      <View style={styles.view}>
          <List style={styles.list}>
           <ListItem>
            <InputGroup >
              <Input inlineLabel label='NAME' placeholder='Nome da Sala' onChange={(event) => this.setText(event, 'nameRoom')}/>
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
                  <Text>Permitir a entrada de membros por StreamId</Text>
                </Body>
            </ListItem>
          <Text>{this.state.nameRoom}</Text>
          <Button style={styles.button}><Text>Criar!</Text></Button>
          </List>
      </View>
    );
  }
}