import React from 'react'
import Radiolist from './radiolist';
import RadioPlayer from './radioplayer'
import Radiofilter from './radiofilter'
import "./radio.css";

function Radio() {
    return (
        <div>
           <h5 className="display-3 text-white mx-auto">.</h5>
           <RadioPlayer/>
           <div style={{height:"600px",overflowY:"scroll"}}>
           <Radiofilter/>
           <Radiolist/>
           </div>
        </div>
    )
}

export default Radio;