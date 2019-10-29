import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon} from "mdbreact";
import { fetchSonglink } from "../../api";
import { songLinks } from '../../actions/songlinkAction'

function SearchResult(props) {
    var len = props.searchresult.length
    return (

        len?(<div style={{height:"400px",overflowY:"auto",fontFamily:"'Fira Sans', sans-serif",width:"100%"}} className="bg-dark">
            <table className="table table-borderless table-hover">
                <tbody>
                   { props.searchresult.map((result,i)=><tr className="text-center hoverable" key={i*1000}>
                                                        <th scope="row" className="text-white"><strong>{i+1}</strong></th>
                                                        <td><img src={result.result.header_image_thumbnail_url} width="30px" height="30px" className="mx-auto rounded-circle"/></td>
                                                        <td><h6 className="mt-3 text-white"><strong>{result.result.full_title}</strong></h6></td>
                                                        <td><MDBBtn color="light-blue" className="btn btn-sm mt-3 rounded" onClick={()=>props.getSongLink(result.result.id)}>
                                                        <MDBIcon icon="play" /><span> </span></MDBBtn></td>
                                                        </tr>)
                   }
                    
                </tbody>
            </table>
        </div>):(<div>
                    <h1 className="display-1 mx-auto">....Loading</h1>
                </div>)
    )
}

function mapStateToProps(state) {
    return {
        searchresult : state.searchQueryReducer.searchList
    }
}

function mapActionToProps(dispatch){
    return{
        getSongLink:function(id){
            fetchSonglink(id)
               .then(result => dispatch(songLinks(result.response.song.media)))
            
        }
    }
}
export default connect(mapStateToProps,mapActionToProps)(SearchResult);
