import React from 'react';

function FaceDisplay({imageUrl}) {
  return (
    <div className='center'>
      <img alt ="face" src={imageUrl} width="500px" height/>
    </div>
  )
}

export default FaceDisplay;