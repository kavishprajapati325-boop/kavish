
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onContactClick: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-black tracking-tight text-blue-600">
              BuildView<span className="text-gray-900">Studios</span>
            </span>
            <p className="text-gray-500 leading-relaxed">
              We bring your vision to the screen through innovative cinematography, expert editing, and high-end visual storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Our Services</a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={onContactClick}
                  className="text-gray-500 hover:text-blue-600 transition-colors font-medium"
                >
                  Contact Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Cinematic Shoots', 'Elite Post-Production', 'Color Grading', 'Viral Reels', 'Sound Design'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4">Subscribe for the latest production tips and showreel drops.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none pr-12"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-medium text-sm">
            © {new Date().getFullYear()} BuildView Studios. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 text-sm font-medium hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm font-medium hover:text-blue-600">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/20 hover:scale-110 active:scale-95 transition-all"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
