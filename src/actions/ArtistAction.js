export function getData(result){
    return{
    type:"ArtistDataAction",
ArtistData:result
    }
        
}
export function getInfo(result){
// console.log(result)
    return{
    type:"getinfoAction",
    ArtistInfo:result
    }
        
}

    
    