import React from "react";
import "./songs.css";
import { connect } from "react-redux";
import { getTopChartsAction, getNames } from "../../actions/songsActions.js";
import Img from "react-image";
import { Link } from "react-router-dom";

class GlobalTop extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (
      <div>
        <div className="songs">
          {this.props.names.length >= 4 ? (
            <div className="container">
              <div className="top-contents">
                <h1 className="tag">Global Top charts</h1>
                <Link to="/dashboard/songs/globalTop50">
                  <button className="btn btn-dark text-white ">See more</button>
                </Link>
              </div>
              {this.props.tracks.track.map((item, i) => (
               
                <div className="cards" key={i*1200}>
                    <Link to="/dashboard/songs/globalTop50"> 
                  <div className="card card-cascade wider">
                    <div className="view view-cascade overlay">
                      <Img
                        className="card-img-top images"
                        src={this.props.names[i]}
                        alt="Card image cap"
                      />
                    </div>
                    
                    <div className="card-body card-body text-center pb-0">
                      <h6 className="card-title song-name">
                        {item.name.charAt(0).toUpperCase() +
                          item.name.slice(1, 20)}
                      </h6>
                      <h6 className="blue-text pb-2 artist-name">
                        {item.artist.name}
                      </h6>
                    </div>
                  </div>
                  </Link>
                </div>
                
              ))}
            </div>
          ) : (
            <div>Loading Global top charts....</div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tracks: state.getSongsReducer.topCharts.tracks,
    names: state.getSongsReducer.names,
    charts: state.getSongsReducer.globalTop50.tracks,
    songs: state.getSongsReducer.globalSongs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSongs: function() {
      fetch(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f77fce611dba3185e9c5c0cf2fcc32db&format=json&offset=1&limit=4"
      ).then(response =>
        response.json().then(result => {
          dispatch(getTopChartsAction(result));
          result.tracks.track.map((item, i) => {
            let name = item.artist.name.replace(/ /g, "%20");
            fetch(
              `https://api.genius.com/search?q=${name}&access_token=3vCOTKoZSLTmyGW-pxrVpH7KuD0eWyexTDhLiHbtNcvMjJR61SuF6tm39kBrmSY6`
            )
              .then(response => response.json())
              .then(result => {
                dispatch(
                  getNames(
                    result.response.hits[0].result.header_image_thumbnail_url
                  )
                );
              });
          });
        })
      );
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalTop);
