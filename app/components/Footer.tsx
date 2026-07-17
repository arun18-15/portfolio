import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-12 md:py-16 px-4 md:px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Contact
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-6 md:mb-8">
            I&apos;m always open to new opportunities, collaborations, and projects that make a real impact. Let&apos;s connect.
          </p>
          <a
            href="mailto:arundimmagudi@gmail.com"
            className="text-sm md:text-base text-purple-400 hover:text-purple-300 transition-colors inline-block break-all"
          >
            arundimmagudi@gmail.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 md:gap-6 mt-10 md:mt-12">
          {/* Instagram */}
          <div className="relative group">
            <Link
              href="https://www.instagram.com/_arun.18__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform"
              aria-label="Instagram"
            >
              <Image
                src="/assets/insta.webp"
                alt="Instagram"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs text-white-forced rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 scale-95 group-hover:scale-100">
              Instagram
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group">
            <Link
              href="https://github.com/arun18-15"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform"
              aria-label="GitHub"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs text-white-forced rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 scale-95 group-hover:scale-100">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <Link
              href="https://www.linkedin.com/in/arun1815"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform"
              aria-label="LinkedIn"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs text-white-forced rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 scale-95 group-hover:scale-100">
              LinkedIn
            </span>
          </div>

          {/* Discord */}
          <div className="relative group">
            <Link
              href="https://discord.com/users/1404863867108069407"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform"
              aria-label="Discord"
              title="Discord Profile"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs text-white-forced rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 scale-95 group-hover:scale-100">
              Discord
            </span>
          </div>
        </div>


        <div className="text-center mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col items-center gap-2">
          <p className="text-white/70 text-xs md:text-sm font-normal">
            A portfolio designed & built by <span className="font-bold text-white">D ARUN KUMAR</span> with{" "}
            <svg 
              className="w-4.5 h-4.5 text-rose-500 fill-current animate-pulse drop-shadow-[0_0_6px_rgba(244,63,94,0.9)] inline-block align-middle mb-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </p>
          <p className="text-white/60 text-xs md:text-sm">
            © {new Date().getFullYear()} DIMMAGUDI ARUN KUMAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
