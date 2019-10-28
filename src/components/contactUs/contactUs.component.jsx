import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBMask, MDBView, MDBCardImage, MDBCardTitle, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import "../contactUs/contactUs.styles.css";



class ContactUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleFormClick(e){
     e.preventDefault();
     alert("Mail sent");
  }

  render() {
    return (
      <div className="bg-white">
        <header>
          <Router>
            <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
              <Logo classname="mx-auto" style={{ width: "2rem", height: "2rem", marginLeft: "4rem", marginTop: "0.5rem", marginRight: "0.5rem" }} />

              <MDBNavbarBrand href="/">
                <strong className="navbar-name">MeloMac</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src="https://i.ibb.co/tBj3m13/1-Ed-W47-D2k-Ir-Vu-Kzj-BDUlg-Q.jpg">
            <MDBMask overlay="stylish-strong" className="flex-center flex-column text-white text-center">
              <h3 className="display-3"><b>Contact us to hire us...</b></h3>
              <h5>Thanks for visiting this page.</h5>
              <p>We are a group of enthusiastic,smart and hardworking people who likes to work on different tech to solve real world problems</p><br />
              <p>If you like the site,do contact individuals or mail us</p>
            </MDBMask>
          </MDBView>
        </header>
        {/* cards for team members*/}
        <div className="container-fluid">
          <div className="jumbotron-fluid">
          <div className="card-deck">
            <MDBCard className="card-list  mt-3 p-2  text-center hoverable">
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Suraj</MDBCardTitle>

                <MDBBtn className="rounded-pill" color="light-blue" href="https://www.linkedin.com/in/surajk76/">See Profile</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="card-list  mt-3 p-2  text-center hoverable" style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Lakshmikanth</MDBCardTitle>

                <MDBBtn className="rounded-pill" color="light-blue" href="https://www.linkedin.com/in/lakshmikanth-reddy-930b9898/">See Profile</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="card-list  mt-3 p-2  text-center hoverable" style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Harika</MDBCardTitle>

                <MDBBtn className="rounded-pill" color="light-blue" href="https://www.linkedin.com/in/harika-thipparthi-a97b51186/">See Profile</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="card-list  mt-3 p-2  text-center hoverable" style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Naveen</MDBCardTitle>

                <MDBBtn className="rounded-pill" color="light-blue" href="https://www.linkedin.com/in/naveen-bandela-367176b6/">See Profile</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="card-list  mt-3 p-2  text-center hoverable" style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Yash</MDBCardTitle>

                <MDBBtn className="rounded-pill" color="light-blue" href="https://www.linkedin.com/in/yash-pal-91181b185/">See Profile</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          </div>
          <hr />


          {/* form */}
          <MDBCol md="4" className="m-auto">
            <form>
              <p className="h4 text-center py-4 text-dark">Drop us a line</p>
              <div className="text-dark">
                <MDBInput
                  label="FullName"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  required
                />
                <MDBInput
                  label="Email Address"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  required
                />

                <MDBInput
                  label="Message"
                  icon="pencil"
                  group
                  type="textarea"
                  rows="1"
                  required
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn className="rounded-pill" color="light-blue" type="submit" onClick={this.handleFormClick}>
                  Submit
                  </MDBBtn>
              </div>
            </form>

          </MDBCol>


        </div>
      </div>
    );
  }
}



export default ContactUsPage;