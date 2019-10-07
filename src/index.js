import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Quicksand-Regular.ttf";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
