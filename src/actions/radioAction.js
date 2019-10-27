// Radio Actions for fecthing from API
export const receivestations = payload => {
    return {
      type: "RECEIVE_STATIONS",
      payload: payload
    };
  };
  export const fetchstations = payload => {
    return {
      type: "FETCH_STATIONS",
      payload: payload
    };
  };
  
  //Radio actions for choosing particular Station
  export const select_radio = payload => {
    return {
      type: "SELECT_RADIO",
      payload: payload
    };
  };
  export const play_pause = () => {
    return {
      type: "PLAY_PAUSE"
    };
  };
//cities filterations
  export const city_selected = (payload) => {
    return {
      type: "CITY_SELECTED",
      payload: payload
    };
  };
