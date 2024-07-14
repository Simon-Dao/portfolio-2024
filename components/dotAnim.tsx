"use client"
import React, { ReactNode, useRef } from 'react'
import gsap from 'gsap'

interface UnderlineAnim {
  children: ReactNode
  className?: string
}

function DotAnim({ children, className }: UnderlineAnim) {

  const ref = useRef<HTMLDivElement>(null);

  const animateLinkHoverEnter = () => {
    if (!ref || !ref.current) return;

    const tl = gsap.timeline();

    tl.set(ref.current, { scale: 0 })
      .to(ref.current, { scale: '1', duration: 0.3, ease: 'expo.inOut' })
  }
  const animateLinkHoverExit = () => {
    if (!ref || !ref.current) return;

    const tl = gsap.timeline();

    tl.set(ref.current, { scale: 1 })
      .to(ref.current, { scale: 0, duration: 0.3, ease: 'expo.inOut' })
  }

  return (
    <button onMouseEnter={animateLinkHoverEnter} onMouseLeave={animateLinkHoverExit} className={className + " flex items-center"}>
      <div ref={ref} className='bg-pm h-2 w-2 rounded-full mr-2' style={{ scale: 0 }}>
      </div>
      {children}
    </button>
  )
}

export default DotAnim