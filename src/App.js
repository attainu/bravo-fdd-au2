import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import landingpage from "./components/landingpage/landingpage";
import Dashboard from "./components/dashboard/dashboard";

class App extends React.Component{
  
  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/dashboard/" component = {Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
  }
}

function mapStateToProps(state){
  return{
    user: state.loginReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
