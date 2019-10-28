import React from "react";
import { connect } from "react-redux";
import { ArtistData } from "../../api";
import { getData } from "../../actions/ArtistAction";
import { Link } from "react-router-dom";
import "./showartist.styles.scss";

class ShowArtist extends React.Component {
  
  componentDidMount() {
    this.props.ShowArtist();
  }

  render() {
    return (
      <div className="container mt-2" style={{ width: "auto" }}>
        {this.props.ArtistData.map((item, index) => (
          <div
            key={index * 100}
            className="card containers p-0 d-inline-block hoverable"
          >
            <Link
              to={`/dashboard/Artist/${item.name}`}
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
    ShowArtist: function() {
      ArtistData().then(result => {
        dispatch(getData(result.artists));
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowArtist);
