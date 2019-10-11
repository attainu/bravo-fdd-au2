import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { MDBRow, MDBCol , MDBBreadcrumb , MDBBreadcrumbItem} from "mdbreact";
import "../dashboard/dashboard.styles.css";
import FooterPage from "../footer/footer.component";
import {ReactComponent as Logo} from '../../logo.svg';
import DashboardHeader from "../dashboardHeader/dashboardHeader.component";
import Artist from "../artist/artist.component";
import Songs from "../songs/songs.component";
import Search from "../search/search.component";
import Radio from "../radio/radio.component";

const routes = [
  {
    path:"/dashboard/artist",
    exact:true,
    sidebar:()=><MDBBreadcrumb dark color="bg-dark text-center" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Artist</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Artist/>
  },
  {
    path:"/dashboard/songs",
    exact:true,
    sidebar:()=><MDBBreadcrumb dark color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Songs</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Songs/>
  },
  {
    path:"/dashboard/search",
    sidebar:()=><MDBBreadcrumb dark color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Search</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Search/>
  },
  {
    path:"/dashboard/radio",
    exact:true,
    sidebar:()=><MDBBreadcrumb dark color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Radio</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Radio/>
  }
]

class Dashboard extends React.Component {
  render(props) {
    //  console.log(firebase.auth())
    let loggedIn = this.props.user; 
        console.log("dashboard class",loggedIn);
        if(!loggedIn){
            return <Redirect to="/"/>
        }
    return (
      <Router>
      <div>
        <MDBRow>
        <MDBCol className="text-white bg-dark shadow-lg">
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
            <li>
              <Link to="/dashboard/artist" className="nav-link text-white">Artist</Link></li>
            <li>
            <Link to="/dashboard/songs" className="nav-link text-white">Songs</Link>
            </li>
            <li>
            <Link to="/dashboard/search" className="nav-link text-white">Search</Link>
            </li>
            <li>
            <Link to="/dashboard/radio" className="nav-link text-white">Radio</Link>
            </li>
          </ul>
          {routes.map((route,index)=>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
          ))}
        </MDBCol>
        <MDBCol md="9" className="text-white bg-white">
          <MDBRow><DashboardHeader/></MDBRow>
          <div className="mx-auto">
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      
        </MDBCol>
        
      </MDBRow>
      <FooterPage/>
      </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  console.log("dashboard state",state);
  return{
    user: state.loginReducer.loggedIn
  }
}

export default connect(mapStateToProps)(Dashboard);
