import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Film, Zap, Coffee, Calendar, ClipboardCheck } from 'lucide-react';

const Video: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Vídeo Avulso",
      description: "Paga só pelo que precisa e recebe entrega rápida e eficiente. Traga sua ideia que cuidamos do resto.",
      features: [
        "Vídeo único sob demanda",
        "Entrega em até 7 dias úteis",
        "Produção profissional completa",
        "Revisões inclusas"
      ]
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Assinatura de Vídeo",
      description: "Vídeos mensais com prioridade de entrega e consultoria estratégica. Você terá um plano e um time qualificado para te ajudar.",
      features: [
        "Número fixo de peças mensais",
        "Encontro estratégico inicial",
        "Plano em PDF personalizado",
        "Prioridade na produção"
      ]
    }
  ];

  const benefits = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Processo Simplificado",
      description: "Você envia a ideia e nós cuidamos de todo o processo criativo e técnico"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Entrega Rápida",
      description: "Prazos curtos e cumpridos com rigor, mesmo para projetos complexos"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Ouvidoria Ativa",
      description: "Conversas descontraídas para entender profundamente suas necessidades"
    }
  ];

  const faqs = [
    {
      question: "O que é Vídeo Avulso?",
      answer: "Vídeo único: você envia a ideia e nossa equipe produz e entrega em até 7 dias úteis."
    },
    {
      question: "O que inclui a Assinatura de Vídeo?",
      answer: "Pacote mensal com número fixo de peças, um encontro descontraído para ouvir suas necessidades (café, chá ou suco) e um plano estratégico em PDF, tudo com prioridade de produção."
    },
    {
      question: "Como funciona a Ouvidoria?",
      answer: "Marcamos um café para bater um papo e entender a fundo onde seu negócio está e para onde você quer levá-lo — sem formalidades, só conversa real."
    },
    {
      question: "O que acontece após a aprovação do plano?",
      answer: "Com o PDF aprovado, iniciamos a produção dos vídeos conforme o cronograma, cada peça entregue em até 7 dias úteis."
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
              <Film className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Produção de <span className="text-[#e50914]">Vídeos</span> que Impactam
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Soluções em vídeo sob medida para impulsionar sua marca, seja com projetos avulsos ou pacotes mensais completos.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha o formato que melhor atende às necessidades do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e50914] rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#e50914] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por Que Escolher Nossos Vídeos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diferenciais que fazem nossos vídeos se destacarem e gerarem resultados
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
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Como Funciona Nosso Processo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Da ideia inicial ao vídeo finalizado, um fluxo claro e eficiente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Briefing", 
                desc: "Conversa inicial para entender suas necessidades",
                icon: <Coffee className="h-6 w-6" />
              },
              { 
                step: "02", 
                title: "Planejamento", 
                desc: "Criação do roteiro e definição de estilo visual",
                icon: <ClipboardCheck className="h-6 w-6" />
              },
              { 
                step: "03", 
                title: "Produção", 
                desc: "Gravação e captação de imagens profissionais",
                icon: <Film className="h-6 w-6" />
              },
              { 
                step: "04", 
                title: "Entrega", 
                desc: "Edição final e disponibilização dos arquivos",
                icon: <CheckCircle className="h-6 w-6" />
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
      <section className="py-20 bg-gray-900" id="faq">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dúvidas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tudo o que você precisa saber sobre nossos serviços de vídeo
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

      {/* CTA Section */}
      <section className="py-20 bg-[#e50914]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para elevar sua comunicação com vídeos profissionais?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Conte com nossa equipe para transformar suas ideias em vídeos impactantes que engajam e convertem.
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

export default Video;