import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Hackathons from './components/Hackathons';
import BeyondCode from './components/BeyondCode';
import ContentCreation from './components/ContentCreation';
import PersonalValues from './components/PersonalValues';
import CareerVision from './components/CareerVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative bg-grid-pattern overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Hackathons />
        <BeyondCode />
        <ContentCreation />
        <PersonalValues />
        <CareerVision />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
