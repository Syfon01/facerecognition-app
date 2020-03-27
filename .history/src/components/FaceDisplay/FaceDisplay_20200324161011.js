import React from 'react';
import './FaceDisplay.css'

function FaceDisplay({ imageUrl, box }) {
  const boxStyle = {

  }
  return (
    <div className='center ma'>
      <div className="absolute mt-2">
        <img alt="face" id="imageFace" src={imageUrl} width="400px" height="auto" />
        <div className="bounding-box" style={{}}></div>
      </div>
    </div>
  )
}

export default FaceDisplay;