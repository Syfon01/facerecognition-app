import React from 'react';
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from './components/Navigation/Navigation.js'
import FaceDisplay from './components/FaceDisplay/FaceDisplay'
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
  const [input,imageUrl] = setState;
  const onInputChange = (e) => {
    console.log(e.target.value)
  }
  const onSubmitButton = () => {
    setState({imageUrl:input})
    console.log('click')
    app.models.predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
       console.log(response)
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
      <ImageLink onInputChange={onInputChange}
                onSubmitButton={onSubmitButton}
      />
      <FaceDisplay imageUrl={/>
      </div>
    );
}
export default App;
