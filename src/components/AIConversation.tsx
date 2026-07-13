"use client";

import { motion } from "framer-motion";
import { User, Bot, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function AIConversation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-cards/5 border-y border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="glass-panel rounded-2xl border border-border-subtle overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-cards border-b border-border-subtle p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot size={16} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Cocomo Assistant</h4>
                <p className="text-xs text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse block" /> Online
                </p>
              </div>
            </div>
            <div className="px-3 py-1 bg-background rounded text-xs text-secondary font-medium font-mono">
              gpt-4-merchant
            </div>
          </div>

          {/* Chat Area */}
          <div className="p-6 md:p-8 flex flex-col gap-6 min-h-[400px]">
            
            {/* User Message */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-cards border border-border-subtle flex items-center justify-center flex-shrink-0 mt-1">
                <User size={14} className="text-secondary" />
              </div>
              <div className="bg-cards border border-border-subtle rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%]">
                <p className="text-sm">How can I increase weekday sales? Tuesday is our slowest day.</p>
              </div>
            </motion.div>

            {/* AI Response */}
            {step >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="bg-background border border-border-subtle rounded-2xl rounded-tl-sm px-5 py-4 w-full">
                    <p className="text-sm text-secondary mb-4">
                      Based on your POS data and local foot traffic patterns, here is a targeted strategy for Tuesdays:
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      {step >= 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 p-3 rounded-lg bg-cards border border-border-subtle">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"><span className="text-accent text-xs">1</span></div>
                          <div>
                            <span className="text-sm font-semibold block">Launch &quot;Tuesday Commuter Combo&quot;</span>
                            <span className="text-xs text-secondary">Bundle top-selling breakfast items with 15% margin optimization.</span>
                          </div>
                        </motion.div>
                      )}
                      
                      {step >= 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 p-3 rounded-lg bg-cards border border-border-subtle">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"><span className="text-accent text-xs">2</span></div>
                          <div>
                            <span className="text-sm font-semibold block">Activate Local Creators</span>
                            <span className="text-xs text-secondary">Partner with 3 local lifestyle creators (2.4M combined reach) to promote the combo.</span>
                          </div>
                        </motion.div>
                      )}

                      {step >= 4 && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-secondary uppercase font-semibold tracking-wider">Expected Revenue Impact</span>
                            <span className="text-2xl font-bold text-primary block mt-1 flex items-center gap-2">
                              +₹42,000 <span className="text-xs px-2 py-1 bg-success/20 text-success rounded-md flex items-center gap-1"><ArrowUpRight size={12}/> 18%</span>
                            </span>
                          </div>
                          <button className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                            Deploy Campaign
                          </button>
                        </motion.div>
                      )}
                    </div>
                    
                    {step < 4 && (
                      <div className="mt-4 flex gap-1 items-center px-1">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-100" />
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-200" />
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}
