'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import ImageGallery from '@/components/imageGallery'
import { animateHelloText } from '@/utils/animation'

function About() {
  const helloAnimationRef = useRef<any>(null)

  useEffect(() => {
    animateHelloText(helloAnimationRef)
  }, [])

  return (

    <div className='lg:px-64 pb-64 pt-32'>
      {/* ...your app */}
      <div className='px-10 lg:px-24'>

        <section className='flex flex-col items-center justify-center lg:flex-row'>
          <Image
            className='rounded-full justify-self-end mr-10'
            src="/simon.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <div style={{ marginTop: "" }} className="select-none flex flex-col">

            <span className='text-4xl xl:text-6xl h-20 mt-10 flex'>
              About Me
              <Image
                className='ml-20 mb-6 self-end'
                priority
                src={ArrowSVG}
                alt=""
              />
            </span>
          </div>

        </section>

        <section className='flex'>
          <div className='w-screen'>
            <div className='w-full py-10 pr flex items-center grow'>
              <div style={{ height: "2px" }} className='w-full bg-pm'></div>
            </div>
          </div>
        </section>

        <article className='mx-30'>

          <h1 ref={helloAnimationRef} className='text-7xl mb-6'>Hello</h1>
          <p className='text-lg sm:text-3xl'>{"I'm currently an undergrad studying Computer Science. My journey into the world of coding started back in my freshman year of high school, and I’ve been hooked ever since. Over the years, I’ve built a solid toolkit of programming languages and soft skills that I’m pretty proud of."}
          </p>
          <p className='text-lg sm:text-3xl mt-5'>{"Besides diving into programming projects, I like playing chess, sketching, training MMA, and rock climbing. I’m always eager to try something new!"}
          </p>

          <h1 className='text-5xl mb-6 mt-28'>Here are some pictures!</h1>
          <ImageGallery />
        </article>
      </div>
    </div>
  )
}

export default About