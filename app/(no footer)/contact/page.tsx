'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ArrowSVG from '@/public/Arrow1.svg'
import SendButton from '@/components/sendButton'
import emailjs from '@emailjs/browser';
import TransitionLink from '@/components/transitionLink'

function Contact() {
  const containerRef = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const [nameColor, setNameColor] = useState<string>("text-sdNoSize");
  const [emailColor, setEmailColor] = useState<string>("text-sdNoSize");
  const [messageColor, setMessageColor] = useState<string>("text-sdNoSize");

  const handleNameChange = (e: any) => {
    setNameColor("text-sdNoSize");
    setNameValue(e.target.value);
  }

  const handleEmailChange = (e: any) => {
    setEmailColor("text-sdNoSize");
    setEmailValue(e.target.value);
  }

  const handleMessageChange = (e: any) => {
    setMessageColor("text-sdNoSize");
    setMessageValue(e.target.value);
  }

  const onSubmit = async (e: any) => {

    e.preventDefault();

    if (nameValue === "") {
      setNameColor("text-pt");
      return;
    }
    if (emailValue === "") {
      setEmailColor("text-pt");
      return;
    }
    if (messageValue === "") {
      setMessageColor("text-pt");
      return;
    }

    console.log("SERVICE_ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", process.env.NEXT_PUBLIC_PUBLIC_KEY);

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) return
    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) return
    if (!process.env.NEXT_PUBLIC_PUBLIC_KEY) return
    if (!formRef || !formRef.current) return

    try {
      await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      alert('Message Sent Successfully')
    } catch (error: any) {
      console.log(error.text);
      alert('Something went wrong!')
    }

    e.target.reset()
  }

  return (
    <main ref={containerRef} className='px-10 lg:px-30'>
      <div className='lg:px-64 pb-40'>

        <div className='flex'>
          <div style={{ marginTop: "10%" }} className="self-start select-none flex flex-col items-start">
            <span className='text-6xl sm:text-8xl p-4'>
              {"Let's work"}
            </span>
            <span style={{ paddingLeft: '20px' }} className='self-start text-6xl sm:text-8xl'>
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

        <section className='flex pt-20 flex-col lg:flex-row'>
          <form ref={formRef} className='lg:w-3/5' onSubmit={onSubmit}>
            <section>
              <div className='border-top py-6 flex transition-all' style={{ height: '150px', borderTop: '1px white solid', borderBottom: '1px white solid' }}>
                <div className={nameColor + ' text-2xl flex items-start pt-1 w-20 transition-all'}>
                  01
                </div>
                <div className='flex flex-col w-full '>
                  <h1 className={'px-5 font-bold grow mb-1 transition-all text-lg sm:text-3xl ' + nameColor}>{"What's your name?"}</h1>
                  <input onChange={handleNameChange} className='px-5 bg-transparent text-2xl outline-none' name='user_name' placeholder='John Doe *' value={nameValue} />
                </div>
              </div>
            </section>
            <section >
              <div className='border-top py-6 flex text-lg sm:text-3xl' style={{ height: '150px', borderTop: '1px white solid', borderBottom: '1px white solid' }}>
                <div className={'text-2xl flex items-start pt-1 w-20 transition-all ' + emailColor}>
                  02
                </div>
                <div className='flex flex-col w-full'>
                  <h1 className={'px-5 font-bold grow mb-1 transition-all  text-lg sm:text-3xl ' + emailColor}>{"What's your email?"}</h1>
                  <input onChange={handleEmailChange} className='px-5 bg-transparent text-2xl outline-none' name='user_email' placeholder='john@doe.com *' value={emailValue} type='email' />
                </div>
              </div>
            </section>
            <section>
              <div className='border-top py-6 flex' style={{ height: '300px', borderTop: '1px white solid' }}>
                <div className={'text-2xl flex items-start pt-1 w-20 transition-all ' + messageColor}>
                  03
                </div>
                <div className='px-5 flex flex-col w-full'>
                  <h1 className={'font-bold grow mb-1 transition-all  text-lg sm:text-3xl ' + messageColor}>{"Your message"}</h1>
                  <textarea onChange={handleMessageChange} className='px-5 bg-transparent  text-2xl outline-none grow' placeholder='Hello Simon... *' value={messageValue} name='message' />
                </div>
              </div>
            </section>

            <div className='hidden sm:flex w-full py-24 items-center grow'>
              <div style={{ height: "2px" }} className='w-full bg-pm' />
              <SendButton label="Send!" type='submit' />
            </div>
            <div className='flex sm:hidden w-full py-24 items-center grow'>
              <button className="bg-tt h-16 w-full rounded-full cursor-pointer" type='submit'>
                <TransitionLink hoverAnimation={false} href='/contact' label="Send!" />
              </button>
            </div>
          </form>

          <section className='grow sm:px-20'>
            <div className='mb-3'>
              <div className='text-xl text-sdNoSize2 select-none'>
                Email
              </div>
              <div className='text-2xl'>
                SimonNDao12@gmail.com
              </div>
            </div>
            <div className='mb-3'>
              <div className='text-xl text-sdNoSize2  select-none'>
                Linkedin
              </div>
              <div className='text-2xl'>
                linkedin.com/in/simon-dao
              </div>
            </div>
            <div className='mb-3'>
              <div className=' text-sdNoSize2 text-xl select-none'>
                Handshake
              </div>
              <div className='text-2xl'>
                <a className='underline' href="https://uw.joinhandshake.com/profiles/44602458">Handshake Link</a>
              </div>
            </div>
            <div className='mb-3'>
              <div className=' text-sdNoSize2 text-xl select-none'>
                Discord
              </div>
              <div className='text-2xl'>
                monis3685
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default Contact