import React from "react";

function Filterbtn(props) {
  return (
    <button
      onClick={props.clickhandler}
      style={{ borderRadius: 20, padding: "10px 15px" }}
      class="btn btn-warning btn-xs "
    >
      {props.btnname}
    </button>
  );
}
export default Filterbtn;
