function Reducer(state = { ArtistData: [], ArtistInfo: null, ArtistImage: null, ArtistTopTracks: null, url: [] }, action) {
    switch (action.type) {


        case "ArtistDataAction":

            return {
                ...state,
                ArtistData: action.ArtistData
            }

        case "getinfoAction":

            return {
                ...state,
                ArtistInfo: action.ArtistInfo,
                ArtistTopTracks: action.ArtistTopTracks
            }
        case "AristImage":

        return {
            ...state,
            ArtistImage: action.url,
            
        }

        case "Player":

            return {
                ...state,
                url: action.url
            }


        default: return state;
    }
}
export default Reducer;