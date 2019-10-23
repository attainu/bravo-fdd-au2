// import React from 'react';
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBView,MDBMask} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import {ReactComponent as Logo} from '../../logo.svg';
// import "../aboutUs/aboutUs.styles.css";



// class AboutUsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <header>
//           <Router>
//             <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
//             <Logo classname="mx-auto" style={{width:"2rem",height:"2rem",marginLeft:"4rem",marginTop:"0.5rem",marginRight:"0.5rem",backgroundColor:"black"}}/>

//               <MDBNavbarBrand href="/">
//                 <strong className="navbar">MeloMac</strong>
//               </MDBNavbarBrand>
//               {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
//               <MDBCollapse isOpen={this.state.collapse} navbar>
//                 <MDBNavbarNav left>

//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBNavbar>
//           </Router>

//           </header>

//           </div>
//     );
//   }
// }

// export default AboutUsPage;

import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import "../aboutUs/aboutUs.styles.css";



class AboutUsPage extends Component {
  state = {
    isOpen: false,
    items: {
      default: "1",
    }
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };


  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling>

              <Logo classname="mx-auto" style={{ width: "2rem", height: "2rem", marginLeft: "4rem", marginTop: "0.5rem", marginRight: "0.5rem" }} />

              <MDBNavbarBrand>
                <strong className=" navbar-details white-text">MeloMac</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
        <main>
          <div className="row">
            <div className="col"></div>
            <div className="col" style={{ marginTop: "8rem" }}>
              <h3 className="text-center"> <b>hiii</b></h3>
              <p>We are the students of AttainU.As we all know there is no quality in our education system....there are many engineers passing out from colleges with no subject and practical knowledge</p>
              <p>AttainU is the best place where a student can get command on the topics what he/she learns...this is because of the teaching here and the staff at AttainU are very educated and they will consider each student and train us individually</p>
            </div>
            <div className="col"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default AboutUsPage;
