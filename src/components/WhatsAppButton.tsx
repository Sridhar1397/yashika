"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center gap-2 bg-dark-card border border-white/10 rounded-xl px-4 py-2.5 shadow-card backdrop-blur-sm"
          >
            <div className="flex flex-col">
              <span className="text-white text-xs font-semibold">Chat with us!</span>
              <span className="text-white/40 text-[10px]">Usually replies in minutes</span>
            </div>
            <button
              onClick={() => setTooltip(false)}
              className="text-white/40 hover:text-white transition-colors ml-1"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/919731882878?text=Hi%2C%20I%27m%20interested%20in%20your%20catering%20services!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTooltip(false)}
        className="whatsapp-float w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.543 4.063 1.497 5.772L.057 24l6.39-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.783 0-3.454-.469-4.9-1.286l-.351-.211-3.795.996 1.013-3.7-.232-.381A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </motion.a>
    </div>
  );
}
