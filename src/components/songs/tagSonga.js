import React from 'react';
import { connect } from 'react-redux';
import {getTagTop50Action, getSongLink, getSongs} from '../../actions/songsActions';
import Img from 'react-image';
import SongPlayer from '../SongPlayer';
import './songs.css';
import {fetchSearchResults} from '../../api';
import  { Player} from '../../actions/ArtistAction';


class TagSongs extends React.Component{
    componentDidMount(){
        this.props.getTagSongs()
    }
    render(){
        console.log("tag songs render",this.props.tagSong, this.props.images);
        let tagName = window.location.href.slice(43, 100);
        return(
            <div className="tagsSongs">
                <div className="container">
                    
                    <div className="title">
                  <SongPlayer />

                        <h2>{tagName.charAt(0).toUpperCase()+tagName.slice(1,20)} Top 50</h2>
                    </div>
                    <div className="scrollbar scrollbar-lady-lips scroll" style={{width:"100%"}}>
                    <table class="table table-borderless table-hover table1">
                        {this.props.tagSong ? (<tbody>
                        {this.props.tagSong.track.map((item, i) => 
                            <tr className="tr1">
                            {/* this.props.songs[i].response.hits[0].result.header_image_url */}
                            <td className="td1" onClick={this.props.getLink.bind(this, item.name)}>
                                <Img className="global-more-image" src={this.props.images[i]} />
                                <h4>
                                    {item.name.charAt(0).toUpperCase()+item.name.slice(1,20)}
                                </h4>
                            </td>
                            </tr>
                        )}
                        </tbody>) : (<div><h2>Loading....</h2>Loading....</div>)}
                    </table>
                    </div>
                    
                </div>
              
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        tagSong : state.getSongsReducer.Tag50.tracks,
        images: state.getSongsReducer.globalSongs
    }
}

function mapDispatchToProps(dispatch){
    return{
        getTagSongs: function(){
            let tag = window.location.href.slice(43, 100);
            let url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=f77fce611dba3185e9c5c0cf2fcc32db&format=json`
            console.log(tag, url)
            fetch(url)
            .then(response => response.json())
            .then(result => {
                dispatch(getTagTop50Action(result))
                result.tracks.track.map(item => {
                    let name = item.name.replace(/ /g, "%20");
                    let url = `https://api.genius.com/search?q=${name}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`;
                    fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        dispatch(getSongs(result.response.hits[0].result.header_image_thumbnail_url))
                    }
                    )
                })
            })
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
                    dispatch(Player(result.response.song.media))
                    )
                
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TagSongs);