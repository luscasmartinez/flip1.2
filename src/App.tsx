import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

import AccordionGallery from './sections/AccordionGallery'; // Adicione esta linha

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />        
        <AccordionGallery/>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;