import React from 'react';
import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import About from './components/about';
import Featured from './components/featured';
import Faq from './components/faq';



function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Featured />
      <Faq />
    </div>
  );
}

export default App;
