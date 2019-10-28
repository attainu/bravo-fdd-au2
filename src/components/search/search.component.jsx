import React from 'react';
import { connect } from 'react-redux';
import SearchBox from './searchbox.component';
import SearchResult from './searchresult.component';
import { MDBRow, MDBCol } from "mdbreact";
import Player from '../player/player.component';



class Search extends React.Component{

    renderOnlyPlaylist=()=>{
        return <MDBCol size="12" className="mx-auto"><SearchResult/></MDBCol>
    }
    
    renderBothPlaylistAndMedia=()=>{
        return (
            <MDBRow className="bg-dark pt-2 p-3 ml-5">
            <MDBCol size="6">
                    <Player/>
            </MDBCol>
            <MDBCol size="6">
                <SearchResult/>
            </MDBCol>
            </MDBRow>
        )
    }

    render(){
        let medialength = this.props.songlink.length;
        let querylength = this.props.searchList.length;
        let element;
        if(querylength&&medialength){
            element =  this.renderBothPlaylistAndMedia()
        }
        else if(querylength && !medialength){
            element = this.renderOnlyPlaylist()
        }
        else{
            element = <div>...Loading</div>
        }
    return (
        <div className="container">
            <h4 className="display-4 text-white mx-auto"><strong>Search</strong></h4>
            <SearchBox/>
            <MDBRow className="mt-5" >
                
                {element}
                
            
            </MDBRow>
            
        </div>
    )
    }
}

function mapStateToProps(state){
    return{
        searchList : state.searchQueryReducer.searchList,
        songlink : state.songLinksreducer.media
    }
}


export default connect(mapStateToProps)(Search);
