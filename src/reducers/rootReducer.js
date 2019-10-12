import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import ArtistReducer from './ArtistReducer';


export default combineReducers({
   loginReducer,
   ArtistReducer
});