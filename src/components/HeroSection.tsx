"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, TrendingUp, Users, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_72%)]" />
        <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-cards/50 backdrop-blur-sm w-fit">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-xs font-medium text-secondary">Performance marketing agency + AI creator ops</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Creator campaigns that behave like <span className="text-gradient">paid media</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-lg">
              Cocomo Media plans, launches, amplifies, and measures creator-led growth across Instagram, Meta, Facebook, and local markets. Strategy first, automation everywhere, revenue always visible.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              {["Strategy", "Creators", "Paid Social", "Attribution"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group">
                Book a Growth Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-lg border border-border-subtle bg-cards/30 hover:bg-cards transition-all flex items-center justify-center gap-2 group">
                Explore Platform
              </button>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full"
          >
            <div className="relative w-full h-full glass-panel rounded-2xl p-6 shadow-2xl flex flex-col gap-4 overflow-hidden glow-hover">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Campaign Command Center</h3>
                    <p className="text-xs text-secondary">Creators, ads, sales synced</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-md bg-success/10 text-success text-xs font-semibold flex items-center gap-1">
                  <TrendingUp size={12} /> +24.8%
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="flex-grow flex gap-4">
                <div className="w-2/3 flex flex-col gap-4">
                  <div className="h-48 rounded-xl border border-border-subtle bg-background/50 p-4 relative overflow-hidden group">
                     {/* Fake Chart Lines */}
                     <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,70 Q25,80 50,40 T100,20 L100,100 Z" fill="url(#grad)" opacity="0.2" className="animate-pulse" />
                        <path d="M0,70 Q25,80 50,40 T100,20" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                        <defs>
                          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                     </svg>
                     <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
                       <span className="text-xs text-secondary font-medium">Attributed Revenue</span>
                       <motion.span 
                         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                         className="text-3xl font-bold tracking-tight"
                       >
                         $142,300
                       </motion.span>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="rounded-xl border border-border-subtle bg-background/50 p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={14} className="text-accent-secondary" />
                        <span className="text-xs text-secondary">Creator ROI</span>
                      </div>
                      <span className="text-xl font-bold">4.2x</span>
                    </div>
                    <div className="rounded-xl border border-border-subtle bg-background/50 p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={14} className="text-accent" />
                        <span className="text-xs text-secondary">Retention</span>
                      </div>
                      <span className="text-xl font-bold">68%</span>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations Side Panel */}
                <div className="w-1/3 rounded-xl border border-border-subtle bg-background/50 p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-accent" />
                    <span className="text-xs font-semibold">Growth Moves</span>
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                      className="p-3 rounded-lg bg-cards border border-border-subtle text-xs flex flex-col gap-1 cursor-pointer hover:border-accent/50 transition-colors"
                    >
                      <span className="font-medium text-primary">Boost creator whitelist</span>
                      <span className="text-secondary">Predicted lift: +18%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-12 glass-panel p-3 rounded-lg flex items-center gap-3 border border-border-subtle shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <ArrowUpRight size={16} className="text-success" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-secondary">Campaign Live</span>
                <span className="text-sm font-semibold">Creator Burst</span>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-secondary font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
