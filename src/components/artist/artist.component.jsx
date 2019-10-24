import React from 'react'
import { connect } from 'react-redux';
import ShowArtist from './ShowArtist'
import {ArtistData} from '../../api'
import {getData} from '../../actions/ArtistAction'


    class Artist extends React.Component {
    // console.log(props.result)
    componentDidMount(){
        this.props.ShowArtist();
      }
     render() { 
    return (
        <div>
            <h3 className="display-3 text-white mx-auto "> Top Artists </h3>
            <div className="overflow-auto text-dark" style={{height:"80vh"}}>
                <ShowArtist/>
            </div>
          
        </div>
    )}
}
function mapActionToProps(dispatch) {
    return {
      ShowArtist: function() {
        // console.log("call")
          ArtistData()
  .then(
    (result) => {
  // console.log(result)
  // result.artists.artist.map((item)=>console.log(item.name))
      dispatch(getData(result.artists))


      })
  }}}

  
  export default connect(null,mapActionToProps)(Artist);

