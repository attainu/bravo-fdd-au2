export function fetchSearchResults(query) {
       let url = `https://api.genius.com/search?q=${query}&access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());
}

export function fetchSonglink(id) {
       let url = `https://api.genius.com/songs/${id}?access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());
}

export function ArtistData(query) {
       let url = `https://raw.githubusercontent.com/attainu/bravo-fdd-au2/yashpal/data/artist.json?token=AI7UY746XVYGK7DPAF2RRJC5WBR7W`
       return fetch(url)
              .then(data => data.json());
}

export function ArtistGetInfo(ArtistName) {
       let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${ArtistName}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
       return fetch(url)
              .then(data => data.json());

}

export function ArtistGetTopTrack(ArtistName) {
       let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ArtistName}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
       return fetch(url)
              .then(data => data.json());

}

export function ArtistGetSongs(SongName) {
       let url = `https://api.genius.com/search?q=${SongName}?&access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());

}

export function ArtistGetPlayer(SongId) {
       let url = `https://api.genius.com/songs/${SongId}?&access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());

}



//fetching the radio stations
export function fetch_radio_api() {
       let url = 'https://raw.githubusercontent.com/harika-thipparthi-au2/fm/master/radiostations.json'
       return fetch(url)
              .then(function (data) {
                     return data.json();
              })
}





// export default function apiCall(value,query) {
//   var url,arr
// if(value==="Artist"){
//   url=`https://raw.githubusercontent.com/attainu/bravo-fdd-au2/yashpal/data/artist.json?token=AI7UY747IBONGDFXKIOGSIS5VFJ42`
// }
// else if(value==="getinfo"){
//   url=`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
// }



//     return fetch(url)
// .then(function(data) {
//     return data.json();
// });
// }

