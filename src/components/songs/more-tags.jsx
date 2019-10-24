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
           
                {genere.map((item) => 
                    <Link to={`/dashboard/songs/tags/${item.tag}`}>
                            <div class="card bg-dark text-white tag-card cards m-3">
                    <Img src={item.url} class="card-img tag-img images" alt="..." />
                    <div class="card-img-overlay ">
                        <h5 class="card-title tags-title"><strong>{item.tag.charAt(0).toUpperCase()+item.tag.slice(1,20)}</strong></h5>
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
