import React from 'react';
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: "113d2c0bbadf44f194392c8d84085a3a"
});

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

function App() {
  const onInputChange = (e) => {
    console.log(e.target.value)
  }
  const onSubmitButton = () => {
    console.log('click')
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
       console.log()
      },
      function (err) {
        // there was an error
      }
    );
  }
  return (
      <div className="App">
        <Particles className="particles" params={ParticleOptions} />
        <Navigation />
        <Logo />
        <Rank />
      <ImageLink onInputChange={onInputChange} onSubmitButton={onSubmitButton}/>
      </div>
    );
}
export default App;
