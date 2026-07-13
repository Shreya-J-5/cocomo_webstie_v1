"use client";

import { motion } from "framer-motion";
import { Radio, Sparkles, Megaphone, Target } from "lucide-react";

const networkStats = [
  { label: "Creator Matches", value: "100k+", detail: "pre-vetted profiles" },
  { label: "Launch Markets", value: "500+", detail: "cities mapped" },
  { label: "Win Rate", value: "95%", detail: "campaign success" },
  { label: "Creator ROI", value: "4.8x", detail: "average return" },
];

const serviceTracks = [
  { label: "Creator Strategy", icon: Sparkles },
  { label: "Paid Amplification", icon: Megaphone },
  { label: "Geo Targeting", icon: Target },
];

export default function CreatorNetwork() {
  return (
    <section id="creators" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <Radio size={14} className="text-accent-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                Made for real creators
              </span>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
                Creators do what they love.
                <br />
                <span className="text-gradient">We handle the rest.</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-secondary">
                From a home desk to a storefront, Cocomo helps everyday creators launch campaigns, track results, and grow — without the agency headache.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {serviceTracks.map((track) => (
                <div
                  key={track.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-cards/70 px-4 py-2 text-sm font-medium text-primary"
                >
                  <track.icon size={15} className="text-success" />
                  {track.label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {networkStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="mb-1 block text-3xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {stat.label}
                  </span>
                  <span className="mt-2 block text-xs text-secondary/80">{stat.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Illustration: a creator working from a desk */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div className="glass-panel glow-hover rounded-3xl border border-border-subtle p-6">
              <svg viewBox="0 0 440 400" className="h-auto w-full" role="img" aria-label="A creator working on a laptop at a desk">
                <defs>
                  <radialGradient id="bgGlow" cx="50%" cy="45%" r="55%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                {/* ambient glow */}
                <circle cx="220" cy="190" r="160" fill="url(#bgGlow)" />

                {/* floor shadow */}
                <ellipse cx="220" cy="374" rx="180" ry="14" fill="rgba(255,255,255,0.04)" />

                {/* chair back */}
                <rect x="178" y="118" width="84" height="142" rx="20" fill="#16181f" stroke="rgba(255,255,255,0.06)" />

                {/* person */}
                <rect x="212" y="166" width="16" height="22" rx="6" fill="#E9C2A0" />
                <circle cx="220" cy="148" r="30" fill="#E9C2A0" />
                <path d="M191 150 a29 29 0 0 1 58 0 q-3 -36 -29 -36 q-26 0 -29 36 z" fill="#2b2b35" />
                <path d="M190 252 Q188 188 220 182 Q252 188 250 252 Z" fill="#8B5CF6" />
                <rect x="198" y="206" width="15" height="66" rx="7" fill="#7C3AED" />
                <rect x="227" y="206" width="15" height="66" rx="7" fill="#7C3AED" />
                <circle cx="205" cy="270" r="9" fill="#E9C2A0" />
                <circle cx="234" cy="270" r="9" fill="#E9C2A0" />

                {/* desk */}
                <rect x="70" y="272" width="300" height="16" rx="5" fill="#1c1f27" stroke="rgba(255,255,255,0.08)" />
                <rect x="92" y="288" width="14" height="82" rx="3" fill="#15171e" />
                <rect x="334" y="288" width="14" height="82" rx="3" fill="#15171e" />

                {/* laptop */}
                <ellipse cx="220" cy="214" rx="62" ry="30" fill="#8B5CF6" opacity="0.12" />
                <rect x="183" y="260" width="74" height="12" rx="3" fill="#0d0f14" stroke="rgba(255,255,255,0.12)" />
                <path d="M186 260 L194 216 L246 216 L254 260 Z" fill="#15171e" stroke="rgba(255,255,255,0.1)" />
                <rect x="194" y="218" width="52" height="4" rx="2" fill="url(#screenGlow)" />

                {/* plant */}
                <path d="M346 272 L364 272 L360 250 L350 250 Z" fill="#b45309" />
                <circle cx="355" cy="242" r="10" fill="#22c55e" />
                <circle cx="346" cy="246" r="8" fill="#16a34a" />
                <circle cx="364" cy="246" r="8" fill="#16a34a" />

                {/* mug */}
                <rect x="92" y="252" width="20" height="20" rx="3" fill="#3B82F6" />
                <path d="M112 256 q10 0 10 8 q0 8 -10 8" fill="none" stroke="#3B82F6" strokeWidth="3" />

                {/* creative sparkles */}
                <g stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round">
                  <path d="M312 118 h12 M318 112 v12" />
                  <path d="M344 158 h8 M348 154 v8" />
                </g>
                <circle cx="300" cy="150" r="2.5" fill="#8B5CF6" />
                <circle cx="356" cy="120" r="2.5" fill="#3B82F6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
