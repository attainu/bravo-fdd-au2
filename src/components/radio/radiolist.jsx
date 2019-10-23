import React from "react";
import { connect } from "react-redux";
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
          <div class="col-md-4 col-sm-6 p-3" key={i.toString()}>
            <div class="card bg-primary">
              <img
                height="140px"
                width="140px"
                class="card-img-top mp3-cover"
                src={item.st_img}
                alt={item.Station_name}
              />
              <div class="card-block" >
                <h5 class="card-title  d-flex justify-content-center">
                  {item.Station_name}
                </h5>
                 <p class="card-text ml-1">
                  {item.Language}
                    <spam className="mr-2" style={{ float: "right" }}>
                    {item.type}
                  </spam> 
                </p>  
                <div className="mr-3" >
                  <button
                    className="btn btn-info btn-block"
                    onClick={() => this.props.station(item)}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
    ) : (
      <h3>Please wait while Connecting to station....</h3>
    );
    return (
      
        <div className="radiolist">
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
