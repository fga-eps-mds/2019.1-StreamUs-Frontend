import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import CreatePlaylist from './CreatePlaylist'
import { AddTrack, DeleteTrack, ReorderTrack } from './ManagePlaylist'
import CreateRoom from './CreateRoom';
import EditRoom from './EditRoom'

export default class App extends Component {
  render() {
    return (
      <>
        <CreatePlaylist />
        <AddTrack playlist_id='' track_id='' />
        <DeleteTrack playlist_id='' track_id='' position={0} />
        <ReorderTrack playlist_id='' start_position={0} end_position={0} />
        <CreateRoom />
        <EditRoom />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

