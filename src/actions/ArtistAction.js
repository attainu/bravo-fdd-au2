export function getData(name,image){
    return{
    type:"ArtistDataAction",
ArtistName:name,
ArtistImage:image
    }
        
}

export function HideData(){
    return{
    type:"HideAction"
    }
        
}
export function getInfo(ArtistInfo,ArtistImage,ArtistTopTracks){
// console.log(result)
    return{
    type:"getinfoAction",
    ArtistInfo:ArtistInfo,
    ArtistImage:ArtistImage,
    ArtistTopTracks:ArtistTopTracks
    }
        
}
export function Player(url){
    // console.log(provider)
        return{
        type:"Player",
        url:url
        }
            
    }