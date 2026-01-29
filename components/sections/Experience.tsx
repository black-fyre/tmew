"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { eventExperience, images } from "@/lib/content";
import {
  Calendar,
  Users,
  Mic2,
  Trophy,
  Gift,
  BookOpen,
} from "lucide-react";

const highlightIcons = [Calendar, Users, Mic2, BookOpen, Trophy, Gift];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding bg-gradient-to-b from-secondary-peach to-white dark:from-gray-800 dark:to-gray-900"
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
            The Experience
          </span>
          <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {eventExperience.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {eventExperience.subtitle}
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Large Image - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative h-[300px] md:h-full rounded-2xl overflow-hidden group"
          >
            <Image
              src={images.experience.gallery[0]}
              alt="TMEW Event"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-3xl font-bold">{eventExperience.stats.attendees}</p>
              <p className="text-sm">Expected Attendees</p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-primary-orange p-8 rounded-2xl text-white flex flex-col justify-center"
          >
            <Calendar size={40} className="mb-4" />
            <p className="text-4xl font-bold mb-2">{eventExperience.stats.days}</p>
            <p className="text-lg">Days of Intensive Learning</p>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[200px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={images.experience.gallery[1]}
              alt="TMEW Workshop"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary-lavender p-6 rounded-2xl flex flex-col justify-center text-primary-purple"
          >
            <Mic2 size={32} className="mb-3" />
            <p className="text-3xl font-bold">{eventExperience.stats.speakers}</p>
            <p className="text-sm">Expert Speakers</p>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative h-[200px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={images.experience.gallery[2]}
              alt="TMEW Community"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative h-[200px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={images.experience.gallery[3]}
              alt="TMEW Sessions"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {eventExperience.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-orange p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Grand Prize Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-primary-purple p-8 md:p-12 rounded-2xl text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          <div className="relative z-10">
            <Trophy size={64} className="mx-auto mb-4 animate-float" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ₦50,000 Grand Prize!
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Compete in our learning challenge and win amazing prizes, including
              cash rewards, books, and exclusive learning resources!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
