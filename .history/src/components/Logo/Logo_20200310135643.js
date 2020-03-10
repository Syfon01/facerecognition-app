import React from 'react';
import './Logo.css';
import Tilt from "react-tilt";
import logo from ./logo.png';


const Logo = () => {
  return (
    <div className="ma4 mt-4">
      <Tilt className="Tilt tilt-background" options={{ max : 25 }} style={{ height: 50, width: 75 }} >
        {/* <div className="Tilt-inner br2 shadow-2"> <img src={logo} alt="logo-image"/> </div> */}
      </Tilt>
    </div>
  )
}

export default Logo;