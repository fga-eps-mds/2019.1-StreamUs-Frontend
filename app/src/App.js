import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import CreatePlaylist from './CreatePaylist'
import { AddTrack, DeleteTrack, ReorderTrack } from './ManagePlaylist'

export default class App extends Component {
  render() {
    return (
      <div>
        <CreatePlaylist />
        <AddTrack playlist_id='' track_id=''/>
        <DeleteTrack playlist_id='' track_id='' position={0} />
        <ReorderTrack playlist_id='' start_position={0} end_position={0}/>
      </div>
    );
  }
}