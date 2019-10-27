let initialState = {
    topCharts: [],
    names: [],
    IndCharts: [],
    IndImages: [],
    globalTop50: [],
    globalSongs: [],
    youtubeLink: [],
    Indtop50: [],
    Indtop50Images: [],
    Tag50: []
}

function getSongsReducer(state= initialState, action){
    switch(action.type){
        case "GET_TOP_TRACKS":
            return{
                ...state, topCharts: action.topCharts
            }
        case "GET_NAMES":
            return{
                ...state, names: state.names.concat(action.Name)
            }
        case "GET_INDIA_TOP":
            return{
                ...state, IndCharts: action.indiaTop
            }
        case "GET_INDIA_IMAGES":
            return{
                ...state, IndImages: state.IndImages.concat(action.Image)
            }
        case "GET_TOP_50":
            return{
                ...state, globalTop50: action.global50
            }
        case "GET_SONGS":
            return{
                ...state, globalSongs: state.globalSongs.concat(action.payload)
            }
        case "GET_LINK":
            // console.log(state.youtubeLink)
            return{
                
                ...state, youtubeLink: action.payload
            }
        case "GET_INDIA_TOP_50":
            return{
                ...state, Indtop50: action.ind50
            }
        case "GET_ALL_50_IND_IMAGES":
            return{
                ...state, Indtop50Images: state.Indtop50Images.concat(action.payload)
            }
        case "GET_TAG_TOP_50":
            return{
                ...state, Tag50: action.tag50
            }
        default: return state
    }
}

export default getSongsReducer;