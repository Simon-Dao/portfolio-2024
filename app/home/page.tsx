'use client'
import React, { useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import GlobeScene from "@/components/globe";

function Home() {
  const containerRef = useRef(null)

  

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={
        []
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef} className="px-16 grow flex items-center">
        {/* ...your app */}
        <div style={{ width: '50%' }} className="flex flex-col justify-center items-center h-full">
          <div className="pb-20">
            <h1 className="text-title m-0 select-none">Simon Dao</h1>
            <h3 className="text-sd m-0 select-none">Developer, Designer, Problem-Solver</h3>
          </div>
        </div>
        <div className="grow h-full items-center cursor-pointer">
          <GlobeScene />
        </div>
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Home