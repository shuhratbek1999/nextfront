"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-black/40 backdrop-blur-xl border-t border-white/10">
      {/* Neon gradient chiziq */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-300 relative z-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-neonBlue mb-4">NeonBuild</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We bring modern technology and creative vision together to deliver
            outstanding construction projects — from foundations to finishing.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-neonBlue transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 123 Main Street, Tashkent</li>
            <li>📞 +998 90 123 45 67</li>
            <li>✉️ info@neonbuild.com</li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5">
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 border border-white/10 hover:text-neonBlue hover:shadow-[0_0_15px_#00f0ff55] transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 border border-white/10 hover:text-neonBlue hover:shadow-[0_0_15px_#00f0ff55] transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 border border-white/10 hover:text-neonBlue hover:shadow-[0_0_15px_#00f0ff55] transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 border border-white/10 hover:text-neonBlue hover:shadow-[0_0_15px_#00f0ff55] transition"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500 bg-black/60 backdrop-blur-md">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-neonBlue">NeonBuild</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
