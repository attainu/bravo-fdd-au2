import React from 'react';
import { connect } from 'react-redux';
import NewReleaselShow from './NewReleaselShow'
import SearchValueShow from './SearchValueShow'


function ShowAll(props){
console.log(props.x)
return(
    <div>
{props.x ? <SearchValueShow/> : <NewReleaselShow/>}
    </div>  
)}

function mapStateToProps(state) {
    return {
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


export default connect(mapStateToProps)(ShowAll);