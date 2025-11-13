"use client";

import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "/tech/js.png" },
  { name: "TypeScript", icon: "/tech/ts.png" },
  { name: "React", icon: "/tech/react.png" },
  { name: "Next.js", icon: "/tech/next.png" },
  { name: "Node.js", icon: "/tech/node.png" },
  { name: "MongoDB", icon: "/tech/mongo.png" },
  { name: "TailwindCSS", icon: "/tech/tailwind.png" },
  { name: "AWS", icon: "/tech/aws.png" },
  { name: "Express.js", icon: "/tech/express.png" },
];

// duplicamos 3 veces para desktop
const loopItems = [...technologies, ...technologies, ...technologies];

export default function TechCarousel() {
  return (
    <>
      {/* 📱 === Versión Mobile (sin movimiento, en columna) === */}
      <div className="grid grid-cols-3 gap-6 items-center py-10 md:hidden">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center group transition-all duration-300"
          >
            <div
              className="relative w-[85px] h-[85px] flex items-center justify-center 
                rounded-2xl bg-[#ffffff0a]  border border-[#ffffff1a] 
                shadow-[0_0_20px_#00ccff33]
                transition-all duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={55}
                height={55}
                className="object-contain opacity-95 drop-shadow-[0_0_10px_#f8f8f877]
                  group-hover:drop-shadow-[0_0_20px_#00ccffcc] 
                  hover:rotate-6 hover:-rotate-y-6 hover:skew-y-3"
              />
            </div>

            <span className="mt-2 text-sm uppercase tracking-wide text-(--gold)">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* 🖥️ === Versión Desktop (scroll infinito) === */}
      <div className="relative w-full overflow-hidden py-16 bg-transparent hidden md:block">
        <div className="animate-infinite-scroll whitespace-nowrap flex gap-24 px-10">
          {loopItems.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-125 group"
            >
              <div
                className="relative w-[90px] h-[90px] flex items-center justify-center 
                rounded-2xl border border-[#ffffff1a] 
                shadow-[0_0_25px_#00ccff33]
                group-hover:shadow-[0_0_35px_#00ccffaa,0_0_65px_#f8f8f8aa]
                transition-all duration-300"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain opacity-95 drop-shadow-[0_0_10px_#f8f8f877]
                  group-hover:drop-shadow-[0_0_20px_#00ccffcc] 
                  hover:rotate-6 hover:-rotate-y-6 hover:skew-y-3"
                />
              </div>

              <span
                className="mt-3 text-sm tracking-wide uppercase text-(--gold)
                group-hover:text-(--blue) transition-all duration-300
                hover:rotate-10 hover:-rotate-x-6 hover:skew-x-3"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
