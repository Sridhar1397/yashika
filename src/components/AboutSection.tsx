"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Users, ChefHat } from "lucide-react";

const stats = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Guests" },
  { icon: ChefHat, value: "20+", label: "Expert Chefs" },
  { icon: Clock, value: "500+", label: "Events Catered" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-flame/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85"
                alt="Chef at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Float card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame to-gold flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Kiran Gowda</div>
                    <div className="text-white/50 text-sm">Head Chef & Owner</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-flame to-gold flex flex-col items-center justify-center shadow-flame-lg text-white"
            >
              <div className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>12</div>
              <div className="text-[10px] font-bold tracking-wider uppercase leading-tight text-center">Years<br/>Exp.</div>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden border-4 border-charcoal shadow-card hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80"
                alt="Food spread"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Our Story</p>
            <h2
              className="text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Where Every Dish is a{" "}
              <span className="gradient-text italic">Celebration</span>
            </h2>
            <div className="flame-line w-16 mb-8" />

            <p className="text-white/65 leading-relaxed mb-5 text-lg">
              Founded by <span className="text-amber-400 font-semibold">Kiran Gowda</span>, Yashika Cooking & Catering
              was born from a simple belief — that food is the heart of every celebration. For over 12 years,
              we have been turning ordinary events into extraordinary memories.
            </p>
            <p className="text-white/55 leading-relaxed mb-10">
              We specialize in both vegetarian and non-vegetarian menus, crafting everything from royal biryani spreads
              to elegant wedding feasts. Our chefs bring decades of culinary expertise and an unwavering commitment to
              freshness, flavour, and finesse.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-white/5 group hover:border-amber-400/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame/20 to-gold/20 flex items-center justify-center group-hover:from-flame/40 group-hover:to-gold/40 transition-all">
                    <stat.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(255,69,0,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-flame to-ember text-white font-bold text-base shadow-flame transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
