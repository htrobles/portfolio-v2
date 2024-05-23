import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';

function App() {
  return (
    <div className="App text-white text-sm sm:text-base">
      <Header />
      <Hero />
      <About />
      <Journey />
    </div>
  );
}

export default App;
