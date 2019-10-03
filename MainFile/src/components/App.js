import React from 'react';
import { connect } from 'react-redux';
import Api from './Api'
import ShowAll from './ShowAll'
import apiCall from '../api'
import { Action } from '../actions/Action';

function App(props){
// console.log(props.filter)

return(<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Attainu</a>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={props.filter} >New Releases <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" >Recommendations <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" >Categories <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <Api/>
</nav>   
<div className="container m-0 p-0"> 
    <ShowAll/>
</div>
</div>
)}

    // function mapStateToProps(state) {
    //     return {
    //         result: state.result,
    //         counter:state.counter,
    //         filter:state.filter,
    //         convertCounter:state.convertCounter
    //     };
    //   }

      function mapActionToProps(dispatch) {
        return {
            filter: function(value) {
              // console.log(value)
                apiCall("NewRelease",null)
        .then(
          (result) => {
            // console.log(result)
            // console.log(result)
          dispatch(Action(result.albums.items,null))
          })
            }
        }}
        // function mapStateToProps(state) {
        //   return {
        //       result: state.result
        //   };
        // }   
        export default connect(null, mapActionToProps)(App);