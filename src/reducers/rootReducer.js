import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import searchQueryReducer from './searchQueryReducer';
import  songLinksreducer  from "./songLinksreducer";

export default combineReducers({
   loginReducer,
   searchQueryReducer,
   songLinksreducer
});