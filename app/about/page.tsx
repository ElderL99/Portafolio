"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[var(--background)] text-[var(--foreground)] px-6 md:px-16 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-[var(--gold)] text-center mb-8"
      >
        Sobre mí
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-center leading-relaxed text-[var(--muted)] text-base md:text-lg"
      >
        <p className="mb-6">
          Soy{" "}
          <span className="text-[var(--gold)] font-semibold">
            Adán Lugo Barrientos
          </span>
          , Desarrollador{" "}
          <span className="text-[var(--blue)] font-semibold">Full Stack</span>
          especializado en crear aplicaciones modernas con tecnologías como{" "}
          <strong>JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>Node.js</strong> y{" "}
          <strong>MongoDB</strong>.
        </p>

        <p className="mb-6">
          Actualmente trabajo como freelance desarrollando soluciones digitales
          para empresas en México. Mi proyecto más destacado es{" "}
          <span className="text-[var(--gold)] font-semibold">
            Escuadrón Financiero
          </span>
          , una plataforma de préstamos enfocada en el sector militar, que
          integra autenticación JWT, subida de archivos a AWS S3, generación de
          contratos digitales y paneles administrativos dinámicos.
        </p>

        <p className="mb-6">
          Me apasiona construir interfaces limpias, optimizadas y accesibles,
          con una arquitectura backend sólida. Además, estoy cursando la{" "}
          <span className="text-[var(--blue)] font-semibold">
            Ingeniería en Software en Brigham Young University Idaho
          </span>
          y me formé como Full Stack Developer en Kodemia.
        </p>

        <p className="mb-8">
          Mi objetivo profesional es seguir creciendo como
          <span className="text-[var(--gold)] font-semibold">
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
