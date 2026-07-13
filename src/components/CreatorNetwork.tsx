"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Camera,
  Laptop,
  MapPin,
  Megaphone,
  MousePointerClick,
  Radio,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

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

const creatorPins = [
  {
    name: "Riya",
    label: "Food Reels",
    top: "24%",
    left: "68%",
    reach: "820k",
    lift: "+31%",
    color: "#22c55e",
  },
  {
    name: "Kabir",
    label: "Campus Culture",
    top: "58%",
    left: "33%",
    reach: "410k",
    lift: "+18%",
    color: "#38bdf8",
  },
  {
    name: "Anika",
    label: "Beauty + Retail",
    top: "39%",
    left: "47%",
    reach: "1.2m",
    lift: "+44%",
    color: "#f59e0b",
  },
  {
    name: "Dev",
    label: "Nightlife",
    top: "68%",
    left: "75%",
    reach: "560k",
    lift: "+22%",
    color: "#fb7185",
  },
  {
    name: "Maya",
    label: "Lifestyle",
    top: "31%",
    left: "25%",
    reach: "690k",
    lift: "+27%",
    color: "#a78bfa",
  },
];

const channelMix = [
  { label: "Reels", value: "48%", color: "#22c55e" },
  { label: "Stories", value: "32%", color: "#38bdf8" },
  { label: "Paid", value: "20%", color: "#f59e0b" },
];

const creatorQueue = [
  { name: "Cafe launch", status: "Brief sent", icon: Camera },
  { name: "Weekend drop", status: "Boosting", icon: Video },
  { name: "Retail footfall", status: "Matching", icon: Users },
];

