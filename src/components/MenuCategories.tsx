"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    icon: "🥂",
    name: "Welcome Drinks",
    desc: "Refreshing mocktails, lassi, sherbets & juices to welcome your guests",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#00B4D8",
  },
  {
    icon: "🍢",
    name: "Starters",
    desc: "Crispy pakoras, tandoori bites, seekh kebabs & paneer skewers",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF4500",
  },
  {
    icon: "🍛",
    name: "Main Course",
    desc: "Dal makhani, mixed veg, butter chicken, rich gravies",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    color: "from-amber-500/20 to-orange-500/20",
    accent: "#FFB800",
  },
  {
    icon: "🍚",
    name: "Biryani",
    desc: "Aromatic basmati rice cooked with whole spices, dum style",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    color: "from-yellow-500/20 to-amber-500/20",
    accent: "#F59E0B",
  },
  {
    icon: "🫓",
    name: "Indian Breads",
    desc: "Tandoori roti, butter naan, paratha, kulcha from the clay oven",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    color: "from-red-500/20 to-rose-500/20",
    accent: "#EF4444",
  },
  {
    icon: "🥘",
    name: "Curries & Gravies",
    desc: "Slow-cooked, spice-rich North & South Indian curries",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "#F43F5E",
  },
  {
    icon: "🍮",
    name: "Sweets",
    desc: "Gulab jamun, rasgulla, halwa, kheer & traditional mithai",
    image: "https://images.unsplash.com/photo-1666019691946-37b3c4b7c4c2?w=600&q=80",
    color: "from-pink-500/20 to-purple-500/20",
    accent: "#EC4899",
  },
  {
    icon: "🍨",
    name: "Ice Creams",
    desc: "Premium scoops — mango, pista, rose & exotic Indian flavours",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    color: "from-purple-500/20 to-violet-500/20",
    accent: "#8B5CF6",
  },
];

function MenuCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-dark-card border border-white/5 cursor-pointer card-glow"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Icon badge */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10">
          {cat.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {cat.name}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed">{cat.desc}</p>

        {/* Arrow */}
        <div
          className="mt-4 flex items-center gap-2 text-xs font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          style={{ color: cat.accent }}
        >
          Explore Menu
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
      />
    </motion.div>
  );
}

export default function MenuCategories() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="menu" className="py-24 bg-dark-1 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-3"
          >
            What We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Menu <span className="gradient-text italic">Categories</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flame-line w-24 mx-auto mt-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-5 text-white/55 max-w-xl mx-auto"
          >
            From welcome drinks to desserts — a complete culinary journey crafted for your celebration
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <MenuCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
