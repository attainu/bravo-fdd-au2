const RADIO_ST_Reducer = (state = {fetching: false, fetched: false, channel: [],filter:''}, action) => {
    switch (action.type) {
      case "FETCH_STATIONS":
        return {
            ...state,
            fetching: true,
            channel: [],
            fetched: false,
            filter:state.filter
        };
      case "RECEIVE_STATIONS":
        return {
            ...state,
        fetched: true,
        channel: action.payload,
        fetching: false,
        filter:state.filter
        };
        case "CITY_SELECTED":
          return {
              ...state,
          fetched: true,
          channel: state.channel,
          fetching: false,
          filter:action.payload
          };
      default:
        return state;
    }
  };
  
  export default RADIO_ST_Reducer;
  