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
  const [layoutMode, setLayoutMode] = useState('grid');
  useEffect(() => {
    animateHelloText(helloAnimationRef)
  }, [])

  return (

    <div className='px-0 lg:px-48 pb-64 pt-52'>
      <div className='px-3 sm:px-24'>
        <section className='flex justify-center'>
          <div style={{ marginTop: "" }} className=" text-title m-0 select-none flex flex-col items-start">
            <span className='text-6xl sm:text-8xl'>
              My Work
            </span>
          </div>
          <Image
            className='ml-20 self-end mb-12 text-pm hidden sm:block'
            priority={false}
            src={ArrowSVG}
            alt=""
          />
        </section>

        <section className='w-full flex mt-14 pb-5'>
          <div className='flex flex-col sm:flex-row overflow-hidden w-full'>
            <GenericButton className='my-3 self-center sm:self-auto sm:my-0 w-36 mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer h-20'>
              <a href="https://github.com/Simon-Dao">Github</a>
            </GenericButton>
            <GenericButton className='my-3 self-center sm:self-auto sm:my-0 w-36 mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer h-20'>
              <TransitionLink href="/resume" label='Resume' hoverAnimation={true} />
            </GenericButton>
          </div>
          <div className='grow'></div>
          <div className='hidden sm:flex'>
            <SvgButton setLayoutMode={setLayoutMode} layoutMode={layoutMode} mode='list' size={40} svg={ListSVG} />
            <SvgButton setLayoutMode={setLayoutMode} layoutMode={layoutMode} mode='grid' size={28} svg={GridSVG} />
          </div>
        </section>
        <Works layoutState={[layoutMode, setLayoutMode]} />

      </div>
    </div>
  )
}

export default Projects