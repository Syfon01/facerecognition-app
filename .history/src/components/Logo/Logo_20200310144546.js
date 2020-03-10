import React from 'react';
import './l.css';
import Logoimg from "./logo.css";

import Tilt from "react-tilt";


const l = () => {
  return (
    <div className="ma4 mt-4">
      <Tilt className="Tilt tilt-background" options={{ max : 25 }} style={{ height: 50, width: 75 }} >
        <div className="Tilt-inner br2 shadow-2"> <img src={Logoimg} alt="logo-image"/> </div>
      </Tilt>
    </div>
  )
}

export default l;