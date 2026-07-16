'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animationType?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fade' | 'scale';
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  animationType = 'slideUp',
  delay = 0,
}: ScrollAnimationWrapperProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setTimeout(() => {
            ref.current?.classList.remove(`animate-scroll-${animationType}`);
            ref.current?.classList.add(`animate-scroll-${animationType}`);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, delay]);

  const animationMap: { [key: string]: string } = {
    slideUp: 'animate-scroll-up',
    slideDown: 'animate-scroll-down',
    slideLeft: 'animate-scroll-left',
    slideRight: 'animate-scroll-right',
    fade: 'animate-scroll-fade',
    scale: 'animate-scroll-scale',
  };

  return (
    <div ref={ref} className={animationMap[animationType]}>
      {children}
    </div>
  );
}
