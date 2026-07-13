"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const particles = Array.from({ length: 30 }, (_, i) => ({
  left: `${(i * 31) % 100}%`,
  top: `${(i * 47) % 100}%`,
  opacity: ((i * 19) % 50) / 100 + 0.1,
  drift: -(((i * 23) % 100) + 50),
  duration: ((i * 7) % 50) / 10 + 5,
}));

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-cards">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
        {/* Animated Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            initial={{ 
              y: 0,
              opacity: particle.opacity
            }}
            animate={{ 
              y: [0, particle.drift],
              opacity: [particle.opacity, 0]
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
        >
          Ready to Grow <span className="text-gradient">Smarter?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-secondary mb-10 max-w-2xl"
        >
          Let AI manage your growth while you focus on your business. Join top merchants powering their revenue with Cocomo Media.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="bg-primary text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3 group">
            Book a Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
