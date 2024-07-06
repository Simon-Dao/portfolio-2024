"use client"

import { useEffect } from "react"
import { animatePageIn } from "../../utils/animation"

function Template({children}: {children: React.ReactNode}) {
  
  useEffect(() => {
    animatePageIn()
  }, [])
  
  return (
    <div>
      <div id="cursor-1"></div>
      <div id="banner-1" className="min-h-screen bg-pm z-10 fixed top-0 left-0 w-screen"/>
      {/* <div id="banner-2" className="min-h-screen bg-tt z-10 fixed top-0 left-1/4 w-1/4"/>
      <div id="banner-3" className="min-h-screen bg-tt z-10 fixed top-0 left-2/4 w-1/4"/>
      <div id="banner-4" className="min-h-screen bg-tt z-10 fixed top-0 left-3/4 w-1/4"/> */}
      {children}
    </div>
  )
}

export default Template