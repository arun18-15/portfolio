"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header(): React.JSX.Element {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as 'dark' | 'light' | null;
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#lab", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="px-4 md:px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full relative">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-normal text-white hover:text-purple-400 transition-colors font-signature tracking-wide"
            >
              Arun Kumar
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-purple-400/50 text-white transition-all cursor-pointer"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                // Sun Icon (switching to light)
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.38-.38.38-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.38-.38.38-1.02 0-1.41z" />
                </svg>
              ) : (
                // Moon Icon (switching to dark)
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.1.7.2.5-.1 1.1-.6 1.3-3.6 1.3-6 4.7-6 8.6 0 4.8 3.9 8.7 8.7 8.7 3.9 0 7.3-2.5 8.6-6 .2-.5.8-.8 1.3-.6.5.2.8.7.7 1.2-.9 4.7-5 8.2-9.8 8.2-.1-.3-.1-.3-.1-.3z" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="m-0 p-0">
                <Link 
                  href={link.href} 
                  className="text-white hover:text-purple-400 transition-colors text-sm lg:text-base font-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Actions: Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                // Close (X) Icon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-4 rounded-xl bg-white/5 border border-white/10">
            {navLinks.map((link) => (
              <li key={link.href} className="m-0 p-0">
                <Link 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400 transition-colors text-base font-medium block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
