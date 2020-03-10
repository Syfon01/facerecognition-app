import React from 'react';
import './Logo.css';
import Tilt from "react-tilt";


const Logo = () => {
  return (
    <div className="ma4 mt-4">
      <Tilt className="Tilt " options={{ max : 25 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner br2 shadow-2"> 👽 </div>
      </Tilt>
    </div>
  )
}

export default Logo;