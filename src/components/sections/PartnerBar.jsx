import { motion } from 'framer-motion';

export default function PartnerBar() {
  // Repeated sequence for infinite scroll effect
  const partners = ["RBSE Board", "NCERT", "JEE Preparation", "NEET Focused", "Strategic Study", "Academic Excellence"];
  
  return (
    <section className="w-full bg-[#7D52F4] py-10 overflow-hidden relative">
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-white/5 to-black/10 pointer-events-none"></div>
      
      {/* Moving Content Container */}
      <div className="max-w-screen-2xl mx-auto relative px-6">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ 
            x: ["0%", "-50%"] 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Render two sets of labels for seamless looping */}
          {[...partners, ...partners].map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.1, 
                color: "#FFD24D"
              }}
              className="group flex items-center gap-4 cursor-default transition-colors [perspective:1000px]"
            >
              <span className="text-white font-black text-2xl md:text-3xl tracking-[0.15em] uppercase drop-shadow-xl">
                {partner}
              </span>
              <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#FFD24D] transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Fading Edges Mask */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#7D52F4] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#7D52F4] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

