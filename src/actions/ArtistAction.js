export function getData(result){
    return{
    type:"ArtistDataAction",
ArtistData:result
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

    
    