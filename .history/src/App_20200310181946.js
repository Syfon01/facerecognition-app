import React from 'react';
import Particles from "react-particles-js";
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank'
import './App.css';
const ParticleOptions = {
  particles: {
    line_: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    }
  }
};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={ParticleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
    </div>
  );
}

export default App;
