import React from 'react';
import './FaceDisplay.css'

function FaceDisplay({imageUrl, box}) {
  return (
    <div className='center ma'>
      <div className="absolute mt-5">
        <img alt="face" id="imageFace" src={imageUrl} width="200px" height="auto" />
        <div className="bounding-box" style={{ top: box.topRow, right: box.right, bottom:box.rightCol, left:box.bottomRow }}></div>
      </div>
    </div>
  )
}

export default FaceDisplay;