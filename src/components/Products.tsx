import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl text-stone-800 mb-4">Our Grades</h2>
            <p className="text-stone-500 max-w-md">
              From cafe-style lattes to culinary masterpieces, we offer distinct grades tailored for professionals.
            </p>
          </div>
          <a href="#wholesale" className="hidden md:flex items-center text-zen-700 hover:text-zen-900 transition-colors mt-4 md:mt-0">
            Download Catalogue <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col group w-full max-w-sm">
             {/*
              <div className="relative overflow-hidden mb-6 rounded-lg bg-stone-100 aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.status && (
                  <div className="absolute top-4 right-4 bg-stone-900 text-white text-xs px-3 py-1 uppercase tracking-widest">
                    {product.status}
                  </div>
                )}
              </div>
              */}
              
              <div className="relative overflow-hidden mb-6 rounded-lg bg-stone-100 aspect-[4/5]">
  {/* 包装图 */}
  <img
    src={product.image}
    alt={product.name}
    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
    loading="lazy"
  />

  {/* 粉末图（hover 显示） */}
  <img
    src={product.powderImage ?? product.image}
    alt={`${product.name} powder`}
    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    loading="lazy"
  />

  {product.status && (
    <div className="absolute top-4 right-4 bg-stone-900 text-white text-xs px-3 py-1 uppercase tracking-widest z-10">
      {product.status}
    </div>
  )}
</div>



              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider border border-stone-200 px-2 py-1 text-stone-500">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-serif text-xl text-stone-800 mb-2">{product.name}</h3>
              <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;