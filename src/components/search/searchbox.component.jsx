import React from 'react';
import { connect } from 'react-redux';
import { MDBJumbotron, MDBBtn, MDBInputGroup,MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { fetchSearchResults } from '../../api';
import { searchQuery } from '../../actions/searchQueryActions';


function SearchBox(props) {
    return (
        <div className="container">
            <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-5 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                        <MDBInputGroup
                            containerClassName="mb-3"
                            className="rounded-left text-center"
                            append={
                                <MDBBtn
                                color="primary"
                                className="m-0 px-3 py-2 z-depth-0 btn btn-lg rounded-right"
                                onClick={props.doSearch}
                                >
                                Search
                                </MDBBtn>
                        }
                        />
            </MDBCol>
          </MDBJumbotron>
        </div>
    )
}

function mapActionToProps(dispatch) {
  return {
      doSearch:function(event){
          let query = event.target.parentNode.parentNode.childNodes[1].value;
          console.log(query);
          fetchSearchResults(query).then(result => 
            dispatch(searchQuery(result.response.hits)));
      }
  }    
}
export default connect(null,mapActionToProps)(SearchBox);