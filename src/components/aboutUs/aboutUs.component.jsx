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
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

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
            <MDBNavbar color="indigo" fixed="top" dark expand="md">
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
              <p>We are the students of attainU.As we all know there is no quality in our education system....there are many engineers passing out from colleges with no subject and practical knowledge</p>
              <p>AttainU is the best place where a student can get command on the topics what he/she learns...this is because of the teaching here and the staff at attainU are very educated and they will consider each student and train us individually</p>
            </div>
            <div className="col"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default AboutUsPage;


// class Pills extends Component {
//   state = {
//     items: {
//       default: "1",
//     }
//   };

//   togglePills = (type, tab) => e => {
//     e.preventDefault();
//     if (this.state.items[type] !== tab) {
//       let items = { ...this.state.items };
//       items[type] = tab;
//       this.setState({
//         items
//       });
//     }
//   };

//   render() {
//     return (
//       <MDBContainer className="mt-4">
//           <MDBRow>
//             <MDBCol md="12">
//               <h2>Default</h2>
//               <MDBNav className="mt-5 nav-pills">
//                 <MDBNavItem>
//                   <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
//                     Home
//                   </MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
//                     Profile
//                   </MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
//                     Contact
//                   </MDBNavLink>
//                 </MDBNavItem>
//               </MDBNav>
//               <MDBTabContent activeItem={this.state.items["default"]}>
//                 <MDBTabPane tabId="1">
//                   <p>
//                     Consequat occaecat ullamco amet non eiusmod nostrud dolore
//                     irure incididunt est duis anim sunt officia. Fugiat velit
//                     proident aliquip nisi incididunt nostrud exercitation
//                     proident est nisi. Irure magna elit commodo anim ex veniam
//                     culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
//                     consequat eu adipisicing minim anim aliquip cupidatat culpa
//                     excepteur quis. Occaecat sit eu exercitation irure Lorem
//                     incididunt nostrud.
//                   </p>
//                 </MDBTabPane>
//                 <MDBTabPane tabId="2">
//                   <p>
//                     Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
//                     mollit commodo mollit ex. Aute sunt incididunt amet commodo
//                     est sint nisi deserunt pariatur do. Aliquip ex eiusmod
//                     voluptate exercitation cillum id incididunt elit sunt. Qui
//                     minim sit magna Lorem id et dolore velit Lorem amet
//                     exercitation duis deserunt. Anim id labore elit adipisicing
//                     ut in id occaecat pariatur ut ullamco ea tempor duis.
//                   </p>
//                 </MDBTabPane>
//                 <MDBTabPane tabId="3">
//                   <p>
//                     Est quis nulla laborum officia ad nisi ex nostrud culpa
//                     Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
//                     ipsum nisi elit fugiat commodo sunt reprehenderit laborum
//                     veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
//                     labore incididunt do fugiat commodo aliquip sit id deserunt
//                     reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
//                     aute veniam incididunt mollit cupidatat esse irure officia
//                     elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
//                     labore ipsum laboris ipsum commodo sunt tempor enim
//                     incididunt. Commodo quis sunt dolore aliquip aute tempor
//                     irure magna enim minim reprehenderit. Ullamco consectetur
//                     culpa veniam sint cillum aliqua incididunt velit ullamco
//                     sunt ullamco quis quis commodo voluptate. Mollit nulla
//                     nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
//                     voluptate voluptate consequat non.
//                   </p>
//                 </MDBTabPane>
//               </MDBTabContent>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       );
//     }
// }

// export default Pills;