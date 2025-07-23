import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MousePointer, TrendingUp, LineChart, Trophy, Layout, BarChart } from 'lucide-react';

import './Services.css';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  route: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, backgroundImage, route }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigation = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(route);
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
            <p className='text-justify'>{description}</p>
            <button 
              onClick={handleNavigation}
              className="mt-4 px-6 py-2 bg-[#e50914] hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Ver Detalhes
            </button>
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
      title: "Site e páginas de venda",
      description: "Desenvolvemos páginas de conversão otimizadas que transformam visitantes em leads qualificados para o seu negócio.",
      backgroundImage:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJkaGRlN3l0N2gzZ3B0ZXR6MzltaTI5cGR1YmQwN2VyZzd3bWxrZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif",
      route: "/servicos/landing-pages"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Tráfego Pago",
      description: "Gerenciamos suas campanhas em Google Ads, Facebook e Instagram para maximizar o retorno sobre o investimento.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      route: "/servicos/trafego-pago"
    },
    {
      icon: <LineChart size={32} />,
      title: "Vídeo",
      description: "Estratégias orientadas por dados para atingir objetivos concretos de conversão, aquisição e vendas.",
      backgroundImage:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3p6dHdjNXNuaWtzdm1qYXFhanE5OW55Njh3N3h4ZDhteWZvdDg5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZZenWI323QznL5938G/giphy.gif",
      route: "/servicos/video"
    },
    {
      icon: <MousePointer size={32} />,
      title: "Google meu negócio",
      description: "Aumentamos suas taxas de conversão através de testes A/B, análise de funil e melhorias contínuas.",
      backgroundImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      route: "/servicos/conversao"
    },
    {
      icon: <BarChart size={32} />,
      title: "Fotografia",
      description: "Monitoramento de métricas-chave para identificar oportunidades e otimizar resultados constantemente.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      route: "/servicos/analise"
    },
    {
      icon: <Trophy size={32} />,
      title: "Consultoria",
      description: "Auxiliamos na definição de objetivos claros e estratégias eficientes para alcançar seus resultados de negócio.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      route: "/servicos/consultoria"
    },
    {
      icon: <Trophy size={32} />,
      title: "Eventos",
      description: "Auxiliamos na definição de objetivos claros e estratégias eficientes para alcançar seus resultados de negócio.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      route: "/servicos/Eventos"
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
              route={service.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;