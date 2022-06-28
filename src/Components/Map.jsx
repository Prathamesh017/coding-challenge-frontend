import React from 'react'

function Map({mapAddress}) {

  return (
    <div className="maps">
     <iframe title="maps" width="800" height="400" style={{border:"0"}}loading="lazy"allowfullscreenreferrerpolicy="no-referrer-when-downgrade"
     src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyABheKGLiHa5cN4WkYtl4djXrBxca1beFY&q=${mapAddress.street}`}>
     </iframe>
    </div>
  )
}

export default Map