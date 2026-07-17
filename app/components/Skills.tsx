'use client';

import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

interface Skill {
  id: number;
  name: string;
  image: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    image: "/assets/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/assets/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/assets/js.png",
  },
  {
    id: 4,
    name: "SQL",
    image: "/assets/sql.png",
  },
  {
    id: 5,
    name: "C",
    image: "/assets/c.png",
  },
  {
    id: 6,
    name: "Java",
    image: "/assets/java-transparent.png",
  },
  {
    id: 7,
    name: "Git",
    image: "/assets/git.png",
  },
  {
    id: 8,
    name: "VS Code",
    image: "/assets/vs.png",
  },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6">
      <ScrollAnimationWrapper animationType="slideUp">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-3xl mx-auto justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center group cursor-pointer w-full"
              >
                <div className="relative w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain group-hover:filter group-hover:drop-shadow-lg group-hover:drop-shadow-purple-500"
                  />
                </div>
                <p className="text-xs sm:text-sm text-white font-medium text-center transition-all duration-300 opacity-0 group-hover:opacity-100 h-4 md:h-6 flex items-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group:hover p {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
