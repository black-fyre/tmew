"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { learningPoints } from "@/lib/content";
import {
  Brain,
  Lightbulb,
  Clock,
  Shield,
  Target,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  brain: Brain,
  lightbulb: Lightbulb,
  clock: Clock,
  shield: Shield,
  target: Target,
  "trending-up": TrendingUp,
  "book-open": BookOpen,
};

export default function Learn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="learn"
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
            Curriculum
          </span>
          <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            What You&apos;ll Learn
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Transform your approach to learning with these powerful concepts and
            strategies designed specifically for university students
          </p>
        </motion.div>

        {/* Learning Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learningPoints.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-gradient-to-br from-white to-secondary-peach dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-purple rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-primary-orange transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary-orange to-primary-purple rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            And that&apos;s just the beginning! Each session is packed with actionable
            insights you can apply immediately.
          </p>
          <button
            onClick={() => {
              const registerSection = document.querySelector("#register");
              if (registerSection) {
                registerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary"
          >
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
