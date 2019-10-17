// --------Global top tracks actions ------------//

export function getTopChartsAction(tracks){
    return{
        type: "GET_TOP_TRACKS",
        topCharts: tracks 
    }
}

export function getNames(name){
    return{
        type: "GET_NAMES",
        Name: name 
    }
}

// --------India top tracks actions ------------//

export function IndiaTopSongsAction(tracks){
    return{
        type: "GET_INDIA_TOP",
        indiaTop: tracks
    }
}

export function GetIndiaImagesAction(img){
    console.log("GetIndiaImagesAction", img);
    return{
        type: "GET_INDIA_IMAGES",
        Image: img 
    }
}
// <------------Global top 50 ------------------>

export function getTop50Action(tracks){
    return{
        type: "GET_TOP_50",
        global50: tracks 
    }
}

export function getSongs(result){
    return{
        type: "GET_SONGS",
        payload: result 
    }
}
export function getSongLink(link){
    console.log(link);
    return{
        type: "GET_LINK",
        payload: link
    }
}

// <------------India top 50 ------------------>

export function getIndiaTop50Action(tracks){
    return{
        type: "GET_INDIA_TOP_50",
        ind50: tracks 
    }
}

export function get50IndImagesAction(result){
    return{
        type: "GET_ALL_50_IND_IMAGES",
        payload: result 
    }
}

// <------------Tag top 50 ------------------>

export function getTagTop50Action(tracks){
    return{
        type: "GET_TAG_TOP_50",
        tag50: tracks 
    }
}

// <-----------------------Song details ------------->



