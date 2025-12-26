
import React from 'react';
import { Play, Video, Film, Camera, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0b] pt-20">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full filter blur-[140px] animate-drift"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full filter blur-[140px] animate-drift-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-[100px] animate-drift delay-700"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal active">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-bounce-slow">
            <Zap size={14} className="mr-2 fill-blue-400" />
            Voted #1 Video Agency 2024
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
            WE CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              VIRAL MAGIC
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
            From high-end commercial shoots to viral social media edits. We don't just edit; we engineer retention and cinematic beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-2xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 group"
            >
              Start Your Project
              <Play size={20} className="ml-3 fill-white group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-lg flex items-center justify-center transition-all backdrop-blur-md hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle size={22} className="mr-3 text-blue-400" />
              WhatsApp Us
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-10 border-t border-white/5 pt-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">1.5K+</span>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Videos Delivered</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">100M+</span>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Total Views</span>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="relative flex justify-center lg:justify-end reveal active delay-300">
          <div className="relative w-full max-w-[340px] aspect-[9/16] bg-gray-800 rounded-[3rem] p-3 shadow-[0_0_80px_-15px_rgba(37,99,235,0.3)] border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none"></div>
            
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative">
              {/* Replace the URL below with your actual video URL */}
              <video 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-filming-a-scene-with-a-camera-40445-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute bottom-8 left-0 w-full px-6 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Sparkles size={14} />
                  </div>
                  <span className="text-white font-bold text-sm">Cinematic Quality</span>
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[75%] animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          {/* Glass Card Overlay */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl hidden xl:block animate-float">
             <div className="flex flex-col gap-4">
               {[
                 { icon: Film, label: "6K RAW", color: "text-blue-400" },
                 { icon: Camera, label: "Pro Gear", color: "text-emerald-400" },
                 { icon: Video, label: "Elite Cut", color: "text-purple-400" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.color}`}>
                     <item.icon size={20} />
                   </div>
                   <span className="text-white font-bold text-sm tracking-wide">{item.label}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
