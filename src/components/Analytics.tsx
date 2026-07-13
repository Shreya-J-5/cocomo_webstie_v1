"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, Cell
} from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, organic: 2400, paid: 1600 },
  { name: 'Feb', revenue: 5500, organic: 3000, paid: 2500 },
  { name: 'Mar', revenue: 7000, organic: 4000, paid: 3000 },
  { name: 'Apr', revenue: 10000, organic: 5000, paid: 5000 },
  { name: 'May', revenue: 15000, organic: 7000, paid: 8000 },
  { name: 'Jun', revenue: 22000, organic: 10000, paid: 12000 },
];

const retentionData = [
  { name: 'W1', value: 100 },
  { name: 'W2', value: 85 },
  { name: 'W3', value: 75 },
  { name: 'W4', value: 68 },
];

export default function Analytics() {
  const containerRef = useRef(null);
  
  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Enterprise <span className="text-gradient">Analytics</span>
          </h2>
          <p className="text-secondary text-lg">
            Stop guessing. Our platform attributes every dollar spent to actual in-store and online revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-border-subtle"
          >
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold mb-1">Revenue Growth</h3>
                <p className="text-xs text-secondary">Actual vs Projected (YTD)</p>
              </div>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent"></span> Paid</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-secondary"></span> Organic</span>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#A1A1AA" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#A1A1AA" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111113', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="paid" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorPaid)" />
                  <Area type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorOrganic)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Secondary Charts */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-border-subtle flex-1"
            >
              <h3 className="font-semibold mb-4">Customer Retention</h3>
              <div className="h-[120px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retentionData}>
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#111113', borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {
                        retentionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#3B82F6' : '#8B5CF6'} opacity={1 - index * 0.15} />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl border border-border-subtle flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="20" fill="none" strokeDasharray="251.2" strokeDashoffset="60" />
                </svg>
              </div>
              <h3 className="text-secondary text-sm font-medium mb-2 relative z-10">Creator ROI vs Ads</h3>
              <div className="flex items-end gap-2 relative z-10">
                <span className="text-4xl font-bold text-primary">3.2x</span>
                <span className="text-sm text-success mb-1">+45%</span>
              </div>
              <p className="text-xs text-secondary mt-2 relative z-10">Creators outperform traditional Meta ads consistently.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
