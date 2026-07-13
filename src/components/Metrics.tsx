"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Layers, Users, Building2 } from "lucide-react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentVal = easeOut * (to - from) + from;
      setCount(Number.isInteger(to) ? Math.floor(currentVal) : Number(currentVal.toFixed(1)));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: "Influencer ROI", value: 4.8, suffix: "x", icon: TrendingUp },
  { label: "Active Campaigns", value: 4500, suffix: "+", icon: Layers },
  { label: "Creator Network", value: 100, suffix: "k+", icon: Users },
  { label: "Brands", value: 2500, suffix: "+", icon: Building2 },
];

export default function Metrics() {
  return (
    <section className="py-24 relative overflow-hidden bg-cards/5 border-y border-border-subtle">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                className="glass-panel glow-hover rounded-2xl border border-border-subtle p-7 flex flex-col gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-accent" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-gradient-accent tracking-tight">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-secondary font-medium uppercase tracking-wider mt-2">{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
