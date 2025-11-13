"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-16 py-8 border-t border-(--gold) bg-(--background-secondary) text-center"
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/ElderL99"
          target="_blank"
          className="text-(--gold) hover:text-(--blue) transition-colors"
        >
          <Github size={22} />
        </a>
        <a
          href="mailto:adanlugobarrientos@gmail.com"
          className="text-(--gold) hover:text-(--blue) transition-colors"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://linkedin.com/in/adanlugo"
          target="_blank"
          className="text-(--gold) hover:text-(--blue) transition-colors"
        >
          <Linkedin size={22} />
        </a>
      </div>

      <p className="text-xs text-(--muted)">
        © {new Date().getFullYear()} Adán Lugo Barrientos — Desarrollador Full
        Stack
      </p>
    </motion.footer>
  );
}
