"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { aboutSection, images } from "@/lib/content";
import { Target, Eye, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white to-secondary-peach dark:from-gray-900 dark:to-gray-800"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.about.main}
                alt="TMEW Community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary-purple/30" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary-orange p-2 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">500+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Students Transformed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-block">
              <span className="text-primary-orange font-semibold text-sm tracking-wider uppercase">
                Who We Are
              </span>
              <div className="h-1 w-20 bg-primary-orange mt-1 rounded-full" />
            </div>

            <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {aboutSection.title}
            </h2>

            <p className="text-xl text-primary-purple dark:text-primary-orange font-semibold">
              {aboutSection.subtitle}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {aboutSection.description}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid gap-4 pt-6">
              <motion.div
                variants={itemVariants}
                className="bg-primary-orange p-6 rounded-xl text-white card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-sm opacity-90">{aboutSection.mission}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-primary-purple p-6 rounded-xl text-white card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                    <p className="text-sm opacity-90">{aboutSection.vision}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
