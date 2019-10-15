import React from "react";
import "./profile.styles.css";

class Profile extends React.Component{
    render()
    {
        console.log(JSON.parse(localStorage.user));
        return(
            <div>Hello</div>
        )
    }
}

export default Profile;