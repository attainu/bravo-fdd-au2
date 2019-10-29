import React from 'react'
import './more-tags.styles.scss';
import Img from 'react-image';
import image_urls from '../../tags-images/images';
import {Link} from 'react-router-dom';


class MoreTags extends React.Component {
    
    render(){
        let genere = image_urls().img;
         console.log();
    return (
        <div className="songs">
        <h3 className="display-3 text-white mx-auto "> Tags </h3>

            <div className="container-fluid overflow-auto" style={{height:"80vh"}} >
           
                {genere.map((item,i) => 
                    <Link to={`/dashboard/songs/tags/${item.tag}`} key={i*100}>
                            <div className="card bg-dark text-white tag-card cards m-3">
                    <Img src={item.url} className="card-img tag-img images" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title tags-title"><strong>{item.tag.charAt(0).toUpperCase()+item.tag.slice(1,20)}</strong></h5>
                    </div>
                </div>
                </Link>
                )}
                
            </div>
            
        </div>
    )
    }
}

export default MoreTags;
