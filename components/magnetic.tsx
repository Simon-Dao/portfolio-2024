'use client';
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactNode;
}

function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 2, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 2, ease: 'elastic.out(1, 0.3)' });

    function handleMouseMove(e: MouseEvent) {
      if (magnetic.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } = magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.5);
        yTo(y * 0.5);
      }
    }

    function handleMouseLeave() {
      xTo(0);
      yTo(0);
    }

    magnetic.current?.addEventListener('mousemove', handleMouseMove);
    magnetic.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magnetic.current?.removeEventListener('mousemove', handleMouseMove);
      magnetic.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
}

export default Magnetic;
