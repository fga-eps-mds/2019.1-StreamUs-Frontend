import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import CreatePlaylist from './CreatePaylist'
import { AddTrack, DeleteTrack, ReorderTrack } from './ManagePlaylist'

export default class App extends Component {
  render() {
    return (
      <div>
        <CreatePlaylist />
        <AddTrack props={{ playlist_id: '', track_id: '' }}/>
        <DeleteTrack props={{ playlist_id: '', track_id: '', position: '' }}/>
        <ReorderTrack props={{ playlist_id: '', start_position: '', end_position: ''}}/>
      </div>
    );
  }
}