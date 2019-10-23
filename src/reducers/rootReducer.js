import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import ArtistReducer from './ArtistReducer';
import searchQueryReducer from './searchQueryReducer';
import  songLinksreducer  from "./songLinksreducer";
import getSongsReducer from './songsReducer';
import  RADIO_ST_Reducer  from "./RADIO_ST_Reducer";
import Selected_Radio_Reducer from './Selected_Radio_Reducer'

export default combineReducers({
   loginReducer,
   searchQueryReducer,
   songLinksreducer,
   ArtistReducer,
   getSongsReducer,
   RADIO_ST_Reducer,
   Selected_Radio_Reducer
});