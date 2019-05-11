import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import CreatePlaylist from './CreatePaylist'

export default class App extends Component {
  render() {
    return (
      <CreatePlaylist />
    );
  }
}