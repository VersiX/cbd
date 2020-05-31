import React from 'react';
import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import About from './components/about';



function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />

    </div>
  );
}

export default App;
