'use client'
import React, { useEffect, useRef, useState } from 'react'
import DavidScene from '@/components/davidHead';
import gsap from 'gsap'

function Home() {
  const containerRef = useRef(null)
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<string>('500px');

  const handleTitleResize = () => {
    const titleWidth = titleRef.current?.scrollWidth || 0;
    setCarouselWidth(titleWidth+"px");
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
    <div ref={containerRef} className="px-16 h-screen flex items-center">
      {/* ...your app */}
      <div style={{ width: '50%' }} className="flex flex-col justify-center items-center h-full">
        <div className="pb-20">
          <h1 ref={titleRef} onResize={handleTitleResize} className="text-title m-0 select-none">Simon Dao</h1>
          <div className='flex overflow-hidden absolute' style={{ width: carouselWidth }}>
            <div ref={c1} className="text-sd m-0 select-none text-nowrap flex">
              <span className='px-3 text-5xl '>Developer</span>
              <span className='px-3 text-5xl '>Designer</span>
              <span className='px-3 text-5xl '>Problem-Solver</span>
            </div>
            <div ref={c2} className="text-sd m-0 select-none text-nowrap flex">
              <span className='px-3 text-5xl '>Developer</span>
              <span className='px-3 text-5xl '>Designer</span>
              <span className='px-3 text-5xl '>Problem-Solver</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grow h-full items-center cursor-pointer">
        <DavidScene />
      </div>
    </div>
  )
}

export default Home