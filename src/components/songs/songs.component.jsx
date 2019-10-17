import React from 'react'
import './songs.css';
import GlobalTop from './globalTop';
import India from './indiaTop';
import Tags from './tags';
class Songs extends React.Component {

    render(){
    return (
        <div>
        <div className="text-dark mx-auto d-print-block ">
        <div className="overflow-auto" style={{height:"600px"}}>
            <GlobalTop />
            <India />
            <Tags />
        </div>  
        </div>
      
    </div>
    )
    }
}

export default Songs;
