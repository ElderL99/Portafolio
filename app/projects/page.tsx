"use client";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      title: "LC Inova",
      description:
        "LC Inova es un proyecto de desarrollo de software enfocado en la creación de plataformas web, sistemas internos y APIs escalables para empresas y emprendedores que necesitan soluciones tecnológicas reales, seguras y bien diseñadas. En LC Inova diseño y construyo productos end-to-end: desde la idea y la arquitectura hasta el despliegue en producción. Trabajo con aplicaciones enfocadas en automatizar procesos, centralizar información y mejorar la toma de decisiones, siempre priorizando rendimiento, seguridad y experiencia de usuario. He desarrollado dashboards administrativos, sistemas con autenticación y roles, manejo de datos en tiempo real, carga de archivos, integraciones externas y despliegues en la nube. Cada proyecto está pensado para ser mantenible, escalable y alineado a objetivos de negocio reales. LC Inova representa mi enfoque como ingeniero: construir software que la gente realmente usa, con impacto directo y medible.",
      tech: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "REST APIs",
      ],
      github: "https://github.com/ElderL99/lcinova-backend",
      frontend: "https://lcinova.com.mx",
    },

    {
      title: "Escuadrón Financiero",
      description:
        "Escuadrón Financiero es una plataforma web integral para la gestión de préstamos dirigida al personal militar, diseñada para digitalizar y automatizar todo el flujo del crédito. El sistema permite el registro y autenticación segura de usuarios mediante JWT, gestión de roles (admin/usuario), creación y seguimiento de solicitudes de préstamo, carga y administración de documentos, generación de contratos en PDF y firma digital. Incluye un panel administrativo con métricas clave, control de estados, historial de solicitudes y un dashboard moderno enfocado en eficiencia operativa. La plataforma integra almacenamiento de archivos en AWS S3, arquitectura escalable y una experiencia de usuario clara, segura y orientada a procesos reales de negocio.",
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Vite",
        "Tailwind CSS",
        "AWS S3",
        "JWT",
        "REST APIs",
      ],
      github: "https://github.com/ElderL99/escuadron-fianciero-demo",
      frontend: "https://escuadronfinanciero.com",
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
            transition={{
              delay: shouldReduceMotion ? 0 : i * 0.08,
              duration: 0.35,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
