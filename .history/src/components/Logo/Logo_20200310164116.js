import React from 'react';
import './Logo.css';
// import Logoimg from "./face.png";

import Tilt from "react-tilt";


const Logo = () => {
  return (
    <div className="ma4 mt-4">
      <Tilt className="Tilt tilt-background" options={{ max : 25 }} style={{ height: 50, width: 75 }} >
        <div className="Tilt-inner br2 shadow-2"> <img src='cl' alt="logo"/> </div>
      </Tilt>
    </div>
  )
}

export default Logo;