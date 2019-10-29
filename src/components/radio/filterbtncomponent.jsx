import React from "react";

function Filterbtn(props) {
  return (
    <button
      onClick={props.clickhandler}
      style={{ borderRadius: 20, padding: "10px 15px" }}
      class="btn btn-primary btn-xs "
    >
      {props.btnname}
    </button>
  );
}
export default Filterbtn;
