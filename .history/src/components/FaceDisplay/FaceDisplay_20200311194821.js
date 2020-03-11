import React from 'react';

function FaceDisplay({imageUrl}) {
  return (
    <div className='center ma'>
      <div>
        <img alt ="face" src={imageUrl} width="500px" height="auto"/>
      </div>
    </div>
  )
}

export default FaceDisplay;