import React, { useRef } from 'react';

const TravelCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dados dos cards com imagens diferentes e títulos
  const mobilePreviews = [
    { 
      id: 1,
      imageUrl: 'https://th.bing.com/th/id/R.49ce80523271d83b169533701ae364a3?rik=NCs4TD4%2fnoqNHA&pid=ImgRaw&r=0',
      title: 'Aventuras nas Montanhas'
    },
    { 
      id: 2,
      imageUrl: 'https://i.pinimg.com/originals/d2/dc/38/d2dc3824eed292c2715707b4d7e5bf9d.jpg',
      title: 'Praias Paradisíacas'
    },
    { 
      id: 3,
      imageUrl: 'https://wallpaperaccess.com/full/1306918.jpg',
      title: 'Expedição no Deserto'
    },
    { 
      id: 4,
      imageUrl: 'https://ecoinomy.eu/wp-content/uploads/2023/02/bitcoin_creator_satoshi_nakamoto_v01.png',
      title: 'Florestas Encantadas'
    },
    
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#e50914] font-semibold uppercase tracking-wider mb-4">
          Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore nossos <span className="text-[#e50914]">pacotes exclusivos</span>
          </h2>
          <p className="text-xl text-gray-300">
            Descubra experiências únicas que vão além do comum.
          </p>
        </div>

        <div className="preview__container" ref={containerRef}>
          {mobilePreviews.map((preview, index) => (
            <article 
              key={preview.id}
              className="preview mobile"
              tabIndex={0}
              style={{
                backgroundImage: `url(${preview.imageUrl})`,
                // Rotação individual baseada na posição
                rotate: `${index % 2 === 0 ? -3 : 3}deg`,
                // Adicionando título como atributo para acessibilidade
                'aria-label': preview.title
              }}
            >
              {/* Overlay com título que aparece no hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {preview.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Estilos incorporados */}
      <style jsx>{`
        .preview__container {
          display: flex;
          flex-wrap: wrap;
          place-items: center;
          place-content: center;
          height: 100%;
          padding: 2rem 0;
          gap: 20px;
        }

        .preview__container:has(:hover, :focus-within) .preview:not(:hover, :focus) {
          opacity: 0.6;
        }

        .preview {
          --mobile--w: 280px;
          --mobile--h: 420px;
          --outline-w: 6px;
          
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          opacity: 0.85;
          transform: scale(0.95) rotate(var(--rotation, -3deg));
          outline: 2px solid transparent;
          min-height: var(--mobile--h);
          min-width: var(--mobile--w);
          position: relative;
          overflow: hidden;
        }

        .preview:hover, .preview:focus {
          transform: scale(1) rotate(0deg);
          box-shadow: 0 0 120px #e50914;
          outline: 2px solid #e50914;
          z-index: 10;
          opacity: 1;
        }

        /* Efeito de overlay vermelho sutil no hover */
        .preview:hover::after, .preview:focus::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(229, 9, 20, 0.1);
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default TravelCards;