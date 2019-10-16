import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetSongs,ArtistGetPlayer} from '../../api'
import {Player} from '../../actions/ArtistAction'
import './artist.css'
import ReadMoreReact from 'read-more-react';

class ArtistInfo extends React.Component {
   render() { 
     if(this.props.ArtistInfo==null){
return <h1>Get Artist Name</h1>
     }else{
    if(this.props.provider==="spotify"){
     var iframe= <iframe src={this.props.url} width="100%" height="80" frameborder="0" 
     allowtransparency="true" allow="encrypted-media"></iframe>
    }
    else if(this.props.provider==="soundcloud"){
      // console.log("https://w.soundcloud.com/player/?url="+this.props.url)
      var iframe=  <iframe id="sc-widget" src={"https://w.soundcloud.com/player/?url="+this.props.url}
       width="100%" height="80" scrolling="no" frameborder="no"></iframe>
      
    }
    else if(this.props.provider==="youtube"){
      var iframe= <iframe width="100%" height="200" src={this.props.url} 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      ></iframe>    

    }

 
    return (  
      
      <div>
      <h3 className="display-3 text-dark mx-auto "> Artist Info</h3>
      <div className="text-dark mx-auto d-print-block ">
      <div>
{iframe}
      <div class="container overflow-auto text-dark" style={{height:"600px"}}>
    <div class="fb-profile text-dark ">
        <img align="left"  style={{height:"280px",width:"100%"}} class="fb-image-lg" src="https://highland-music.com/wp-content/uploads/2016/04/Blue-Background-Music-Headphone-Wallpaper-Picture-HD-Free-298292334-e1459743028815.png"alt="Profile image example"/>
        <img align="left" style={{height:"250px",width:"250px"}} class="fb-image-profile thumbnail" src={this.props.ArtistImage} alt="Profile image example"/>
   
        
    </div>
    <h1 >{this.props.ArtistInfo.name}</h1>
    <ReadMoreReact text={this.props.ArtistInfo.bio.content}
            min={80}
            ideal={100}
            max={200}          
            readMoreText={<button>Read More</button>}
            />



<div><h1>Bio :- </h1></div>
<div>Published_Date :- {this.props.ArtistInfo.bio.published} </div>
<div>Summary :- {this.props.ArtistInfo.bio.summary} </div>
<div><h1>Similar Artist :-  </h1></div>
{this.props.ArtistInfo.similar.artist.map((item)=>
  <div>
 <a className="text-primary" onClick={this.props.getSongs.bind(this,item.name)} >{item.name}</a> 
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
<div><h1>Top Tracks : - </h1></div>
<div>
{this.props.ArtistTopTracks.map((item)=>
  <div >
 <a className="text-primary" onClick={this.props.getSongs.bind(this,item.name)}>{item.name}</a> </div>
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
        else if(PlayerResult.response.song.media[0].provider==="spotify"){
        let str=PlayerResult.response.song.media[0].url
        // console.log(PlayerResult)
// console.log(str.slice(0,25)+"embed"+str.slice(24))
         dispatch(Player((str.slice(0,25)+"embed"+str.slice(24)),PlayerResult.response.song.media[0].provider))
        }
        else if(PlayerResult.response.song.media[0].provider==="soundcloud"){
        let str=PlayerResult.response.song.media[0].url

         dispatch(Player(str,PlayerResult.response.song.media[0].provider))

        }
        else if(PlayerResult.response.song.media[0].provider==="youtube"){
          let str=PlayerResult.response.song.media[0].url
// console.log((str.slice(0,23)+"embed/"+str.slice(31)))
          dispatch(Player((str.slice(0,23)+"embed/"+str.slice(31)),PlayerResult.response.song.media[0].provider))
        }
      }
      )}
        }
        )
    }
  }}
  
  export default connect(mapStateToProps,mapActionToProps)(ArtistInfo);
