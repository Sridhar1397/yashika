"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&q=90",
    heading: "Flavour Tells",
    headingAccent: "a Story",
    sub: "Premium Veg & Non-Veg Catering for Every Occasion",
    badge: "🌿 Veg & Non-Veg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1920&q=90",
    heading: "Crafted with",
    headingAccent: "Passion",
    sub: "Authentic Indian Cuisine — Biryani, Curries & Royal Feasts",
    badge: "🍛 100% Fresh",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1920&q=90",
    heading: "Every Feast",
    headingAccent: "Remembered",
    sub: "Weddings, Corporate Events, Birthdays — We Cater It All",
    badge: "✨ Premium Service",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1920&q=90",
    heading: "Taste the",
    headingAccent: "Difference",
    sub: "Rich Spices, Fresh Ingredients, Unforgettable Flavours",
    badge: "🔥 Chef's Special",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: unknown;
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, Pagination, EffectFade, Navigation } = await import("swiper/modules");
      await import("swiper/css");
      await import("swiper/css/effect-fade");
      await import("swiper/css/pagination");

      if (!swiperRef.current) return;
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination, EffectFade, Navigation],
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 1200,
        autoplay: { delay: 5000, disableOnInteraction: false },
        loop: true,
        pagination: {
          el: ".hero-pagination",
          clickable: true,
        },
      });
    };
    init();
    return () => {
      if (swiperInstance && typeof swiperInstance === 'object' && 'destroy' in swiperInstance) {
        (swiperInstance as { destroy: () => void }).destroy();
      }
    };
  }, []);

  const scrollDown = () => {
    const el = document.querySelector("#menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[680px] overflow-hidden">
      <div ref={swiperRef} className="swiper h-full">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div key={slide.id} className="swiper-slide relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Multi-layer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Decorative orb */}
              <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-flame/10 blur-[120px] pointer-events-none" />

              {/* Slide Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                  <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
                    >
                      {slide.badge}
                    </motion.div>

                    {/* Brand name */}
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="section-label text-amber-400 mb-3"
                    >
                      Yashika Cooking & Catering
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.0] mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span className="text-white">{slide.heading}</span>
                      <br />
                      <span className="gradient-text italic">{slide.headingAccent}</span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg text-white/70 mt-6 mb-10 max-w-xl leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {slide.sub}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75 }}
                      className="flex flex-wrap gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,69,0,0.5)" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-flame to-ember text-white font-bold text-lg shadow-flame transition-all duration-300"
                      >
                        Order Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 rounded-2xl bg-transparent border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                      >
                        Contact Us
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="hero-pagination swiper-pagination !bottom-10" />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-10 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />
    </section>
  );
}
