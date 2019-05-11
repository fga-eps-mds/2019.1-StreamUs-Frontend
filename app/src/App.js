import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

import CreateRoom from './CreateRoom';

export default class App extends Component {
  render() {
    return (
      <CreateRoom />
    );
  }
}