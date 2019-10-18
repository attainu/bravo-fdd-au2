import React from 'react'
import { connect } from 'react-redux';

class SongPlayer extends React.Component {
   render() { 
       
       if(this.props.link[0]===undefined){
return <div><iframe src="https://open.spotify.com/embed/track/0DHHSFmKZIU3miIzkm4Sqz" width="100%" height="80" frameborder="0" 
allowtransparency="true" allow="encrypted-media"></iframe></div>
       }else{
           console.log(this.props.link)
var media = this.props.link.filter(data => data.provider.includes("spotify"))
if(media.length===1){
let str=media[0].url
let url=(str.slice(0,25)+"embed"+str.slice(24))
var iframe= <iframe src={url} width="100%" height="80" frameborder="0" 
allowtransparency="true" allow="encrypted-media"></iframe>}
if(media.length===0){
var media = this.props.link.filter(data => data.provider.includes("soundcloud"))
    if(media.length===1){
let url=media[0].url
var iframe=  <iframe id="sc-widget" src={"https://w.soundcloud.com/player/?url="+url}
width="100%" height="80" scrolling="no" frameborder="no"></iframe>
    }
}
if(media.length===0){
var media = this.props.link.filter(data => data.provider.includes("youtube"))
if(media.length===1){
let str=media[0].url
let url= (str.slice(0,23)+"embed/"+str.slice(31));
var iframe= <iframe width="100%" height="200" src={url} 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
></iframe>}}    

if(media.length===0){
var iframe=<iframe src="https://open.spotify.com/embed/track/0DHHSFmKZIU3miIzkm4Sqz" width="100%" height="80" frameborder="0" 
allowtransparency="true" allow="encrypted-media"></iframe>
}    


    return (  
    <div>
     {iframe}
    </div>
    )

    }
}
   }


function mapStateToProps(state){
    // console.log("dashboard state",state);
    return{
      
        link:state.ArtistReducer.url
    }
  }
  
  export default connect(mapStateToProps)(SongPlayer);
