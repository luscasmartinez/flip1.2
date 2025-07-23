import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Layout, Zap, Target, BarChart3 } from 'lucide-react';

const LandingPagesService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Foco em Conversão",
      description: "Cada elemento é estrategicamente posicionado para maximizar conversões"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Carregamento Rápido",
      description: "Otimizadas para velocidade e performance em todos os dispositivos"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Métricas Integradas",
      description: "Acompanhamento completo de conversões e comportamento do usuário"
    }
  ];

  const features = [
    "Design responsivo para todos os dispositivos",
    "Formulários otimizados para conversão",
    "Integração com ferramentas de análise",
    "Testes A/B para otimização contínua",
    "SEO otimizado para melhor rankeamento",
    "Integração com CRM e automação de marketing"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e50914] rounded-full mb-8">
              <Layout className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Impulsione <span className="text-[#e50914]"> Presença Digital</span>
            </h1>
            <p className="text-xl text-justify text-gray-300 mb-10 max-w-3xl mx-auto">
             Criamos páginas estratégicas e persuasivas que não só atraem visitantes, mas transformam cliques em oportunidades reais. Aumente sua visibilidade online, gere leads qualificados e conquiste mais clientes com uma presença digital que realmente vende.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por que escolher nos escolher?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
              Cada detalhe é pensado para gerar resultados reais. Nossas landing pages e sites são portas de entrada para o crescimento do seu negócio, desenvolvidas com estratégia. Entregamos o que você realmente precisa: visibilidade, autoridade e clareza.

            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                O que está incluído em nossas <span className="text-[#e50914]">Landing Pages</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Desenvolvemos páginas completas com todos os elementos necessários para maximizar suas conversões.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Landing Page Design" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para aumentar suas conversões?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas landing pages podem transformar seus resultados.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPagesService;