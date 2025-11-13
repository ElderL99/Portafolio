import "./globals.css";
import { ReactNode } from "react";
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
