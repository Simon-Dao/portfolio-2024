'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import TextInput from '@/components/textInput'
import BubbleButton from '@/components/bubbleButton'
import TransitionLink from '@/components/transitionLink'

function Contact() {
  const containerRef = useRef(null)
  const [nameValue, setNameValue] = useState<string>();
  const [emailValue, setEmailValue] = useState<string>();
  const [messageValue, setMessageValue] = useState<string>();

  return (
    <main data-scroll-container ref={containerRef}>
      {/* ...your app */}
      <div className='px-64 pb-40'>

        <div className='flex'>
          <div style={{ marginTop: "10%" }} className="text-title m-0 select-none flex flex-col items-start">
            <span style={{ fontSize: "90px" }}>
              {"Let's work"}
            </span>
            <span style={{ fontSize: "90px" }}>
              together
            </span>
          </div>
          <Image
            className='ml-20 self-end mb-6'
            priority
            src={ArrowSVG}
            alt="Follow us on Twitter"
          />
        </div>

        <div className='flex pt-20'>

          <section style={{ width: '65%' }} className=''>

            <section>
              <div className='border-top py-6 flex ' style={{ height: '150px', borderTop: '1px white solid', borderBottom: '1px white solid' }}>
                <div className='text-2xl flex items-start pt-1 w-20 ' style={{ color: "#858688" }}>
                  01
                </div>
                <div className='flex flex-col w-full'>
                  <h1 className='font-bold grow' style={{ fontSize: '30px' }}>{"What's your name?"}</h1>
                  <TextInput placeholder='John Doe *' value={nameValue} setValue={setNameValue} />
                </div>
              </div>
            </section>
            <section >
              <div className='border-top py-6 flex ' style={{ height: '150px', borderTop: '1px white solid', borderBottom: '1px white solid' }}>
                <div className='text-2xl flex items-start pt-1 w-20' style={{ color: "#858688" }}>
                  02
                </div>
                <div className='flex flex-col w-full'>
                  <h1 className='font-bold grow' style={{ fontSize: '30px' }}>{"What's your email?"}</h1>
                  <TextInput placeholder='john@doe.com *' value={emailValue} setValue={setEmailValue} />
                </div>
              </div>
            </section>
            <section>
              <div className='border-top py-6 flex' style={{ height: '300px', borderTop: '1px white solid' }}>
                <div className='text-2xl flex items-start pt-1 w-20 ' style={{ color: "#858688" }}>
                  03
                </div>
                <div className='flex flex-col w-full'>
                  <h1 className='font-bold' style={{ fontSize: '30px' }}>{"Your message"}</h1>
                  <TextInput placeholder='Hello Simon... *' className='grow' value={messageValue} setValue={setMessageValue} />
                </div>
              </div>
            </section>

            <div className='w-full py-24 pr flex items-center grow'>
              <div style={{ height: "2px" }} className='w-full bg-pm'></div>
              <BubbleButton label="Send!"/>
            </div>

          </section>
          <section className='grow px-20'>
            <div className='mb-3'>
              <div className='text-xl'>
                Email
              </div>
              <div className='text-2xl'>
                SimonNDao12@gmail.com
              </div>
            </div>
            <div className='mb-3'>
              <div className='text-xl'>
                Linkedin
              </div>
              <div className='text-2xl'>
                SimonNDao12@gmail.com
              </div>
            </div>
            <div className='mb-3'>
              <div className='text-xl'>
                Discord
              </div>
              <div className='text-2xl'>
                SimonNDao12@gmail.com
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Contact