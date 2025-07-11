import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Trophy, Target, Users, Lightbulb } from 'lucide-react';

const ConsultoriaService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Definição de Objetivos",
      description: "Ajudamos a estabelecer metas claras e alcançáveis para seu negócio"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Estratégia Digital",
      description: "Desenvolvemos estratégias personalizadas para seu mercado"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Treinamento de Equipe",
      description: "Capacitamos sua equipe com as melhores práticas do mercado"
    }
  ];

  const benefits = [
    "Análise completa do mercado e concorrência",
    "Definição de personas e jornada do cliente",
    "Planejamento estratégico de marketing digital",
    "Otimização de processos internos",
    "Implementação de ferramentas de automação",
    "Acompanhamento e mentoria contínua"
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
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Consultoria <span className="text-[#e50914]">Estratégica</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Auxiliamos na definição de objetivos claros e estratégias eficientes para alcançar seus resultados de negócio com máxima eficiência.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Agendar Consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Serviços de Consultoria</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos consultoria especializada para transformar desafios em oportunidades de crescimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                O que está incluído na <span className="text-[#e50914]">Consultoria</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa consultoria abrange todos os aspectos necessários para o sucesso do seu negócio digital.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Strategic Consulting" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Processo de Consultoria</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Análise completa da situação atual" },
              { step: "02", title: "Planejamento", desc: "Desenvolvimento da estratégia personalizada" },
              { step: "03", title: "Implementação", desc: "Execução das ações definidas" },
              { step: "04", title: "Acompanhamento", desc: "Monitoramento e ajustes contínuos" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nossa Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "E-commerce", desc: "Estratégias para lojas virtuais" },
              { title: "SaaS", desc: "Crescimento de software como serviço" },
              { title: "Serviços", desc: "Empresas de prestação de serviços" },
              { title: "B2B", desc: "Negócios entre empresas" }
            ].map((expertise, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-3 text-[#e50914]">{expertise.title}</h3>
                <p className="text-gray-300">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para acelerar seu crescimento?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos ajudar seu negócio a alcançar novos patamares.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaService;