import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';


export default class RoomFooter extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Online</Text>
            </Button>
            <Button>
              <Text>Músicas</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}