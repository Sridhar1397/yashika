"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=85",
    alt: "Chicken Biryani",
    tag: "Biryani",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=85",
    alt: "Indian Starters",
    tag: "Starters",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=85",
    alt: "Dal Makhani",
    tag: "Main Course",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=85",
    alt: "Paneer Curry",
    tag: "Curry",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800&q=85",
    alt: "Fish Fry",
    tag: "Seafood",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=85",
    alt: "Feast Spread",
    tag: "Grand Feast",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=85",
    alt: "Tandoori Chicken",
    tag: "Tandoor",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=85",
    alt: "Indian Bread",
    tag: "Breads",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1666019691946-37b3c4b7c4c2?w=800&q=85",
    alt: "Gulab Jamun",
    tag: "Sweets",
    span: "col-span-1",
  },
];

export default function FoodGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-3"
          >
            Visual Feast
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Food <span className="gradient-text italic">Gallery</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flame-line w-24 mx-auto mt-5"
          />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer bg-dark-card aspect-square"
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {img.tag}
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 text-white font-semibold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}>
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
              onClick={() => setLightbox(null)}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightbox.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
