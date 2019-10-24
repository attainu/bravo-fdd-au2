import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetInfo,ArtistGetTopTrack} from '../../api'
import {getInfo} from '../../actions/ArtistAction';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


class ShowArtist extends React.Component {
   show(index) {
     console.log(index)
    var element = document.getElementById(index);
   if(element){
    var removeClass = require('remove-class');
    removeClass(element, 'd-none');

   }else{

   }
  }
  hide(index) {
    console.log(index)

    var element = document.getElementById(index);
    if(element){
      var addClass = require('add-class');
    
      addClass(element, 'd-none');
    }
    else{}
  }
   render() { 
    return (
    <div className="ml-4" style={{width:"auto"}}>
        {this.props.ArtistData.map((item,index)=>
 <div  onMouseOver={this.show.bind(this,index)} onMouseOut={this.hide.bind(this,index)} className="card containers p-0 d-inline-block m-4" style={{"width":"17rem"}}>
<Link to="/dashboard/Artist/artistInfo"  onClick={this.props.getInfoArtist.bind(this,item.name,item.images[0].url)} >
<div  id={index} className="content d-none">
    <h1 className="ml-1">{item.name}</h1>
    <p className="ml-2 ">Followers :  {Math.floor(item.followers.total/1000000)}M</p>
  </div>
    <img src={item.images[0].url}  alt="..." style={{height:"250px",width:"100%"}}/>
    </Link>
      
      <br/>
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
