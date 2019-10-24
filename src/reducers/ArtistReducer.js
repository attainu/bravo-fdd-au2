function Reducer(state={ArtistData:[],ArtistInfo:null,ArtistImage:null,ArtistTopTracks:null,url:[]},action){
    let list
    switch(action.type){


case "ArtistDataAction":
        list=state.ArtistData.concat({
            name:action.ArtistImage,
            image : action.ArtistName
        })

return {
    ...state,
    ArtistData: list
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