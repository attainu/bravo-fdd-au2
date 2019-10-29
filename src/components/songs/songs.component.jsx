import React from 'react'
import './songs.css';
import GlobalTop from './globalTop';
import India from './indiaTop';
import Tags from './tags';
class Songs extends React.Component {

    render(){
    return (
        <div>
        <h3 className="display-3 text-white mx-auto "> Top Songs </h3>
        <div className="overflow-auto text-dark" style={{height:"80vh"}}>
            <br/>
            <GlobalTop /><br/>
            <hr/>
            <India /><br/>
            <hr/>
            <Tags /><br/>
        </div>  
        </div>
 
    )
    }
}

export default Songs;
