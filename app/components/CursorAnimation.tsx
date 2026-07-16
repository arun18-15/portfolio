'use client';

import { useEffect, useRef } from 'react';

export default function CursorAnimation(): React.JSX.Element {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device is a touch screen (coarse pointer)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      // Restore cursor to default and do not render custom cursor animation
      document.documentElement.style.cursor = 'auto';
      return;
    }

    // Set custom global cursor styles dynamically
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      * {
        cursor: none !important;
      }
      a, button, [role="button"], input, select, textarea, .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let scale = 1;
    let targetScale = 1;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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
        targetScale = 2.0;
      } else {
        targetScale = 1.0;
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '0.8';
      if (glowRef.current) glowRef.current.style.opacity = '0.3';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial positioning off-screen
    if (dotRef.current) dotRef.current.style.opacity = '0';
    if (ringRef.current) ringRef.current.style.opacity = '0';
    if (glowRef.current) glowRef.current.style.opacity = '0';

    // Animation loop using requestAnimationFrame for smoother performance
    let animationId: number;
    
    const animate = () => {
      // Lerp (Linear Interpolation) for smooth trailing delay
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      scale += (targetScale - scale) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        // If mouse has never moved, keep it hidden
        if (mouseX !== 0 && dotRef.current.style.opacity === '0') {
          dotRef.current.style.opacity = '1';
        }
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        if (mouseX !== 0 && ringRef.current.style.opacity === '0') {
          ringRef.current.style.opacity = '0.8';
        }
        
        // Add style changes on hover
        if (targetScale > 1.2) {
          ringRef.current.style.borderColor = 'rgba(192, 132, 250, 1)';
          ringRef.current.style.backgroundColor = 'rgba(192, 132, 250, 0.15)';
          ringRef.current.style.boxShadow = '0 0 25px rgba(192, 132, 250, 0.8), inset 0 0 12px rgba(192, 132, 250, 0.3)';
        } else {
          ringRef.current.style.borderColor = 'rgba(192, 132, 250, 0.8)';
          ringRef.current.style.backgroundColor = 'transparent';
          ringRef.current.style.boxShadow = '0 0 20px rgba(192, 132, 250, 0.5), inset 0 0 10px rgba(192, 132, 250, 0.2)';
        }
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) scale(${scale * 1.3})`;
        if (mouseX !== 0 && glowRef.current.style.opacity === '0') {
          glowRef.current.style.opacity = '0.3';
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Delay start of animation loop until mouse moves to prevent weird jump
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
      styleEl.remove();
    };
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <div
        ref={glowRef}
        className="fixed w-12 h-12 border border-purple-300/20 rounded-full pointer-events-none z-[9997] mix-blend-screen transition-opacity duration-300"
        style={{
          left: '-24px',
          top: '-24px',
          opacity: 0,
          boxShadow: '0 0 20px rgba(192, 132, 250, 0.2)',
        }}
      />
      
      {/* Middle cursor ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9998] mix-blend-screen transition-[opacity,border-color,background-color,box-shadow] duration-300"
        style={{
          left: '-16px',
          top: '-16px',
          opacity: 0,
          boxShadow: '0 0 20px rgba(192, 132, 250, 0.5), inset 0 0 10px rgba(192, 132, 250, 0.2)',
        }}
      />
      
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-opacity duration-300"
        style={{
          left: '-4px',
          top: '-4px',
          opacity: 0,
          boxShadow: '0 0 12px rgba(192, 132, 250, 0.9), 0 0 24px rgba(192, 132, 250, 0.5)',
        }}
      />
    </>
  );
}
