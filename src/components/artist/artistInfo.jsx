import React from 'react'
import { connect } from 'react-redux';
import {ArtistGetInfo} from '../../api'
import {getInfo} from '../../actions/ArtistAction'

class ArtistInfo extends React.Component {
  
   render() { 
     if(this.props.ArtistInfo==null){
return <h1>Get Artist Name</h1>
     }else{
 
    return (  
      
      <div>
      <h3 className="display-3 text-dark mx-auto"> Artist Info</h3>
      <div className="text-dark mx-auto d-print-block ">
      <div>


    <div class="d-inline-block">
    <div className="card m-3 p-1" style={{"width":"17rem"}}>
    {/* <img src={item.images[0].url} class="card-img-top" alt="..." style={{height:"250px"}}/><br/> */}
  <h5 class="card-title ml-2">  Name:- {this.props.ArtistInfo.name}</h5>
   {/* <p class="card-text ml-2"> Followers:- {Math.floor(item.followers.total/1000000)}M</p> */}
   {/* <Link to="/dashboard/Artist/artistInfo"  onClick={this.props.getInfoArtist.bind(this,item.name)} class="btn btn-primary">getInfo</Link> */}
    </div>
    </div>
  

         
        </div>

    </div>
 </div>
    )}}
}

function mapStateToProps(state){
    // console.log("dashboard state",state);
    return{
      
      ArtistInfo: state.ArtistReducer.ArtistInfo
    }
  }

  function mapActionToProps(dispatch) {
    return {
      getInfoArtist: function(name) {
          // console.log("call")
            ArtistGetInfo(name)
    .then(
      (result) => {
    console.log(result)
    // result.artists.artist.map((item)=>console.log(item.name))
        // dispatch(getInfo(result))
  
  
        }
        )
    }}}
  
  export default connect(mapStateToProps,mapActionToProps)(ArtistInfo);
