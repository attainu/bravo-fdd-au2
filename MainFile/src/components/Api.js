import React from 'react';
import { Action } from '../actions/Action';
import { connect } from 'react-redux';
import apiCall from '../api'

function Api(props){
return(
  <div class="form-inline my-2 my-lg-0">
  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button onClick={props.handleClick} className="btn btn-outline-success" type="submit">Get New Lead</button>
</div>
)
}
function mapActionToProps(dispatch) {
    return {
      handleClick: function(e) {
          let x=e.target.parentNode.childNodes[0].value
          // console.log("x"+x);
apiCall("search",x)
        .then(
          (result) => {
            // console.log(result)
            // console.log(result.tracks.items[0].name)
            if(x){
          dispatch(Action(result.tracks.items,x))
        }
          else{
            dispatch(Action(result.albums.items,null))

          }
          })
  
        }
    }}


export default connect(null, mapActionToProps)(Api);