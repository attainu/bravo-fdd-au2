import React from 'react'
import ShowArtist from './ShowArtist'

function Artist(props) {
    // console.log(props.result)
    return (
        <div>
            <h3 className="display-3 text-dark mx-auto"> Show artist here</h3>
            <div className="text-dark mx-auto d-print-block ">
            <div>
                <ShowArtist/>

    
    </div>  
            </div>
          
        </div>
    )
}

  
  export default Artist
