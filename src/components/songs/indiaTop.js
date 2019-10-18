import React from 'react'
import './songs.css';
import { connect }  from 'react-redux';
import  { IndiaTopSongsAction , GetIndiaImagesAction } from '../../actions/songsActions.js';
import Img from 'react-image';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

class India extends React.Component {

    componentDidMount(){
        this.props.getSongs();
    }
    
    render(){
        // console.log(this.props.tracks);
    return (
        <div className="songs">
            {this.props.images.length >= 4
                ? (<div className="container">
                    <div className="top-contents">
                        <h1 className="tag">India Top charts</h1>
                        <Link to="/dashboard/songs/IndiaTop50"><p className="see-more">See more</p></Link>
                    </div>
                    {this.props.tracks.track.map((item, i) =>
                    <div className="cards">
                        <div className="card card-cascade wider">
                        <div className="view view-cascade overlay">
                            <Img  className="card-img-top images" src={this.props.images[i]} alt="Card image cap" />
                        </div>

                        <div className="card-body card-body text-center pb-0">

                            <h6 className="card-title song-name">{item.name.charAt(0).toUpperCase()+item.name.slice(1,20)}</h6>
                            <h6 className="blue-text pb-2 artist-name">{item.artist.name}</h6>

                        </div>
                    </div>
                    </div>
                    )}
                </div>) 
                : (<div>Loading India top charts....</div>)
            }
            
        </div>
    )
    }
}
function mapStateToProps(state){
    return{
        tracks: state.getSongsReducer.IndCharts.tracks,
        images: state.getSongsReducer.IndImages
    }
}
function mapDispatchToProps(dispatch){
    return{  
        getSongs: function(){
            fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=f77fce611dba3185e9c5c0cf2fcc32db&format=json&offset=1&limit=4")
            .then(response => response.json()
            .then(result => {
                dispatch(IndiaTopSongsAction(result))
                result.tracks.track.map((item, i) => { 
                    let name = item.artist.name.replace(" ", "%20");
                    fetch(`https://api.genius.com/search?q=${name}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`)
                    .then(response => response.json())
                    .then(result => {
                        dispatch(GetIndiaImagesAction(result.response.hits[0].result.header_image_thumbnail_url))
                    }
                    )
                    }
                    )}
            ))
        }
        // getImage: function(name){
        //     let artistName = name.replace(" ", "%20");
        //     fetch(`https://api.genius.com/search?q=${artistName}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log("image ",result.response.hits.result.song_art_image_thumbnail_url);
        //         return result.response.hits.result.song_art_image_thumbnail_url
        //     })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(India);
