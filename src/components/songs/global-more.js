import React from 'react'
import './songs.css';
import { connect }  from 'react-redux';
import  { getTop50Action , getSongs, getSongLink } from '../../actions/songsActions.js';
import Img from 'react-image';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import {fetchSearchResults} from '../../api';
import SongPlayer from "../SongPlayer";
import  { Player} from '../../actions/ArtistAction';


class GlobalMore extends React.Component {

    componentDidMount(){
        this.props.getSongs();
    }
    
    render(){
    return (
        <div className="global-more">
            
                <div className="container">
                    
                    <div className="title">
                    <SongPlayer />
                    </div>
              
                    <div className="scrollbar scrollbar-lady-lips scroll" style={{width:"100%"}}>
                    <table class="table table-borderless table-hover table1">
                        {this.props.charts ? (<tbody>
                        {this.props.charts.track.map((item, i) => 
                            <tr className="tr1">
                            {/* this.props.songs[i].response.hits[0].result.header_image_url */}
                            <td className="td1" onClick={this.props.getLink.bind(this, item.name)}>
                                <Img className="global-more-image" src={this.props.songs[i]} />
                                <h4>
                                    {item.name.charAt(0).toUpperCase()+item.name.slice(1,20)}
                                </h4>
                            </td>
                            </tr>
                        )}
                        </tbody>) : (<div>Loading....</div>)}
                    </table>
                    </div>
                    
                </div>
              
            </div>
    )
    }
}
function mapStateToProps(state){
    console.log("get top", state);
    return{
        charts: state.getSongsReducer.globalTop50.tracks,
        songs: state.getSongsReducer.globalSongs
    }
}
function mapDispatchToProps(dispatch){
    return{  
        getSongs: function(){
            fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f77fce611dba3185e9c5c0cf2fcc32db&format=json")
            .then(response => response.json()
            .then(result => {
                dispatch(getTop50Action(result))
                result.tracks.track.map((item, i) => { 
                    let name = item.name.replace(/ /g, "%20");
                    let url = `https://api.genius.com/search?q=${name}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`;
                    fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        dispatch(getSongs(result.response.hits[0].result.header_image_thumbnail_url))
                    }
                    )
                    }
                    )}
            ))
        },
        getLink: function(songName){
            fetchSearchResults(songName)
            .then(result => {
                let songId = result.response.hits[0].result.id;
                let url = `https://api.genius.com/songs/${songId}?access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`;
                console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(result => 
                    dispatch(Player(result.response.song.media)))
                
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalMore);
