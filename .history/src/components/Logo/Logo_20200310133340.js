import React from 'react';
import Tilt from "react-tilt";


const Logo = () => {
  return (
    <div className>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner br2 shadow-2"> 👽 </div>
      </Tilt>
    </div>
  )
}

export default Logo;