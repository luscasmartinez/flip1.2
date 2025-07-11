import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Início', href: isHomePage ? '#home' : '/' },
    { name: 'Serviços', href: isHomePage ? '#services' : '/#services' },
    { name: 'Cases', href: isHomePage ? '#cases' : '/#cases' },
    { name: 'Processo', href: isHomePage ? '#process' : '/#process' },
    { name: 'Depoimentos', href: isHomePage ? '#testimonials' : '/#testimonials' },
    { name: 'Contato', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Flip</span>
            <span className="text-[#e50914]">Criativa</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to={isHomePage ? "#contact" : "/#contact"}
            className="ml-4 px-6 py-2.5 bg-[#e50914] hover:bg-[#e50914] text-gray-900 font-semibold rounded-lg transition-colors duration-300 flex items-center"
          >
            Fale Conosco
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-xl transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to={isHomePage ? "#contact" : "/#contact"}
            className="px-6 py-3 bg-[#e50914] hover:bg-red-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300 inline-flex items-center w-full justify-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Fale Conosco
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;