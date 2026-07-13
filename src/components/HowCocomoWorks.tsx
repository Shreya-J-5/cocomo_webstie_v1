"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Store, Cpu, TrendingUp, Megaphone, Users, LineChart } from "lucide-react";

const steps = [
  { icon: Store, title: "Connect Platforms", desc: "Sync your POS and Social accounts seamlessly." },
  { icon: Cpu, title: "AI Matchmaking", desc: "Find the perfect creators for your demographic." },
  { icon: Users, title: "Creator Outreach", desc: "Automated contracting and content briefing." },
  { icon: Megaphone, title: "Social Deployment", desc: "Launch across Instagram, Facebook & Meta." },
  { icon: TrendingUp, title: "Ad Amplification", desc: "Boost top-performing creator content." },
  { icon: LineChart, title: "Measure ROI", desc: "Track every dollar generated from influencers." },
];

export default function HowCocomoWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // For horizontal layout, let's use a standard grid on desktop and flex col on mobile.
  // The user asked for a "horizontal timeline", so on desktop it'll be horizontal.

  return (
    <section id="platform" className="py-24 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How <span className="text-gradient">Cocomo</span> Works
          </h2>
          <p className="text-secondary text-lg">
            A seamless integration from creator discovery to measurable revenue on Meta, Instagram, and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-border-subtle rounded-full z-0" />
          <motion.div 
            className="hidden md:block absolute top-12 left-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary rounded-full z-0 origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-[2px] bg-border-subtle rounded-full z-0" />
          <motion.div 
            className="md:hidden absolute top-0 left-6 w-[2px] bg-gradient-to-b from-accent to-accent-secondary rounded-full z-0 origin-top"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex md:flex-col items-center md:items-start gap-4 md:gap-6 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-panel flex items-center justify-center border-border-subtle glow-hover group relative bg-background">
                  <step.icon className="text-secondary group-hover:text-primary transition-colors z-10" size={24} />
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </div>
                
                <div className="flex-grow pt-2 md:pt-0">
                  <span className="text-xs font-bold text-accent mb-1 block">Step {idx + 1}</span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
