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
import ArtistInfo from '../artist/artistInfo'
import Profile from "../profile/profile.component";
import MoreTags from '../songs/more-tags';
import IndiaMore from '../songs/india50-more';
import GlobalMore from '../songs/global-more';
import TagSongs from "../songs/tagSong";

const routes = [
 {
   
    path:"/dashboard/artist",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark text-center" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Artist</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Artist/>
  },
  {
    path:"/dashboard/songs",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Songs</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Songs/>
  },
  {
    path:"/dashboard/search",
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Search</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Search/>
  },
  {
    path:"/dashboard/radio",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Radio</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><Radio/>
  },
  {
    path:"/dashboard/Artist/:artistname",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-2">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem  className="text-white">Artist</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">ArtistInfo</MDBBreadcrumbItem>

                </MDBBreadcrumb>,
    main:()=><ArtistInfo/>
  },
  {

    path:"/dashboard/profile",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem  className="text-white">Profile</MDBBreadcrumbItem>

                </MDBBreadcrumb>,
    main:()=><Profile/>
  },
  {
    path:"/dashboard/songs/allTags",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-2">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem className="text-white">Songs</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Tags</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><MoreTags />
  },
  {
    path:"/dashboard/songs/IndiaTop50",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-2">
                  <MDBBreadcrumbItem className="ml-5">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem className="text-white">Songs</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">India Top 50</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><IndiaMore />
  },
  {
    path:"/dashboard/songs/globalTop50",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem className="ml-3">DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem className="text-white">Songs</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Global Top 50</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><GlobalMore />
  },
  {
    path:"/dashboard/songs/tags/:state",
    exact:true,
    sidebar:()=><MDBBreadcrumb color="bg-dark" className="ml-5">
                  <MDBBreadcrumbItem>DashBoard</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem  className="text-white">Songs</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem  className="text-white">Tags</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active className="text-white">Tag Songs</MDBBreadcrumbItem>
                </MDBBreadcrumb>,
    main:()=><TagSongs />

  }

]

class Dashboard extends React.Component {
  render() {
    //  console.log(firebase.auth())
    let loggedIn = this.props.user; 
        if(!loggedIn){
            return <Redirect to="/"/>
        }
    return (
      <Router>
        
      <div>     
        <MDBRow style={{width:"100vw"}}>
        <MDBCol className="text-white bg-dark shadow-lg">
          <Logo  className="logo"/>
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
            <Link to="/dashboard/artist" className="nav-link text-white">Artist</Link>
            </li>
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
  return{
    user: state.loginReducer.loggedIn
  }
}

export default connect(mapStateToProps)(Dashboard);
