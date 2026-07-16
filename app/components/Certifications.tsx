import Link from "next/link";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

interface Certification {
  id: number;
  title: string;
  file: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Cloud Certificate",
    file: "/certifications/google cloud. certificate.pdf",
  },
  {
    id: 2,
    title: "JAVA - Mastering the Fundamentals",
    file: "/certifications/JAVA-mastering the fundamentals (1).pdf",
  },
  {
    id: 3,
    title: "TCS iON Certificate",
    file: "/certifications/TCSion certficate.pdf",
  },
];

export default function Certifications(): React.JSX.Element {
  return (
    <section id="certifications" className="py-16 md:py-20 px-4 md:px-6">
      <ScrollAnimationWrapper animationType="slideUp">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert) => (
              <Link
                key={cert.id}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-purple-700/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900 transition-all duration-300 h-full flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <svg
                      className="w-10 md:w-12 h-10 md:h-12 mx-auto mb-3 md:mb-4 text-purple-400 group-hover:text-purple-300 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-white text-sm md:text-base font-semibold group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors">
                      View →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
