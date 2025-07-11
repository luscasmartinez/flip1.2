import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, MousePointer, Target, Zap, TrendingUp } from 'lucide-react';

const ConversaoService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const optimizations = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Testes A/B",
      description: "Testamos diferentes versões para identificar o que converte melhor"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "UX/UI Optimization",
      description: "Melhoramos a experiência do usuário para facilitar a conversão"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Análise de Funil",
      description: "Identificamos e corrigimos pontos de abandono no funil"
    }
  ];

  const techniques = [
    "Análise de heatmaps e gravações de sessão",
    "Otimização de formulários e CTAs",
    "Melhoria na velocidade de carregamento",
    "Personalização baseada em comportamento",
    "Otimização para dispositivos móveis",
    "Implementação de provas sociais"
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
              <MousePointer className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Otimização de <span className="text-[#e50914]">Conversão</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Aumentamos suas taxas de conversão através de testes A/B, análise de funil e melhorias contínuas baseadas em dados reais.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Solicitar Auditoria CRO
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Optimizations Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Técnicas de Otimização</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Utilizamos metodologias científicas para identificar e implementar melhorias que aumentam conversões.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizations.map((optimization, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {optimization.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{optimization.title}</h3>
                <p className="text-gray-300">{optimization.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Metodologia <span className="text-[#e50914]">CRO</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa abordagem sistemática garante melhorias consistentes e mensuráveis nas suas taxas de conversão.
              </p>
              
              <div className="space-y-4">
                {techniques.map((technique, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Conversion Optimization" 
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
            <h2 className="text-4xl font-bold mb-6">Processo de Otimização</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Auditoria", desc: "Análise completa do site atual" },
              { step: "02", title: "Hipóteses", desc: "Identificação de oportunidades" },
              { step: "03", title: "Testes", desc: "Implementação de testes A/B" },
              { step: "04", title: "Análise", desc: "Avaliação dos resultados" },
              { step: "05", title: "Implementação", desc: "Aplicação das melhorias" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
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
            Solicite uma auditoria CRO gratuita e descubra como podemos melhorar suas taxas de conversão.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Solicitar Auditoria CRO
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConversaoService;