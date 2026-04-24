"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97318 82878",
    sub: "Mon – Sun, 7am – 10pm",
    color: "#FF4500",
    href: "tel:9731882878",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "97318 82878",
    sub: "Quick response guaranteed",
    color: "#25D366",
    href: "https://wa.me/919731882878?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20catering%20services.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yashikacatering@gmail.com",
    sub: "We reply within 4 hours",
    color: "#FFB800",
    href: "mailto:yashikacatering@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka",
    sub: "Serving all across Bengaluru",
    color: "#8B5CF6",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "7:00 AM – 10:00 PM",
    sub: "Available 7 days a week",
    color: "#06B6D4",
    href: "#",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 bg-dark-1 relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact <span className="gradient-text italic">Us</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flame-line w-24 mx-auto mt-5"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactDetails.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-dark-card border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.color + "18", border: `1px solid ${item.color}25` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                  <div className="text-white font-semibold text-sm truncate group-hover:text-amber-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs text-white/35">{item.sub}</div>
                </div>
                <div style={{ color: item.color }} className="opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919731882878?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl font-bold text-white text-base mt-2"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.543 4.063 1.497 5.772L.057 24l6.39-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.783 0-3.454-.469-4.9-1.286l-.351-.211-3.795.996 1.013-3.7-.232-.381A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-white/10 relative min-h-[400px]"
            style={{ filter: "grayscale(20%) contrast(1.1)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99710193227!2d77.35072747903063!3d12.95450356318371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yashika Catering Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
