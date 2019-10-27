import React from "react";
import "./radiocard.styles.scss";
import Img from 'react-image';
import { MDBIcon } from 'mdbreact'

function Radiocard(props) {
  return (
      <div class="card bg-dark hoverable" key={props.key}>
        <Img
          height="100%"
          class="card-img"
          src={props.src}
          alt={props.st_name}
        />
        <div class="card-img-overlay bg-dark">
          <h5 class="card-title  d-flex justify-content-center">
            {props.st_name}
          </h5>
          <div className="mr-3 play">
            <button
              className="btn btn-primary rounded-pill"
              onClick={props.clickhandler}
            >
              <MDBIcon icon="play" />
            </button>
          </div>
        </div>
      </div>
  );
}
export default Radiocard;
