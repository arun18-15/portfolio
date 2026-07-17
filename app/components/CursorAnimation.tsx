'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorAnimation(): React.JSX.Element {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    // Track theme changes dynamically via MutationObserver
    const currentTheme = document.documentElement.getAttribute("data-theme") as 'dark' | 'light' || 'dark';
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const nextTheme = document.documentElement.getAttribute("data-theme") as 'dark' | 'light' || 'dark';
          setTheme(nextTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let scale = 1;
    let targetScale = 1;
    let opacity = 0;
    let targetOpacity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetOpacity = 1;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        target.closest('input[type="submit"]') ||
        target.closest('input[type="button"]') ||
        target.closest('[role="button"]');

      if (isInteractive) {
        targetScale = 1.8;
      } else {
        targetScale = 1.0;
      }
    };

    const handleMouseLeave = () => {
      targetOpacity = 0;
    };

    const handleMouseEnter = () => {
      targetOpacity = 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationId: number;
    
    const animate = () => {
      // Lerping for smooth trailing response
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      scale += (targetScale - scale) * 0.1;
      opacity += (targetOpacity - opacity) * 0.1;

      // Dark Mode Spotlight Glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 128}px, ${glowY - 128}px, 0) scale(${scale})`;
        glowRef.current.style.opacity = `${opacity}`;
      }
      
      // Light Mode Colored Outer Ring
      if (ringRef.current) {
        // Offset by half the width/height (24px -> 12px)
        ringRef.current.style.transform = `translate3d(${ringX - 12}px, ${ringY - 12}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = `${opacity * 0.85}`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animationId = requestAnimationFrame(animate);
      window.removeEventListener('mousemove', startAnimation);
    };
    window.addEventListener('mousemove', startAnimation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', startAnimation);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Dark Mode: Spotlight Aura (Keeps native cursor) */}
      {theme === 'dark' && (
        <div
          ref={glowRef}
          className="fixed w-64 h-64 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-opacity duration-300 bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(139,92,246,0.05)_45%,transparent_70%)]"
          style={{
            left: '0px',
            top: '0px',
            opacity: 0,
          }}
        />
      )}

      {/* 2. Light Mode: Colored Trailing Ring (Keeps native cursor visible!) */}
      {theme === 'light' && (
        <div
          ref={ringRef}
          className="fixed w-6 h-6 border-2 border-purple-500 bg-purple-500/10 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(168,85,247,0.25)] transition-colors duration-300"
          style={{
            left: '0px',
            top: '0px',
            opacity: 0,
          }}
        />
      )}
    </>
  );
}
