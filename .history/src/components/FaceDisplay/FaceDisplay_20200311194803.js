import React from 'react';

function FaceDisplay({imageUrl}) {
  return (
    <div className='center'>
      <div>
      <img alt ="face" src={imageUrl} width="500px" height="auto"/>
      </div>
    </div>
  )
}

export default FaceDisplay;