"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit } from "lucide-react";

export default function AIGrowthEngine() {
  const cards = ["Instagram", "Facebook", "Meta Ads", "Creators", "Audience", "Reach", "Conversions", "ROI"];
  
  return (
    <section id="ai" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <div className="text-center max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            Proprietary AI Engine
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            The Brain Behind Your <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-secondary text-lg">
            Our AI ingests millions of data points across your entire tech stack to prescribe the exact actions needed to increase revenue.
          </p>
        </div>

        {/* AI Orb and Orbiting Cards */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          
          {/* Central Orb */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full z-20 flex items-center justify-center">
            {/* Glowing core */}
            <div className="absolute inset-0 bg-accent rounded-full blur-[40px] opacity-50 animate-pulse" />
            <div className="absolute inset-2 bg-gradient-to-br from-white to-accent rounded-full blur-md opacity-80" />
            <div className="absolute inset-4 bg-background rounded-full border border-border-subtle flex items-center justify-center shadow-[inset_0_0_20px_rgba(139,92,246,0.5)]">
              <BrainCircuit className="text-accent" size={40} />
            </div>
          </div>
          
          {/* Orbital Rings */}
          <div className="absolute inset-0 rounded-full border border-border-subtle border-dashed opacity-30 animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-10 rounded-full border border-accent/20 border-dashed opacity-40 animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* Orbiting Cards */}
          {cards.map((label, i) => {
            const angle = (i * (360 / cards.length)) * (Math.PI / 180);
            const radius = 220; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={label}
                className="absolute z-10 glass-panel px-4 py-2 rounded-lg text-sm font-medium border border-border-subtle whitespace-nowrap shadow-xl"
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                style={{
                  transform: `translate(-50%, -50%)`,
                }}
              >
                {label}
              </motion.div>
            );
          })}
          
          {/* Abstract Connection Lines (desktop only) */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
             {cards.map((_, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1="50%" y1="50%"
                  x2={`${50 + Math.cos((i * (360 / cards.length)) * (Math.PI / 180)) * 40}%`}
                  y2={`${50 + Math.sin((i * (360 / cards.length)) * (Math.PI / 180)) * 40}%`}
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1, duration: 1 }}
                />
             ))}
          </svg>
        </div>

      </div>
    </section>
  );
}
