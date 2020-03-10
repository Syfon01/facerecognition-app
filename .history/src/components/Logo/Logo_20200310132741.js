import React from 'react';

const Logo = () => {
  return (
    <div>
 
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner"> 👽 </div>
</Tilt>
    </div>
  )
}

export default Logo;