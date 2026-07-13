"use client";

import { motion } from "framer-motion";
import { Radio, Sparkles, Megaphone, Target } from "lucide-react";
import ReelScene3D from "@/components/ReelScene3D";

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
                Made for influencers
              </span>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
                Influencers create.
                <br />
                <span className="text-gradient">We handle the rest.</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-secondary">
                From a bedroom reel to a brand campaign, Cocomo helps influencers find brands, track reach, and grow — without the agency headache.
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

          {/* Interactive 3D: an influencer shooting a reel with multiple phones */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <ReelScene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
