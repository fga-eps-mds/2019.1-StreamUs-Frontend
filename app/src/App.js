import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, ListItem } from 'native-base';
import { Button, Text } from 'native-base';
import { CheckBox, Body } from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, heigth: screenHeigth} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: screenWidth/2,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  button: {
    width: screenWidth/5,
    alignItems:'center',
    justifyContent: 'center'
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
      <Container style={styles.container}>
        
        <Content>
           <ListItem>
            <InputGroup >
              <Input inlineLabel label='NAME' placeholder='Nome da Sala' onChange={(event) => this.setText(event, 'nameRoom')}/>
            </InputGroup>
          </ListItem>

          <ListItem>
            <CheckBox
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

        </Content>
      </Container>
    );
  }
}