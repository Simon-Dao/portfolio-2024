'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import TextInput from '@/components/textInput'
import BubbleButton from '@/components/bubbleButton'
import ImageGallery from '@/components/imageGallery'
import { animateHelloText } from '@/utils/animation'



function Project() {
  const helloAnimationRef = useRef<any>(null)

  useEffect(() => {
    animateHelloText(helloAnimationRef)
  }, [])

  return (

    <div className='px-64 pb-64 pt-32'>
      {/* ...your app */}
      <div className='px-24'>
        <section className='flex'>
          <div style={{ marginTop: "" }} className=" text-title m-0 select-none flex flex-col items-start">
            <span style={{ fontSize: "90px" }}>
              My Work
            </span>
          </div>
          <Image
            className='ml-20 self-end mb-6'
            priority
            src={ArrowSVG}
            alt="Follow us on Twitter"
          />
        </section>

        <section className='flex pt-10'>
          <div className='w-screen'>
            <div className='w-full py-24 pr flex items-center grow'>
              <div style={{ height: "2px" }} className='w-full bg-pm'></div>
              {/* <div style={{ left: '50%' }} className="bg-tt absolute rounded-full w-96 h-96">
                <Image className='rounded-full w-96 h-96 p-8'
                  src="/me_in_boat.jpg"
                  alt="Me in a boat"
                  layout="fill"
                />
              </div> */}
            </div>
          </div>
        </section>

        <ImageGallery />
      </div>
    </div>
  )
}

export default Project