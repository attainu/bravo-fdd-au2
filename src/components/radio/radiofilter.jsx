import React from "react";
import { connect } from "react-redux";
import { city_selected } from "../../actions/radioAction";
import "./radio.css";

class Radiofilter extends React.Component {
  render() {
    const cities = this.props.fetched
      ? this.props.radio
          .map(item => item.City)
          .filter((value, index, self) => self.indexOf(value) === index)
      : "ALL";
    let filtermenu = this.props.fetched
      ? cities.map((item, index) => (
          <button
            onClick={() => this.props.selected_city(item)}
            key={index.toString()}
            style={{ borderRadius: 20, padding: '10px 15px'}}
            class="btn  btn-xs btn-warning">
            {item}
          </button>
        ))
      : "loading..........";
    return (
      <div className="container">
        <div className="row   d-flex justify-content-center">
        <button
            onClick={() => this.props.selected_city('')}
            style={{ borderRadius: 20, padding: '10px 15px'}}
            class="btn btn-warning btn-xs ">
            ALL Stations
          </button>
          {filtermenu}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetched: state.RADIO_ST_Reducer.fetched,
    status: state.RADIO_ST_Reducer.status,
    radio: state.RADIO_ST_Reducer.channel,
    filter1: state.RADIO_ST_Reducer.filter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    selected_city: city => {
      dispatch(city_selected(city));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radiofilter);
