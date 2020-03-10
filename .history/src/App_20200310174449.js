import React from 'react';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink'
import Rank from './components/Rank/Rank'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      < Rank />

      <ImageLink />
    </div>
  );
}

export default App;
