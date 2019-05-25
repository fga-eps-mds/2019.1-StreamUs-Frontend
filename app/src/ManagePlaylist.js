const acess_token = ''
const AddTrack = props => {
    if (props.playlist_id != null && props.track_id != null) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + acess_token
            },
            body: JSON.stringify({
                uris: [`spotify:track:${props.track_id}`]
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
    return null;
}

const DeleteTrack = props => {
    if (props.playlist_id != null && props.track_id != null && props.position != null) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + acess_token
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
    return null;
}

const ReorderTrack = props => {
    if (props.playlist_id != null && props.start_position != null && props.end_position != null) {
        const url = `https://api.spotify.com/v1/playlists/${props.playlist_id}/tracks`
        fetch(url, {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + acess_token
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
    return null;
}

export { AddTrack, DeleteTrack, ReorderTrack }
