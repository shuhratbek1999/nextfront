"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neonBlue">
          NeonBuild
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition ${
                pathname === link.path
                  ? "text-neonBlue font-semibold"
                  : "hover:text-neonBlue"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-neonBlue transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide from Right) */}
      <AnimatePresence>
        {open && (
          <>
            {/* 🔹 Qora fon (overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black opacity-85 z-40"
              onClick={() => setOpen(false)} // 🔹 tashqariga bosganda yopiladi
            />

            {/* 🔹 Menyu paneli */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 pt-5 right-0 h-screen w-52 bg-[#0a0a0a] border-l border-white/10 shadow-[0_0_25px_#00f0ff55] z-50 flex flex-col items-center justify-start space-y-2 text-gray-300 text-lg"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)} // 🔹 link bosilganda ham yopiladi
                  className={`transition ${
                    pathname === link.path
                      ? "text-neonBlue font-semibold"
                      : "hover:text-neonBlue"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
