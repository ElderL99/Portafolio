"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import FloatingSphere from "./components/FloatingSphere";

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
        number: { value: 70 },
        color: { value: "#d4af37" },
        links: { enable: true, color: "#00b3ff", distance: 150 },
        move: { enable: true, speed: 0.6 },
        opacity: { value: 0.5 },
        size: { value: 2 },
      },
    }),
    []
  );

  if (!init) return null; // Evita error mientras se inicializa

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6 text-[var(--foreground)] bg-transparent">
      {/* 🌌 Fondo de partículas */}
      <Particles className="absolute inset-0 -z-10" options={options} />

      {/* === Contenido principal === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-[var(--gold)] tracking-widest drop-shadow-[0_0_10px_#d4af37aa]"
      >
        ADÁN LUGO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg md:text-2xl text-[var(--muted)]"
      >
        Full Stack Developer • JavaScript | Next.js | Node.js | MongoDB
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
        >
          Ver proyectos
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-black transition-all duration-300"
        >
          Contáctame
        </a>
      </motion.div>
    </section>
  );
}
