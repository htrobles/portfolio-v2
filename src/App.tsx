import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import WhatIDo from './components/WhatIDo';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App text-white text-sm sm:text-base">
      <Header />
      <Hero />
      <About />
      <Journey />
      <WhatIDo />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
