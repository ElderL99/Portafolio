"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-transparent text-(--foreground) px-6 md:px-16 py-24 backdrop-blur-sm">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-(--gold) text-center mb-8"
      >
        Sobre mí
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-center leading-relaxed text-(--muted) text-base md:text-lg"
      >
        <p className="mb-6">
          Soy{" "}
          <span className="text-(--gold) font-semibold">
            Adán Lugo Barrientos
          </span>
          , Desarrollador{" "}
          <span className="text-(--blue) font-semibold px-1">Full Stack</span>
          especializado en crear aplicaciones modernas con tecnologías como{" "}
          <strong>JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>Node.js</strong> y{" "}
          <strong>MongoDB</strong>.
        </p>

        <p className="mb-6">
          Actualmente trabajo como freelance desarrollando soluciones digitales
          para empresas en México. Mi proyecto más destacado es{" "}
          <span className="text-(--gold) font-semibold">
            Escuadrón Financiero
          </span>
          , una plataforma de préstamos enfocada en el sector militar, que
          integra autenticación JWT, subida de archivos a AWS S3, generación de
          contratos digitales y paneles administrativos dinámicos.
        </p>

        <p className="mb-6">
          Me apasiona construir interfaces limpias, optimizadas y accesibles,
          con una arquitectura backend sólida. Además, estoy cursando la{" "}
          <a href="https://www.byu.edu">
            Ingeniería en Software en Brigham Young University Idaho
          </a>
          y me formé como Full Stack Developer en{" "}
          <a href="https://www.kodemia.mx">Kodemia</a>
        </p>

        <p className="mb-8">
          Mi objetivo profesional es seguir creciendo como
          <span className="text-(--gold) font-semibold">
            {" "}
            Backend o Full Stack Developer
          </span>
          , colaborar en proyectos innovadores y aplicar las mejores prácticas
          de desarrollo y diseño.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl border border-(--gold) text-(--gold) hover:bg-(--gold) hover:text-black transition-all duration-300"
        >
          Ver proyectos
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-(--blue) text-(--blue) hover:bg-(--blue) hover:text-black transition-all duration-300"
        >
          Contáctame
        </a>
      </motion.div>
    </section>
  );
}
