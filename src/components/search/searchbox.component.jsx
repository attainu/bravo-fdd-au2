import React from 'react';
import { connect } from 'react-redux';
import { MDBJumbotron, MDBBtn, MDBInputGroup,MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { fetchSearchResults } from '../../api';
import { searchQuery } from '../../actions/searchQueryActions';
import './searchbox.styles.css';


function SearchBox(props) {
    return (
        <div className="container mt-5">
                        {/* <MDBInputGroup
                            containerClassName="mb-3"
                            className="rounded-left text-center"
                          />
                          <MDBBtn
                                color="primary"
                                className="m-0 px-3 py-2 z-depth-0 btn btn-lg rounded-right"
                               
                                rounded
                                >
                                Search
                          </MDBBtn> */}
          <div className="row">
                <div className="col-10 mx-auto">
                  <form role="search">
                      <div className="input-group">
                        <input className="form-control text-center" placeholder="Search songs or playlists..." name="srch-term" id="ed-srch-term" type="text"/>
                      <div className="input-group-btn">
                          <button type="submit" id="searchbtn"  onClick={props.doSearch}>
                              Search
                          </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
                        
        </div>
    )
}

function mapActionToProps(dispatch) {
  return {
      doSearch:function(event){
         event.preventDefault()
          let query = event.target.parentNode.parentNode.children[0].value
          console.log(query);
          fetchSearchResults(query).then(result => 
            dispatch(searchQuery(result.response.hits)));
      }
  }    
}
export default connect(null,mapActionToProps)(SearchBox);