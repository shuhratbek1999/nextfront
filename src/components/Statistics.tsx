"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import NeonParticles from "./NeonParticles";

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({
    Projects: 0,
    Clients: 0,
    Workers: 0,
    Awards: 0,
  });

  // ✅ useMemo to prevent re-renders loop
  const data = useMemo(
    () => [
      { name: "Projects", value: 120 },
      { name: "Clients", value: 80 },
      { name: "Workers", value: 200 },
      { name: "Awards", value: 12 },
    ],
    []
  );

  // 🔹 Counter animation
  useEffect(() => {
    if (isInView) {
      let animationFrameId: number;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        setCounts({
          Projects: Math.floor(progress * 120),
          Clients: Math.floor(progress * 80),
          Workers: Math.floor(progress * 200),
          Awards: Math.floor(progress * 12),
        });
        if (progress < 1) animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111] text-white relative overflow-hidden"
    >
      <NeonParticles />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Our Growth & Achievements
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          NeonBuild continues to grow every year. Here’s a snapshot of our
          progress and success.
        </p>

        {/* 🔢 Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(counts).map(([key, value]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_#00f0ff30]"
            >
              <h3 className="text-5xl font-bold text-neonBlue drop-shadow-[0_0_8px_#00f0ff]">
                {value}
              </h3>
              <p className="mt-2 text-gray-300">{key}</p>
            </motion.div>
          ))}
        </div>

        {/* 📊 Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_25px_#00f0ff40]"
        >
          <div className="w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0A0A",
                    border: "1px solid #00f0ff55",
                    borderRadius: "10px",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#00f0ff"
                  radius={[8, 8, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
