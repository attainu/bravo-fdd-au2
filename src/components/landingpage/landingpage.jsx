import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "../landingpage/landingpage.styles.css";
import FooterPage from "../footer/footer.component";
import { MDBBtn, MDBIcon } from "mdbreact";
import { auth, provider} from "../../firebase/firebase.utils";
import { loginUser } from '../../actions/loginAction';

class LandingPage extends React.Component{
  constructor(props){
    super(props)
    this.LoginwithGoogle = this.LoginwithGoogle.bind(this);
    // this.doRedirect = this.doRedirect.bind(this);
  }
  
  async LoginwithGoogle(){
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await auth.signInWithPopup(provider);
    localStorage.setItem('user',JSON.stringify(result.user.providerData[0]));
    this.props.doLogin();
    //this.doRedirect()
  }

  // doRedirect(){
  //   let loggedIn = localStorage.getItem('user');

  //   if(loggedIn){
  //     return <Redirect to="/dashboard" />
  //   }else{
  //     return <Redirect to="/"/>
  //   }
  // }

  componentDidMount(){
    
    // auth.onAuthStateChanged(user => {
    //   console.log(user)
    //    localStorage.setItem('user',JSON.stringify(user.providerData[0]));
    //    return <Redirect to='/dashboard'/>
    //   });
  }

  render(){
    let loggedIn = this.props.user;
    if(loggedIn){
      return <Redirect exact to="/dashboard/songs" />
    }
  return (
    
    <div className="landingpage">
      <div className="header parallax-wrapper">
        <div className="overlay">
          <MDBBtn
            color="primary"
            size="lg"
            className="mr-3 mt-3 float-right text-white rounded-pill"
            onClick={this.LoginwithGoogle}
          
          >
            <MDBIcon icon="sign-in" className="mr-3" />
            <strong>Login</strong>
          </MDBBtn>
         
        </div>
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="https://res.cloudinary.com/drffz3wkt/video/upload/v1570115717/Beauty_Charming_Young_Woman_in_Earphones_Sitting_HD_Video_Scene_Background_Loop_hbmqac.mp4" />
        </video>

        <div className="container h-100 regular-wrapper">
          <div className="d-flex h-50 mt-5 float-right">
            <div className="w-100 text-white">
              <h1
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "100px"
                }}
              >
                MeloMac
              </h1>
              <p className="lead mb-0">Bring Music To Life</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <FooterPage />
      </div>
    </div>
   );
 }
}

function mapStateToProps(state){
  return{
    user: state.loginReducer.loggedIn
  }
}

function mapActionToProps(dispatch){
  return{
    doLogin:function(){
      dispatch(loginUser())
    }
  }
}

export default connect(mapStateToProps,mapActionToProps)(LandingPage);
