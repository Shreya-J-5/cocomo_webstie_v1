"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "The Belgian Waffle Co.", logo: "/logos/belgian-waffle.png" },
  { name: "Petpooja", logo: "/logos/petpooja.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Adobe", logo: "/logos/adobe.png" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "Trends", logo: "/logos/trends.png" },
  { name: "Mamaearth", logo: "/logos/mamaearth.png" },
  { name: "Intas", logo: "/logos/intas.png" },
  { name: "Amity University", logo: "/logos/amity-university.png" },
  { name: "Reliance Digital", logo: "/logos/reliance-digital.png" },
];

export default function TrustBar() {
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="py-12 border-y border-border-subtle bg-cards/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <p className="text-center text-sm font-medium text-secondary uppercase tracking-widest">
          Powering modern merchants and platforms
        </p>
      </div>
      
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
          className="flex w-max items-center gap-8 pl-8 sm:gap-12 sm:pl-12 md:gap-16 md:pl-16"
        >
          {loopedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-[72px] w-[216px] shrink-0 items-center justify-center opacity-65 transition duration-300 hover:scale-105 hover:opacity-100 sm:h-20 sm:w-60 md:w-[260px]"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={360}
                height={120}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
