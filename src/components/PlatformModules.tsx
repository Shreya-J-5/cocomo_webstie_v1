"use client";

import { motion } from "framer-motion";
import {
  Bot, Users, Megaphone, BarChart2,
  PieChart, RefreshCw, MapPin, Target
} from "lucide-react";

const features = [
  { icon: Bot, title: "Influencer Discovery", desc: "Find the right creators for your brand, day or night." },
  { icon: Users, title: "Creator Intelligence", desc: "See real ROI and audience fit before you spend." },
  { icon: Megaphone, title: "Social Automation", desc: "Launch campaigns on Meta & Instagram in a few clicks." },
  { icon: BarChart2, title: "Platform Analytics", desc: "Track engagement and sales in one clear view." },
  { icon: PieChart, title: "Ad Budget Allocation", desc: "Put money behind the posts that actually work." },
  { icon: RefreshCw, title: "Content Amplification", desc: "Boost your best creator content automatically." },
  { icon: MapPin, title: "Geo-Targeted Creators", desc: "Reach local customers with nearby influencers." },
  { icon: Target, title: "ROI Predictions", desc: "Know the revenue impact before you pay." },
];

export default function PlatformModules() {
  return (
    <section id="solutions" className="py-20 md:py-28 relative overflow-hidden bg-cards/10 border-y border-border-subtle">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything in <span className="text-gradient">one platform</span>
          </h2>
          <p className="text-secondary text-base md:text-lg">
            Simple tools to find creators, run campaigns, and see what&apos;s working — no agency jargon required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.06, duration: 0.4 }}
              className="glass-panel glow-hover rounded-2xl border border-border-subtle p-5 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                <feature.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-base font-semibold text-primary">{feature.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
