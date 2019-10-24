import React from "react";
import { connect } from "react-redux";
import { city_selected } from "../../actions/radioAction";
import Filterbtn from "./filterbtncomponent";
import "./radio.css";

class Radiofilter extends React.Component {
  render() {
    let filtermenu = this.props.fetched
      ? this.props.radio
          .map(item => item.City)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((item, index) => (
            <Filterbtn
              key={index.toString()}
              btnname={item}
              clickhandler={() => this.props.selected_city(item)}
            />
          ))
      : "loading..........";
    let all = this.props.fetched ? (
      <Filterbtn
        btnname="All Stations"
        clickhandler={() => this.props.selected_city("")}
      />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="row   d-flex justify-content-center">
          {all}
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
