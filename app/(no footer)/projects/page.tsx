'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import ListSVG from '@/public/list.svg'
import GridSVG from '@/public/grid.svg'
import TransitionLink from '@/components/transitionLink'
import { animateHelloText } from '@/utils/animation'
import SvgButton from '@/components/svgButton'
import GenericButton from '@/components/genericButton'
import Works from '@/components/works'
function Projects() {
  const helloAnimationRef = useRef<any>(null)
  const [layoutMode, setLayoutMode] = useState('list');
  useEffect(() => {
    animateHelloText(helloAnimationRef)
  }, [])

  return (

    <div className='px-0 lg:px-48 pb-64 pt-52'>
      {/* ...your app */}
      <div className='px-24'>
        <section className='flex justify-center'>
          <div style={{ marginTop: "" }} className=" text-title m-0 select-none flex flex-col items-start">
            <span style={{ fontSize: "120px" }}>
              My Work
            </span>
          </div>
          <Image
            className='ml-20 self-end mb-12'
            priority
            src={ArrowSVG}
            alt="Follow us on Twitter"
          />
        </section>

        <section className='lg:flex mt-14 pb-5'>
          <div className='flex'>
            <GenericButton className='w-36 mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer h-20'>
              <a href="https://github.com/Simon-Dao">Github</a>
            </GenericButton>
            <GenericButton className='w-36 mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer h-20'>
              <TransitionLink href="/resume" label='Resume' hoverAnimation={true} />
            </GenericButton>
          </div>
          <div className='grow'></div>
          <div className='flex'>
            <SvgButton setLayoutMode={setLayoutMode} layoutMode={layoutMode} mode='list' size={40} svg={ListSVG} />
            <SvgButton setLayoutMode={setLayoutMode} layoutMode={layoutMode} mode='grid' size={28} svg={GridSVG} />
          </div>
        </section>
        {/* <div style={{borderBottom: "solid white 2px"}}></div> */}
        <Works layoutState={[layoutMode, setLayoutMode]} />

      </div>
    </div>
  )
}

export default Projects