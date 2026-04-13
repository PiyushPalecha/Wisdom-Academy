import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Campus", "Events", "Sports"];

const images = [
  { id: 1, category: "Campus", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", alt: "Campus Building" },
  { id: 2, category: "Events", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", alt: "Graduation Event" },
  { id: 3, category: "Sports", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop", alt: "Basketball" },
  { id: 4, category: "Campus", src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop", alt: "Library" },
  { id: 5, category: "Events", src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop", alt: "Student Conference" },
  { id: 6, category: "Sports", src: "https://images.unsplash.com/photo-1574629810360-7efbb192b02fd?q=80&w=800&auto=format&fit=crop", alt: "Football" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="pt-48 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-950">
            Life at <span className="text-[#7D52F4]">Wisdom Academy</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Explore our state-of-the-art campus, vibrant events, and active sports life.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                filter === cat
                  ? 'bg-[#7D52F4] text-white shadow-lg shadow-[#7D52F4]/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#7D52F4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm text-[#7D52F4] px-4 py-2 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <span className="font-bold text-sm tracking-wider uppercase">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#FFD24D] transition-colors focus:outline-none" onClick={closeLightbox}>
              <X className="w-10 h-10" />
            </button>
            <button className="absolute left-4 sm:left-10 text-white hover:text-[#FFD24D] transition-colors focus:outline-none p-2 bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-sm" onClick={prevImage}>
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <button className="absolute right-4 sm:right-10 text-white hover:text-[#FFD24D] transition-colors focus:outline-none p-2 bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-sm" onClick={nextImage}>
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            
            <motion.div
              className="relative max-w-5xl w-full max-h-[85vh] flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
