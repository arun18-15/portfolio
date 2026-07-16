import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-4 md:px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-lg md:text-xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            Arun Kumar
          </Link>
          <ul className="flex items-center gap-4 md:gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link 
                href="#home" 
                className="text-white hover:text-purple-400 transition-colors text-sm md:text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#skills" 
                className="text-white hover:text-purple-400 transition-colors text-sm md:text-base font-normal"
              >
                Skills
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#certifications" 
                className="text-white hover:text-purple-400 transition-colors text-sm md:text-base font-normal"
              >
                Certifications
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#lab" 
                className="text-white hover:text-purple-400 transition-colors text-sm md:text-base font-normal"
              >
                Projects
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#contact" 
                className="text-white hover:text-purple-400 transition-colors text-sm md:text-base font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

