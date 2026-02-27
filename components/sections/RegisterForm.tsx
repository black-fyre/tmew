"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Loader2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import { registrationPage, ctaSection, images } from "@/lib/content";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    faculty: "",
    course: "",
    hearAbout: "",
    hearAboutOther: "",
    expectations: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        faculty: formData.faculty,
        course: formData.course,
        hearAbout: formData.hearAbout === "Other" ? formData.hearAboutOther : formData.hearAbout,
        expectations: formData.expectations,
      };
      await fetch(registrationPage.sheetsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    const { paymentDetails, whatsappGroup } = registrationPage;
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg w-full"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h2 className="font-retro text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              You&apos;re In!
            </h2>
            <p className="text-gray-500 text-sm">{registrationPage.successMessage}</p>
          </div>

          {/* Payment options */}
          <div className="space-y-4 mb-6">
            {/* Online */}
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-gray-800">Pay Online</span>
                <span className="text-lg font-bold text-primary-purple">{paymentDetails.online.amount}</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm text-gray-700 mb-3">
                <p><span className="text-gray-400">Bank:</span> {paymentDetails.online.bank}</p>
                <p><span className="text-gray-400">Account:</span> <span className="font-semibold tracking-wide">{paymentDetails.online.accountNumber}</span></p>
                <p><span className="text-gray-400">Name:</span> {paymentDetails.online.accountName}</p>
              </div>
              <a
                href={paymentDetails.online.receiptWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-green-600 transition-colors"
              >
                Send Receipt on WhatsApp
              </a>
            </div>

            {/* Onsite */}
            <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-800">Pay On-site</p>
                <p className="text-xs text-gray-400 mt-0.5">{paymentDetails.onsite.note}</p>
              </div>
              <span className="text-lg font-bold text-primary-orange">{paymentDetails.onsite.amount}</span>
            </div>
          </div>

          {/* WhatsApp group */}
          <a
            href={whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary-purple text-white font-bold py-3 rounded-full shadow-[0_3px_0_0_#2d3063] hover:shadow-[0_1px_0_0_#2d3063] hover:translate-y-[2px] transition-all duration-200 mb-4"
          >
            Join WhatsApp Group for Updates
          </a>

          <Link
            href="/"
            className="block w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="px-6 pt-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-purple transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-52px)]">

        {/* ── Left: Form ── */}
        <div className="px-8 md:px-14 py-8">
          <p className="text-primary-purple text-sm font-semibold mb-1">Register</p>
          <h1 className="font-retro text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The Mechanics of Learning 2.0
          </h1>

          {/* Step progress */}
          <div className="flex gap-2 mb-8">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-primary-purple" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleNext}
                className="space-y-5"
              >
                <h2 className="text-base font-bold text-gray-800">Step 1: Your Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08000000000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-purple text-white font-bold py-3.5 rounded-lg shadow-[0_4px_0_0_#2d3063] hover:shadow-[0_2px_0_0_#2d3063] hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                >
                  Next: School Details
                  <ChevronRight size={20} />
                </button>
              </motion.form>

            ) : (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <h2 className="text-base font-bold text-gray-800">Step 2: School Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Faculty <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="faculty"
                      required
                      value={formData.faculty}
                      onChange={handleChange}
                      placeholder="e.g. Science"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Course <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    How did you hear about The Mechanics of Learning? <span className="text-red-500">*</span>
                  </p>
                  <div className="space-y-2">
                    {["Friends", "Classmates", "Social media"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="hearAbout"
                          value={option}
                          required
                          checked={formData.hearAbout === option}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary-purple"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hearAbout"
                        value="Other"
                        checked={formData.hearAbout === "Other"}
                        onChange={handleChange}
                        className="w-4 h-4 accent-primary-purple"
                      />
                      <span className="text-sm text-gray-700">Other:</span>
                      {formData.hearAbout === "Other" && (
                        <input
                          type="text"
                          name="hearAboutOther"
                          value={formData.hearAboutOther}
                          onChange={handleChange}
                          required
                          placeholder="Please specify"
                          className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all"
                        />
                      )}
                    </label>
                  </div>
                </div>

                {/* Expectations */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    What are your expectations for the event? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="expectations"
                    required
                    rows={3}
                    value={formData.expectations}
                    onChange={handleChange}
                    placeholder="Tell us what you hope to gain..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-primary-purple focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                    <AlertCircle size={18} />
                    <span>{registrationPage.errorMessage}</span>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-300 text-gray-700 font-medium py-3.5 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={18} />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex-1 bg-primary-purple text-white font-bold py-3.5 rounded-lg shadow-[0_4px_0_0_#2d3063] hover:shadow-[0_2px_0_0_#2d3063] hover:translate-y-[2px] transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <><Loader2 size={20} className="animate-spin" /> Submitting...</>
                    ) : (
                      "Register Now"
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* ── Right: Countdown + Event card ── */}
        <div className="bg-gray-50 px-8 md:px-12 py-10 flex flex-col gap-8 border-l border-gray-100">

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Event flyer — drop your image into /public/flyer.jpg */}
          <div className="relative flex-1 rounded-2xl overflow-hidden min-h-[320px]">
            <Image
              src={images.flyer}
              alt="Event flyer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
