export default function Owners() {
  return (
    <section id="owners" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 relative">
          <div className="bg-sand-light absolute -inset-6 -z-10 hidden lg:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
            alt="Beautiful property" 
            className="w-full h-[500px] lg:h-[600px] object-cover shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block opacity-50">Property Management</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-[1.1] font-light">
            Own a property in El Médano?
          </h2>
          <p className="text-sm font-sans leading-relaxed opacity-70 mb-12 block">
            We help owners maximise the value of their property through professional holiday rental management, tailored marketing, fluid guest communication, meticulous cleaning, maintenance, and robust local support.
          </p>
          
          <form className="space-y-6 max-w-lg">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="border-b border-black/20 py-2 bg-transparent outline-none focus:border-black transition-colors text-sm placeholder-black/40" />
              <input type="text" placeholder="Last Name" className="border-b border-black/20 py-2 bg-transparent outline-none focus:border-black transition-colors text-sm placeholder-black/40" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full border-b border-black/20 py-2 bg-transparent outline-none focus:border-black transition-colors text-sm placeholder-black/40" />
            <input type="text" placeholder="Property Location (e.g. La Tejita, Centro)" className="w-full border-b border-black/20 py-2 bg-transparent outline-none focus:border-black transition-colors text-sm placeholder-black/40" />
            <div className="pt-6">
              <button type="button" className="bg-[#1A1A1A] text-white hover:bg-black transition-colors px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold w-full block text-center">
                Request Presentation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
