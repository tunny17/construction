import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={
        []
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Projects />
      </main>
  </LocomotiveScrollProvider>
  );
}

export default App;
