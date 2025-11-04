"use client";

import { motion } from "framer-motion";
import {
  Building,
  Wrench,
  Home,
  Truck,
  Hammer,
  Users,
  Star,
} from "lucide-react";

const services = [
  {
    icon: <Building className="w-10 h-10 text-neonBlue" />,
    title: "Commercial Construction",
    desc: "High-quality commercial buildings designed for efficiency and modern aesthetics.",
  },
  {
    icon: <Home className="w-10 h-10 text-neonPink" />,
    title: "Residential Projects",
    desc: "Custom homes and apartments built with precision and comfort in mind.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-neonGreen" />,
    title: "Renovation & Remodeling",
    desc: "Transforming outdated spaces into modern, functional environments.",
  },
  {
    icon: <Truck className="w-10 h-10 text-neonYellow" />,
    title: "Logistics & Supply",
    desc: "Fast, reliable delivery of construction materials to your project site.",
  },
  {
    icon: <Hammer className="w-10 h-10 text-neonOrange" />,
    title: "Interior Design",
    desc: "Creative interior design solutions that bring your vision to life.",
  },
];

const projects = [
  {
    name: "Skyline Tower",
    type: "Commercial",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Modern Villa",
    type: "Residential",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Industrial Plant",
    type: "Infrastructure",
    img: "https://images.unsplash.com/photo-1581091012184-5c8afc6ee8a9?auto=format&fit=crop&w=800&q=80",
  },
];

const team = [
  { name: "Alex Carter", role: "Lead Engineer" },
  { name: "Sophia White", role: "Architect" },
  { name: "James Walker", role: "Project Manager" },
];

const testimonials = [
  {
    name: "John Doe",
    text: "Their work exceeded expectations! The project was on time and within budget.",
  },
  {
    name: "Sarah Johnson",
    text: "Fantastic team — communication and design were flawless throughout.",
  },
  {
    name: "Michael Brown",
    text: "Reliable, creative, and precise — definitely recommend their services.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#111] text-white">
      {/* Services */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Our <span className="text-neonBlue">Services</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                       hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured <span className="text-neonPink">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,0,255,0.2)] bg-white/5 border border-white/10"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-400">{p.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto mb-24 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Meet Our <span className="text-neonGreen">Team</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10"
            >
              <Users className="mx-auto w-10 h-10 mb-4 text-neonGreen" />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Client <span className="text-neonYellow">Feedback</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,0,0.15)]"
            >
              <Star className="mx-auto mb-3 text-neonYellow" />
              <p className="text-gray-300 italic mb-4">"{t.text}"</p>
              <h4 className="text-white font-semibold">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
