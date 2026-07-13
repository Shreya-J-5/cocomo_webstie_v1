"use client";

import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

const items = ["Instagram", "Facebook", "Meta Ads", "Creators", "Audience", "Reach", "Conversions", "ROI"];

export default function AIGrowthEngine() {
  return (
    <section id="ai" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-semibold mb-6"
        >
          <Sparkles size={16} />
          Powered by AI
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          The brain behind your <span className="text-gradient">growth</span>
        </h2>
        <p className="text-secondary text-base md:text-lg mb-10">
          Our AI looks at your whole business and tells you the next best step to earn more — in plain language.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {items.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-border-subtle text-sm font-medium text-primary"
            >
              <Check size={14} className="text-accent" />
              {label}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}
