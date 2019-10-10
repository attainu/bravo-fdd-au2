import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import { BrowserRouter as Router , Route, Switch, NavLink , Redirect } from "react-router-dom";
import landingpage from "./components/landingpage/landingpage";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./components/privateroute.componet";

class App extends React.Component{

  
  
  render(){
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingpage} />
        <PrivateRoute path="/dashboard" component = {Dashboard}/>
        {/* {this.doRedirect()} */}
      </Router>
    </div>
  );
  }
}

export default connect()(App);
