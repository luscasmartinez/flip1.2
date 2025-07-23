import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Target, DollarSign, Users, Clock, Layout, BarChart, Filter, Zap } from 'lucide-react';

const TrafegoPageService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const platforms = [
    {
      name: "Google Ads",
      description: "Campanhas de busca, display e shopping para capturar intenção de compra",
      icon: "🔍"
    },
    {
      name: "Meta Ads",
      description: "Facebook e Instagram com segmentação avançada para seu público ideal",
      icon: "📱"
    },
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

  const highlights = [
    "Atraímos clientes para você vender mais e trabalhar com tranquilidade.",
    "Fazemos sua empresa ser vista por quem realmente compra.",
    "Encha sua agenda. Deixe seu atendimento abastecido de oportunidades."
  ];

  const faqs = [
    {
      question: "O que é tráfego pago?",
      answer: "Tráfego pago é a estratégia de divulgar sua marca em plataformas como Facebook Ads, Google Ads e Instagram Ads, pagando apenas pelos cliques ou impressões que geram resultados."
    },
    {
      question: "Quanto custa começar uma campanha?",
      answer: "Você define o orçamento de acordo com seus objetivos: pode ser a partir de R$ 300 mensais e escalar conforme o retorno que quiser obter."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Normalmente, os primeiros leads aparecem em 24-48 horas após a ativação da campanha, mas otimizamos dia a dia para aumentar conversões e reduzir custos."
    },
    {
      question: "Preciso ter um site pronto?",
      answer: "Sim, ter uma página de destino otimizada melhora a performance. Se ainda não tiver, ajudamos a criar landing pages focadas em conversão."
    },
    {
      question: "Como vocês mensuram o sucesso da campanha?",
      answer: "Acompanhamos métricas-chave como custo por clique (CPC), taxa de conversão e custo por aquisição (CPA), entregando relatórios semanais claros para você acompanhar."
    },
    {
      question: "É preciso contratar por quanto tempo?",
      answer: "Indicamos ao menos 3 meses para coletar dados suficientes e otimizar continuamente; mas você pode pausar ou ajustar o investimento quando quiser."
    },
    {
      question: "Vocês gerenciam quais plataformas?",
      answer: "Atuamos em Meta Ads (Facebook e Instagram), Google Ads (Pesquisa, Display e Shopping) e LinkedIn Ads, escolhendo as que fazem mais sentido para o seu público."
    },
    {
      question: "Como garantem que o público é qualificado?",
      answer: "Segmentação com base em interesses, comportamentos e dados demográficos, além de rodar testes A/B diários, para filtrar quem realmente converte."
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
              Gerenciamos suas campanhas nas principais plataformas para atrair clientes qualificados e maximizar seu retorno sobre investimento.
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

      {/* Highlights Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#e50914] rounded-full mb-4">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Plataformas que Dominamos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise comprovada nas principais plataformas de mídia paga do mercado.
            </p>
          </div>
          
          <div className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por que Nossas Campanhas Convertem Mais</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estratégias testadas e comprovadas para trazer resultados reais para seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Como Funciona Nosso Método</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um processo claro e transparente para garantir os melhores resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Análise Estratégica", 
                desc: "Auditoria completa do seu negócio e concorrência",
                icon: <Filter className="h-6 w-6" />
              },
              { 
                step: "02", 
                title: "Definição de Público", 
                desc: "Segmentação precisa baseada em dados reais",
                icon: <Users className="h-6 w-6" />
              },
              { 
                step: "03", 
                title: "Criação de Campanhas", 
                desc: "Desenvolvimento de anúncios e páginas otimizadas",
                icon: <Layout className="h-6 w-6" />
              },
              { 
                step: "04", 
                title: "Otimização Contínua", 
                desc: "Ajustes diários para melhorar performance",
                icon: <BarChart className="h-6 w-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950" id="faq">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dúvidas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-xl font-medium">{faq.question}</h3>
                  <span className="ml-4 text-[#e50914]">
                    {activeFaq === index ? '-' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="mt-3 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Resultados que Você Pode Esperar</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Primeiros Leads",
                value: "24-48 horas",
                description: "Tempo médio para começar a receber contatos qualificados"
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Investimento Inicial",
                value: "A partir de R$300",
                description: "Valor mínimo recomendado para campanhas eficazes"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Período Ideal",
                value: "3+ meses",
                description: "Tempo necessário para otimização completa das campanhas"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-[#e50914] mb-3">{item.value}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para transformar seu negócio com tráfego pago?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Atraia mais clientes qualificados e aumente suas vendas com nossas estratégias comprovadas.
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