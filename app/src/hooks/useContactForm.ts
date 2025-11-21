"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactMessage } from "../api/contact.js";
import toast from "react-hot-toast";

const ContactSchema = z.object({
  name: z.string().min(2, "Tu nombre es muy corto"),
  email: z.string().email("Correo inválido"),
  message: z.string().min(5, "El mensaje debe ser más largo"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export default function useContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const res = await sendContactMessage(data);

      if (res.data.success) {
        setStatus("success");
        toast.success("Mensaje enviado con éxito 🚀", {
          icon: "🌌",
          duration: 4000,
          className: "toast-gold",
        });

        reset();
      } else {
        setStatus("error");
        toast.error("No se pudo enviar el mensaje ❌", {
          duration: 4000,
          className: "toast-error",
        });
      }
    } catch (err) {
      console.error("❌ Error en el envío:", err);
      setStatus("error");

      toast.error("Hubo un error en el servidor 💥", {
        duration: 4000,
        className: "toast-error",
      });
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    status,
  };
}
