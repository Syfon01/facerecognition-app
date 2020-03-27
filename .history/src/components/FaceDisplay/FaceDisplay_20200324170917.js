import React from 'react';
import './FaceDisplay.css'

function FaceDisplay({ imageUrl, box }) {
  const boxStyle = {
     fontSize: '15px',
       textAlign: 'center'
  }
  return (
    <div className='center ma'>
      <div className="absolute mt-2">
        <img alt="face" id="imageFace" src={imageUrl} width="400px" height="auto" />
        <div className="bounding-box" style={{boxStyle}></div>
      </div>
    </div>
  )
}

export default FaceDisplay;