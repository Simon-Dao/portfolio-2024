import React, { useEffect, useState } from 'react'
import FollowButton from './followButton'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
interface CustomProps {
  content: string,
  href: string,
  pathname?: string
}

function HeaderItem({ href, content, pathname }: CustomProps) {
  const controls = useAnimation()

  const parentVariants = {
    hover: {
      scale: 1.2,
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {

    console.log(pathname);
    console.log(href)
  }, [])

  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      whileHover="hover"
      className={'parent grow flex justify-start text-white'}>
      <FollowButton className='ml-20 p-2'>
        <Link href={href} className=' flex flex-col'>
          <h1 className={'font-bold transition-all duration-500 ease-in-out ' + ((pathname && pathname === href) ? 'text-tt text-2xl underline ' : '') }>{content}</h1>
          <motion.div
            className="child w-2 h-2 rounded-full bg-pm self-center mt-2"
            variants={childVariants}>
          </motion.div>
        </Link>
      </FollowButton>
    </motion.div>
  )
}

export default HeaderItem