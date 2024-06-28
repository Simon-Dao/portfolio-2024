'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowSVG from '@/public/Arrow1.svg';
import FollowButton from './followButton';

function Footer() {

  const [localTime, setLocalTime] = useState(getCurrentTimeInMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(getCurrentTimeInMinutes());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  function getCurrentTimeInMinutes() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm} PT`;
  }

  return (
    <footer className="grow flex flex-col bg-qt" style={{ padding: "0 15%" }}>
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
        <div style={{ right: '40%', width: '200px', height: '200px' }} className="bg-tt absolute rounded-full">
          <FollowButton className=''>
            <div style={{ width: '200px', height: '200px' }} className='rounded-full flex justify-center items-center font-bold'>
              Get in Touch
            </div>
          </FollowButton>
        </div>
      </div>
      <div className='w-full flex mb-16'>
        <div>
          <div>Local Time</div>
          <div className='font-bold color-white'>{localTime}</div>
        </div>
        <div className='grow'></div>
        <div>
          <div>Socials</div>
          <div className='font-bold color-white flex'>
            <FollowButton>
              <a href="">Linkedin</a>
            </FollowButton>
            <div className='w-6'></div>
            <FollowButton>
              <a href="">Discord</a>
            </FollowButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
