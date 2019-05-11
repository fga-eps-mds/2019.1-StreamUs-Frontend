import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text} from 'native-base';


export default class SearchBar extends Component {
  render() {
    return (
          <Item >
            <Icon ios="ios-search" android="md-search"/>
            <Input placeholder="Search" />
            <Button transparent success> 
                <Text>Search</Text>
            </Button>
          </Item> 
    );
  }
}