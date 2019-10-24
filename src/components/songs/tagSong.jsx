import React from 'react';
import { connect } from 'react-redux';
import {getTagTop50Action, getSongLink, getSongs} from '../../actions/songsActions';
import Img from 'react-image';
import SongPlayer from '../SongPlayer';
import './songs.css';
import {fetchSearchResults} from '../../api';
import  { Player} from '../../actions/ArtistAction';
import { MDBIcon } from 'mdbreact';


class TagSongs extends React.Component{
    componentDidMount(){
        this.props.getTagSongs()
    }
    render(){
        console.log("tag songs render",this.props.tagSong, this.props.images);
        let tagName = window.location.href.slice(43, 100);
        return(
            <div style={{width:"auto"}}>
            <h3 className="display-3 text-white mx-auto " style={{width:"auto"}}> Songs </h3>
            <div className="text-dark mx-auto d-print-block " style={{width:"auto"}} >
            <div style={{width:"auto",height:"70vh"}} className="container">
                    <SongPlayer/>
                    <div className="scrollbar scrollbar-lady-lips scroll border border-dark" style={{width:"100%",height:"100%"}}>
                    <table class="table table-border table-hover table1 w-100">
                        {this.props.tagSong ? (<tbody>
                        {this.props.tagSong.track.map((item, i) => 
                            <tr className="tr1 hoverable">
                            {/* this.props.songs[i].response.hits[0].result.header_image_url */}
                            <td className="td1" onClick={this.props.getLink.bind(this, item.name)}>
                                <MDBIcon icon="play-circle" className="mr-2" />
                                <Img className="global-more-image" src={this.props.images[i]} />
                                <h5>
                                    {item.name.charAt(0).toUpperCase()+item.name.slice(1,20)}
                                </h5>
                            </td>
                            </tr>
                        )}
                        </tbody>) : (<div><h2>Loading....</h2>Loading....</div>)}
                    </table>
                    </div>
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