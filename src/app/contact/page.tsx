"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#111] text-white px-6 pt-24">
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-neonBlue mb-4 drop-shadow-[0_0_15px_#00FFFF]"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let’s discuss how we can help bring your
          vision to life.
        </p>
      </section>

      <section className="max-w-3xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-neonBlue resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00FFFF" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-neonBlue/20 text-neonBlue font-semibold rounded-lg border border-neonBlue hover:bg-neonBlue/30 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Map */}
      <section className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.1)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983.823573964182!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a2b3a5b59%3A0x9d9c8072f4b42e14!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1635168893027!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
