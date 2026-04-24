"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Phone, User, MessageSquare, Utensils, Send } from "lucide-react";
import toast from "react-hot-toast";

const eventTypes = [
  "Wedding", "Engagement", "Birthday Party", "Corporate Event",
  "Anniversary", "Housewarming", "Graduation Party", "Religious Function", "Other",
];

export default function BookingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", eventType: "", date: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.eventType || !form.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success("🎉 Booking request sent! We'll call you within 24 hours.");
    setForm({ name: "", phone: "", eventType: "", date: "", message: "" });
  };

  return (
    <section id="booking" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,69,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Reserve Your Date</p>
            <h2
              className="text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Book Your{" "}
              <span className="gradient-text italic">Event Today</span>
            </h2>
            <div className="flame-line w-16 mb-8" />
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Ready to make your occasion unforgettable? Fill in the form and our team will reach out within 24 hours
              to discuss your requirements, menu options, and pricing.
            </p>

            {/* Quick info cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us Directly", value: "+91 97318 82878", color: "#FF4500" },
                { icon: Utensils, label: "Service Type", value: "Veg & Non-Veg Catering", color: "#FFB800" },
                { icon: Calendar, label: "Advance Booking", value: "Min. 7 days in advance", color: "#22C55E" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-white/5 hover:border-white/10 transition-colors">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: item.color + "22" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-8 rounded-3xl bg-dark-card border border-white/8 relative overflow-hidden">
              {/* Gradient corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-flame/10 to-transparent rounded-bl-[100px] pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-7" style={{ fontFamily: "var(--font-playfair)" }}>
                Send Booking Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Full Name *"
                    className="w-full bg-smoke border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-flame/60 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full bg-smoke border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-flame/60 transition-colors"
                  />
                </div>

                {/* Event Type */}
                <div className="relative">
                  <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full bg-smoke border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-flame/60 transition-colors appearance-none cursor-pointer"
                    style={{ color: form.eventType ? "#F5F0E8" : "rgba(245,240,232,0.3)" }}
                  >
                    <option value="" disabled>Event Type *</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-dark-card text-white">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-smoke border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-flame/60 transition-colors [color-scheme:dark]"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event (guest count, preferences…)"
                    className="w-full bg-smoke border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-flame/60 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,69,0,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-flame to-ember text-white font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Booking Request
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
