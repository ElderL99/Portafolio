"use client";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      title: "Escuadrón Financiero",
      description:
        "Plataforma completa para gestión de préstamos al personal militar. Incluye autenticación JWT, panel admin, firma digital, contratos PDF, AWS S3 y dashboard moderno.",
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Vite",
        "Tailwind",
        "AWS S3",
      ],
      github: "https://github.com/ElderL99/escuadron-fianciero-demo",
      frontend: "https://escuadron-financiero-front.vercel.app",
    },
    {
      title: "Store DummyJSON",
      description:
        "Tienda moderna construida en React con autenticación, listado de productos, detalle individual, animaciones con Framer Motion y consumo de la API DummyJSON. Incluye rutas protegidas, diseño responsivo y validación de formularios.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/ElderL99/store-DummuJSON",
      frontend: "https://store-dummu-json.vercel.app",
    },
    {
      title: "App de Inventario",
      description:
        "Aplicación para control de productos con entradas y salidas, exportación a PDF/Excel y filtros por rango de fechas. Diseñada con enfoque mobile-first.",
      tech: ["Next.js", "MongoDB", "Express", "Tailwind"],
      github: "https://github.com/ElderL99/Inventario-front",
    },
  ];

  return (
    <section className="relative min-h-screen bg-transparent text-(--foreground) px-6 md:px-16 py-24 backdrop-blur-sm flex flex-col items-center ">
      <motion.h1
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-(--gold) text-center mb-12 "
      >
        Proyectos Destacados
      </motion.h1>

      <div className="grid grid-cols-1  gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: shouldReduceMotion ? 0 : i * 0.08, duration: 0.35 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
