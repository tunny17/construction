import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from './components/About/About';

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
      </main>
  </LocomotiveScrollProvider>
  );
}

export default App;
