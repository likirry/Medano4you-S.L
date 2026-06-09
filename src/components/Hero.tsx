import { motion } from 'motion/react';
import BookingBar from './BookingBar';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2670&auto=format&fit=crop" 
          alt="El Medano Coastal View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4">
            Boutique Hospitality in El Médano
          </h1>
          <h2 className="text-white/90 text-xs tracking-[0.3em] uppercase mb-16 font-sans">
            Curated Stays • Local Expertise • Since 2014
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <BookingBar />
        </motion.div>
      </div>
    </div>
  );
}
