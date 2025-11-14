"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactMessage } from "../api/contact.js";

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

  // 🟩 Enviar formulario
  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const res = await sendContactMessage(data);

      if (res.data.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Error en el envío:", err);
      setStatus("error");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    status,
  };
}
