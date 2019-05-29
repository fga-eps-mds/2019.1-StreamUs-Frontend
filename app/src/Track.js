import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export class Track extends Component {

  addTrack = (name, id) => {

    if (name.length >= 3) {
      const url = `https://api.spotify.com/v1/audio-features/${id}`
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          response.json()
          console.log(response);
        })
        .catch(error => {
          console.log(erro);
        });
    }

    fieldTracks = { 'id': response.id,
     'uri': response.uri, 
      'track_href': response.track_href, 
      'analysis_url': responde.analysis_url, 
      'type': responde.type
    }
  }

}