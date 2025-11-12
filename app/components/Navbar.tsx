"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // ✨ Cerrar el sidebar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpieza al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--background-secondary)]/70 border-b border-[var(--gold)]"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Logo === */}
        <Link
          href="/"
          className="text-[var(--gold)] text-lg font-bold tracking-wider hover:text-[var(--blue)] transition-colors"
        >
          ADÁN LUGO
        </Link>

        {/* === Links desktop === */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "text-sm uppercase tracking-wide transition-colors",
                  pathname === href
                    ? "text-[var(--gold)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--blue)]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Botón móvil === */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--gold)] hover:text-[var(--blue)] transition-colors"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Sidebar móvil === */}
      <AnimatePresence>
        {open && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-64 bg-[var(--background-secondary)]/95 border-l border-[var(--gold)] shadow-[0_0_25px_var(--gold)] backdrop-blur-xl z-40 flex flex-col items-center pt-24"
          >
            <ul className="flex flex-col gap-8 text-center">
              {links.map(({ href, label }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={href}
                    className={clsx(
                      "text-lg font-medium uppercase tracking-wide transition-colors",
                      pathname === href
                        ? "text-[var(--gold)]"
                        : "text-[var(--foreground)] hover:text-[var(--blue)]"
                    )}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Brillo decorativo inferior */}
            <div className="mt-auto mb-12 h-1 w-20 bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] rounded-full shadow-[0_0_15px_var(--blue)]" />
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
