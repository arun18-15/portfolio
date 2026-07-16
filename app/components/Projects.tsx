import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Liquid Library",
    description: "A modern library-style web app deployed on Vercel with Supabase PostgreSQL for data storage, delivering responsive browsing and reliable backend support.\n\nTech Stack: React • Vite • Supabase • PostgreSQL",
    link: "https://liquids-library.vercel.app/",
    image: "/projects/liquidlibrar-cover.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-16 md:py-20 px-4 md:px-6">
      <ScrollAnimationWrapper animationType="slideUp">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">
            Projects
          </h2>
          <div className="space-y-12 md:space-y-20">
            {featuredProjects.map((project) => {
              return (
                <div key={project.id} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  {/* Text Content */}
                  <div className="flex-1">
                    <p className="text-purple-400 text-base md:text-lg mb-2 font-medium">
                      Featured Project
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                      {project.title}
                    </h3>
                    {/* Description Card */}
                    <div className="relative z-10 mb-6">
                      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-lg md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 shadow-lg">
                        <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    {/* View Project Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 group"
                        aria-label="View project"
                      >
                        <span className="text-sm md:text-base">View Project</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Image Content */}
                  <div className="w-full lg:w-1/3">
                    <div className="relative w-full aspect-[4/3] rounded-lg md:rounded-2xl overflow-hidden bg-slate-950 p-2 md:p-3 shadow-2xl">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

