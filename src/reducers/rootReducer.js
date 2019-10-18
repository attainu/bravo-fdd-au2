import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import ArtistReducer from './ArtistReducer';
import searchQueryReducer from './searchQueryReducer';
import  songLinksreducer  from "./songLinksreducer";
import getSongsReducer from './songsReducer';

export default combineReducers({
   loginReducer,
   searchQueryReducer,
   songLinksreducer,
   ArtistReducer,
   getSongsReducer
});