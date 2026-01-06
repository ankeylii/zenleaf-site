import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="font-serif text-2xl text-zen-50 mb-2">Zenleaf</h2>
          <p className="text-xs tracking-wider uppercase">Minimal Zen · Ecological · Traceable</p>
        </div>

        <div className="flex space-x-8 mb-8 md:mb-0">
          <a
  href="https://www.instagram.com/matcha.zenleaf"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-zen-500 transition-colors"
  aria-label="Zenleaf Instagram"
>
  <Instagram size={20} />
</a>
          <a href="mailto:info@zenleaf.co.uk" className="hover:text-zen-500 transition-colors"><Mail size={20} /></a>
        </div>

        <div className="text-xs text-stone-600 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Zenleaf Matcha UK.</p>
          <p>info@zenleaf.co.uk</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;