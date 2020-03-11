import React from 'react';

function FaceDisplay({imageUrl}) {
  return (
    <div className='center'>
      <img alt ="face" src={imageUrl}/>
    </div>
  )
}

export default FaceDisplay;