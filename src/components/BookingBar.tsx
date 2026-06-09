import { Calendar, Users, MapPin, Search } from 'lucide-react';

export default function BookingBar() {
  return (
    <div className="bg-white text-black shadow-2xl md:p-6 flex flex-col md:flex-row md:gap-8 items-center border border-black/5 rounded-sm w-full max-w-[800px] mx-auto relative z-20">
      <div className="flex-1 w-full text-left border-b md:border-b-0 md:border-r border-black/10 p-6 md:p-0 md:pr-6">
        <label className="text-[9px] uppercase tracking-widest opacity-40 mb-1 font-bold block">Location</label>
        <select className="bg-transparent text-charcoal outline-none w-full appearance-none text-sm cursor-pointer">
          <option>El Médano</option>
          <option>La Tejita</option>
          <option>Tenerife South</option>
        </select>
      </div>
      
      <div className="flex-1 w-full text-left border-b md:border-b-0 md:border-r border-black/10 p-6 md:p-0 md:pr-6">
        <label className="text-[9px] uppercase tracking-widest opacity-40 mb-1 font-bold block">Dates</label>
        <input type="text" placeholder="Check-in — Check-out" className="bg-transparent text-charcoal outline-none w-full text-sm placeholder-gray-800" />
      </div>

      <div className="flex-1 w-full text-left border-b md:border-b-0 md:border-r border-black/10 p-6 md:p-0 md:pr-6">
        <label className="text-[9px] uppercase tracking-widest opacity-40 mb-1 font-bold block">Guests</label>
        <select className="bg-transparent text-charcoal outline-none w-full appearance-none text-sm cursor-pointer">
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
      </div>

      <div className="p-6 md:p-0 w-full md:w-auto">
        <button className="bg-[#1A1A1A] text-white hover:bg-black transition-colors w-full px-8 py-3 text-[10px] uppercase tracking-widest font-bold h-full">
          Search
        </button>
      </div>
    </div>
  );
}
