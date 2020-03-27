import React from 'react';
import './FaceDisplay.css'

function FaceDisplay({imageUrl, box}) {
  return (
    <div className='center ma'>
      <div className="absolute mt-2">
        <img alt="face" id="imageFace" src={imageUrl} width="400px" height="auto" />
        < div className = "bounding-box"
        style = "top: 12.6788%; right: 56.3879%; bottom: 73.3006%; left: 37.0221%;"> </div>
      </div>
    </div>
  )
}

export default FaceDisplay;