"use client"
import React, { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../utils/animation'

interface Props {
  href: string
  label: string,
  hoverAnimation: boolean
}

function TransitionLink({ href, label, hoverAnimation }: Props) {

  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {

    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <div className='flex flex-col cursor-pointer select-none'>
      <div onClick={handleClick}
      >
        {label}
      </div>
    </div>
  )
}

export default TransitionLink