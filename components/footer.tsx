'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowSVG from '@/public/Arrow1.svg';
import BubbleButton from './bubbleButton';
import Magnetic from './magnetic';
import TransitionLink from './transitionLink';

function Footer() {

  return (
    <>
      <NormalView />
      <MobileView />
    </>
  );
}

function getCurrentTimeInMinutes() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm} PT`;
}

function MobileView() {

  const [localTime, setLocalTime] = useState(getCurrentTimeInMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(getCurrentTimeInMinutes());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <footer className='sm:hidden grow pt-10 bg-qt text-white flex flex-col px-10'>
      <div className='w-3/4 self-center'>
        <button className="bg-tt h-16 w-full rounded-full cursor-pointer">
          <TransitionLink text={'text-sm'} hoverAnimation={false} href='/contact' label={"Get in touch"} />
        </button>
      </div>
      <div style={{ borderTop: "solid 2px white" }} className='my-5'></div>
      <div className='w-full flex-col flex xs:flex-row pb-5'>
        <div>
          <div className='text-xs sm:text-2xl text-sdNoSize2'>Local Time</div>
          <div className='text-sm sm:text-3xl font-bold color-white mb-2'>{localTime}</div>
        </div>
        <div className='grow'></div>
        <div>
          <div className='text-xs sm:text-2xl text-sdNoSize2'>Socials</div>
          <div className='font-bold color-white flex'>
            <Magnetic>
              <a href="https://www.linkedin.com/in/simon-dao/">Linkedin</a>
            </Magnetic>
            <div className='w-6'></div>
            <Magnetic>
              <a href="https://uw.joinhandshake.com/profiles/44602458">Handshake</a>
            </Magnetic>
            <div className='w-6'></div>
            <Magnetic>
              <a href="https://discord.com/users/277605748995915779">Discord</a>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  )
}

function NormalView() {

  const [localTime, setLocalTime] = useState(getCurrentTimeInMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(getCurrentTimeInMinutes());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <footer className="grow hidden sm:flex flex-col bg-qt text-white" style={{ padding: "0 15%" }}>
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
          className='ml-20 self-center'
          priority
          src={ArrowSVG}
          alt="Follow us on Twitter"
        />
      </div>
      <div className='w-full py-24 pr-20 flex items-center grow'>
        <div style={{ height: "1px" }} className='w-full bg-sd'></div>
        <BubbleButton label='Get in Touch' />
      </div>
      <div className='w-full flex b-16 pb-10'>
        <div>
          <div>Local Time</div>
          <div className='font-bold color-white'>{localTime}</div>
        </div>
        <div className='grow'></div>
        <div>
          <div>Socials</div>
          <div className='font-bold color-white flex'>
            <Magnetic>
              <a href="https://www.linkedin.com/in/simon-dao/">Linkedin</a>
            </Magnetic>
            <div className='w-6'></div>
            <Magnetic>
              <a href="https://uw.joinhandshake.com/profiles/44602458">Handshake</a>
            </Magnetic>
            <div className='w-6'></div>
            <Magnetic>
              <a href="https://discord.com/users/277605748995915779">Discord</a>
            </Magnetic>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
