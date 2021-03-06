import React from 'react';
import { connect } from "react-redux";

class Player extends React.Component{



    render(){
        let id = this.props.videoId;
        let element;
        if(id){
         element = <div>
                        <iframe src={`https://www.youtube.com/embed/${id}?rel=0`} height="400px" width="100%" allowFullScreen></iframe>
                    </div>
        }else{
           element = <div>loading ....</div>
        }
    return (
        <div style={{height:"500px",overflowY:"hidden",fontFamily:"'Fira Sans', sans-serif"}} className="">
            {element}
        </div>
    )
    }
}

function mapStateToProps(state) {
//    console.log("player received state",state)
   var media = state.songLinksreducer.media.filter(data => data.provider.includes("youtube"))
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
