import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import LandingPagesService from './pages/LandingPagesService';
import TrafegoPageService from './pages/TrafegoPageService';
import PerformanceService from './pages/PerformanceService';
import ConversaoService from './pages/ConversaoService';
import AnaliseService from './pages/AnaliseService';
import ConsultoriaService from './pages/ConsultoriaService';

import AccordionGallery from './sections/AccordionGallery';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Services />
            <CaseStudies />       
            <Process />
            <Testimonials />
            <Contact />
          </main>
        } />
        <Route path="/servicos/landing-pages" element={<LandingPagesService />} />
        <Route path="/servicos/trafego-pago" element={<TrafegoPageService />} />
        <Route path="/servicos/performance" element={<PerformanceService />} />
        <Route path="/servicos/conversao" element={<ConversaoService />} />
        <Route path="/servicos/analise" element={<AnaliseService />} />
        <Route path="/servicos/consultoria" element={<ConsultoriaService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;