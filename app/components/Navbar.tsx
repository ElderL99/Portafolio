"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../public/Logo.png";
import Image from "next/image";

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
      className="fixed top-0 left-0 w-full z-50  bg-(--background-secondary)/70 border-b border-(--gold)"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 ">
        {/* === Logo === */}

        <Link
          href="/"
          className="text-(--gold) text-lg font-bold tracking-wider hover:text-(--blue) transition-colors flex flex-row-reverse items-center gap-4"
        >
          ADÁN LUGO
          <Image src={Logo} alt="Logo" className="w-10 h-auto rounded " />
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
                    ? "text-(--gold) font-semibold"
                    : "text-(--foreground) hover:text-(--blue)"
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
          className="md:hidden p-2 text-(--gold) hover:text-(--blue) transition-colors"
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
            className="fixed top-0 right-0 h-screen w-64  border-l border-(--gold) shadow-[0_0_25px_var(--gold)] backdrop-blur-sm z-40 flex flex-col items-center pt-24"
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
                        ? "text-(--gold)"
                        : "text-(--foreground) hover:text-(--blue)"
                    )}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Brillo decorativo inferior */}
            <div className="mt-auto mb-12 h-1 w-20 bg-linear-to-r from-(--gold) to-(--blue) rounded-full shadow-[0_0_15px_var(--blue)]" />
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
