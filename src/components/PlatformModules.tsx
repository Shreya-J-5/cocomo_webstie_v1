"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Bot, Users, Megaphone, BarChart2, 
  PieChart, RefreshCw, MapPin, Target 
} from "lucide-react";

const features = [
  { icon: Bot, title: "Influencer Discovery", desc: "Your 24/7 autonomous creator matchmaking." },
  { icon: Users, title: "Creator Intelligence", desc: "Data-backed influencer ROI and audience analysis." },
  { icon: Megaphone, title: "Social Automation", desc: "End-to-end campaign creation for Meta & Instagram." },
  { icon: BarChart2, title: "Platform Analytics", desc: "Real-time social engagement and sales attribution." },
  { icon: PieChart, title: "Ad Budget Allocation", desc: "Dynamic ad spending on viral creator posts." },
  { icon: RefreshCw, title: "Content Amplification", desc: "Automated whitelisting of top-performing content." },
  { icon: MapPin, title: "Geo-Targeted Creators", desc: "Reach customers via local lifestyle influencers." },
  { icon: Target, title: "ROI Predictions", desc: "Forecast revenue impact before spending on creators." },
];

export default function PlatformModules() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-cards/10 border-y border-border-subtle">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Interactive <span className="text-gradient">Platform Modules</span>
          </h2>
          <p className="text-secondary text-lg">
            Everything you need to automate growth, built into one seamless interface.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[700px]">
          
          {/* Central Mobile Mockup */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-20 w-[300px] h-[600px] bg-background border-[8px] border-cards rounded-[3rem] shadow-[0_0_50px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col hidden md:flex"
          >
            {/* Phone Top Notch/Island */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
              <div className="w-24 h-5 bg-cards rounded-b-xl" />
            </div>
            
            {/* Phone Screen Content (Abstract App UI) */}
            <div className="flex-1 p-5 pt-12 flex flex-col gap-4 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent z-0" />
               <div className="relative z-10 flex items-center justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-accent/20 animate-pulse" />
                 <div className="w-20 h-4 rounded-full bg-cards border border-border-subtle" />
               </div>
               <div className="relative z-10 w-full h-32 rounded-2xl bg-gradient-to-r from-accent to-accent-secondary opacity-80 shadow-lg p-4 flex flex-col justify-end">
                 <span className="text-white font-bold text-2xl mb-1">4.8x ROI</span>
                 <span className="text-white/80 text-xs">Overall Campaign Health</span>
               </div>
               
               <div className="relative z-10 grid grid-cols-2 gap-3 mt-4">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="h-20 rounded-xl bg-cards border border-border-subtle flex flex-col items-center justify-center gap-2">
                     <div className="w-6 h-6 rounded-md bg-border-subtle" />
                     <div className="w-12 h-2 rounded-full bg-border-subtle/50" />
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Orbiting / Popping Modules */}
          {features.map((feature, idx) => {
            // Calculate positions in a circle/ellipse around the phone
            const angle = (idx * 45) * (Math.PI / 180);
            
            // Adjust radius based on screen size (default to desktop for SSR)
            const radiusX = isMobile ? 140 : 420;
            const radiusY = isMobile ? 260 : 300;
            
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;
            
            return (
              <motion.div
                key={idx}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x, y, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3 + (idx * 0.1), 
                  duration: 0.7, 
                  type: "spring",
                  bounce: 0.4
                }}
                className="absolute z-30 flex flex-col items-center gap-2 md:gap-3 w-40 md:w-56 group"
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-panel bg-cards border border-border-subtle flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-accent transition-all duration-300 relative z-10">
                    <feature.icon className="text-secondary group-hover:text-primary transition-colors w-5 h-5 md:w-6 md:h-6" />
                    <div className="absolute inset-0 bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </div>
                
                <div className={`glass-panel p-3 md:p-4 rounded-xl border border-border-subtle opacity-80 group-hover:opacity-100 group-hover:border-accent/50 transition-all duration-300 text-center shadow-lg ${
                  Math.cos(angle) > 0.5 ? 'md:translate-x-4' : 
                  Math.cos(angle) < -0.5 ? 'md:-translate-x-4' : ''
                }`}>
                  <h3 className="text-xs md:text-sm font-semibold mb-1 text-primary">{feature.title}</h3>
                  <p className="hidden md:block text-xs text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
