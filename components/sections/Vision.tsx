"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { visionSection, images } from "@/lib/content";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Extract numeric value from string (e.g., "500+" -> 500)
      const numericValue = parseInt(value.replace(/\D/g, ""));
      if (!isNaN(numericValue)) {
        const controls = animate(motionValue, numericValue, {
          duration,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        // Add back the suffix if present (e.g., "+", "%")
        const suffix = value.match(/[^\d]+$/)?.[0] || "";
        ref.current.textContent = latest + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, value]);

  return <span ref={ref}>{value}</span>;
}

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      className="section-padding bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container-custom">
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary-orange font-semibold text-sm tracking-wider uppercase">
                {visionSection.sectionLabel}
              </span>
              <div className="h-1 w-20 bg-primary-orange mt-1 rounded-full" />
            </div>

            <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {visionSection.title}
            </h2>

            <p className="text-xl text-primary-purple dark:text-primary-orange font-semibold">
              {visionSection.subtitle}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {visionSection.content}
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.vision.main}
                alt="TMEW Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary-purple/30" />
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary-orange p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="font-retro text-3xl md:text-4xl font-bold text-white mb-4">
              {visionSection.impactTitle}
            </h3>
            <p className="text-white/90 text-lg">
              {visionSection.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {visionSection.impact.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <Counter value={stat.number} />
                  </p>
                  <div className="h-1 w-12 bg-white/50 mx-auto rounded-full" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-white text-lg md:text-xl font-light max-w-3xl mx-auto">
              {visionSection.impactCta}
            </p>
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute top-0 left-0 text-9xl text-primary-orange/20 font-retro leading-none">
              &ldquo;
            </div>
            <p className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic px-12 py-8 relative">
              {visionSection.quote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
