"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhyCocomo() {
  return (
    <section className="py-24 relative overflow-hidden bg-cards/5 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Traditional Agency <br/> <span className="text-gradient">vs Cocomo</span>
          </h2>
          <p className="text-secondary text-lg">
            Stop paying retainers for manual influencer outreach. Software scales better, acts faster, and never sleeps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Agency */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border-subtle bg-cards/30"
          >
            <h3 className="text-xl font-bold mb-6 text-secondary">Traditional Agency</h3>
            <ul className="flex flex-col gap-4">
              {['Manual influencer DMs', 'Monthly static spreadsheets', 'Small pool of creators', 'Gut-feeling creator selection', 'High monthly retainers', 'Slow content delivery'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                  <X size={18} className="text-red-500/70 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cocomo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-accent/30 bg-accent/5 relative overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full blur-[80px] opacity-20 pointer-events-none" />
            <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
              Cocomo Platform <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">AI</span>
            </h3>
            <ul className="flex flex-col gap-4 relative z-10">
              {['Automated outreach & contracts', 'Real-time social attribution', '100,000+ vetted creators', 'Data-driven creator matching', 'Software pricing model', 'Instant whitelisting on Meta'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-primary font-medium text-sm">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
