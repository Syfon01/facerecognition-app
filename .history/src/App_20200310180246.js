import React from 'react';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank'
import './App.css';
const ParticleOptions 

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 10
            },
            url: "path/to/svg.svg"
          }
        }}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
    </div>
  );
}

export default App;
