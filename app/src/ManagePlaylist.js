import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text} from 'native-base';



export default class ManagePlaylist extends Component {

    addTrack = (playlist_id, track_id) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "POST",
            headers: {
                Authorization: "BQC6GgNxI6gYT7FvNLDNYWm7AZzqBThwQAuANGgbGnqCgzFY6b_r-bDcJf3OEA8tGYB9Xs3HQla5d3OUaVTzhtHQq4iV-ne6-PYZr6Gzng_M5LFO60PTA619SZjb34j6P6TlNaC_hQM6lvp3Kh0DpI2ydavPuM5V",
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
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
    


}