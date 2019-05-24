import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';



const acess_token = ''
const addTrack = props => {
    if (props.playlist_id && props.track_id) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "POST",
            headers: {
                Authorization: acess_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "uris": `spotify:track:${props.track_id}`
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

const deleteTrack = props => {
    if (props.playlist_id && props.track_id && props.position) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: acess_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tracks": [{ "uri": `spotify:track:${props.track_id}`, "positions": [props.position] }]
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

const reorderTrack = props => {
    if (props.playlist_id && props.start_position && props.end_position) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "PUT",
            headers: {
                Authorization: acess_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                range_start: props.start_position,
                insert_before: props.end_position
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

export { addTrack, deleteTrack, reorderTrack }
