"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../utils/animation'

interface Props {
  href: string
  label: string,
  hoverAnimation: boolean,
  text?: string,
  onClick?: any
}

function TransitionLink({ onClick, href, label, hoverAnimation, text }: Props) {

  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {

    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <div onClick={onClick} className='flex flex-col cursor-pointer select-none'>
      <div className={text} onClick={handleClick}
      >
        {label}
      </div>
    </div>
  )
}

export default TransitionLink