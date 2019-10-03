import React from 'react';
import { connect } from 'react-redux';
import {AudioAction} from '../actions/Action'

function NewReleaselShow(props){
  console.log(props.result)
//   var numbers=[]
//   for(var i=0;i<props.result.length;i++){
// numbers.push(i)
//   }
//   var str1=[],str2=[]
//   props.result.map((item)=>
//     str1.push(item.external_urls.spotify.slice(0,25))
// // console.log(item.external_urls.spotify.length)
// )
// props.result.map((item)=>
// str2.push(item.external_urls.spotify.slice(25,53))
// ) 
// console.log(str1[0]+"embed/"+str2[0])
return(
    <div>
    {props.result.map((item)=>
    <div class="d-inline-block">
    <div className="card m-3" style={{"width":"15rem"}}>
    <img src={item.images[0].url} className="card-img-top" alt="..."/>
  Name :-   {item.name} <br/>
  Release-Date :- {item.release_date}<br/>
  Artist :- 
  {item.artists.map((x)=> x.name )  }
  <iframe src={item.external_urls.spotify.slice(0,25)+"embed/"+item.external_urls.spotify.slice(25,53)} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    </div>
    </div>)}
    </div>  
)}

function mapStateToProps(state) {
    return {
        result: state.result
    };
  }
//   function mapActionToProps(dispatch) {
//     return {
//         Audio: function(data,time,id) {
// // console.log("AudioAction")
// dispatch(AudioAction(data,time,id))
  
//         }
//     }
// }


export default connect(mapStateToProps)(NewReleaselShow);