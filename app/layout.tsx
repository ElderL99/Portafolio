import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Adán Lugo | Full Stack Developer",
  description:
    "Portafolio profesional de Adán Lugo Barrientos — Desarrollador Full Stack especializado en JavaScript, React, Next.js, Node.js y MongoDB.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="text-(--foreground) font-(--font-body) bg-transparent">
        <Toaster
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--background-secondary)",
              color: "var(--gold)",
              border: "1px solid var(--gold)",
              boxShadow: "0 0 15px var(--gold)",
              fontFamily: "var(--font-body)",
            },
          }}
        />

        <section>
          <Navbar />
        </section>

        <main className=" min-h-screen p-8">{children}</main>

        <section className="">
          <Footer />
        </section>
      </body>
    </html>
  );
}
