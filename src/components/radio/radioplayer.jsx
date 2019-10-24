import React from "react";
import { connect } from "react-redux";
import { play_pause } from "../../actions/radioAction";
import "./radio.css";
import pausevisual from "./pausevisual.jpg";

class RadioPlayer extends React.Component {

  componentDidMount() {
    this.refs.fm.load();
  }
  componentDidUpdate() {
    if (this.props.status) {
      this.refs.fm.pause();
      this.refs.fm.load();
      this.refs.fm.play();
    }
  }
  componentWillUnmount() {
    if (this.props.status) {
      this.props.play_pause_toggle();
    }
  }

  toggler_handler = () => {
    if (this.refs.fm.paused) {
      this.refs.fm.play();
      this.props.play_pause_toggle();
    } else {
      this.refs.fm.pause();
      this.props.play_pause_toggle();
    }
  };
  render() {
    const fm = (
      <audio controls class="mp3-auido" ref="fm" hidden>
        <source src={this.props.fm.fm.st_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
    const visualizer = this.props.playing ? (
      this.props.status ? (
        <React.Fragment>
          <div className="row">
            <img
              width="99%"
              height="150"
              src="http://www.sna-world.org/sna/public_html/sna/assets/images/play_now.gif"
              alt="visualizer"
            />
          </div>
          <div>
            {fm}
            <div className="playercompenents">
              <img
                onClick={this.toggler_handler}
                height="50"
                src="https://www.iconsdb.com/icons/preview/white/pause-xxl.png"
                alt="pause"
              />
              <div className="playercontent">
                <marquee>
                  <h1>{`You are listening ${
                    this.props.fm.fm.Frequency === "NA"
                      ? ""
                      : this.props.fm.fm.Frequency
                    } ${this.props.fm.fm.Station_name}`}</h1>
                </marquee>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
          <React.Fragment>
            <div className="row">
              <img width="99%" height="150" className="pause" alt='visualpause' src={pausevisual} />
            </div>
            <div>
              {fm}
              <div className="playercompenents">
                <img
                  onClick={this.toggler_handler}
                  height="50"
                  alt="play"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWzzkCzbtm6aLcOaytRri6O5BzS_QBAgjMT9HTRPDTeCvPZZuSg"
                />
                <div className="playercontent">
                  <marquee>
                    <h1>{this.props.fm.fm.Station_name}</h1>
                  </marquee>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
    ) : (
        <div>{fm}</div>
      );
    return <div>{visualizer}</div>;
  }
}

function mapStateToProps(state) {
  console.log("dashboard radio", state);
  return {
    fm: state.Selected_Radio_Reducer,
    status: state.Selected_Radio_Reducer.status,
    selected: state.Selected_Radio_Reducer.selected,
    playing: state.Selected_Radio_Reducer.playing
  };
}

const mapDispatchToProps = dispatch => {
  return {
    play_pause_toggle: () => {
      dispatch(play_pause());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioPlayer);
