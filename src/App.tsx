import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import WhatIDo from './components/WhatIDo';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App text-white text-sm sm:text-base">
      <Header />
      <Hero />
      <About />
      <Journey />
      <WhatIDo />
      <Technologies />
    </div>
  );
}

export default App;
