import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "../dashboard/dashboard.styles.css";
import FooterPage from "../footer/footer.component";
import {ReactComponent as Logo} from '../../logo.svg';
import DashboardHeader from "../dashboardHeader/dashboardHeader.component";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <MDBRow>
        <MDBCol md="3" className="text-white bg-dark shadow-lg">
          <Logo style={{width:"12rem",height:"12rem",marginLeft:"5rem",marginTop:"1rem"}}/>
          <h1  className="text-center"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "50px"
                }}
              >
                MeloMac
              </h1>
          <ul className="sidebar flex-column text-center p-5">
            <li>Artist</li>
            <li>Songs</li>
            <li>Search</li>
            <li>Radio</li>
          </ul>
        </MDBCol>
        <MDBCol md="9" className="text-white bg-white">
          <MDBRow><DashboardHeader/></MDBRow>
          
        </MDBCol>
        
      </MDBRow>
      <FooterPage/>
      </div>
    );
  }
}

export default Dashboard;
