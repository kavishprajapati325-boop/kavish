
import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

interface NavbarProps {
  onContactClick: (e: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', onClick: handleHomeClick },
    { name: 'Pricing', href: '#pricing', onClick: handlePricingClick },
    { name: 'Portfolio', href: PORTFOLIO_LINK, external: true },
    { name: 'Contact', href: '#contact', onClick: onContactClick },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={() => window.location.reload()}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${scrolled ? 'bg-blue-600' : 'bg-white'} group-hover:scale-110`}>
              <Play size={20} className={scrolled ? 'text-white fill-white' : 'text-blue-600 fill-blue-600'} />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight transition-colors ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              BuildView<span className={scrolled ? 'text-gray-900' : 'text-blue-400'}>Studios</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={onContactClick}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:scale-105 active:scale-95 ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
              >
                Book a Shoot
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out bg-white shadow-xl ${isOpen ? 'opacity-100 top-0 pt-20 pb-10' : 'opacity-0 -top-[500px] pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!link.external) setIsOpen(false);
                if (link.onClick) link.onClick(e);
              }}
              className="block px-3 py-4 text-lg font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-6">
            <button
              onClick={(e) => {
                setIsOpen(false);
                onContactClick(e as any);
              }}
              className="inline-block px-10 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg"
            >
              Book a Shoot
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
