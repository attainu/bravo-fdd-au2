import React from 'react';
import './notFound.styles.scss';
import {ReactComponent as Logo} from '../../logo.svg';
import {ReactComponent as Numberfour } from './number4.svg';

const NotFound = () => {
    return (
        <div className="container-fluid">
            <div className="nofound mt-5 bg-dark">
                    <div>
                        <Numberfour className="four"/>
                    </div>
                    <div>
                        <Logo className="logo"/>
                    </div>
                    <div>
                        <Numberfour className="four"/>
                    </div>
            </div>
            <div className="msg">
            <svg height="80vh" width="80vw">
            
                <text x="15" y="100" fill="white" fontSize="80px" fontFamily="'Roboto' , sans-serif">NOT FOUND</text>
            
                Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            
        </div>
    )
}

export default NotFound;
