"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrench, Building, Home } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Statistics from "@/components/Statistics";
import Promo from "@/components/Promo";
export default function HomePage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const smoothX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const smoothY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [smoothX, smoothY]);

  return (
    <main className="relative overflow-hidden text-white">
      {/* Light Trail Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-neonBlue/25 blur-3xl pointer-events-none z-50"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Site"
          fill
          priority
          className="object-cover absolute inset-0 -z-10 opacity-40"
        />
        <motion.div
          style={{
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          className="max-w-3xl px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-neonBlue drop-shadow-[0_0_25px_#00f0ff]"
          >
            Building the Future of Construction
          </motion.h1>
          <p className="mt-6 text-gray-300 text-lg">
            Modern, sustainable, and innovative construction powered by
            technology and vision.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-8 py-3 rounded-full bg-neonBlue text-black font-semibold shadow-[0_0_20px_#00f0ff]"
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-black/40 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
              width={600}
              height={400}
              alt="Team working"
              className="rounded-2xl shadow-[0_0_25px_#00f0ff55]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-neonBlue mb-4">
              Why Choose NeonBuild?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We blend creativity and technical expertise to deliver world-class
              construction projects. From design to completion, our mission is
              to build the future with integrity and excellence.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>✅ 10+ years of experience</li>
              <li>✅ 100% client satisfaction</li>
              <li>✅ Innovative modern architecture</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-neonBlue mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Building size={42} />,
              title: "Architecture Design",
              desc: "Creative and modern building designs that reflect innovation.",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <Wrench size={42} />,
              title: "Construction Management",
              desc: "From planning to execution — we manage it all efficiently.",
              img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <Home size={42} />,
              title: "Interior Solutions",
              desc: "Functional and aesthetic interiors that inspire modern living.",
              img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white/10 border border-white/10 shadow-[0_0_25px_#00f0ff33] overflow-hidden backdrop-blur-md"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={400}
                height={250}
                className="object-cover w-full h-56 opacity-80"
              />
              <div className="p-6 text-center">
                <div className="flex justify-center text-neonBlue mb-3">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <section className="relative h-[90vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80"
          alt="Construction"
          fill
          className="object-cover absolute inset-0 -z-10 opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neonBlue mb-4">
            Building the Future
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Innovative construction solutions with modern design and technology.
          </p>
          <button className="px-6 py-3 bg-neonBlue text-black font-semibold rounded-full shadow-lg shadow-neonBlue/40 hover:scale-105 transition">
            Start Project
          </button>
        </motion.div>
      </section> */}
      <Statistics />
      <Promo />
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-neonBlue mb-10"
          >
            What Our Clients Say
          </motion.h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 }, // 📱 telefon
              768: { slidesPerView: 2 }, // 💻 planshet / desktop
            }}
            className="max-w-5xl"
          >
            {[
              {
                name: "John Smith",
                role: "CEO, BuildTech",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "NeonBuild transformed our office project beyond expectations. Great communication and fast delivery!",
              },
              {
                name: "Anna Johnson",
                role: "Architect",
                img: "https://randomuser.me/api/portraits/women/45.jpg",
                text: "Excellent teamwork, attention to detail, and innovative design ideas. Highly recommended!",
              },
              {
                name: "David Lee",
                role: "Project Manager",
                img: "https://randomuser.me/api/portraits/men/76.jpg",
                text: "Professional and creative — one of the best construction teams we’ve worked with!",
              },
              {
                name: "Sofia Carter",
                role: "Interior Designer",
                img: "https://randomuser.me/api/portraits/women/12.jpg",
                text: "They understood my vision perfectly. The quality of work is top-notch and elegant.",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_25px_#00f0ff33]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-neonBlue"
                    />
                    <p className="text-gray-300 italic max-w-xl">“{t.text}”</p>
                    <div>
                      <h4 className="text-lg font-semibold text-neonBlue">
                        {t.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-[#00f0ff22] to-transparent border-t border-white/10">
        <h2 className="text-4xl font-bold text-neonBlue mb-4">
          Ready to Build Your Dream Project?
        </h2>
        <p className="text-gray-300 mb-8">
          Contact us today and let’s bring your vision to life with NeonBuild.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 rounded-full bg-neonBlue text-black font-semibold shadow-[0_0_25px_#00f0ff]"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
