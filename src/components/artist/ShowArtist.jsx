import React from 'react'
import { connect } from 'react-redux';
import apiCall from '../../api/api'
import {getInfo} from '../../actions/Action'


function ShowArtist(props) {
    // console.log(props.result)
    return (<div>
        {props.result.map((item)=>

    <div class="d-inline-block">
    <div className="card m-3 p-1" style={{"width":"17rem"}}>
    <img src={item.images[0].url} class="card-img-top" alt="..." style={{height:"250px"}}/><br/>
  <h5 class="card-title ml-2">  Name:- {item.name}</h5>
   <p class="card-text ml-2"> Followers:- {Math.floor(item.followers.total/1000000)}M</p>
    <a href="#" onClick={props.getInfoArtist.bind(this,item.name)} class="btn btn-primary">getInfo</a>  
    </div>
    </div>
        )}
        </div>
    )
}

function mapStateToProps(state){
    // console.log("dashboard state",state);
    return{
      
      result: state.Reducer.result
    }
  }

  function mapActionToProps(dispatch) {
    return {
      getInfoArtist: function(name) {
          console.log("call")
            apiCall("getinfo",name)
    .then(
      (result) => {
    console.log(result)
    // result.artists.artist.map((item)=>console.log(item.name))
        // dispatch(getInfo(name))
  
  
        }
        )
    }}}
  
  export default connect(mapStateToProps,mapActionToProps)(ShowArtist);
