import React from "react";
import { connect } from "react-redux";

class SongPlayer extends React.Component {
  renderPlayer = () => {
    const songLink = this.props.link;
    const songlinkslen = songLink.length;
    let media = songLink.filter(data => data.provider.includes("spotify"));
    // check whether urls of different media's is present or not
    if (songlinkslen) {
      //check whether spotify link is available or not
      if (media.length) {
        let str = media[0].url;
        let url = str.slice(0, 25) + "embed" + str.slice(24);
        return (
          <div>
            <iframe
              src={url}
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        );
      } else {
        media = songLink.filter(data => data.provider.includes("soundcloud"));
        //check if we got soundclound link or not
        if (media.length) {
          let url = media[0].url;
          return (
            <div>
              <iframe
                id="sc-widget"
                src={"https://w.soundcloud.com/player/?url=" + url}
                width="100%"
                height="80"
                scrolling="no"
                frameBorder="no"
              ></iframe>
            </div>
          );
        } else {
          media = songLink
          //check if we got youtube link correctly or not
          let str = media[0].url;
          let url = str.slice(0, 23) + "embed/" + str.slice(31);
          return (
            <div>
              <iframe
                width="100%"
                height="200"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          );
        }
      }
    } else {
      //if nothing return just play a song for user
      return (
        <div>
          <iframe
            src="https://open.spotify.com/embed/track/0DHHSFmKZIU3miIzkm4Sqz"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      );
    }
  };

  render() {
    return this.renderPlayer();
  }
}

function mapStateToProps(state) {
  return {
    link: state.ArtistReducer.url
  };
}

export default connect(mapStateToProps)(SongPlayer);
