import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';



    const acess_token = ''
    const addTrack = props => {
        if(props.playlist_id && props.track_id){
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

    const deleteTrack = (playlist_id, track_id, position) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: acess_token,
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

    const reorderTrack = (playlist_id, startPosition, endPosition) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "PUT",
            headers: {
                Authorization: acess_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                range_start: startPosition,
                insert_before: endPosition
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
    export { addTrack, deleteTrack, reorderTrack }
