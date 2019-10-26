import React from "react";
import "./songs.css";
import { connect } from "react-redux";
import {
  getIndiaTop50Action,
  get50IndImagesAction
} from "../../actions/songsActions.js";
import { Player } from "../../actions/ArtistAction";

import Img from "react-image";
import { fetchSearchResults } from "../../api";
import SongPlayer from "../SongPlayer";
import { MDBIcon } from "mdbreact";

class IndiaMore extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (
      <div style={{ width: "auto" }}>
        <h3 className="display-3 text-white mx-auto " style={{ width: "auto" }}>
          {" "}
          Songs{" "}
        </h3>
        <div
          className="text-dark mx-auto d-print-block "
          style={{ width: "auto" }}
        >
          <div style={{ width: "auto", height: "70vh" }} className="container">
            <SongPlayer />
            <div
              className="scrollbar scrollbar-lady-lips scroll border border-dark mb-3"
              style={{ width: "100%", height: "100%" }}
            >
              <table class="table table-border table-hover table1 w-100">
                {this.props.charts ? (
                  <tbody>
                    {this.props.charts.track.map((item, i) => (
                      <tr className="tr1 hoverable">
                        {/* this.props.songs[i].response.hits[0].result.header_image_url */}
                        <td
                          className="td1"
                          onClick={this.props.getLink.bind(this, item.name)}
                        >
                          <MDBIcon icon="play-circle" className="mr-2" />
                          <Img
                            className="global-more-image"
                            src={this.props.songs[i]}
                          />
                          <h5>
                            {item.name.charAt(0).toUpperCase() +
                              item.name.slice(1, 20)}
                          </h5>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <div>Loading....</div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("get top", state);
  return {
    charts: state.getSongsReducer.Indtop50.tracks,
    songs: state.getSongsReducer.Indtop50Images
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSongs: function() {
      fetch(
        "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=f77fce611dba3185e9c5c0cf2fcc32db&format=json"
      ).then(response =>
        response.json().then(result => {
          dispatch(getIndiaTop50Action(result));
          result.tracks.track.map((item, i) => {
            let name = item.name.replace(/ /g, "%20");
            let url = `https://api.genius.com/search?q=${name}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`;
            fetch(url)
              .then(response => response.json())
              .then(result => {
                dispatch(
                  get50IndImagesAction(
                    result.response.hits[0].result.header_image_thumbnail_url
                  )
                );
              });
          });
        })
      );
    },
    getLink: function(songName) {
      fetchSearchResults(songName).then(result => {
        let songId = result.response.hits[0].result.id;
        let url = `https://api.genius.com/songs/${songId}?access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`;
        console.log(url);
        fetch(url)
          .then(response => response.json())
          .then(result => dispatch(Player(result.response.song.media)));
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndiaMore);
