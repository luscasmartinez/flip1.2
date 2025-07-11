import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, BarChart, Target, Eye, TrendingUp } from 'lucide-react';

const AnaliseService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const analytics = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Monitoramento 24/7",
      description: "Acompanhamento contínuo de todas as métricas importantes"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "KPIs Personalizados",
      description: "Definimos indicadores específicos para seu negócio"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Insights Acionáveis",
      description: "Transformamos dados em estratégias de crescimento"
    }
  ];

  const tools = [
    "Google Analytics 4 e Universal Analytics",
    "Google Tag Manager para rastreamento avançado",
    "Facebook Pixel e Conversions API",
    "Hotjar para análise de comportamento",
    "Google Data Studio para relatórios visuais",
    "Ferramentas de análise de concorrência"
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
              <BarChart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Análise de <span className="text-[#e50914]">Dados</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Monitoramento de métricas-chave para identificar oportunidades e otimizar resultados constantemente através de insights baseados em dados.
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

      {/* Analytics Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Análise Inteligente de Dados</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformamos dados complexos em insights claros que impulsionam o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analytics.map((analytic, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {analytic.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{analytic.title}</h3>
                <p className="text-gray-300">{analytic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ferramentas de <span className="text-[#e50914]">Análise</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Utilizamos as melhores ferramentas do mercado para coletar, analisar e interpretar dados do seu negócio.
              </p>
              
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Data Analysis" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Métricas que Acompanhamos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tráfego", desc: "Visitantes, sessões e origem do tráfego" },
              { title: "Conversões", desc: "Taxa de conversão e funil de vendas" },
              { title: "Comportamento", desc: "Tempo na página e taxa de rejeição" },
              { title: "ROI", desc: "Retorno sobre investimento em marketing" }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-3 text-[#e50914]">{metric.title}</h3>
                <p className="text-gray-300">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Relatórios Personalizados</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Receba relatórios detalhados e fáceis de entender sobre o desempenho das suas campanhas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Relatórios Semanais", desc: "Acompanhamento semanal das principais métricas" },
              { title: "Análises Mensais", desc: "Relatório completo com insights e recomendações" },
              { title: "Dashboards em Tempo Real", desc: "Acesso 24/7 aos dados atualizados" }
            ].map((report, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">{report.title}</h3>
                <p className="text-gray-300">{report.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para tomar decisões baseadas em dados?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Solicite uma análise gratuita e descubra insights valiosos sobre seu negócio.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Solicitar Análise Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AnaliseService;