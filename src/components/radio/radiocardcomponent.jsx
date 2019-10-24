import React from "react";
import "./radio.css";
import { MDBBtn } from 'mdbreact'

function Radiocard(props) {
  return (
    <div class="col-md-4 col-sm-6 p-3" key={props.key}>
      <div class="card bg-dark" style={{minHeight:"280px"}}>
        <img
          height="140px"
          width="140px"
          class="card-img-top mp3-cover"
          src={props.src}
          alt={props.st_name}
        />
        <div class="card-block">
          <h5 class="card-title  d-flex justify-content-center">
            {props.st_name}
          </h5>
          <p class="card-text ml-1">
            {props.language}
            <spam className="mr-2" style={{ float: "right" }}>
              {props.type}
            </spam>
          </p>
          <div className="mr-3">
            <MDBBtn
              color="primary"
              className="btn-primary btn-block rounded-pill"
              onClick={props.clickhandler}
            >
              Play
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Radiocard;
