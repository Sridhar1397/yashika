"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    review:
      "Yashika Catering made our wedding reception absolutely magical. The biryani was divine and the variety of dishes left our 400 guests speechless. Kiran sir is a true professional — highly recommended!",
    event: "Wedding Reception",
  },
  {
    name: "Rahul Mehta",
    role: "Corporate Event Manager",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    review:
      "We've hired Yashika for three consecutive annual events. The consistency in quality, the promptness, and the sheer taste of every dish is something no other caterer has matched. Our employees look forward to the food every year.",
    event: "Annual Corporate Dinner",
  },
  {
    name: "Ananya Nair",
    role: "Birthday Party Host",
    avatar: "https://i.pravatar.cc/100?img=44",
    rating: 5,
    review:
      "From the welcome drinks to the desserts, every single dish was perfection. The paneer tikka and fish fry were the stars of the show. My guests couldn't stop complimenting the food. Will definitely book again!",
    event: "50th Birthday Celebration",
  },
  {
    name: "Suresh Kumar",
    role: "Engagement Party",
    avatar: "https://i.pravatar.cc/100?img=61",
    rating: 5,
    review:
      "Incredible attention to detail. The presentation, the flavours, the service — everything was top-notch. Kiran sir personally oversaw the event and made sure everything was perfect. Our family was truly impressed.",
    event: "Family Engagement",
  },
  {
    name: "Meena Rao",
    role: "Housewarming Client",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    review:
      "I'm so glad I chose Yashika Catering for my housewarming. The food was absolutely delicious — especially the chicken curry and sweets. Very affordable for the premium quality they deliver!",
    event: "Housewarming Party",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-amber-400 fill-amber-400" : "text-white/20"}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  useEffect(() => {
    let swiperInstance: unknown;
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, Pagination, Navigation } = await import("swiper/modules");
      await import("swiper/css");
      await import("swiper/css/pagination");
      await import("swiper/css/navigation");

      if (!swiperRef.current) return;
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 800,
        autoplay: { delay: 4000, disableOnInteraction: false },
        loop: true,
        pagination: { el: ".testimonial-pagination", clickable: true },
        navigation: {
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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

  return (
    <section className="py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,69,0,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our <span className="gradient-text italic">Guests Say</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flame-line w-24 mx-auto mt-5"
          />
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div ref={swiperRef} className="swiper testimonial-swiper overflow-hidden pb-14">
            <div className="swiper-wrapper items-stretch">
              {testimonials.map((t, i) => (
                <div key={i} className="swiper-slide h-auto">
                  <div className="h-full p-7 rounded-3xl bg-dark-card border border-white/8 flex flex-col relative overflow-hidden group hover:border-white/15 transition-colors duration-300">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-400/5 blur-2xl pointer-events-none" />

                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-flame/30 mb-5 flex-shrink-0" />

                    {/* Review */}
                    <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6 italic"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}>
                      &ldquo;{t.review}&rdquo;
                    </p>

                    {/* Event tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-flame/10 border border-flame/20 text-flame text-xs font-medium mb-5 w-fit">
                      🎉 {t.event}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/8 mb-5" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm"
                          style={{ fontFamily: "var(--font-playfair)" }}>{t.name}</div>
                        <div className="text-white/40 text-xs">{t.role}</div>
                      </div>
                      <div className="ml-auto">
                        <StarRating rating={t.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-pagination swiper-pagination" />
          </div>

          {/* Nav buttons */}
          <button className="testimonial-prev swiper-button-prev !left-0 !w-10 !h-10 !rounded-full !bg-dark-card !border !border-white/10 after:!text-sm after:!text-white hidden lg:flex" />
          <button className="testimonial-next swiper-button-next !right-0 !w-10 !h-10 !rounded-full !bg-dark-card !border !border-white/10 after:!text-sm after:!text-white hidden lg:flex" />
        </motion.div>
      </div>
    </section>
  );
}
