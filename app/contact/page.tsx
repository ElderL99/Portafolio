"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mzzbvqra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-transparent backdrop-blur-sm text-(--foreground) px-6 md:px-16 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-(--gold) text-center mb-12"
      >
        Contáctame
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-(--background-secondary) border border-(--gold) shadow-(--shadow-glow-gold) rounded-2xl w-full max-w-lg p-8 flex flex-col gap-6"
      >
        <div className="flex items-center gap-3">
          <Mail className="text-(--gold)" size={22} />
          <h2 className="text-xl font-semibold text-(--gold)">
            Envíame un mensaje
          </h2>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-transparent border border-(--gold) text-(--foreground) placeholder:text-(--muted) focus:outline-none focus:border-(--blue) transition-all"
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          required
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-transparent border border-(--gold) text-(--foreground) placeholder:text-(--muted) focus:outline-none focus:border-(--blue) transition-all"
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-transparent border border-(--gold) text-(--foreground) placeholder:text-(--muted) focus:outline-none focus:border-(--blue) transition-all"
        ></textarea>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-(--gold) text-(--gold) hover:bg-(--gold) hover:text-black transition-all duration-300 disabled:opacity-50"
        >
          {status === "loading" ? (
            "Enviando..."
          ) : (
            <>
              <Send size={18} /> Enviar
            </>
          )}
        </button>

        {status === "success" && (
          <p className="text-center text-(--blue) mt-2">
            ✅ Mensaje enviado con éxito. ¡Gracias por contactarme!
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-red-400 mt-2">
            ❌ Ocurrió un error. Intenta de nuevo más tarde.
          </p>
        )}
      </motion.form>
    </section>
  );
}
