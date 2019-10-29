import React from 'react'
import { connect } from 'react-redux';

class SongPlayer extends React.Component {
   render() { 
console.log(this.props.link.kind)  

if(this.props.link.kind==="youtube#searchListResponse"){
    console.log(this.props.link.items[0].id.videoId)   
 
    return (  
        <div>
<iframe title={this.props.link.items[0].id.videoId} width="100%" height="100" src={"https://www.youtube.com/embed/"+this.props.link.items[0].id.videoId}
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
></iframe>
        </div>
        )
 
 
 }     

       if(this.props.link[0]===undefined){
return <div><iframe title="0DHHSFmKZIU3miIzkm4Sqz" src="https://open.spotify.com/embed/track/0DHHSFmKZIU3miIzkm4Sqz" width="100%" height="80" frameborder="0" 
allowtransparency="true" allow="encrypted-media"></iframe></div>
       }else{
           console.log(this.props.link)
var media = this.props.link.filter(data => data.provider.includes("spotify"))

if(media.length===1){
let str=media[0].url
let url=(str.slice(0,25)+"embed"+str.slice(24))
var iframe= <iframe title={url} src={url} width="100%" height="80" frameborder="0" 
allowtransparency="true" allow="encrypted-media"></iframe>}

if(media.length===0){
let media = this.props.link.filter(data => data.provider.includes("soundcloud"))
    if(media.length===1){
let url=media[0].url
var iframe=  <iframe title={url} id="sc-widget" src={"https://w.soundcloud.com/player/?url="+url}
width="100%" height="80" scrolling="no" frameborder="no"></iframe>
    }
}

if(media.length===0){
let media = this.props.link.filter(data => data.provider.includes("youtube"))
if(media.length===1){
let str=media[0].url
let url= (str.slice(0,23)+"embed/"+str.slice(31));
var iframe= <iframe title={url} width="100%" height="100" src={url} 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
></iframe>}}
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
