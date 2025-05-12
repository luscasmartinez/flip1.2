import React, { useState } from 'react';
import { MousePointer, TrendingUp, LineChart, Trophy, Layout, BarChart } from 'lucide-react';

import './Services.css';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, backgroundImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="col" onClick={handleFlip}>
      <div className={`container ${isFlipped ? 'hover' : ''}`}>
        <div 
          className="front" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="inner">
            <div className="icon-container">{icon}</div>
            <p>{title}</p>
            <span>Saiba mais</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Landing Pages",
      description: "Desenvolvemos páginas de conversão otimizadas que transformam visitantes em leads qualificados para o seu negócio.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Tráfego Pago",
      description: "Gerenciamos suas campanhas em Google Ads, Facebook e Instagram para maximizar o retorno sobre o investimento.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <LineChart size={32} />,
      title: "Performance",
      description: "Estratégias orientadas por dados para atingir objetivos concretos de conversão, aquisição e vendas.",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MousePointer size={32} />,
      title: "Conversão",
      description: "Aumentamos suas taxas de conversão através de testes A/B, análise de funil e melhorias contínuas.",
      backgroundImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart size={32} />,
      title: "Análise",
      description: "Monitoramento de métricas-chave para identificar oportunidades e otimizar resultados constantemente.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Trophy size={32} />,
      title: "Consultoria",
      description: "Auxiliamos na definição de objetivos claros e estratégias eficientes para alcançar seus resultados de negócio.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="wrapper">
        <div className="text-center mb-16">
          <span className="inline-block text-[#e50914] font-semibold uppercase tracking-wider mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Soluções que <span className="text-[#e50914]">impulsionam</span> seus resultados
          </h1>
          <p className="text-xl text-gray-300">
            Combinamos estratégia, criatividade e tecnologia para entregar resultados mensuráveis.
          </p>
        </div>
        
        <div className="cols">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;