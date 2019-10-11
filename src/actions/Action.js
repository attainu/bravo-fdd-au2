export function Action(result){
    return{
    type:"Action",
result:result
    }
        
}
export function getInfo(result){
    console.log(result)
    return{
    type:"getinfo"
    }
        
}
    
    