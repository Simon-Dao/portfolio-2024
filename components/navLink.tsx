"use client"
import React, { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../utils/animation'
interface Props {
  label: string
  href: string
}

function NavLink({ label, href }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const decorationRef = useRef<any>();

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
      <div ref={decorationRef} className='mt-1 bg-pm self-center' style={{ height: '2px' }}></div>
    </div>
  )
}

export default NavLink