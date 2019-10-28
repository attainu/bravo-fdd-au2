import React from 'react'
import './songs.css';
import Img from 'react-image';
import image_urls from '../../tags-images/images';
import { Link } from "react-router-dom";


class Tags extends React.Component {
    
    render(){
        let genere = image_urls().img;
    return (
        <div className="songs">
            <div className="container">
                <div className="top-contents">
                    <h1 className="tag">Explore by Tags</h1>
                    <Link to="/dashboard/songs/allTags"><button className="btn btn-dark text-white ">See more</button></Link>
                </div>
                <Link to="/dashboard/songs/tags/electro" params="electro"><div className="card bg-dark text-white tag-card cards">
                    <Img src={genere[0].url} className="card-img tag-img images" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title tags-title" ><strong>Electro</strong></h5>
                        
                    </div>
                </div>
                </Link>
                <Link to="/dashboard/songs/tags/seen-line" params="electro"><div className="card bg-dark text-white tag-card cards">
                    <Img src={genere[1].url} className="card-img tag-img images" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title tags-title">Seen Line</h5>
                        
                    </div>
                </div>
                </Link>
                <Link to="/dashboard/songs/tags/alternative" params="electro"><div className="card bg-dark text-white tag-card cards">
                    <Img src={genere[2].url} className="card-img tag-img images" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title tags-title">Alternative</h5>
                        
                    </div>
                </div>
                </Link>
                <Link to="/dashboard/songs/tags/indie" params="electro"><div className="card bg-dark text-white tag-card cards">
                    <Img src={genere[3].url} className="card-img tag-img images" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title tags-title">Indie</h5>
                        
                    </div>
                </div>
                </Link>
            </div>
        </div>
        
    )
    }
}

export default Tags;
