
export default function apiCall(value,query) {
  // console.log(window.location.href)
  let str=window.location.href
    let url,token;
    //30
token=str.slice(36)
    if(value=="NewRelease"){
      url="https://api.spotify.com/v1/browse/new-releases?country=IN"
    }
    else if(value==="search"){
    if(query)
    url = `https://api.spotify.com/v1/search?q=${query}&type=track&market=IN`;
    else
    url = `https://api.spotify.com/v1/browse/new-releases?country=IN`;


    }
        

    // console.log(url);
    return fetch(url, {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
})
.then(function(data) {
    return data.json();
});
}