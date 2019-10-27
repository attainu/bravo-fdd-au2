export function getData(result){
    return{
    type:"ArtistDataAction",
ArtistData:result
    }
        
}
export function getInfo(ArtistInfo, ArtistTopTracks){
    return{
    type:"getinfoAction",
    ArtistInfo:ArtistInfo,
    ArtistTopTracks:ArtistTopTracks
    }
        
}
export function artistImage(url){
     console.log("hello action",url)
        return{
        type:"AristImage",
        url:url
        }
            
    }
export function Player(url){
    // console.log(provider)
        return{
        type:"Player",
        url:url
        }
            
    }

    
    