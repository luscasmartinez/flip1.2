import React, { useState } from 'react';
import './AccordionGallery.css';

interface AccordionItem {
  image: string;
  title: string;
  description: string;
}

const AccordionGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionList: AccordionItem[] = [
    {
      image: "https://images.unsplash.com/photo-1584958902498-0391eabc47e8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Nem sei se isso vai ficar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.'
    },
    {
      image: "https://images.unsplash.com/photo-1618019259098-817b908d93e1?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Shizuoka',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.'
    },
    {
      image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Kyoto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.'
    },
    {
      image: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Hakone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.'
    }
  ];

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleItemLeave = () => {
    setActiveIndex(null);
  };

  return (

    
    <section className="accordion-container">
      
      <ul className="accordion">
        {accordionList.map((item, index) => (
          <li
            key={index}
            className={`accordion__item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => handleItemHover(index)}
            onMouseLeave={handleItemLeave}
          >
            <img className="accordion__image" src={item.image} alt={item.title} />
            <div className="accordion__overlay"></div>
            <h2 className="accordion__title">{item.title}</h2>
            <p className="accordion__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AccordionGallery;