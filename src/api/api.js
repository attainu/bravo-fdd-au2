
export default function apiCall(value,query) {
  var url,arr
if(value==="Artist"){
  url=`https://raw.githubusercontent.com/attainu/bravo-fdd-au2/yashpal/data/artist.json?token=AI7UY747IBONGDFXKIOGSIS5VFJ42`
}
else if(value==="getinfo"){
  url=`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&api_key=271cbe482898bec42a2711e8df29b1e9&format=json`
}

    return fetch(url)
.then(function(data) {
    return data.json();
});
}