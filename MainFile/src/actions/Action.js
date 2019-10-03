export function Action(result,x){
return{
type:"Action",
result:result,
x:x
}
    


}

// export function AudioAction(result,time,id){
//     // console.log(id)
//     // id.duration=time
//     let x=document.getElementById(id)
//     // x.seekable=time// returns 0
// // x.buffered.end(1);   // returns 5
//     // x.onseeked=time
//     console.log(time)
//     return{
//     type:"AudioAction",
//     result:result
//     }
//     }
//     export function filterAction(result){
//         return{
//         type:"filterAction",
//         result:result
//         }
        
//         }