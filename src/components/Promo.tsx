"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Promo() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Rasm qismi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-1/2"
        >
          <Image
            src="/images/promo-bg.jpg"
            alt="Special Construction Offer"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 shadow-[0_0_40px_#00f0ff40]"
          />
          <div className="absolute top-4 left-4 bg-neonBlue text-black font-bold px-3 py-1 rounded-lg shadow-[0_0_10px_#00f0ff]">
            25% OFF
          </div>
        </motion.div>

        {/* Matn qismi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Limited Time Construction Discount!
          </h2>
          <p className="text-gray-300 mb-6">
            Book your construction or renovation project this month and receive
            a <span className="text-neonBlue font-semibold">25% discount</span>{" "}
            on design and material services. Don’t miss out on this special
            seasonal offer!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-neonBlue text-black font-semibold px-8 py-3 rounded-xl shadow-[0_0_20px_#00f0ff90] transition"
          >
            Claim Offer
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
