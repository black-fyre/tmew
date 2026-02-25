"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { registrationPage, heroSection } from "@/lib/content";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    faculty: "",
    course: "",
    expectations: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const body = new URLSearchParams({
      [registrationPage.fields.name]: formData.name,
      [registrationPage.fields.phone]: formData.phone,
      [registrationPage.fields.email]: formData.email,
      [registrationPage.fields.faculty]: formData.faculty,
      [registrationPage.fields.course]: formData.course,
      [registrationPage.fields.expectations]: formData.expectations,
    });

    try {
      await fetch(registrationPage.formEndpoint, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary-lavender to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center"
        >
          <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
          </div>
          <h2 className="font-retro text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            You&apos;re In!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {registrationPage.successMessage}
          </p>
          <Link
            href="/"
            className="bg-primary-purple text-white font-bold py-3 px-8 rounded-full shadow-[0_3px_0_0_#2d3063] hover:shadow-[0_1px_0_0_#2d3063] hover:translate-y-[2px] transition-all duration-200 inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-lavender to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom section-padding">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-purple dark:hover:text-primary-purple transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="font-retro text-3xl md:text-5xl font-bold text-primary-purple mb-4">
            {registrationPage.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {registrationPage.subtitle}
          </p>

          {/* Event Info Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
              <Calendar size={18} className="text-primary-purple" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {heroSection.date}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
              <MapPin size={18} className="text-primary-purple" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {heroSection.venue}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Phone Number (WhatsApp)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 XXX XXX XXXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Faculty */}
            <div>
              <label htmlFor="faculty" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Faculty
              </label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                required
                value={formData.faculty}
                onChange={handleChange}
                placeholder="e.g. Science, Social Sciences, Arts"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Course */}
            <div>
              <label htmlFor="course" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Course / Department
              </label>
              <input
                type="text"
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. Computer Science"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Expectations */}
            <div>
              <label htmlFor="expectations" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                What are your expectations for the event?
              </label>
              <textarea
                id="expectations"
                name="expectations"
                required
                rows={4}
                value={formData.expectations}
                onChange={handleChange}
                placeholder="Tell us what you hope to gain..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg"
              >
                <AlertCircle size={20} />
                <span>{registrationPage.errorMessage}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-primary-purple text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_0_0_#2d3063] hover:shadow-[0_2px_0_0_#2d3063] hover:translate-y-[2px] transition-all duration-200 text-lg disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={22} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Register Now"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
