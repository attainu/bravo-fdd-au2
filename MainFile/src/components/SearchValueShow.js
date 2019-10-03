import React from 'react';
import { connect } from 'react-redux';
import {AudioAction} from '../actions/Action'

function SearchValueShow(props){
console.log(props.result)
return(
    <div>
 {props.result.map((item)=>
    <div class="d-inline-block">
    <div className="card m-3" style={{"width":"15rem"}}>
    <img src={item.album.images[0].url} className="card-img-top" alt="..."/>
  Name :-   {item.name} <br/>
  Release-Date :- {item.album.release_date}<br/>
  Artist :- 
  {item.artists.map((x)=> x.name )  }
  <iframe src={item.external_urls.spotify.slice(0,25)+"embed/"+item.external_urls.spotify.slice(25,53)} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  
    </div>
    </div>)} 
    </div>  
)}

function mapStateToProps(state) {
    return {
        result: state.result,
        x:state.x
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


export default connect(mapStateToProps)(SearchValueShow);