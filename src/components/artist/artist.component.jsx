import React from "react";
import ShowArtist from "./ShowArtist";

class Artist extends React.Component {

  render() {
    return (
      <div>
        <h3 className="display-3 text-white mx-auto "> Top Artists </h3>
        <div className="overflow-auto text-dark" style={{ height: "80vh",width:"100%",backgroundColor:"#dfe6e9" }}>
          <ShowArtist />
        </div>
      </div>
    );
  }
}

export default Artist;