import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import CreatePlaylist from './CreatePaylist'
import { addTrack, deleteTrack, reorderTrack } from './ManagePlaylist'

export default class App extends Component {
  render() {
    return (
      <div>
        <CreatePlaylist />
        <addTrack playlist_id = '' track_id = ''/>
        <deleteTrack playlist_id = '' track_id = '' position = ''/>
        <reorderTracK playlist_id = '' start_position = '' end_position = ''/>
      </div>
    );
  }
}