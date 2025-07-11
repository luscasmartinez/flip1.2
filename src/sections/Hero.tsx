import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.95)), url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block mb-2">Nós não somos uma agência!</span>
               <span className="text-[#e50914]">Só você ainda não está com a gente!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"> Vídeos, fotografias, tráfego pago, mentoria, pginas web.

            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-[#e50914] hover:bg-[#c40812] text-gray-900 text-lg font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
               Solicite um orçamento.
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#cases" 
                className="px-8 py-4 bg-transparent hover:bg-gray-800 border-2 border-gray-700 hover:border-gray-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver Resultados
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated arrow indicating scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;