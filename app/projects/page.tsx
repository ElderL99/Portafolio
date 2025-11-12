"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
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
      github: "https://github.com/ElderL99/escuadronfinancierapi.git",
      frontend: "https://github.com/ElderL99/escuadronFinanciero-Front.git",
    },
    {
      title: "Dev.to Clone",
      description:
        "Clon funcional de la plataforma Dev.to con autenticación, publicación de artículos, reacciones únicas por usuario y arquitectura limpia en backend.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/ElderL99/devto-clone",
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
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 md:px-16 py-24  ">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-[var(--gold)] text-center mb-12 "
      >
        Proyectos Destacados
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
