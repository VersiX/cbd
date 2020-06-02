import React from 'react';
import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import About from './components/about';
import Featured from './components/featured';
import Faq from './components/faq';
import Testimonial from './components/testimonials';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Featured />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
