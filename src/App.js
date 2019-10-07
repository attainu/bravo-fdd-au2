import React from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import landingpage from "./components/landingpage/landingpage";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={landingpage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
