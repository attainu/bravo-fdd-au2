import React from 'react';
import SearchBox from './searchbox.component';
import { Route,Switch }  from 'react-router-dom';
import SearchResult from './searchresult.component';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Player from '../player/player.component';



function Search(props) {
    return (
        <div className="container">
            <h4 className="display-4 text-white mx-auto"><strong>Search</strong></h4>
            <SearchBox/>
            <MDBRow>
                <MDBCol size="6">
                    <Player/>
                </MDBCol>
                <MDBCol size="6"><SearchResult/></MDBCol>
            </MDBRow>
            
        </div>
    )
}


export default Search;
