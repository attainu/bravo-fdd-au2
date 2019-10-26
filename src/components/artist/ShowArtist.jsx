import React from "react";
import { connect } from "react-redux";
import { ArtistGetInfo, ArtistGetTopTrack } from "../../api";
import { getInfo } from "../../actions/ArtistAction";
import { Link } from "react-router-dom";
import "./showartist.styles.scss";

class ShowArtist extends React.Component {
  render() {
    return (
      <div className="container mt-2" style={{ width: "auto" }}>
        {this.props.ArtistData.map((item, index) => (
          <div
            key={index * 100}
            className="card containers p-0 d-inline-block hoverable"
          >
            <Link
              to={{pathname:`/dashboard/Artist/${item.name}`
                  }}
              onClick={this.props.getInfoArtist.bind(
                this,
                item.name,
                item.images[0].url
              )}
            >
              <div id={index} className="content">
                <h1 className="name">{item.name}</h1>
                <p className="followers">
                  {Math.floor(item.followers.total / 1000000)}M
                </p>
              </div>
              <img
                src={item.images[0].url}
                alt="..."
                style={{ height: "250px", width: "100%" }}
              />
            </Link>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ArtistData: state.ArtistReducer.ArtistData
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowArtist);
