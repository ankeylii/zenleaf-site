import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Origin from './components/Origin';
import Products from './components/Products';
import Wholesale from './components/Wholesale';
import Footer from './components/Footer';

// Use a simple loader for suspense fallback
const Loader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-zen-50">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-4 border-zen-300 border-t-zen-700 animate-spin mb-4"></div>
      <span className="font-serif text-zen-700 tracking-widest">ZENLEAF</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 bg-zen-50 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Hero />
          <Products />
          <Highlights />
          <Origin />
          
          
          {/* Section: Applications / Lifestyle (Simple visual break) */}
          <section id="applications" className="py-24 bg-zen-100 text-center px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">Boundless Possibilities</h2>
            <p className="max-w-2xl mx-auto text-stone-600 mb-12">
              From hot lattes to mocktails, bakery to gelato. A single ingredient, countless creations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-5xl mx-auto">
              {['Lattes', 'Smoothies', 'Bakery', 'Gelato'].map((item) => (
                <div key={item} className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-serif text-lg text-zen-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <Wholesale />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;