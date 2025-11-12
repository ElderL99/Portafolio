"use client";
import { motion } from "framer-motion";
import { Github, Globe, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

type Project = {
  id?: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  frontend?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 12 }}
      className="group bg-[var(--background-secondary)] border border-[var(--gold)] rounded-2xl p-6 shadow-[var(--shadow-glow-gold)] hover:shadow-[var(--shadow-glow-blue)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* === Título === */}
      <h3 className="text-[var(--gold)] text-2xl font-bold mb-3 group-hover:text-[var(--blue)] transition-colors">
        {project.title}
      </h3>

      {/* === Descripción === */}
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* === Tecnologías === */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs border border-[var(--blue)] text-[var(--blue)] rounded-full bg-[var(--background)]/40 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* === Enlaces === */}
      <div className="flex flex-wrap gap-4 items-center mt-auto">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-[var(--gold)] hover:text-[var(--blue)] transition-colors text-sm font-medium"
        >
          <Github size={18} /> Backend
        </a>
        {project.frontend && (
          <a
            href={project.frontend}
            target="_blank"
            className="flex items-center gap-2 text-[var(--gold)] hover:text-[var(--blue)] transition-colors text-sm font-medium"
          >
            <Globe size={18} /> Frontend
          </a>
        )}
      </div>
    </motion.div>
  );
}
