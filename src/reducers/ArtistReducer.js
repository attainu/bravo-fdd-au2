function Reducer(state={ArtistData:[],ArtistInfo:null},action){
    switch(action.type){


case "ArtistDataAction":

return {
    ...state,
    ArtistData: action.ArtistData
        }

 case "getinfoAction":

return {
    ...state,
    ArtistInfo: action.ArtistInfo
        }

        
        default : return state;
    }
}
export default Reducer;