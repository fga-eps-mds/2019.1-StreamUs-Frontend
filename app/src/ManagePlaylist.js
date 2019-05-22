import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';



export default class ManagePlaylist extends Component {

    addTrack = (playlist_id, track_id) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "POST",
            headers: {
                Authorization: "authorization/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "uris": `spotify:track:${track_id}`
            }),
        })
            .then(response => {
                response.json()
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteTrack = (playlist_id, track_id, position) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: "authorization/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tracks": [{ "uri": `spotify:track:${track_id}`, "positions": [position] }]
            }),
        })
            .then(response => {
                response.json()
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

}