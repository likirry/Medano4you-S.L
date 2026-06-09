export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 text-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          <div className="lg:col-span-5">
            <img src="/logo.png" alt="Medano4you Logo" className="h-12 w-auto mb-6 object-contain" />
            <p className="text-sm font-sans leading-relaxed opacity-70 max-w-sm mb-10">
              Holiday Homes & Hospitality Management.<br/>
              Carefully selected properties with a personal touch in El Médano, Tenerife South.
            </p>
            <button className="border border-black/20 hover:bg-black hover:text-white transition-colors px-5 py-2 text-[10px] tracking-widest uppercase font-bold">
              Contact Us
            </button>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="uppercase tracking-[0.2em] text-[11px] mb-8 font-bold opacity-100">Contact</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-widest opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">hello@medano4you.com</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">+34 922 000 000</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">WhatsApp</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="uppercase tracking-[0.2em] text-[11px] mb-8 font-bold opacity-100">Explore</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-widest opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Villas & Apartments</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Temporary Rentals</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Services for Guests</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Property Management</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Local Guide & Journal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="uppercase tracking-[0.2em] text-[11px] mb-8 font-bold opacity-100">Visit</h4>
            <address className="text-[11px] uppercase tracking-widest not-italic leading-[2] mb-8 opacity-60 block">
              Av. José Miguel Galván Bello,<br/>
              38612 El Médano,<br/>
              Tenerife South
            </address>
            <div className="flex space-x-6 text-[11px] uppercase opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">IG</a>
              <a href="#" className="hover:opacity-100 transition-opacity">FB</a>
              <a href="#" className="hover:opacity-100 transition-opacity">LI</a>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Medano4you. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
