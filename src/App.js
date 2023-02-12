import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

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
      </main>
  </LocomotiveScrollProvider>
  );
}

export default App;
