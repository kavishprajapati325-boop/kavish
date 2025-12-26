
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Youtube, Zap, Instagram, ArrowRight, Sparkles, User, UserPlus, Calendar } from 'lucide-react';

interface PricingProps {
  onContactClick: (e: React.MouseEvent) => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube': return <Youtube size={32} />;
      case 'Zap': return <Zap size={32} />;
      case 'Instagram': return <Instagram size={32} />;
      case 'Calendar': return <Calendar size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Investment</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Pricing Plans</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-[40px] p-6 md:p-8 border transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl flex flex-col h-full ${
                plan.popular 
                  ? 'border-blue-600 ring-4 ring-blue-500/10 z-10 xl:scale-105' 
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-tighter shadow-lg shadow-blue-500/30 flex items-center gap-2 whitespace-nowrap">
                  <Sparkles size={14} /> Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'bg-gray-100 text-gray-900'
              }`}>
                {getIcon(plan.icon)}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">{plan.title}</h3>
              
              {plan.options ? (
                <div className="space-y-2 mb-6">
                  {plan.options.map((opt, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3 flex justify-between items-center border border-gray-100 group/opt hover:border-blue-200 transition-colors">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          {opt.label.includes('With Model') ? <UserPlus size={14} className="text-blue-600" /> : <User size={14} className="text-gray-400" />}
                          <span className="text-[11px] font-black text-gray-600 uppercase tracking-tight">{opt.label}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-gray-900">₹{opt.price}</span>
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center mt-2">
                    {plan.id === 'ig-monthly' ? 'Package Price' : 'Price per video'}
                  </p>
                </div>
              ) : (
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-500 font-bold text-xs">/{plan.unit}</span>
                </div>
              )}

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onContactClick}
                className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-700 active:scale-95' 
                    : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
                }`}
              >
                Book {plan.id === 'ig-monthly' ? 'Bundle' : 'Plan'}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Need a custom package for bulk orders? 
            <button onClick={onContactClick} className="text-blue-600 font-bold ml-1 hover:underline">Let's talk.</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
