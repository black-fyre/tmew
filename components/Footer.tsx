"use client";

import { motion } from "framer-motion";
import { footerSection } from "@/lib/content";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const socialIcons: { [key: string]: React.ElementType } = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-purple text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-retro text-3xl font-bold mb-4">
              TMEW 2026
            </h3>
            <p className="text-lg font-semibold mb-3">
              {footerSection.tagline}
            </p>
            <p className="text-white/80 text-sm mb-6">
              {footerSection.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {footerSection.social.map((social, index) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerSection.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${footerSection.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {footerSection.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <a
                  href={`tel:${footerSection.contact.phone}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {footerSection.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  {footerSection.contact.address}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-xl mb-6">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Get the latest updates about TMEW events and programs
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full bg-white text-primary-purple font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-sm text-center md:text-left"
            >
              {footerSection.copyright}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current animate-pulse" />
              <span>for students</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 text-sm text-white/80"
            >
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
