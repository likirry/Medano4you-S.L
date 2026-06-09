const categories = [
  { title: "Sea-view apartments", count: "24 properties", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop" },
  { title: "Beachfront stays", count: "12 properties", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop" },
  { title: "Luxury stays", count: "8 properties", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" },
  { title: "Family apartments", count: "36 properties", image: "https://images.unsplash.com/photo-1502672260266-1c1f2ab0c281?q=80&w=2000&auto=format&fit=crop" },
];

export default function Homes() {
  return (
    <section id="homes" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 opacity-100">Featured Collections</h3>
            <p className="text-sm font-sans leading-relaxed opacity-70">
              Explore our collection of handpicked properties across El Médano and Tenerife South, offering the perfect blend of comfort, style, and exceptional locations.
            </p>
          </div>
          <button className="hidden md:inline-block border border-black/20 px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors mt-8 md:mt-0">
            View All Apartments
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-sand flex flex-col group cursor-pointer border border-black/5">
              <div className="h-48 overflow-hidden bg-slate-300">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
              </div>
              <div className="p-4 flex-1 bg-white">
                <h4 className="serif text-base mb-1 font-serif text-charcoal">{cat.title}</h4>
                <p className="text-[10px] opacity-50 uppercase tracking-tighter">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="border border-black/20 px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              View All Apartments
            </button>
        </div>
      </div>
    </section>
  );
}
