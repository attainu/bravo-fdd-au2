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