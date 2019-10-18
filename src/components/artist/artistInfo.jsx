import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetSongs,ArtistGetPlayer} from '../../api'
import {Player} from '../../actions/ArtistAction'
import './artist.css'
import ReadMoreReact from 'read-more-react';
import ReadMoreAndLess from 'react-read-more-less';
import {
  MDBIcon
} from "mdbreact";
import SongPlayer from '../SongPlayer'


class ArtistInfo extends React.Component {
   render() { 
     if(this.props.ArtistInfo==null){
return <h1>Get Artist Name</h1>
     }else{
    return (  
      
      <div>
      <h3 className="display-3 text-dark mx-auto "> Artist Info</h3>
      <div className="text-dark mx-auto d-print-block ">
      <div>
<SongPlayer/>
      <div class="container overflow-auto text-dark" style={{height:"600px"}}>
    <div class="fb-profile text-dark ">
        <img align="left"  style={{height:"280px",width:"100%"}} class="fb-image-lg" src="https://highland-music.com/wp-content/uploads/2016/04/Blue-Background-Music-Headphone-Wallpaper-Picture-HD-Free-298292334-e1459743028815.png"alt="Profile image example"/>
        <img align="left" style={{height:"250px",width:"250px"}} class="fb-image-profile thumbnail" src={this.props.ArtistImage} alt="Profile image example"/>
   
        
    </div>
    <h1 >{this.props.ArtistInfo.name}</h1>
    <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={300}
                readMoreText="Read more"
                readLessText="Read less"
            >
                {this.props.ArtistInfo.bio.content}
            </ReadMoreAndLess>


   <br/>         
<div><h3>Published_Date :- </h3>{this.props.ArtistInfo.bio.published} </div>
<br/>         

<div> <h3>Summary :- </h3>
<ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={300}
                readMoreText="Read more"
                readLessText="Read less"
            >
                {this.props.ArtistInfo.bio.summary}
            </ReadMoreAndLess>

 </div>
 <br/>
<div><h3>Similar Artist :-  </h3></div>
{this.props.ArtistInfo.similar.artist.map((item)=>
<div class="list-group">
 <a class="list-group-item list-group-item-action"onClick={this.props.getSongs.bind(this,item.name)} >
 <MDBIcon icon="play-circle" className="mr-2" />
 
 {item.name}</a> 
 </div>

)}
{/* <div><h1>Listeners : - </h1></div>
<div>{this.props.ArtistInfo.stats.listeners}</div>
<div><h1>Playcount : - </h1></div>
<div>{this.props.ArtistInfo.stats.playcount}</div>
<div><h1>Tags : - </h1></div>
{this.props.ArtistInfo.tags.tag.map((item)=>
  <div>{item.name}</div>
  )} */}
  <br/>
<div><h3>Top Tracks : - </h3></div>
<div class="list-group">
{this.props.ArtistTopTracks.map((item)=>
  <a href="#" onClick={this.props.getSongs.bind(this,item.name)} class="list-group-item list-group-item-action">
<MDBIcon icon="play-circle" className="mr-2" /> {item.name}
  </a>
   )}
</div>


 

  
</div>
  

         
        </div>

       
        
    </div>
 </div>
    )}}
}

function mapStateToProps(state){
    // console.log("dashboard state",state);
    return{
      
      ArtistInfo: state.ArtistReducer.ArtistInfo,
      ArtistImage:state.ArtistReducer.ArtistImage,
      ArtistTopTracks:state.ArtistReducer.ArtistTopTracks,
      url:state.ArtistReducer.url,
      provider:state.ArtistReducer.provider

    }
  }

  function mapActionToProps(dispatch) {
    return {
      getSongs: function(SongName) {
          // console.log(SongName)
            ArtistGetSongs(SongName)
    .then(
      (SongResult) => {
    console.log(SongResult)
    if(SongResult.response.hits.length===0){
// console.log(SongResult.response.hits[0].result)
    }
    else{
    ArtistGetPlayer(SongResult.response.hits[0].result.id)
    .then(
      (PlayerResult) => {
        console.log("PlayerResult"+PlayerResult)
        if(PlayerResult.response.song.media.length===0){

        }
else{
         dispatch(Player(PlayerResult.response.song.media))

}
      }
      )}
        }
        )
    }
  }}
  
  export default connect(mapStateToProps,mapActionToProps)(ArtistInfo);
