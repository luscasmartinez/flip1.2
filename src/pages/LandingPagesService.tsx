import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Layout, Zap, Target, BarChart3, Smartphone, Monitor, RefreshCw, Headphones } from 'lucide-react';

const LandingPagesService: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Foco em Conversão",
      description: "Cada elemento é estrategicamente posicionado para maximizar conversões e transformar visitantes em clientes"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Carregamento Rápido",
      description: "Otimizadas para velocidade (90+ no PageSpeed) e performance em todos os dispositivos"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Métricas Integradas",
      description: "Acompanhamento completo de conversões, taxas de rejeição e comportamento do usuário"
    }
  ];

  const features = [
    "Design responsivo para todos os dispositivos",
    "Formulários otimizados para máxima conversão",
    "Integração com Google Analytics e Meta Pixel",
  ];

  const highlights = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      text: "Site sob medida: seu negócio online funcionando em até 30 dias"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      text: "Design responsivo: perfeito em qualquer tela, do celular ao desktop"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      text: "Suporte sem dor de cabeça: atualizações e ajustes sempre que precisar"
    }
  ];

  const faqs = [
    {
      question: "Como funciona o processo de criação?",
      answer: "Começamos com um briefing detalhado para entender sua marca e objetivos. Em seguida, desenvolvemos wireframes, design visual e entregamos a versão final para aprovação, com revisões inclusas."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Site completo em até 30 dias úteis; Landing Page em até 10 dias úteis após aprovação do briefing e conteúdo."
    },
    {
      question: "Preciso ter texto e imagens prontos?",
      answer: "Se já tiver, ótimo! Caso contrário, nossa equipe pode criar conteúdos otimizados e selecionar imagens profissionais ou orientá-lo sobre o que providenciar."
    },
    {
      question: "E depois do lançamento?",
      answer: "Oferecemos 30 dias de suporte gratuito para ajustes, além de pacotes de manutenção contínua com atualizações de conteúdo e monitoramento de performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e50914] rounded-full mb-8">
              <Layout className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Impulsione <span className="text-[#e50914]"> Presença Digital</span>
            </h1>
            <p className="text-xl text-justify text-gray-300 mb-10 max-w-3xl mx-auto">
              Criamos páginas estratégicas e persuasivas que não só atraem visitantes, mas transformam cliques em oportunidades reais. Aumente sua visibilidade online, gere leads qualificados e conquiste mais clientes com uma presença digital que realmente vende.
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

      {/* Highlights Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl flex items-start">
                <div className="bg-[#e50914] p-3 rounded-full mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950" id="benefits">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gray-700 text-[#e50914] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              RESULTADOS COMPROVADOS
            </span>
            <h2 className="text-4xl font-bold mb-6">Por que nossas landing pages convertem mais?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desenvolvemos com base em dados reais e princípios de UX/UI que aumentam engajamento e conversões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
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

      {/* Features Section */}
      <section className="py-20 bg-gray-900" id="features">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gray-700 text-[#e50914] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                TUDO INCLUSO
              </span>
              <h2 className="text-4xl font-bold mb-6">
                O que você recebe em nossas <span className="text-[#e50914]">Landing Pages</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Solução completa com tudo que você precisa para começar a converter imediatamente.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#e50914] mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-[#e50914]">
                <h4 className="font-bold text-lg mb-2">Bônus Exclusivo</h4>
                <p className="text-gray-300">Todas as landing pages incluem 1 mês de ajustes gratuitos após o lançamento.</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Landing Page Design"
                className="rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-xl"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-6 w-6 text-white" />
                  <Monitor className="h-6 w-6 text-white" />
                  <span className="text-white font-medium">Design 100% Responsivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cards sell */}

      <section className="py-20 bg-gray-900">
        {/* Container principal com flex e responsividade */}
        <div className="container mx-auto px-4">
          {/* Grid responsivo - ajusta o número de colunas conforme o tamanho da tela */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Card 1 (seu card original) */}
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="https://i.imgur.com/V5DhDha.png" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Plano Básico</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">49</span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Site institucional responsivo (até 3 páginas)</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Design moderno e personalizado</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Formulário de contato integrado</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Otimização básica para Google (SEO básico)</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Suporte técnico por 15 dias</span>
                  </li>
                  
                </ul>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="https://i.imgur.com/V5DhDha.png" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Plano Básico</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">49</span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Tudo do Plano Essencial +</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Até 6 páginas (ex: serviços, equipe, blog, etc.)</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integração com WhatsApp</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Suporte técnico por 30 dias</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Carregamento rápido e otimizado</span>
                  </li>
                </ul>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="https://i.imgur.com/V5DhDha.png" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Plano Básico</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">49</span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Tudo do Plano Profissional +</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Área administrativa para editar textos e imagens</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Página de vendas com copy otimizada</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Suporte técnico por 60 dias</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Relatório mensal </span>
                  </li>
                </ul>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="https://i.imgur.com/V5DhDha.png" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Plano Personalizado</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold"></span>
                  <span className="text-5xl font-extrabold tracking-tight"></span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Levantamento completo das necessidades do cliente</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Design 100% exclusivo, feito do zero</span>
                  </li>
                  <li className="flex">
                    <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Número de páginas conforme demanda</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3"> Funcionalidades personalizadas (ex: agendamento online, blog, integração com sistemas externos, etc.)</span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Área administrativa (se necessário)</span>
                  </li>
                </ul>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dúvidas Frequentes</h2>
            <p className="text-xl text-gray-300">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-[#e50914]">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e50914] to-red-700" id="contact">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar visitantes em clientes?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e receba uma proposta personalizada para sua landing page de alta conversão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagesService;