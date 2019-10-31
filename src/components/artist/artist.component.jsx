import React from 'react'
import { connect } from 'react-redux';
import ShowArtist from './ShowArtist'
import {ArtistData,fetchSearchResults} from '../../api'
import {getData,HideData} from '../../actions/ArtistAction'


    class Artist extends React.Component {
    componentDidMount(){
        this.props.ShowArtist();
      }
      componentWillUnmount(){
        this.props.HideArtist();
      }
     render() { 
    console.log("Artist Page")

    return (
        <div>
            <h3 className="display-3 text-dark mx-auto "> Top Artists </h3>
            <div className="overflow-auto text-dark" style={{height:"600px"}}>
                <ShowArtist/>
            </div>
          
        </div>
    )}
}
function mapActionToProps(dispatch) {
    return {
      ShowArtist: function() {
        console.log("call")
          ArtistData()
  .then(
    (result) => {
  // console.log(result.artists.artist)
  result.artists.artist.map((item)=>
  fetchSearchResults(item.name)
  .then(
    (result) => 
    // console.log(result.response.hits[0])
    dispatch(getData(result.response.hits[0].result.primary_artist.image_url,
        
      result.response.hits[0].result.primary_artist.name))
    )

  )



      })
  },
  HideArtist: function() {

    dispatch(HideData())

}



}}

  
  export default connect(null,mapActionToProps)(Artist);