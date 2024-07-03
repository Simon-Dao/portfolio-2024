"use client"
import React, { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut, animateLinkHoverEnter, animateLinkHoverExit } from '../utils/animation'

interface Props {
  href: string
  label: string
}

function TransitionLink({ href, label }: Props) {

  const router = useRouter()
  const pathname = usePathname()
  const decorationRef = useRef<any>();

  const handleClick = () => {
    if (pathname !== href) {

      console.log('pleasssee')
      animatePageOut(href, router)
    }
  }

  return (
    <div className='flex flex-col'>
      <div onClick={handleClick}
        onMouseEnter={() => animateLinkHoverEnter(decorationRef)}
        onMouseLeave={() => animateLinkHoverExit(decorationRef)}
      >
        {label}
      </div>
      <div ref={decorationRef} className='mt-1 bg-pm self-center' style={{ height: '2px' }}></div>
    </div>
  )
}

export default TransitionLink