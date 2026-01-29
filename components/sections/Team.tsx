"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { foundersSection, images } from "@/lib/content";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="section-padding bg-gradient-to-b from-white to-secondary-lavender dark:from-gray-900 dark:to-gray-800"
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
            The Team
          </span>
          <h2 className="font-retro text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {foundersSection.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {foundersSection.subtitle}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foundersSection.founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={images.team.placeholders[index]}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-orange/90 to-primary-purple/90 flex items-center justify-center"
                  >
                    <div className="text-white text-center px-4">
                      <p className="text-sm leading-relaxed">{founder.bio}</p>
                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-6">
                        <button
                          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={20} />
                        </button>
                        <button
                          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter size={20} />
                        </button>
                        <button
                          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Name and Role (Always Visible) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-sm text-white/90">{founder.role}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="h-1 w-0 bg-gradient-to-r from-primary-orange to-primary-purple group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-orange to-primary-purple p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We&apos;re always looking for passionate individuals who want to make a
              difference in students&apos; lives.
            </p>
            <button className="bg-white text-primary-purple font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Get Involved
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
