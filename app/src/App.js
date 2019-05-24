import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import EditRoom from './EditRoom'
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <EditRoom />
        </Content>
      </Container>
    );
  }
}