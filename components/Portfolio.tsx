
import React, { useEffect, useState, useRef } from 'react';
import { Instagram, Youtube, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const Counter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Track Record</h2>
          <p className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Production Powerhouse</p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {/* YouTube Card */}
          <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white p-12 rounded-[40px] shadow-xl shadow-blue-500/5 border border-blue-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 flex flex-col items-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
              <Youtube size={40} />
            </div>
            <p className="text-6xl md:text-7xl font-black text-gray-900 mb-2">
              <Counter end={1000} suffix="+" />
            </p>
            <p className="text-xl text-gray-600 font-bold uppercase tracking-widest">YouTube Edited</p>
            <div className="mt-6 flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-4 py-1.5 rounded-full transition-all group-hover:bg-green-100">
               <CheckCircle size={16} /> Content Creator Favorite
            </div>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-blue-600 font-bold">
              View Work <ExternalLink size={16} />
            </div>
          </a>

          {/* Reels Card */}
          <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white p-12 rounded-[40px] shadow-xl shadow-blue-500/5 border border-blue-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 flex flex-col items-center delay-150 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:-rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/30">
              <Instagram size={40} />
            </div>
            <p className="text-6xl md:text-7xl font-black text-gray-900 mb-2">
              <Counter end={1500} suffix="+" />
            </p>
            <p className="text-xl text-gray-600 font-bold uppercase tracking-widest">Reels Delivered</p>
            <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-4 py-1.5 rounded-full transition-all group-hover:bg-blue-100">
               <CheckCircle size={16} /> Viral Performance
            </div>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-blue-600 font-bold">
              View Work <ExternalLink size={16} />
            </div>
          </a>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              We don't just record video; we build visual experiences. Our specialized focus on YouTube and short-form content ensures every frame captures attention instantly.
            </p>
          </div>
          
          <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-xl hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-2xl group"
          >
            Explore Full Portfolio
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
