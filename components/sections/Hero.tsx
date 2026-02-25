"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroSection } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-3xl mx-auto text-center px-6 py-24">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-retro text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-purple"
        >
          {heroSection.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl font-semibold text-black leading-snug"
        >
          {heroSection.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          {heroSection.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/register"
            className="inline-block bg-black text-white font-medium py-3.5 px-10 rounded-full shadow-[0_4px_0_0_#424690] hover:shadow-[0_2px_0_0_#424690] hover:translate-y-[2px] transition-all duration-200 text-base md:text-lg"
          >
            {heroSection.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
