import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-white">Flip</span>
                <span className="text-[#e50914]">Criativa</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos sua presença digital em resultados mensuráveis através de landing pages estratégicas e tráfego pago otimizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#cases" className="text-gray-400 hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Nosso Processo</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Criação de Landing Pages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Gestão de Tráfego Pago</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing de Performance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Otimização de Conversão</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Análise de Dados</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#e50914] mr-3 mt-0.5" />
                <span className="text-gray-400">contato@flipcriativa.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#e50914] mr-3 mt-0.5" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#e50914] mr-3 mt-0.5" />
                <span className="text-gray-400">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} FlipCriativa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;