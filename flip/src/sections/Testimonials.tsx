import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      content: "A FlipCriativa transformou completamente nossa estratégia digital. As landing pages não só têm um design incrível como também convertem muito melhor. O ROI das campanhas aumentou em mais de 200%!",
      author: "Mariana Silva",
      position: "CEO",
      company: "TechMasters",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "Trabalhamos com várias agências antes, mas a diferença na FlipCriativa é o foco em resultados mensuráveis. Cada real investido é rastreado e otimizado para máximo retorno. Recomendo sem hesitar.",
      author: "Rafael Mendes",
      position: "Diretor de Marketing",
      company: "Global Commerce",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "As estratégias implementadas pela equipe da FlipCriativa não só aumentaram nossas conversões como também reduziram consideravelmente nosso custo de aquisição de clientes. Parceria de valor!",
      author: "Carolina Ferreira",
      position: "Fundadora",
      company: "EduStart",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gray-950 overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-[#e50914] font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            DEPOIMENTOS (aqui será o do google)
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Palavras de quem <span className="text-[#e50914]">confia</span> em nós
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Veja o que nossos clientes têm a dizer sobre os resultados que alcançamos juntos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            {/* Quote Icon */}
            <div className="absolute -top-10 -left-10 text-gray-800 opacity-50">
              <Quote size={80} />
            </div>

            {/* Testimonial Slider */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    current === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute top-0 translate-x-full'
                  }`}
                >
                  <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
                    <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-5">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.author}</div>
                        <div className="text-gray-400">{testimonial.position}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-10 space-x-4">
              <button 
                onClick={prev}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? 'bg-[#e50914] w-6' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;