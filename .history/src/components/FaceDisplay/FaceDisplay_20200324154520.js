import React from 'react';
import './FaceDisplay.css'

function FaceDisplay({imageUrl}) {
  return (
    <div className='center ma'>
      <div className="absolute mt-5">
        <img alt="face" id="imageFace" src={imageUrl} width="200px" height="auto" />
        <div className="bounding-box" style={{ top: box.leftCol, right: box.topRow, bottom:box.rightCol, left:top.bottomRow }}></div>
      </div>
    </div>
  )
}

export default FaceDisplay;