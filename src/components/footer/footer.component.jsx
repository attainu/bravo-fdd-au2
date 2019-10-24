import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const FooterPagePro = () => {
  return (
    <MDBFooter color="black" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h6 className=" mt-3 display-4">MeloMac</h6>
            <div className=" flex-left">
              <MDBBtn size="lg" tag="a" floating social="fb" color="primary">
                <MDBIcon icon="facebook-f" className="p-3" />
              </MDBBtn>
              <MDBBtn
                size="lg"
                tag="a"
                floating
                social="slack"
                color="secondary"
              >
                <MDBIcon icon="slack" className="p-3" />
              </MDBBtn>
              <MDBBtn size="lg" tag="a" floating social="git" color="dark">
                <MDBIcon icon="github" className="p-3" />
              </MDBBtn>
              <MDBBtn
                size="lg"
                tag="a"
                floating
                social="email"
                color="secondary"
              >
                <MDBIcon icon="envelope" className="p-3" />
              </MDBBtn>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Company
            </h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/aboutUs" target="blank">About Us</Link>
              </li>
              <li>
                <Link to="/contactUs" target="blank">Contact Us</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">API Links</a>
              </li>
              <li>
                <a href="#!">Github Links</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <hr />
      <hr />

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> MeloMac </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
