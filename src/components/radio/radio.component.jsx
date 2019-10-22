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
           <Radiofilter/>
           <Radiolist/>
        </div>
    )
}

export default Radio;