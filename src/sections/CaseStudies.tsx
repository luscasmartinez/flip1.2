import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  image: string;
  title: string;
  client: string;
  description: string;
  results: {
    label: string;
    value: string;
  }[];
}

interface CaseCategory {
  category: string;
  studies: CaseStudy[];
}

const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeStudy, setActiveStudy] = useState(0);

  const caseCategories: CaseCategory[] = [
    {
      category: "Criação de Vídeos",
      studies: [
        {
          image: "https://imagineag.com.br/wp-content/uploads/2022/11/criacao_videos_para_empresas-1024x1000.jpg",
          title: "Vídeos que vendem, histórias que conectam.",
          client: "E-commerce de Moda",
          description: "Desenvolvemos uma série de vídeos institucionais e de produto que resultaram em um aumento significativo no engajamento e conversões. A estratégia combinou storytelling emocional com demonstrações claras de produtos.",
          results: [
            { label: "Aumento em Conversões", value: "+187%" },
            { label: "Redução no CPA", value: "-42%" },
            { label: "Aumento no ROI", value: "+210%" },
            { label: "Leads Gerados", value: "2.450+" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Campanha de lançamento viral",
          client: "Startup de Tecnologia",
          description: "Criação de vídeo viral para lançamento de produto, combinando humor e informação técnica. O vídeo alcançou mais de 5 milhões de visualizações orgânicas.",
          results: [
            { label: "Visualizações", value: "5.2M+" },
            { label: "Taxa de Engajamento", value: "12.7%" },
            { label: "Novos Clientes", value: "1.240+" },
            { label: "ROI da Campanha", value: "15x" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Série educacional B2B",
          client: "Empresa de Software",
          description: "Produção de série de vídeos educacionais para geração de leads qualificados no setor B2B, abordando desafios específicos do setor.",
          results: [
            { label: "Leads Qualificados", value: "+320%" },
            { label: "Taxa de Conversão", value: "8.5%" },
            { label: "Custo por Lead", value: "-53%" },
            { label: "Vendas Fechadas", value: "24+" }
          ]
        }
      ]
    },
    {
      category: "Tráfego Pago",
      studies: [
        {
          image: "https://th.bing.com/th/id/R.80f327066beaf072cc584eedb8b5a401?rik=ryjgdLBvTgMBPg&riu=http%3a%2f%2fmidiatica.com%2fwp-content%2fuploads%2f2021%2f08%2fWhatsApp-Image-2021-08-18-at-16.53.04.jpeg&ehk=q6kPAVW4%2bpTj0jspDAH7Y5S%2bWNR3%2fqgAz0BK%2bz1u6c4%3d&risl=&pid=ImgRaw&r=0",
          title: "Mídia paga que alcança, convence e converte.",
          client: "Franquia de Alimentação",
          description: "Campanha de performance para expansão nacional, com segmentação geográfica precisa e mensagens adaptadas para cada região do país.",
          results: [
            { label: "Investimento em Mídia", value: "R$ 350K" },
            { label: "Alcance Qualificado", value: "1.2M+" },
            { label: "Taxa de Conversão", value: "8.3%" },
            { label: "Retorno sobre Investimento (ROAS)", value: "6.7x" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Remarketing inteligente",
          client: "Marketplace Digital",
          description: "Estratégia de remarketing multicanal com mensagens personalizadas baseadas no comportamento do usuário, reduzindo drasticamente o custo de aquisição.",
          results: [
            { label: "Redução no CPA", value: "-68%" },
            { label: "Conversões", value: "3.450+" },
            { label: "Frequência Ideal", value: "4.2" },
            { label: "ROAS", value: "9.2x" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Testes de audiência B2B",
          client: "Software Empresarial",
          description: "Otimização contínua de campanhas LinkedIn e Google Ads para segmentação precisa de tomadores de decisão em empresas de médio e grande porte.",
          results: [
            { label: "Leads Qualificados", value: "1.850+" },
            { label: "Custo por Lead", value: "R$ 120" },
            { label: "Taxa de Fechamento", value: "+78%" },
            { label: "Ticket Médio", value: "R$ 12K" }
          ]
        }
      ]
    },
    {
      category: "Design Criativo",
      studies: [
        {
          image: "https://img.freepik.com/vetores-gratis/processo-de-design-criativo_1172-82.jpg?t=st=1705206042~exp=1705206642~hmac=153e18b0f1ad2a1e957a20ee30550ee767159db31ad835e95f6f903b51a75b46",
          title: "Design que fala, emociona e vende.",
          client: "Marca de Luxo",
          description: "Redesign completo da identidade visual, incluindo logo, embalagens e materiais promocionais, reposicionando a marca no segmento premium.",
          results: [
            { label: "Leads Qualificados", value: "+320%" },
            { label: "Custo por Lead", value: "-53%" },
            { label: "Taxa de Fechamento", value: "+78%" },
            { label: "Novos Contratos", value: "24+" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Landing pages de alta conversão",
          client: "EdTech",
          description: "Criação de série de landing pages com testes A/B contínuos para cursos online, otimizando cada elemento para conversão máxima.",
          results: [
            { label: "Aumento em Conversões", value: "+240%" },
            { label: "Tempo na Página", value: "+320s" },
            { label: "Taxa de Rejeição", value: "-45%" },
            { label: "ROI", value: "22x" }
          ]
        },
        {
          image: "https://th.bing.com/th/id/OIP.3qF5q3Q9j6Z9Q9Q9Q9Q9QwHaE8?pid=ImgDet&w=1920&h=1280&rs=1",
          title: "Rebranding estratégico",
          client: "Varejo Físico",
          description: "Atualização completa da identidade visual para apelo geracional, mantendo a essência da marca enquanto atraía novo público mais jovem.",
          results: [
            { label: "Novos Clientes (18-35)", value: "+187%" },
            { label: "Reconhecimento de Marca", value: "+63%" },
            { label: "Vendas Online", value: "+210%" },
            { label: "Tráfego nas Lojas", value: "+42%" }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Array de logos de clientes/marcas
  const clientLogos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];

  const handleStudyChange = (index: number) => {
    setActiveStudy(index);
  };

  return (
    <section 
      id="cases" 
      className="py-24 bg-gray-950" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-[#e50914] font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            CASES DE SUCESSO
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Resultados <span className="text-[#e50914]">reais</span> para nossos clientes
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Conheça alguns dos casos de sucesso que alcançamos para empresas que confiaram em nossa expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {caseCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveStudy(0); // Reset to first study when changing category
              }}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 mb-2 ${
                activeTab === index 
                  ? 'bg-[#e50914] text-gray-900' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Study Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {caseCategories[activeTab].studies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStudyChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStudy === index 
                  ? 'bg-[#e50914] scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Case ${index + 1}`}
            />
          ))}
        </div>

        {/* Case Studies Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`relative rounded-xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ height: '500px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
            <img 
              src={caseCategories[activeTab].studies[activeStudy].image} 
              alt={caseCategories[activeTab].studies[activeStudy].title} 
              className="absolute h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <span className="text-[#e50914] font-medium mb-3 block">
              {caseCategories[activeTab].studies[activeStudy].client}
            </span>
            <h3 className="text-3xl font-bold mb-5">
              {caseCategories[activeTab].studies[activeStudy].title}
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              {caseCategories[activeTab].studies[activeStudy].description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {caseCategories[activeTab].studies[activeStudy].results.map((result, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#e50914] mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-400">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center text-[#e50914] font-semibold text-lg group"
            >
              Quero resultados como esses
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* Slider de Marcas */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
              Algumas empresas que confiaram em nosso trabalho
            </h3>
          </div>
          
          <div className="relative bg-gray-900 rounded-xl overflow-hidden py-6">
            {/* Gradientes laterais */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            
            <div className="slider-container">
              <div className="slide-track animate-scroll">
                {/* Duplicamos as logos para criar o efeito de loop contínuo */}
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={index} className="slide px-8">
                    <img 
                      src={logo} 
                      height="60" 
                      width="200" 
                      alt="" 
                      className="object-contain h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos embutidos para o slider */}
      <style jsx>{`
        .slider-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .slide-track {
          display: flex;
          width: calc(200px * ${clientLogos.length * 2});
          animation: scroll 40s linear infinite;
        }
        
        .slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * ${clientLogos.length})) }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;