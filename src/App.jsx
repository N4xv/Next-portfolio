import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Terminal from '@/components/Terminal';
import Contact from '@/components/Contact';
import MatrixBackground from '@/components/MatrixBackground';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>N4x - Futuristic Web Developer Portfolio</title>
        <meta name="description" content="N4x's futuristic portfolio showcasing cutting-edge web development projects and skills. 19-year-old developer from Madrid specializing in modern web technologies." />
      </Helmet>
      
      <div className="min-h-screen text-white relative overflow-x-hidden">
        <MatrixBackground />
        
        <Header 
          activeSection={activeSection} 
          onTerminalToggle={() => setShowTerminal(!showTerminal)}
        />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>

        <AnimatePresence>
          {showTerminal && (
            <Terminal onClose={() => setShowTerminal(false)} />
          )}
        </AnimatePresence>

        <Toaster />
      </div>
    </>
  );
}

export default App;
