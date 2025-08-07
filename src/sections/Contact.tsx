import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-[#e50914] font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ENTRE EM CONTATO
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Vamos <span className="text-[#e50914]">escalar</span> seu negócio juntos?
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Entre em contato para uma consulta gratuita e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-[#e50914]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-[#e50914]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">contato@flipcriativa.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-[#e50914]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-300">Av. Paulista, 1000<br />São Paulo, SP</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-[#e50914]">
                <h4 className="font-bold text-lg mb-3">Horário de Atendimento</h4>
                <p className="text-gray-300 mb-2">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-300">Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;