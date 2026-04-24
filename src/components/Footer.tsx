"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Instagram, Facebook, Youtube, Twitter, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Specials", href: "#specials" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Wedding Catering",
  "Corporate Events",
  "Birthday Parties",
  "Anniversary Dinners",
  "Religious Functions",
  "Engagement Parties",
  "Housewarming",
  "Bulk Orders",
];

const socials = [
  { icon: Instagram, href: "#", color: "#E1306C" },
  { icon: Facebook, href: "#", color: "#1877F2" },
  { icon: Youtube, href: "#", color: "#FF0000" },
  { icon: Twitter, href: "#", color: "#1DA1F2" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-flame to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame to-gold flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                  Yashika
                </div>
                <div className="text-xs tracking-widest uppercase text-amber-400">Cooking & Catering</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Premium catering services for all occasions. Crafted with passion, served with pride.
            </p>
            <p className="text-xs text-white/30 italic mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}>
              &ldquo;Flavour Tells a Story&rdquo;
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center hover:border-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white/50 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/45 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-flame opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-white/45 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-white/30 mb-1">Phone</div>
                <a href="tel:9731882878" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  +91 97318 82878
                </a>
              </div>
              <div>
                <div className="text-xs text-white/30 mb-1">Owner</div>
                <div className="text-white/70 text-sm">Kiran Gowda</div>
              </div>
              <div>
                <div className="text-xs text-white/30 mb-1">Location</div>
                <div className="text-white/70 text-sm">Bengaluru, Karnataka, India</div>
              </div>
              <div>
                <div className="text-xs text-white/30 mb-1">Working Hours</div>
                <div className="text-white/70 text-sm">7 AM – 10 PM, All Days</div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919731882878"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white w-fit border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/10 transition-all"
              style={{ color: "#25D366" }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.543 4.063 1.497 5.772L.057 24l6.39-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.783 0-3.454-.469-4.9-1.286l-.351-.211-3.795.996 1.013-3.7-.232-.381A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Yashika Cooking & Catering. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-flame fill-flame" /> in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
