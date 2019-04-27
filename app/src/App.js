import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
import { Button, Text } from 'native-base';

export default class FormExample extends Component {
  render() {
    return (
      <Container>
        
        <Content>
         
          <InputGroup >
            <Input inlineLabel label='NAME' placeholder='Nome da Sala' />
          </InputGroup>
  
          <Button><Text>Criar!</Text></Button>

        </Content>
      </Container>
    );
  }
}