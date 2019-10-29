import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { ArtistGetSongs, ArtistGetPlayer , ArtistGetInfo, ArtistGetTopTrack , ArtistData } from "../../api";
import { Player , getInfo } from "../../actions/ArtistAction";
import "./artist.css";
import ReadMoreAndLess from "react-read-more-less";
import { MDBIcon } from "mdbreact";
import SongPlayer from "../SongPlayer";

class ArtistInfo extends React.Component {
  
   constructor(){
     super()
      this.state = {
        id :  ""
      }
   }

  async componentDidMount(){
    let artistName = window.location.pathname.slice(
                      window.location.pathname.lastIndexOf('/')+1,100)
                      .replace(/%20/g," ");
    let artistImageLink = await ArtistData().then(result => result.artists.filter(i=>i.name.includes(artistName))[0].images[0].url)
    this.props.getInfoArtist(artistName,artistImageLink);
  }

  render() {
    if (this.props.ArtistInfo == null) {
      return <h3 className="text-dark display-3">...Loading</h3>;
    } else {
      return (
        <div className="container mb-3">
          <h3
            className="display-3 text-white mx-auto "
            style={{ width: "auto" }}
          >
            {" "}
            Artist Info
          </h3>
          <div
            className="text-dark mx-auto d-print-block "
            style={{ width: "auto" }}
          >
            <div style={{ width: "auto" }}>
              <SongPlayer />

              <div
                className="container overflow-auto text-dark w-100 border border-dark"
                style={{ height: "600px", width: "auto" }}
              >
                <div className="fb-profile text-dark " style={{ width: "auto" }}>
                  <img
                    align="left"
                    style={{ height: "250px", width: "250px" }}
                    className="fb-image-profile thumbnail"
                    src={this.props.ArtistImage}
                    alt="Profile image example"
                  />
                </div>
                <h1 className="display-4">
                  {this.props.ArtistInfo.name.toUpperCase()}
                </h1>
                <ReadMoreAndLess
                  ref={this.ReadMore}
                  className="read-more-content"
                  charLimit={300}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  {this.props.ArtistInfo.bio.content}
                </ReadMoreAndLess>
                <br />
                <br />
                <div>
                  {" "}
                  <h3 className="lead">Summary</h3>
                  <ReadMoreAndLess
                    ref={this.ReadMore}
                    className="read-more-content"
                    charLimit={300}
                    readMoreText="Read more"
                    readLessText="Read less"
                  >
                    {this.props.ArtistInfo.bio.summary}
                  </ReadMoreAndLess>
                </div>
                <br />
                <div>
                  <h3>Similar Artist</h3>
                </div>
                <ul className="list-group list-group-flush">
                {this.props.ArtistInfo.similar.artist.map((item,i) => (
                  
                    <li
                      key={i*101}
                      className="list-group-item hoverable"
                      onClick={this.props.getSongs.bind(this, item.name)}
                    >
                      <MDBIcon icon="play-circle" className="mr-2" />

                      {item.name}
                    </li>
                  ))}
                  </ul>
                
                <br />
                <div>
                  <h3>Top Tracks</h3>
                </div>
                <ul className="list-group list-group-flush">
                  {this.props.ArtistTopTracks.map((item,i) => (
                    <li
                      key={i*122}
                      onClick={this.props.getSongs.bind(this, item.name)}
                      className="list-group-item  hoverable"
                    >
                      <MDBIcon icon="play-circle" className="mr-2" />{" "}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    ArtistInfo: state.ArtistReducer.ArtistInfo,
    ArtistImage: state.ArtistReducer.ArtistImage,
    ArtistTopTracks: state.ArtistReducer.ArtistTopTracks,
    url: state.ArtistReducer.url,
    provider: state.ArtistReducer.provider
  };
}

function mapActionToProps(dispatch) {
  return {
    getInfoArtist: function(ArtistName, ArtistImage) {
      ArtistGetInfo(ArtistName).then(ArtistInfo => {
        ArtistGetTopTrack(ArtistName).then(ArtistTopTracks => {
          dispatch(
            getInfo(
              ArtistInfo.artist,
              ArtistImage,
              ArtistTopTracks.toptracks.track
            )
          );
        });
      });
    },
    getSongs: function(SongName) {
      // console.log(SongName)
      ArtistGetSongs(SongName).then(SongResult => {
        // console.log(SongResult)
        if (SongResult.response.hits.length === 0) {
          // console.log(SongResult)
        } else {
          ArtistGetPlayer(SongResult.response.hits[0].result.id).then(
            PlayerResult => {
              // console.log(PlayerResult.response.song.media)
              if (PlayerResult.response.song.media.length === 0) {
                // console.log("PlayerResult:- "+PlayerResult)
              } else {
                // console.log("PlayerResult:- "+PlayerResult.response.song.media)

                dispatch(Player(PlayerResult.response.song.media));
              }
            }
          );
        }
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ArtistInfo);
