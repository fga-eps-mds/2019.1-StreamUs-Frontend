const acess_token = 'BQCHWzXjJ5DZIRBN4i3gPf3-EsvPy_-6Cb81Foq9BCCCI2pyFCKLHmORvjkTONdJFmo_Ybl1jr0HOlfM5BmxDLm24ryTRx5c7d5GrLJdI3Z_kxhIAqO3X2EHg4aMSrkhHbRD3NBncxrFD-VfxfX7bnEDSxf0yR0F25xAEazgGZ6-jqPHU802pOqhZUrWnspthHLJJsuXaHTzOinTpIvs2zH2orc'

const CreateNewPlaylist = props => {
    if (props.user_id != null && props.playlist_name != null) {
        const url = `https://api.spotify.com/v1/users/${props.user_id}/playlists`
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + acess_token
            },
            body: JSON.stringify({
                name: props.playlist_name,
                public: false,
                collaborative: true
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

const GetPlaylistTrack = props => {
    if (props.playlist_id != null) {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + acess_token
            },
    
        })
            .then(response => {
                response.json()
                console.log(response);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    }
    return null;
}

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

export { CreateNewPlaylist,AddTrack, DeleteTrack, ReorderTrack, GetPlaylistTrack }
