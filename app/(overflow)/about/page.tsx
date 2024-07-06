'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import TextInput from '@/components/textInput'
import BubbleButton from '@/components/bubbleButton'
import ImageGallery from '@/components/imageGallery'
import { animateHelloText } from '@/utils/animation'

function About() {
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
              Get to
            </span>
            <span style={{ fontSize: "90px" }}>
              know me
            </span>
          </div>
          <Image
            className='ml-20 self-end mb-6'
            priority
            src={ArrowSVG}
            alt=""
          />
          <div className="relative h-full w-auto">
            <Image
              src="/simon.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="contain"
            />
          </div>
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

        <article>

          <h1 ref={helloAnimationRef} className='text-7xl mb-6'>Hello</h1>
          <p className='text-3xl'>{"I'm currently an undergrad studying Computer Science. My journey into the world of coding started back in my freshman year of high school, and I’ve been hooked ever since. Over the years, I’ve built a solid toolkit of programming languages and soft skills that I’m pretty proud of."}
          </p>
          <p className='text-3xl mt-5'>{"I’m a curious soul who loves picking up new skills in my free time. Besides diving into programming projects, you’ll often find me strategizing my next chess move, sketching up some artwork, training in MMA, or reaching new heights in rock climbing. I’m always eager to learn something new!"}
          </p>

          <h1 className='text-5xl mb-6 mt-28'>Here are some pictures!</h1>
          <ImageGallery />
        </article>
      </div>
    </div>
  )
}

export default About