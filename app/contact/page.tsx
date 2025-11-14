"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import useContactForm from "../src/hooks/useContactForm";

export default function ContactPage() {
  const { register, handleSubmit, errors, status } = useContactForm();

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

        {/* Nombre */}
        <input
          type="text"
          placeholder="Tu nombre"
          {...register("name")}
          className="p-3 rounded-lg bg-transparent border border-(--gold)"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Tu correo electrónico"
          {...register("email")}
          className="p-3 rounded-lg bg-transparent border border-(--gold)"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}

        {/* Mensaje */}
        <textarea
          placeholder="Tu mensaje"
          rows={5}
          {...register("message")}
          className="p-3 rounded-lg bg-transparent border border-(--gold)"
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-(--gold) text-(--gold) hover:bg-(--gold) hover:text-black transition-all duration-300"
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
            ✅ Mensaje enviado con éxito.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400 mt-2">
            ❌ Ocurrió un error. Intenta de nuevo.
          </p>
        )}
      </motion.form>
    </section>
  );
}
