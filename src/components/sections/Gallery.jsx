import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", label: "Campus Building" },
  { id: 2, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", label: "Graduation Event" },
  { id: 3, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop", label: "Basketball Court" },
  { id: 4, src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop", label: "Library" },
  { id: 5, src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop", label: "Student Conference" },
  { id: 6, src: "https://images.unsplash.com/photo-1574629810360-7efbb192b02fd?q=80&w=800&auto=format&fit=crop", label: "Football" },
  { id: 7, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", label: "Seminar" },
  { id: 8, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", label: "Study Group" },
  { id: 9, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", label: "Classroom" },
  { id: 10, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop", label: "Science Lab" },
  { id: 11, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", label: "Collaborative Work" },
  { id: 12, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", label: "Learning Center" },
];

/* ── CARD ── */
function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07 }}
      whileHover={{ scale: 1.04 }}
      className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
      style={{ marginBottom: 16 }}
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.label}
        loading="lazy"
        className="w-full object-cover rounded-2xl transition duration-500 group-hover:scale-110"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end p-4">
        <p className="opacity-0 group-hover:opacity-100 text-xs font-bold bg-white/95 text-[#7D52F4] px-3 py-1.5 rounded-full shadow-lg">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

/* ── LIGHTBOX ── */
function Lightbox({ item, items, onClose, onNav }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, onNav]);

  const idx = items.findIndex((i) => i.id === item.id);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute left-6 text-white text-5xl hover:text-[#FFD24D] transition-colors focus:outline-none"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
      >
        ‹
      </button>

      <img
        src={item.src}
        alt={item.label}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-6 text-white text-5xl hover:text-[#FFD24D] transition-colors focus:outline-none"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
      >
        ›
      </button>

      <p className="absolute bottom-6 text-white font-medium text-sm bg-black/50 px-4 py-1.5 rounded-full">
        {idx + 1} / {items.length}
      </p>
      
      <button className="absolute top-6 right-6 text-white text-3xl hover:text-[#FFD24D] transition-colors focus:outline-none" onClick={onClose}>
        ×
      </button>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: headerRef });
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const visible = showAll ? galleryItems : galleryItems.slice(0, 8);

  const navigate = useCallback((dir) => {
    if (!selected) return;
    const idx = galleryItems.findIndex((i) => i.id === selected.id);
    const next = (idx + dir + galleryItems.length) % galleryItems.length;
    setSelected(galleryItems[next]);
  }, [selected]);

  return (
    <section id="gallery" className="pt-48 pb-24 bg-white">

      {/* HEADER */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY }}
        className="text-center mb-16 relative px-6"
      >
        <span className="text-[#7D52F4] bg-[#7D52F4]/10 px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          📸 Campus Gallery
        </span>

        <h2 className="text-4xl md:text-[3.5rem] font-extrabold mt-6 text-blue-950 leading-tight">
          Life at <span className="text-[#7D52F4] italic">Wisdom</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg font-medium max-w-2xl mx-auto">
          Experience the vibrant environment and community at Wisdom Academy. Every photo tells a part of our students' successful journeys.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {visible.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* LOAD MORE */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 bg-[#7D52F4] text-white rounded-full font-bold shadow-lg shadow-[#7D52F4]/30 hover:bg-[#6c43d9] hover:scale-105 transition-all outline-none focus:ring-4 focus:ring-[#7D52F4]/50"
            >
              View More Photos
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            item={selected}
            items={galleryItems}
            onClose={() => setSelected(null)}
            onNav={navigate}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
