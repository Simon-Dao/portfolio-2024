'use client';
import React, { ReactNode, CSSProperties, MouseEventHandler, useState, MouseEvent, useRef, useEffect, useCallback } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
}

function FollowButton({ children, onClick, className, style }: CustomButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  type Coordinate = {
    x: number,
    y: number
  }

  const [contentDelta, setContentDelta] = useState<Coordinate>({ x: 0, y: 0 });
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const [target, setTarget] = useState<Coordinate>({ x: 0, y: 0 });

  // get real-time mouse coordinates
  const onMouseMove = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (!mouseIn) return;

    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;

      setTarget({
        x: relativeX - rect.width / 2,
        y: relativeY - rect.height / 2,
      });
    }
  }, [mouseIn]);

  const onMouseEnter = () => {
    setMouseIn(true);
  }

  const onMouseLeave = () => {
    setMouseIn(false);
    setTarget({ x: 0, y: 0 }); // center the content on mouse leave
  }

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setContentDelta((prevDelta) => {
        const dx = target.x - prevDelta.x;
        const dy = target.y - prevDelta.y;
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          return prevDelta;
        }
        return {
          x: prevDelta.x + dx * 0.1,
          y: prevDelta.y + dy * 0.1,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [target]);

  return (
    <button 
      onMouseMove={onMouseMove} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
      onClick={onClick} 
      className={className} 
    >
      <div 
        ref={ref} 
        style={{ 
          transform: `translate(${contentDelta.x}px, ${contentDelta.y}px)`, 
          willChange: 'transform' 
        }}
      >
        {children}
      </div>
    </button>
  );
}

export default FollowButton;
