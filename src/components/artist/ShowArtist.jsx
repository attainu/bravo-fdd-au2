import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetInfo,ArtistGetTopTrack} from '../../api'
import {getInfo} from '../../actions/ArtistAction';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import artistInfo from './artistInfo';


class ShowArtist extends React.Component {
   render() { 
    return (
    <div>
        {this.props.ArtistData.map((item)=>


    <div className="card m-3 p-0 d-inline-block" style={{"width":"17rem"}}>
<Link to="/dashboard/Artist/artistInfo"  onClick={this.props.getInfoArtist.bind(this,item.name,item.images[0].url)} >
    <img src={item.images[0].url}  alt="..." style={{height:"250px",width:"100%"}}/>
    </Link>
      
      <br/>
  {/* <h5 class="card-title ml-2">  Name:- {item.name}</h5>
   <p class="card-text ml-2"> Followers:- {Math.floor(item.followers.total/1000000)}M</p> */}
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
      getInfoArtist: function(ArtistName,ArtistImage) {
          // console.log(name)
            ArtistGetInfo(ArtistName)
    .then(
      (ArtistInfo) => {
        ArtistGetTopTrack(ArtistName)
        .then(
          (ArtistTopTracks) => {
// console.log(result1,result,name)
        dispatch(getInfo(ArtistInfo.artist,ArtistImage,ArtistTopTracks.toptracks.track))


          }
          )
  
  
        }
        )
    }
  }}
  
  export default connect(mapStateToProps,mapActionToProps)(ShowArtist);
