import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading ? (
            <Loader key="loader" />
        ) : (
            <>
              <Navbar />
              <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
              </main>
              <Footer />
            </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
