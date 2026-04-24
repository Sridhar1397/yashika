"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChefHat, Leaf, Zap, Star } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    desc: "Our seasoned chefs bring decades of culinary mastery, trained in authentic regional Indian cuisines with a modern touch.",
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    desc: "We source only the freshest, premium-grade ingredients — farm-fresh vegetables, premium spices, and quality proteins.",
    gradient: "from-green-500 to-emerald-500",
    glow: "rgba(34,197,94,0.3)",
  },
  {
    icon: Zap,
    title: "Fast Service",
    desc: "Punctuality is our promise. We ensure seamless, on-time delivery and service so your event runs perfectly.",
    gradient: "from-yellow-400 to-amber-500",
    glow: "rgba(251,191,36,0.3)",
  },
  {
    icon: Star,
    title: "Best Taste",
    desc: "Every recipe is crafted with passion and perfected over years. Your guests won't just eat — they'll remember.",
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 bg-dark-2 relative overflow-hidden">
      {/* BG Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-3"
          >
            Why Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose{" "}
            <span className="gradient-text italic">Yashika?</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flame-line w-24 mx-auto mt-5"
          />
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-3xl bg-dark-card border border-white/5 overflow-hidden cursor-default"
              style={{ transition: "box-shadow 0.4s ease, transform 0.4s ease" }}
              whileHover={{ y: -8 }}
            >
              {/* Glow BG */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${feat.glow}, transparent 70%)` }}
              />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/15 transition-colors duration-500" />

              {/* Icon */}
              <motion.div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feat.icon className="w-8 h-8 text-white" />
                {/* Glow ring */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-30 blur-lg scale-150 transition-all duration-500`}
                />
              </motion.div>

              {/* Number decoration */}
              <div className="absolute top-5 right-5 text-6xl font-black text-white/3 leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}>
                0{i + 1}
              </div>

              <h3
                className="relative text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feat.title}
              </h3>
              <p className="relative text-white/50 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-flame/10 via-dark-card to-gold/10 border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to book your event?
            </p>
            <p className="text-white/50 mt-1">Let us create an unforgettable culinary experience for you.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,69,0,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-flame to-ember text-white font-bold text-base"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
