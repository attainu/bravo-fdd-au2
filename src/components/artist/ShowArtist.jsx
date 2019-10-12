import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetInfo} from '../../api'
import {getInfo} from '../../actions/ArtistAction';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


class ShowArtist extends React.Component {
   render() { 
    return (
    <div>
        {this.props.ArtistData.map((item)=>

    <div class="d-inline-block">
    <div className="card m-3 p-1" style={{"width":"17rem"}}>
    <img src={item.images[0].url} class="card-img-top" alt="..." style={{height:"250px"}}/><br/>
  <h5 class="card-title ml-2">  Name:- {item.name}</h5>
   <p class="card-text ml-2"> Followers:- {Math.floor(item.followers.total/1000000)}M</p>
   <Link to="/dashboard/Artist/artistInfo"  onClick={this.props.getInfoArtist.bind(this,item.name)} class="btn btn-primary">getInfo</Link>
    </div>
    </div>
        )}

         
        </div>
       
    )}
}

function mapStateToProps(state){
    // console.log("dashboard state",state);
    return{
      
      ArtistData: state.ArtistReducer.ArtistData
    }
  }

  function mapActionToProps(dispatch) {
    return {
      getInfoArtist: function(name) {
          // console.log(name)
            ArtistGetInfo(name)
    .then(
      (result) => {
    // console.log(result)
    // result.artists.artist.map((item)=>console.log(item.name))
        dispatch(getInfo(result.artist))
  
  
        }
        )
    }
  }}
  
  export default connect(mapStateToProps,mapActionToProps)(ShowArtist);
