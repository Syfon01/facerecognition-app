import React from 'react';
import 

function FaceDisplay({imageUrl}) {
  return (
    <div className='center ma'>
      <div className="absolute mt-5">
        <img alt ="face" id="imageFace" src={imageUrl} width="200px" height="auto"/>
      </div>
    </div>
  )
}

export default FaceDisplay;