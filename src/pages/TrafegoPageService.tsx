import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Target, DollarSign, Users } from 'lucide-react';

const TrafegoPageService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      name: "Google Ads",
      description: "Campanhas de busca, display e shopping para capturar intenção de compra",
      icon: "🔍"
    },
    {
      name: "Facebook Ads",
      description: "Segmentação avançada para alcançar seu público ideal no Facebook",
      icon: "📘"
    },
    {
      name: "Instagram Ads",
      description: "Campanhas visuais impactantes para engajar sua audiência",
      icon: "📸"
    },
    {
      name: "LinkedIn Ads",
      description: "Ideal para B2B e segmentação profissional específica",
      icon: "💼"
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Segmentação Precisa",
      description: "Alcançamos exatamente quem tem interesse no seu produto ou serviço"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "ROI Otimizado",
      description: "Maximizamos o retorno sobre cada real investido em mídia paga"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leads Qualificados",
      description: "Atraímos prospects com real potencial de conversão"
    }
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
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tráfego Pago que <span className="text-[#e50914]">Converte</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Gerenciamos suas campanhas em Google Ads, Facebook e Instagram para maximizar o retorno sobre o investimento e gerar leads qualificados.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Solicitar Auditoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Plataformas que Dominamos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise comprovada nas principais plataformas de mídia paga do mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Vantagens do nosso Tráfego Pago</h2>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nosso Processo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Auditoria completa da situação atual" },
              { step: "02", title: "Estratégia", desc: "Definição de objetivos e público-alvo" },
              { step: "03", title: "Execução", desc: "Criação e lançamento das campanhas" },
              { step: "04", title: "Otimização", desc: "Monitoramento e melhorias contínuas" }
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

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para escalar seus resultados?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Solicite uma auditoria gratuita e descubra como podemos otimizar seus investimentos em tráfego pago.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Solicitar Auditoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TrafegoPageService;