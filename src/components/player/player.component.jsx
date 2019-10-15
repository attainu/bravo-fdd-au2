import React from 'react';
import { connect } from "react-redux";

class Player extends React.Component{



    render(){
        console.log("player component received props",this.props)
        let id = this.props.videoId;
        let element;
        if(id){
           element =  <iframe className="videoplayer" src={`https://www.youtube.com/embed/${id}?rel=0`} frameBorder="2" allow="autoplay; encrypted-media" allowFullScreen width="100%" height="380px"></iframe>
        }else{
           element = <img src="https://lanaamelina.com/wp-content/uploads/2017/08/button_animatio_3.gif" width="100%" height="100%"/>
        }
    return (
        <div style={{height:"400px",overflowY:"hidden",fontFamily:"'Fira Sans', sans-serif"}} className="z-depth-2 border border-primary rounded mb-0 p-2">
            {element}
        </div>
    )
    }
}

function mapStateToProps(state) {
//    console.log("player received state",state)
   var media = state.songLinksreducer.media.filter(data => data.provider.includes("youtube"))
   console.log("player media filtered state",media);
   if(media.length){
   var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
   var match = media[0].url.match(regExp);
   return { 
       videoId:  (match&&match[7].length==11)? match[7] : false
    }
   }else{
   return{
       videoId:0
   } 
  }
}

export default connect(mapStateToProps)(Player);
