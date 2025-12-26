
import React, { useState } from 'react';
import { SERVICES, CINEMATIC_GUIDE_LINK } from '../constants';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { X, CheckCircle2, ArrowRight, Sparkles, BookOpen, ExternalLink, RefreshCw, Eye, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onContactClick: (e?: React.MouseEvent) => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showGraded, setShowGraded] = useState(true);

  const openService = (service: Service) => {
    setSelectedService(service);
    setShowGraded(true); // Reset comparison state when opening
  };

  const closeService = () => {
    setSelectedService(null);
  };

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    closeService();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">What We Offer</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Premium Services</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon] || Icons.HelpCircle;
            const isCinematic = service.id === '1';
            const isColorGrading = service.id === '3';
            
            return (
              <div 
                key={service.id} 
                onClick={() => openService(service)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className="group p-8 rounded-[32px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-3 hover:border-blue-100 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {isCinematic && (
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1">
                    <BookOpen size={10} /> Guide Available
                  </div>
                )}

                {isColorGrading && (
                  <div className="absolute top-4 right-4 bg-amber-100 text-amber-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1">
                    <RefreshCw size={10} /> See Comparison
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center text-gray-400 font-semibold transition-all hover:text-blue-600">
                    Learn More
                  </span>
                  <a 
                    href="#pricing" 
                    onClick={scrollToPricing}
                    className="inline-flex items-center text-blue-600 font-bold gap-1 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all group/btn"
                  >
                    View Packages
                    <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 animate-fade-in">
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"
            onClick={closeService}
          ></div>
          <div className="relative bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-up border border-gray-100 max-h-[90vh] overflow-y-auto">
            {/* Special background for premium services */}
            {['5', '1', '3'].includes(selectedService.id) && (
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5 pointer-events-none"></div>
            )}
            
            <button 
              onClick={closeService}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                  {/* @ts-ignore */}
                  {React.createElement(Icons[selectedService.icon] || Icons.HelpCircle, { size: 40 })}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 leading-tight">
                    {selectedService.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Sparkles size={14} className="text-blue-600" />
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Premium Production</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {selectedService.id === '5' ? (
                  <div className="bg-blue-50 p-8 rounded-[32px] border border-blue-100 mb-4">
                    <p className="text-2xl md:text-3xl font-black text-blue-900 leading-[1.2]">
                      Social Media Management <span className="text-blue-600">with Cinematic Video Production</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {selectedService.description}
                  </p>
                )}

                {/* Color Grading Specialized Section */}
                {selectedService.id === '3' && (
                  <div className="space-y-6">
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border-4 border-white group">
                      <img 
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
                        alt="Color Grading Comparison"
                        className={`w-full h-full object-cover transition-all duration-1000 ${showGraded ? 'brightness-110 saturate-125' : 'grayscale contrast-75 brightness-90'}`}
                      />
                      
                      {/* Comparison Overlay Labels */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!showGraded ? 'bg-white text-gray-900 shadow-lg' : 'bg-white/20 text-white backdrop-blur-sm'}`}>Raw</span>
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${showGraded ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white/20 text-white backdrop-blur-sm'}`}>Graded</span>
                      </div>

                      <button 
                        onClick={() => setShowGraded(!showGraded)}
                        className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all group"
                      >
                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transform transition-transform group-hover:scale-110 flex items-center gap-2">
                          <Eye size={20} className="text-blue-600" />
                          <span className="font-bold text-gray-900 pr-2">Tap to Compare</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Cinematic Quality",
                    "Strategic Planning",
                    "Rapid Delivery",
                    "Customized Workflow"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="font-bold text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#pricing"
                    onClick={scrollToPricing}
                    className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Explore Packages
                    <ArrowRight size={20} />
                  </a>
                  <button 
                    onClick={closeService}
                    className="px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
