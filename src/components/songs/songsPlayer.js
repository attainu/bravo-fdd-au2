import React from 'react';
import { connect } from 'react-redux';

class SongPlayer extends React.Component{

    render(){
        console.log("songs player render",this.props.videoId)
        return(
            <div className="song-player">
                {this.props.videoId ? 
                    (<div>
                        <iframe
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0`}
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>) : 
                    (<div>Player</div>)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("song Player", state)
    let youtube = state.getSongsReducer.youtubeLink.filter(data => data.provider.includes("youtube"));
    console.log("filtered data", youtube);
    if(youtube.length){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = youtube[0].url.match(regExp);
        return{
            videoId: (match&&match[7].length == 11) ? match[7] : false
        }
    }
    else{
        return{
            videoId: 0
        }
       
    }
}

export default connect(mapStateToProps)(SongPlayer);