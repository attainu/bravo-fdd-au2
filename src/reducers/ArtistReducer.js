function Reducer(state={ArtistData:[],ArtistInfo:null,ArtistImage:null,ArtistTopTracks:null,url:"https://open.spotify.com/embed/track/0DHHSFmKZIU3miIzkm4Sqz"
,provider:"spotify"},action){
    switch(action.type){


case "ArtistDataAction":

return {
    ...state,
    ArtistData: action.ArtistData
        }

 case "getinfoAction":

return {
    ...state,
    ArtistInfo: action.ArtistInfo,
    ArtistImage:action.ArtistImage,
    ArtistTopTracks:action.ArtistTopTracks
        }

        case "Player":

            return {
                ...state,
       url:action.url,
       provider:action.provider
                    }

        
        default : return state;
    }
}
export default Reducer;