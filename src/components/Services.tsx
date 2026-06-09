import { Key, Heart, Map, Sparkles } from 'lucide-react';

const services = [
  { icon: Key, title: "Personal check-in", desc: "A warm welcome and full introduction to your home and the surrounding coastal area." },
  { icon: Heart, title: "Guest support", desc: "Dedicated, responsive assistance before, during, and after your stay with us." },
  { icon: Map, title: "Local recommendations", desc: "Curated guides to the best dining, secluded beaches, and authentic hidden gems." },
  { icon: Sparkles, title: "Immaculate cleaning", desc: "Professional housekeeping ensuring a pristine, comfortable environment." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block opacity-50">For Our Guests</span>
          <h2 className="text-charcoal text-4xl lg:text-5xl font-serif mb-8 leading-[1.1] font-light">
            Seamless Service & Hospitality
          </h2>
          <p className="text-sm font-sans leading-relaxed opacity-70 mb-10">
            Our mission is to offer every guest a smooth, personal, and memorable stay in Tenerife South. With our local knowledge, carefully managed homes, and dedicated team, we help travellers feel fully at home from the moment they arrive.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1542152862-430919dfce28?q=80&w=1500&auto=format&fit=crop" 
            alt="Hospitality Details" 
            className="w-full h-80 object-cover"
          />
        </div>
        
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:pl-10">
          {services.map((service, idx) => {
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold mb-3">
                  <span className="w-4 h-[1px] bg-gold"></span> 
                  {service.title}
                </div>
                <p className="text-sm font-sans leading-relaxed opacity-70 mt-2">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
