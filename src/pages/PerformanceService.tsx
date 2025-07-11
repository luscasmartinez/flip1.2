import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, LineChart, Target, Zap, BarChart3 } from 'lucide-react';

const PerformanceService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Taxa de Conversão",
      description: "Otimizamos cada ponto de contato para maximizar conversões"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Custo por Aquisição",
      description: "Reduzimos o CPA mantendo a qualidade dos leads"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Lifetime Value",
      description: "Aumentamos o valor de vida útil de cada cliente"
    }
  ];

  const strategies = [
    "Análise de funil de vendas completo",
    "Otimização de campanhas baseada em dados",
    "Testes A/B contínuos em todos os elementos",
    "Segmentação avançada de audiências",
    "Automação de marketing personalizada",
    "Relatórios detalhados de performance"
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
              <LineChart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Marketing de <span className="text-[#e50914]">Performance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Estratégias orientadas por dados para atingir objetivos concretos de conversão, aquisição e vendas com máxima eficiência.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Solicitar Análise
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Métricas que Importam</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focamos nas métricas que realmente impactam o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {metric.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{metric.title}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Estratégias de <span className="text-[#e50914]">Performance</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Utilizamos metodologias comprovadas para garantir que cada ação gere resultados mensuráveis.
              </p>
              
              <div className="space-y-4">
                {strategies.map((strategy, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Performance Marketing" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Resultados Comprovados</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "+250%", label: "Aumento médio em conversões" },
              { number: "-45%", label: "Redução no custo por lead" },
              { number: "+180%", label: "Melhoria no ROI" },
              { number: "98%", label: "Taxa de satisfação dos clientes" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#e50914] mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para resultados de performance?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Vamos analisar seu negócio e criar uma estratégia de performance personalizada.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PerformanceService;