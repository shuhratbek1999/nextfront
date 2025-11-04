"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#111] text-white px-6 pt-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-neonBlue drop-shadow-[0_0_15px_#00FFFF]"
        >
          About Our Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          At <span className="text-neonBlue">NeonBuild</span>, we believe that
          construction is more than just building structures — it’s about
          creating spaces that inspire and last for generations.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,255,255,0.15)]"
        >
          <h2 className="text-3xl font-semibold mb-4 text-neonBlue">
            Our Mission
          </h2>
          <p className="text-gray-300">
            We are dedicated to delivering cutting-edge construction solutions
            that blend creativity, technology, and sustainability. Our mission
            is to redefine modern infrastructure through innovation and
            precision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80"
            alt="Construction site"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="mt-28 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-neonBlue mb-10"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Carter",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
            },
            {
              name: "Mia Johnson",
              role: "Lead Architect",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
            },
            {
              name: "Daniel Ross",
              role: "Project Manager",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 border border-white/20"
              />
              <h3 className="text-xl font-semibold text-neonBlue">
                {person.name}
              </h3>
              <p className="text-gray-400">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
