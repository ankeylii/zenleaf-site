import React, {  useState } from 'react';
import { ASSETS } from '../constants';

import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [quote] = useState<string>(
  "Sourced from China’s ecological tea regions — clean color, smooth umami, stable quality for cafés."
);


  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={ASSETS.heroBg} 
          alt="Zen Tea Ceremony" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zen-50 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 fade-in-up">
        {/*
        <span className="block text-zen-700 tracking-[0.3em] uppercase text-sm mb-6 font-semibold">
          Est. 2024 · United Kingdom
        </span>
        */}
        <h1 className="font-serif text-5xl md:text-7xl text-stone-800 leading-tight mb-6">
          Pure, Clean, <br/>
          <span className="italic text-zen-700">High-Quality</span> Matcha.
        </h1>
        <p className="text-stone-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          {quote}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#wholesale" 
            className="px-8 py-4 bg-zen-700 text-white uppercase tracking-widest text-sm hover:bg-zen-900 transition-colors duration-300"
          >
            Wholesale Inquiry
          </a>
          <a 
            href="#products" 
            className="px-8 py-4 border border-zen-700 text-zen-700 uppercase tracking-widest text-sm hover:bg-zen-700 hover:text-white transition-colors duration-300"
          >
            View Products
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zen-700">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;