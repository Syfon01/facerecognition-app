import React, { Component }from 'react';
import Particles from "react-particles-js";
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank'
import './App.css';
const ParticleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
    }
  }
};

class App extends Component {
  constructor() {
  super();
  this.state = {
    input : ''
  }
    onInput
  }
  render() {
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
}
export default App;
