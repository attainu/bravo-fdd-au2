import React from 'react'
import Radiolist from './radiolist';
import RadioPlayer from './radioplayer'
import Radiofilter from './radiofilter'
import "./radio.css";

function Radio() {
    return (
        <div class="radio-body">
           <h5 className="display-3 text-white mx-auto">.</h5>
           <RadioPlayer/>
           <div style={{height:"85vh",overflowY:"scroll",backgroundColor:"whitesmoke"}} className="container mt-1">
           <Radiofilter/>
           <Radiolist/>
           </div>
        </div>
    )
}

export default Radio;