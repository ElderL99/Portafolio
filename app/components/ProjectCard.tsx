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
      className="group bg-(--background-secondary)/60 backdrop-blur-md border border-(--gold) rounded-2xl p-6 shadow-(--shadow-glow-gold) hover:shadow-(--shadow-glow-blue) transition-all duration-300 flex flex-col justify-between"
    >
      {/* === Título === */}
      <h3 className="text-(--gold) text-2xl font-bold mb-3 group-hover:text-(--blue) transition-colors">
        {project.title}
      </h3>

      {/* === Descripción === */}
      <p className="text-(--muted) text-lg leading-relaxed mb-5">
        {project.description}
      </p>

      {/* === Tecnologías === */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs border border-(--blue) text-(--blue) rounded-full bg-(--background)/40 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* === Enlaces === */}
      {/* === Enlaces === */}
      <div className="flex flex-wrap gap-4 items-center mt-auto">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-(--gold) 
               transition-all duration-300 
               relative px-3 py-1 rounded-lg
               before:absolute before:inset-0 before:rounded-lg 
               before:bg-(--blue) before:opacity-0 before:blur-lg
               before:transition-all before:duration-300
               hover:before:opacity-40 
               hover:text-(--blue)"
        >
          <Github size={18} className="drop-shadow-[0_0_6px_#00ccff88]" />
          Backend
        </a>

        {project.frontend && (
          <a
            href={project.frontend}
            target="_blank"
            className="flex items-center gap-2 text-(--gold)
                 transition-all duration-300 
                 relative px-3 py-1 rounded-lg
                 before:absolute before:inset-0 before:rounded-lg 
                 before:bg-(--gold) before:opacity-0 before:blur-lg
                 before:transition-all before:duration-300
                 hover:before:opacity-40 
                 hover:text-(--blue)"
          >
            <Globe size={18} className="drop-shadow-[0_0_6px_#f8f8f8aa]" />
            Frontend
          </a>
        )}
      </div>
    </motion.div>
  );
}
