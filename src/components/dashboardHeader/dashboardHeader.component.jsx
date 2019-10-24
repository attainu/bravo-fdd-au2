import React from 'react';
import { connect} from 'react-redux';
import { MDBNavbar,MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBNavItem,MDBNavbarToggler,MDBBtn,MDBIcon,MDBDropdown,MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import { auth } from "../../firebase/firebase.utils";
import { logoutUser } from '../../actions/loginAction';
import {Link} from 'react-router-dom';


class DashboardHeader extends React.Component{

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
    
    render(){
        let loggedIn = JSON.parse(localStorage.getItem('user')); 
        console.log(loggedIn);
        return(
            
            <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                  
                  </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavbarBrand className="font-weight-bolder">
                                    <MDBBtn
                                        color="primary"
                                        size="sm"
                                        className="mr-3 mx-auto float-right text-white rounded-pill"
                                    
                                    >
                                    <strong>Welcome {loggedIn.displayName} !!</strong>
                                    </MDBBtn>
                    </MDBNavbarBrand>
                  </MDBNavItem>
                  <MDBNavItem className="mr-3">
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <img src={loggedIn.photoURL} alt="" className="rounded-circle" width="35px" height="35px"/>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="mr-3">
                                <MDBDropdownItem className="text-center">
                                    <Link to="/dashboard/profile">
                                <MDBBtn
                                        color="primary"
                                        size="sm"
                                        className="mr-3 mt-3 mx-auto float-right text-white rounded-pill"
                                        //  onClick={}
                                    >
                                    <MDBIcon icon="user-circle" /> <span> </span>
                                    <strong>Profile</strong>
                                    </MDBBtn>
                                    </Link>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBBtn
                                        color="primary"
                                        size="sm"
                                        className="mr-1 mt-3 mx-auto float-right text-white rounded-pill"
                                        onClick={()=> {
                                            auth.signOut();
                                            this.props.doLogout()
                                        }}
                                    >
                                    <MDBIcon icon="sign-out" /> <span> </span>
                                    <strong>Logout</strong>
                                    </MDBBtn>
                                </MDBDropdownItem>
                            
                            </MDBDropdownMenu>
                        </MDBDropdown>
                  </MDBNavItem>
                  
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        )
    }
}



function mapActionToProps(dispatch) {
    
    return {
        doLogout: function() {
            localStorage.removeItem('user');
            dispatch(logoutUser());
        }
    }
}


export default connect(null,mapActionToProps)(DashboardHeader);