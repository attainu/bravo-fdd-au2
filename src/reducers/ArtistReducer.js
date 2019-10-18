function Reducer(state={ArtistData:[],ArtistInfo:null,ArtistImage:null,ArtistTopTracks:null,url:[]},action){
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
       url:action.url
                    }

        
        default : return state;
    }
}
export default Reducer;