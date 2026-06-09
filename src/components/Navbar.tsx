import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-warm-white border-b border-black/5 py-4' : 'bg-transparent py-6 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="cursor-pointer flex items-center">
          <img src="/logo.png" alt="Medano4you Logo" className={`h-12 w-auto transition-all duration-500 object-contain ${isScrolled ? '' : 'brightness-0 invert'}`} />
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {['Who we are', 'Homes', 'Services', 'Owners', 'Local Guide'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-[10px] tracking-[0.2em] font-medium uppercase transition-opacity ${isScrolled ? 'text-charcoal opacity-60 hover:opacity-100' : 'text-white opacity-80 hover:opacity-100'}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-8">
           <div className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-charcoal opacity-60' : 'text-white opacity-80'}`}>
             EN / ES / DE
           </div>
           <button className={`border px-5 py-2 text-[10px] uppercase tracking-widest transition-colors ${isScrolled ? 'border-black/20 text-charcoal hover:bg-black hover:text-white' : 'border-white/40 text-white hover:bg-white hover:text-charcoal'}`}>
             Book Online
           </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-warm-white z-50 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <img src="/logo.png" alt="Medano4you Logo" className="h-8 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6 text-charcoal" /></button>
            </div>
            <div className="flex flex-col px-8 pt-16 space-y-8 text-2xl font-serif">
              {['Home', 'Who we are', 'Villas & Apartments', 'Temporary Rentals', 'Services', 'Owners', 'Local Guide', 'Contact us'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-charcoal hover:text-ocean transition-colors" onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
              <div className="pt-12">
                <button className="w-full py-5 bg-charcoal hover:bg-ocean transition-colors text-white text-sm uppercase tracking-widest">Book online</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
