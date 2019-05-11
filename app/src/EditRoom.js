import React, { Component } from 'react';
import { Container, Header, Content, List, Item, ListItem, Input, Form, Button, Text } from 'native-base';
export default class EditRoom extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Nome da Sala" />
              <Button>
                <Text>Alterar</Text>
              </Button>
            </Item>
          </Form>
          <List>
            <ListItem>
              <Text>Adicionar Amigo</Text>
            </ListItem>
            <ListItem>
              <Text>Remover Amigo</Text>
            </ListItem>
          </List>
          <Button>
            <Text>Excluir Sala</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}