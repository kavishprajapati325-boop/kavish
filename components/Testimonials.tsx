
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">What Our Clients Say</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-10 rounded-[40px] relative border border-gray-100">
              <Quote className="absolute top-8 right-8 text-blue-100" size={60} />
              <p className="text-xl text-gray-700 leading-relaxed italic mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                  <p className="text-blue-600 font-medium text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