export default function CreatorNetwork() {
  return (
    <section id="creators" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <Radio size={14} className="text-[#38bdf8]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                Live creator radar
              </span>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                Local creators, mapped like a{" "}
                <span className="text-gradient">performance media plan</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-secondary">
                Cocomo turns creator discovery into a digital marketing command center: audience clusters, campaign briefs, whitelisted ads, and store-level lift in one view.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {serviceTracks.map((track) => (
                <div
                  key={track.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-cards/70 px-4 py-2 text-sm font-medium text-primary"
                >
                  <track.icon size={15} className="text-[#22c55e]" />
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

          <motion.div
            initial={{ y: 28, scale: 0.98 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="mx-auto max-w-[760px]">
              <div className="relative rounded-[28px] border border-white/15 bg-[#0f1117] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-[#07080c]">
                  <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      <Laptop size={14} />
                      Campaign Control
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-1 text-[10px] font-bold text-[#86efac]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                      Live
                    </div>
                  </div>

                  <div className="grid h-[calc(100%-44px)] grid-cols-[0.82fr_1.75fr_0.9fr] overflow-hidden max-md:grid-cols-1">
                    <div className="border-r border-white/10 bg-white/[0.025] p-4 max-md:hidden">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                          Launch Queue
                        </span>
                        <MousePointerClick size={15} className="text-[#38bdf8]" />
                      </div>

                      <div className="flex flex-col gap-3">
                        {creatorQueue.map((item, idx) => (
                          <motion.div
                            key={item.name}
                            initial={{ x: -14 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 + idx * 0.12 }}
                            className="rounded-lg border border-white/10 bg-[#0d1018] p-3"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <item.icon size={15} className="text-[#f59e0b]" />
                              <span className="truncate text-sm font-semibold text-primary">
                                {item.name}
                              </span>
                            </div>
                            <span className="text-xs text-secondary">{item.status}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-lg border border-[#22c55e]/25 bg-[#22c55e]/10 p-3">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs text-[#bbf7d0]">Footfall forecast</span>
                          <ArrowUpRight size={14} className="text-[#22c55e]" />
                        </div>
                        <span className="text-2xl font-bold text-primary">+28%</span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-[#080a10]">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />
                      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.10),transparent_32%,rgba(34,197,94,0.08)_64%,transparent)]" />

                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 330" aria-hidden="true">
                        <path
                          d="M30 258 C110 214 142 132 230 152 C315 171 316 78 455 56"
                          fill="none"
                          stroke="rgba(56,189,248,0.42)"
                          strokeWidth="2"
                          strokeDasharray="8 10"
                        />
                        <path
                          d="M70 70 C145 108 171 184 262 188 C350 192 380 250 465 234"
                          fill="none"
                          stroke="rgba(34,197,94,0.34)"
                          strokeWidth="2"
                        />
                        <path
                          d="M105 292 C170 240 218 264 266 215 C317 163 386 152 448 112"
                          fill="none"
                          stroke="rgba(245,158,11,0.35)"
                          strokeWidth="2"
                          strokeDasharray="4 7"
                        />
                      </svg>

                      <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                          Heat zone
                        </span>
                        <span className="text-sm font-semibold text-primary">Indiranagar + Koramangala</span>
                      </div>

                      {creatorPins.map((pin, idx) => (
                        <motion.div
                          key={pin.name}
                          initial={{ scale: 0.75 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.35 + idx * 0.1, type: "spring", bounce: 0.35 }}
                          className="absolute"
                          style={{ top: pin.top, left: pin.left }}
                        >
                          <div
                            className="relative flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/70 shadow-lg"
                            style={{ borderColor: pin.color, boxShadow: `0 0 22px ${pin.color}66` }}
                          >
                            <span
                              className="absolute h-12 w-12 rounded-full opacity-25 animate-ping"
                              style={{ backgroundColor: pin.color }}
                            />
                            <MapPin size={18} style={{ color: pin.color }} />
                          </div>
                        </motion.div>
                      ))}

                      <motion.div
                        initial={{ y: 16 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.75 }}
                        className="absolute bottom-5 left-5 w-[240px] rounded-lg border border-white/10 bg-black/55 p-4 shadow-2xl backdrop-blur-md max-sm:w-[210px]"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15">
                              <BadgeCheck size={18} className="text-[#fbbf24]" />
                            </div>
                            <div>
                              <span className="block text-sm font-bold text-primary">Anika Rao</span>
                              <span className="text-xs text-secondary">Beauty + Retail</span>
                            </div>
                          </div>
                          <span className="rounded-full bg-[#22c55e]/15 px-2 py-1 text-[10px] font-bold text-[#86efac]">
                            Match 96
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="rounded-md bg-white/[0.06] py-2">
                            <span className="block font-bold text-primary">1.2m</span>
                            <span className="text-secondary">Reach</span>
                          </div>
                          <div className="rounded-md bg-white/[0.06] py-2">
                            <span className="block font-bold text-primary">7.8%</span>
                            <span className="text-secondary">ER</span>
                          </div>
                          <div className="rounded-md bg-white/[0.06] py-2">
                            <span className="block font-bold text-primary">4.9x</span>
                            <span className="text-secondary">ROI</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="border-l border-white/10 bg-white/[0.025] p-4 max-md:hidden">
                      <div className="mb-4 flex items-center gap-2">
                        <BarChart3 size={16} className="text-[#22c55e]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                          Media Mix
                        </span>
                      </div>

                      <div className="flex flex-col gap-4">
                        {channelMix.map((channel, idx) => (
                          <motion.div
                            key={channel.label}
                            initial={{ x: 16 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 + idx * 0.1 }}
                          >
                            <div className="mb-1.5 flex items-center justify-between text-xs">
                              <span className="text-secondary">{channel.label}</span>
                              <span className="font-semibold text-primary">{channel.value}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full"
                                style={{ backgroundColor: channel.color, width: channel.value }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-lg border border-white/10 bg-[#0d1018] p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <TrendingUp size={16} className="text-[#38bdf8]" />
                          <span className="text-sm font-semibold text-primary">Store Lift</span>
                        </div>
                        <span className="text-4xl font-bold tracking-tight text-primary">+42%</span>
                        <p className="mt-2 text-xs leading-relaxed text-secondary">
                          Predicted lift from creator posts plus paid whitelisting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto h-4 w-[86%] rounded-b-[28px] border-x border-b border-white/10 bg-[#161922]" />
              <div className="mx-auto h-2 w-[44%] rounded-b-full bg-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
