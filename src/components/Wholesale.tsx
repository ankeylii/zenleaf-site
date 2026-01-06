import React from 'react';
import { ASSETS } from '../constants';

const Wholesale: React.FC = () => {
  return (
    <section id="wholesale" className="py-24 bg-zen-900 text-zen-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <div>
            <span className="text-zen-500 uppercase tracking-widest text-sm font-bold mb-2 block">Partner With Us</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Bring the Essence of Zen <br/> to Your Café.
            </h2>
            <p className="text-stone-300 text-lg mb-8 font-light">
              We supply coffee shops, bakeries, and health food brands across the UK and Europe. 
              Get consistent quality, fresh harvests, and competitive bulk pricing.
            </p>


            <ul className="space-y-4 mb-12">
               <li className="flex items-center text-stone-200">
                  <span className="w-8 h-px bg-zen-500 mr-4"></span>
                  1kg foodservice packs
               </li>
               <li className="flex items-center text-stone-200">
                  <span className="w-8 h-px bg-zen-500 mr-4"></span>
                  Stable weekly / monthly Supply
               </li>
               <li className="flex items-center text-stone-200">
                  <span className="w-8 h-px bg-zen-500 mr-4"></span>
                  UK warehouse fulfillment
               </li>
               <li className="flex items-center text-stone-200">
                  <span className="w-8 h-px bg-zen-500 mr-4"></span>
                  Lab-tested safety & consistency
               </li>
               <li className="flex items-center text-stone-200">
                  <span className="w-8 h-px bg-zen-500 mr-4"></span>
                  Competitive wholesale pricing
               </li>
            </ul>

            <div className="p-6 bg-zen-700/30 border border-zen-700 rounded-lg backdrop-blur-sm">
                <h4 className="font-serif text-xl mb-2">Preparation Guide</h4>
                <p className="text-sm text-stone-300 mb-4">Perfect Café-Style Latte</p>
                <div className="grid grid-cols-2 gap-4 text-sm font-mono text-zen-300">
                    <div>• 3g Sifted Matcha</div>
                    <div>• 20-30ml Warm Water</div>
                    <div>• Whisk until smooth</div>
                    <div>• Add Milk & Ice</div>
                </div>
            </div>
          </div>


{/* Right: Form */}
       <div className="bg-white p-8 md:p-12 rounded-xl text-stone-800 shadow-2xl">
  <h3 className="font-serif text-2xl mb-6">
    Wholesale Inquiry
  </h3>

  <form
    className="space-y-6"
    action="https://formspree.io/f/xvzgjnwv"
    method="POST"
  >
    {/* Name + Company */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-zen-700 transition-colors bg-transparent"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          required
          className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-zen-700 transition-colors bg-transparent"
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        required
        className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-zen-700 transition-colors bg-transparent"
      />
    </div>

    {/* Volume */}
    <div>
      <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
        Estimated Monthly Volume
      </label>
      <select
        name="volume"
        className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-zen-700 transition-colors bg-transparent text-stone-600"
      >
        <option value="less_than_1kg">Less than 1kg</option>
        <option value="1kg_5kg">1kg – 5kg</option>
        <option value="5kg_20kg">5kg – 20kg</option>
        <option value="20kg_plus">20kg+</option>
      </select>
    </div>

    {/* Message */}
    <div>
      <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
        Message
      </label>
      <textarea
        name="message"
        rows={4}
        className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-zen-700 transition-colors bg-transparent resize-none" placeholder="Please tell us a little bit about your business and how we can support you.*"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-zen-700 text-white py-4 uppercase tracking-widest text-sm hover:bg-zen-900 transition-colors duration-300 mt-4"
    >
      Request Samples & Pricing
    </button>
  </form>
</div>




        </div>
      </div>
    </section>
  );
};

export default Wholesale;