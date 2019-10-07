import React from "react";
import "../landingpage/landingpage.styles.css";
import FooterPage from "../footer/footer.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { MDBBtn, MDBIcon } from "mdbreact";

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="header parallax-wrapper">
        <div className="overlay">
          <MDBBtn
            color="primary"
            size="lg"
            className="mr-3 mt-3 float-right text-white rounded-pill"
            onClick={signInWithGoogle}
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
      {/* <div className="parallax-wrapper2" >
      <div className="card-deck p-5">
        <div
          className="card bg-dark text-white shadow-sm mb-5 rounded"
          style={{ width: "28rem" }}
        >
          <img
            src="https://media3.giphy.com/media/eI7NnalNIhT7q/giphy.gif"
            className="card-img-top"
            alt="..."
            width="250px"
            height="350px"
          />
          <div className="card-body">
            <h3 className="card-title text-center display-4">Play</h3>
          </div>
        </div>
        <div
          className="card bg-dark text-white shadow-sm mb-5 rounded"
          style={{ width: "28rem" }}
        >
          <img
            src="https://cdn.dribbble.com/users/318646/screenshots/3492767/headphones.gif"
            className="card-img-top"
            alt="..."
            width="250px"
            height="350px"
          />
          <div className="card-body">
            <h3 className="card-title text-center display-4">Listen</h3>
          </div>
        </div>
        <div
          className="card bg-dark text-white shadow-sm mb-5 rounded"
          style={{ width: "28rem" }}
        >
          <img
            src="https://media1.giphy.com/media/5xtDarmSceWsGyD4VeE/source.gif"
            className="card-img-top"
            alt="..."
            width="250px"
            height="350px"
          />
          <div className="card-body">
            <h3 className="card-title text-center display-4">Enjoy</h3>
          </div>
        </div>
      </div>
      </div> */}
      <div className="footer">
        <FooterPage />
      </div>
    </div>
  );
}

export default LandingPage;
