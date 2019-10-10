import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest }) {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
      <Route
        {...rest}
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }


export default PrivateRoute;