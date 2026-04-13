export default function PartnerBar() {
  const partners = ["Harvard University", "Stanford Tech", "Oxford Academy", "MIT Online", "Cambridge School"];
  return (
    <div className="w-full bg-gradient-to-r from-primary via-[#6b42dd] to-primary py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
        {partners.map((partner, i) => (
          <span key={i} className="text-white/90 font-bold text-xl tracking-widest uppercase mix-blend-overlay">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
