"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const specials = [
  {
    name: "Chicken Fry",
    desc: "Golden crispy fried chicken marinated with our secret spice blend — a crowd favourite at every event.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=85",
    tag: "Non-Veg",
    tagColor: "#FF4500",
    calories: "320 kcal",
    time: "45 min",
    emoji: "🍗",
  },
  {
    name: "Dum Biryani",
    desc: "Slow-cooked basmati rice layered with saffron, caramelised onions, and aromatic whole spices. Pure bliss.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=85",
    tag: "Signature",
    tagColor: "#FFB800",
    calories: "480 kcal",
    time: "2.5 hrs",
    emoji: "🍛",
  },
  {
    name: "Paneer Curry",
    desc: "Rich, velvety tomato and cashew gravy with fresh cottage cheese — the king of vegetarian curries.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=85",
    tag: "Veg",
    tagColor: "#22C55E",
    calories: "290 kcal",
    time: "35 min",
    emoji: "🥘",
  },
  {
    name: "Fish Fry",
    desc: "Fresh catch marinated in coastal spices, fried to perfection — crispy outside, tender and flaky inside.",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=700&q=85",
    tag: "Seafood",
    tagColor: "#3B82F6",
    calories: "260 kcal",
    time: "30 min",
    emoji: "🐟",
  },
];

export default function SpecialDishes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specials" className="py-28 bg-dark-1 relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,184,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-3"
          >
            Chef&apos;s Picks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Special <span className="gradient-text italic">Dishes</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flame-line w-24 mx-auto mt-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-5 text-white/50 max-w-lg mx-auto"
          >
            Our most-loved signature dishes that keep guests coming back for more
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 cursor-default"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                {/* Tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: dish.tagColor + "33", border: `1px solid ${dish.tagColor}55`, color: dish.tagColor }}
                >
                  {dish.tag}
                </div>

                {/* Emoji */}
                <div className="absolute top-4 left-4 text-3xl">{dish.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {dish.name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">{dish.desc}</p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div className="text-xs text-white/40">
                    <span className="font-medium text-white/60">{dish.calories}</span>
                  </div>
                  <div className="text-xs text-white/40">
                    ⏱ <span className="font-medium text-white/60">{dish.time}</span>
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${dish.tagColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
