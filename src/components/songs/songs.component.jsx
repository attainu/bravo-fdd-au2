import React from 'react'
import './songs.css';
import GlobalTop from './globalTop';
import India from './indiaTop';
import Tags from './tags';
class Songs extends React.Component {

    render(){
    return (
        <div>
        <h3 className="display-3 text-white mx-auto "> Top Artist </h3>
        <div className="overflow-auto text-dark" style={{height:"600px"}}>
            <GlobalTop />
            <India />
            <Tags />
        </div>  
        </div>
 
    )
    }
}

export default Songs;
