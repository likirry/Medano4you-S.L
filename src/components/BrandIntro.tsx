export default function BrandIntro() {
  return (
    <section id="who-we-are" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        <div className="md:col-span-5">
          <h2 className="font-serif text-2xl md:text-3xl italic text-gold mb-4">
            A local soul.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-sm font-sans leading-relaxed opacity-70 mb-6">
            Medano4you is a local holiday rental and hospitality management company based in El Médano, Tenerife South. We specialise in carefully selected apartments, personalised guest service and local travel experiences designed to make every stay seamless and memorable.
          </p>
          <p className="text-sm font-sans leading-relaxed opacity-70">
            A curated approach to coastal living & hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}
