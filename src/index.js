import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import store from "./store";
import "./fonts/Quicksand-Regular.ttf";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
