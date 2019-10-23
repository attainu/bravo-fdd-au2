const Selected_Radio_Reducer = (state = {selected: false,playing: false, status: false, fm: {}}, action) => {
    switch (action.type) {
      case "SELECT_RADIO":
        return {
            ...state,
            selected: true,
            fm: action.payload,
            status: true,
            playing: true
        };
        case "PLAY_PAUSE":
        return {
            ...state,
            selected: true,
            fm: state.fm,
            status: !state.status,
            playing: true
        };
      default:
        return state;
    }
  };
  
  export default Selected_Radio_Reducer;
  