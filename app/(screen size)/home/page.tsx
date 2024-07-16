'use client'
import React, { useEffect, useRef, useState } from 'react'
import DavidScene from '@/components/davidHead';
import gsap from 'gsap'

function Home() {

  return (
    <>
      <NormalView />
      <MobileView />
    </>
  )
}

function MobileView() {

  const containerRef = useRef(null)
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<string>('500px');

  const handleTitleResize = () => {
    const titleWidth = titleRef.current?.scrollWidth || 0;
    setCarouselWidth(titleWidth + "px");
  }

  useEffect(() => {

    const t1 = gsap.timeline({ repeat: -1 });
    const contentWidth = c1.current?.scrollWidth || 0;
    const titleWidth = titleRef.current?.scrollWidth || 0;

    setCarouselWidth(titleWidth + 'px')

    t1.set(c1.current, {
      translateX: 0
    })
      .to(c1.current, {
        translateX: -contentWidth,
        ease: 'linear',
        duration: 10, // Adjust the duration to your liking
      }).set(c1.current, { translateX: contentWidth });

    const t2 = gsap.timeline({ repeat: -1 });
    t2.set(c2.current, {
      translateX: 0
    })
      .to(c2.current, {
        translateX: -contentWidth,
        ease: 'linear',
        duration: 10, // Adjust the duration to your liking
      }).set(c2.current, { translateX: contentWidth });

  }, []);

  return (
    <div className='sm:hidden grow flex flex-col justify-center items-center'>

      <h1 ref={titleRef} onResize={handleTitleResize} className="text-6xl m-0 select-none pt-16">Simon Dao</h1>
      <div className='overflow-x-hidden flex h-20' style={{ width: carouselWidth }}>

        <div ref={c1} className="text-lg xs:text-sd m-0 select-none text-nowrap flex">
          <span className='px-3 text-sm xs:text-xl '>Developer</span>
          <span className='px-3 text-sm xs:text-xl '>Designer</span>
          <span className='px-3 text-sm xs:text-xl '>Problem-Solver</span>
        </div>
        <div ref={c2} className="text-lg xs:text-sd m-0 select-none text-nowrap flex">
          <span className='px-3 text-sm xs:text-xl '>Developer</span>
          <span className='px-3 text-sm xs:text-xl '>Designer</span>
          <span className='px-3 text-sm xs:text-xl '>Problem-Solver</span>
        </div>
      </div>

      <div className='grow'>
        <DavidScene />
      </div>

    </div>
  )
}

function NormalView() {

  return (
    <div className="grow hidden sm:flex flex-row justify-center items-center">
      <div className='flex flex-col-reverse md:flex-row h-4/5 w-4/5'>
        <div className='flex grow flex-col self-center'>
          <h1 className="text-title m-0 select-none">Simon Dao</h1>
        </div>
        <div className='grow'>
          <DavidScene />
        </div>
      </div>
    </div>
  )
}

export default Home