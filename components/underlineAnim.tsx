"use client"
import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface UnderlineAnim {
  children: ReactNode
  className?: string
}

function UnderlineAnim({ children, className }: UnderlineAnim) {

  const ref = useRef<HTMLDivElement>(null);

  const animateLinkHoverEnter = () => {
    if (!ref || !ref.current) return;

    const tl = gsap.timeline();

    tl.set(ref.current, { width: 0 })
      .to(ref.current, { width: '100%', duration: 0.6, ease: 'expo.inOut' })
  }
  const animateLinkHoverExit = () => {
    if (!ref || !ref.current) return;

    const tl = gsap.timeline();

    tl.set(ref.current, { width: '100%' })
      .to(ref.current, { width: '0px', duration: 0.6, ease: 'expo.inOut' })
  }

  return (
    <button onMouseEnter={animateLinkHoverEnter} onMouseLeave={animateLinkHoverExit} className={className}>
      {children}
      <div ref={ref} className='bg-pm' style={{ height: '2px', width: '0px' }}>
      </div>
    </button>
  )
}

export default UnderlineAnim