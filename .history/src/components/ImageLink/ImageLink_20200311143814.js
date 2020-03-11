import React from 'react';
import './ImageLink.css'

function ImageLink ({onInputChange, onButtonSubmit}) {
  return (
    <div>
      <p className="f3">{'This Magic Brain will detect your face. Give it a try'}</p>

      <div className="center">
        <div className="form center pa4 shadow-5 br-3">
          <input name="" id="" className="f4 pa2 center w-70" type="text" onChange={onInputChange}/>
          <button className="w-30 f4 link dib grow pv2 ph3 white bg-light-purple" onCl>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLink