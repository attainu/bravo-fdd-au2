export function fetchSearchResults(query){
       let url = `https://api.genius.com/search?q=${query}&access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());
   }
   
   export function fetchSonglink(id){
       let url = `https://api.genius.com/songs/${id}?access_token=E-Rw-b6RTihJQB_PWP79wf30xJwVx4hw7r53VBMxRjS1p2s-A2VQb9qWX2DMe5O9`
       return fetch(url)
              .then(data => data.json());
   }
   
   export function ArtistData(){
     let url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
     return fetch(url)
            .then(data => data.json());
   }
   
   export function ArtistGetInfo(ArtistName){
     let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${ArtistName}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
     return fetch(url)
            .then(data => data.json());
     
   }
   
   export function ArtistGetTopTrack(ArtistName){
     let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ArtistName}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
     return fetch(url)
            .then(data => data.json());
     
   }
   
   export function fetchYoutube(query) {
          let q=query+" songs"
          let url;
   url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKjfoFuFApua7bnRxa6YZG-YeuUlPcpAU&q=${q}&part=snippet&type=video&maxResults=1`;
      
          console.log(url);
          return fetch(url)
              .then(function(data) {
                  return data.json();
              });
      }
   
//fetching the radio stations
export function fetch_radio_api() {
       let url = 'https://raw.githubusercontent.com/harika-thipparthi-au2/fm/master/radiostations.json'
       return fetch(url)
              .then(function (data) {
                     return data.json();
              })
}