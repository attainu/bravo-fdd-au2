import React from "react";
import "./profile.styles.css";

class Profile extends React.Component{
    render()
    {
        let userDetails =JSON.parse(localStorage.user);
        console.log("profile",userDetails);
        return(
            <div className="container text-center">
         <img src={userDetails.photoURL} className="rounded-circle mx-auto d-block" alt="..." style={{marginTop:"8.1rem",marginBottom:"0.8rem",height:"180px",width:"180px"}}/><br/>
        <h3 className="text-dark"><b>{userDetails.displayName}</b></h3>
        <h4 className="text-dark">{userDetails.email}</h4>

            </div>
        )
    }
}

export default Profile;