"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TechCarousel from "./components/TechCarousel";

export default function HomePage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 100 },
        },
      },
      particles: {
        number: { value: 30 },
        color: { value: "#d4af37" },
        links: { enable: true, color: "#00b3ff", distance: 150 },
        move: { enable: true, speed: 0.5 },
        opacity: { value: 0.5 },
        size: { value: 1.8 },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6 text-(--foreground) bg-transparent">
      {/* 🌌 Fondo partículas */}
      <Particles className="absolute inset-0 -z-10" options={options} />

      {/* === Hero === */}
      <div className="mt-20 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-(--gold) tracking-[0.2em] drop-shadow-[0_0_10px_#d4af37aa]"
        >
          ADÁN LUGO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-(--muted) max-w-2xl mx-auto"
        >
          Full Stack Developer • JavaScript | Next.js | Node.js | MongoDB
        </motion.p>

        {/* ⭐ Botones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex gap-4 justify-center items-center "
        >
          <a
            href="/projects"
            className="px-3 py-3 rounded-xl border border-(--gold) text-(--gold) hover:bg-(--gold)/10 hover:text-black transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-(--blue) text-(--blue) hover:bg-(--blue)/10 hover:text-white transition-all duration-300"
          >
            Contáctame
          </a>
        </motion.div>
      </div>

      {/* === Carrusel integrado === */}
      <div className="w-full mt-16 md:mt-24  bg-transparent">
        <TechCarousel />
      </div>
    </section>
  );
}
