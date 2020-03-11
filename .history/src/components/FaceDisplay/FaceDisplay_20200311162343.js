import React from 'react';

function FaceDisplay({{image}}) {
  return (
    <div className='center'>
      <img alt ="face" src={'https://samples.clarifai.com/face-det.jpg'}/>
    </div>
  )
}

export default FaceDisplay;