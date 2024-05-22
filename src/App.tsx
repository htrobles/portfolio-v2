import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
