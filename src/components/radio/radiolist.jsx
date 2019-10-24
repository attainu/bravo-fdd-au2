import React from "react";
import { connect } from "react-redux";
import Radiocard from "./radiocardcomponent";
import { fetch_radio_api } from "../../api";
import {
  fetchstations,
  receivestations,
  select_radio
} from "../../actions/radioAction";
import "./radio.css";

class Radiolist extends React.Component {
  componentDidMount() {
    this.props.fetch_stations();
  }

  render() {
    const showlist = this.props.fetched ? (
      this.props.radio
        .filter(item => item.City.includes(this.props.city))
        .map((item, i) => (
          <Radiocard
            key={i.toString()}
            src={item.st_img}
            st_name={item.Station_name}
            language={item.Language}
            type={item.type}
            clickhandler={() => this.props.station(item)}
          />
        ))
    ) : (
      <h3>Please wait while Connecting to station....</h3>
    );
    return (
      <div className="radiolist" style={{height:"600px",overflowY:"scroll"}}>
        <div className="row">{showlist}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("dashboard radio", state);
  return {
    fetched: state.RADIO_ST_Reducer.fetched,
    status: state.RADIO_ST_Reducer.status,
    radio: state.RADIO_ST_Reducer.channel,
    city: state.RADIO_ST_Reducer.filter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch_stations: () => {
      dispatch(fetchstations());
      fetch_radio_api().then(result => dispatch(receivestations(result)));
    },
    station: selected_fm => {
      dispatch(select_radio(selected_fm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radiolist);
