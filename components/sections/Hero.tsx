"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { heroSection } from "@/lib/content";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Solid Background */}
      <div className="absolute inset-0 bg-white -z-10" />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 -z-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-orange rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: Math.random(),
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom text-center text-black px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm px-6 py-2 rounded-full border border-black/10"
          >
            <Sparkles size={20} />
            <span className="font-medium">Student Learning Conference</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-retro text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-purple"
          >
            {heroSection.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-light tracking-wide text-primary-purple"
          >
            {heroSection.subtitle}
          </motion.p>

          {/* Year */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-retro font-black text-primary-purple"
          >
            {heroSection.year}
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={20} />
              <span>{heroSection.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={20} />
              <span>{heroSection.venue}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <Link
              href="/register"
              className="bg-primary-purple text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#5b5fc7] transform hover:scale-105 transition-all duration-300 text-lg md:text-xl inline-flex items-center gap-3"
            >
              {heroSection.cta}
              <Sparkles size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-sm font-light">{heroSection.scrollText}</span>
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
