"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { outcomesSection } from "@/lib/content";
import {
  Calendar,
  Smile,
  CheckCircle,
  Compass,
  Zap,
  ArrowRight,
  Quote,
  Brain,
  TrendingUp,
  Shield,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  brain: Brain,
  calendar: Calendar,
  smile: Smile,
  "check-circle": CheckCircle,
  compass: Compass,
  zap: Zap,
  "trending-up": TrendingUp,
  shield: Shield,
};

export default function Outcomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="outcomes"
      className="section-padding bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-orange font-semibold text-sm tracking-wider uppercase">
            Your Transformation
          </span>
          <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {outcomesSection.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {outcomesSection.subtitle}
          </p>
        </motion.div>

        {/* Before/After Transformation */}
        <div className="space-y-8 mb-16">
          {outcomesSection.beforeAfter.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                  {/* Before */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-right">
                    <p className="text-gray-600 dark:text-gray-400 line-through">
                      {item.before}
                    </p>
                  </div>

                  {/* Icon/Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="hidden md:block bg-gradient-to-r from-primary-orange to-primary-purple p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="text-white" size={24} />
                    </div>
                    <div className="md:hidden bg-gradient-to-r from-primary-orange to-primary-purple p-3 rounded-full rotate-90">
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-gradient-to-br from-primary-orange/10 to-primary-purple/10 dark:from-primary-orange/20 dark:to-primary-purple/20 p-6 rounded-xl border-2 border-primary-orange dark:border-primary-purple">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-primary-orange to-primary-purple p-2 rounded-lg flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {outcomesSection.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary-peach to-secondary-lavender dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote size={48} className="text-primary-purple" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      TMEW {testimonial.year}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary-orange fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-primary-orange via-primary-purple to-primary-orange bg-[length:200%_100%] animate-gradient-x p-8 md:p-12 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Your Transformation Awaits
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don&apos;t let another semester go by struggling with ineffective study
            methods. Join TMEW 2026 and unlock your full academic potential.
          </p>
          <button
            onClick={() => {
              const registerSection = document.querySelector("#register");
              if (registerSection) {
                registerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-primary-purple font-bold py-4 px-10 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
          >
            Reserve Your Spot Now
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
