"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ctaSection } from "@/lib/content";
import {
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  AlertCircle,
} from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +ctaSection.eventDate - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="register"
      className="section-padding bg-gradient-to-b from-secondary-lavender to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyNDY5MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
         
          <h2 className="font-retro text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {ctaSection.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            {ctaSection.subtitle}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-primary-orange" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {ctaSection.timerTitle}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {ctaSection.timerSubtitle}
            </p>
          </div>

          {/* Timer Display */}
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-primary-orange p-6 md:p-8 rounded-xl text-white text-center"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-white to-secondary-peach dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ctaSection.features.map((feature, index) => {
              const icons = [CheckCircle, Users, Sparkles];
              const colors = ["bg-green-500", "bg-blue-500", "bg-purple-500"];
              const Icon = icons[index];
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className={`${colors[index]} p-2 rounded-lg flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {ctaSection.registrationLabel}
            </p>
            <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
              {ctaSection.price}
            </p>
            <p className="text-sm font-medium text-primary-orange mb-4">
              {ctaSection.admissionNote}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <AlertCircle size={16} />
              <span>{ctaSection.urgency}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-lg text-center">
              {ctaSection.cta}
            </Link>
          </div>

          {/* Waitlist Note */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            {ctaSection.waitlist}
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400">
            {ctaSection.trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
