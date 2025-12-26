
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle, X, Phone, Mail, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER, EMAIL } from './constants';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onContactClick={toggleContactModal} />
      <main>
        <Hero />
        <Services onContactClick={toggleContactModal} />
        <Portfolio />
        <Pricing onContactClick={toggleContactModal} />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer onContactClick={toggleContactModal} />
      
      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 animate-fade-in">
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-[40px] w-full max-w-lg overflow-hidden shadow-2xl animate-scale-up border border-gray-100">
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="p-10 pt-16 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-500/30">
                <Phone size={32} className="animate-bounce-slow" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-500 mb-10">Choose your preferred way to reach out</p>
              
              <div className="space-y-4 text-left">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="group flex items-center gap-4 p-6 bg-gray-50 rounded-3xl hover:bg-blue-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-400 group-hover:text-blue-100 uppercase tracking-widest">Call or SMS</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-white">{PHONE_NUMBER}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                </a>

                <a 
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 p-6 bg-gray-50 rounded-3xl hover:bg-blue-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-400 group-hover:text-blue-100 uppercase tracking-widest">Email Inquiry</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-white truncate">{EMAIL}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                 <p className="text-sm text-gray-400 font-medium">Available for projects worldwide</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 active:scale-95 transition-all group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default App;
