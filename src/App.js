import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import landingpage from "./components/landingpage/landingpage";
import Dashboard from "./components/dashboard/dashboard";
import ContactUsPage from "./components/contactUs/contactUs.component";
import AboutUsPage from "./components/aboutUs/aboutUs.component";
import NotFound from "./components/NotFound/notFound.component";


class App extends React.Component{
  
  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/dashboard" component = {Dashboard}/>
        <Route path="/contactUs" component = {ContactUsPage}/>
        <Route path="/aboutUs" component = {AboutUsPage}/>
        <Route path="" component = {NotFound}/>
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
