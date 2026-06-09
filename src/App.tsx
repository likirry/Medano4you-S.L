import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Homes from './components/Homes';
import Services from './components/Services';
import Owners from './components/Owners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-white selection:bg-sand/30 selection:text-charcoal relative">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Homes />
        <Services />
        <Owners />
      </main>
      <Footer />
      
      {/* Sticky WhatsApp CTA for Mobile */}
      <a href="#" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg lg:hidden hover:scale-105 transition-transform z-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M9 15a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" /><path d="M14 15a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" /></svg>
      </a>
    </div>
  );
}

