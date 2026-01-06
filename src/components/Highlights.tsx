import React from 'react';
import { HIGHLIGHTS } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Why Zenleaf?</h2>
          <div className="h-1 w-20 bg-zen-500 mx-auto"></div>
          <p className="mt-4 text-zen-500 max-w-xl mx-auto">
            Ecological traceability meeting the highest EU standards.
          </p>
        </div>

        {/* Brand narrative (stacked) */}
<div className="mt-10 mb-14 max-w-3xl mx-auto text-center">
  <div className="space-y-10">
    <div>
      {/* 
      <p className="text-zen-700 uppercase tracking-widest text-xs mb-3">
        01. Our Origin
      </p>
      */}
      <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
        We are dedicated to sourcing the finest matcha from China’s ecological tea gardens—the historical birthplace of steamed and stone-milled tea.
      </p>
    </div>

    <div>
      
      <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
        By combining heritage with advanced modern processing, we preserve the authentic character of the leaf while ensuring safety, consistency, and reliability.
      </p>
    </div>

    <div>
      
      <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
        The result is matcha with vivid color, smooth umami, and stable quality—ideal for lattes, bakery, and creative café menus.
      </p>
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {HIGHLIGHTS.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 p-4 rounded-xl hover:bg-zen-50/50"
            >
              <div className="mb-4 p-3 bg-zen-100 rounded-full text-zen-700 group-hover:bg-zen-700 group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;