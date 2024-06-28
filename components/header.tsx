import React from 'react'
import Link from 'next/link'
import FollowButton from './followButton'

function header() {
  return (
    <nav className='flex pt-14 px-16'>
      <div className='grow flex justify-start text-white'>
        <FollowButton className='ml-20 p-2'>
          <Link href="/">
            <h1 className='font-bold'>Simon Dao</h1>
          </Link>
        </FollowButton>
      </div>
      <div className='grow flex justify-end text-white'>
        <FollowButton className='ml-20 p-2'>
          <Link href="/projects">
            <h1 className='font-bold'>Projects</h1>
          </Link>
        </FollowButton >
        <FollowButton className='ml-20 p-2'>
          <Link href="/resume">
            <h1 className='font-bold'>Resume</h1>
          </Link>
        </FollowButton>
        <FollowButton className='ml-20 p-2'>
          <Link href="/about">
            <h1 className='font-bold'>About</h1>
          </Link>
        </FollowButton>
        <FollowButton className='ml-20 p-2'>
          <Link href="/contact">
            <h1 className='font-bold'>Contact</h1>
          </Link>
        </FollowButton>
      </div>

    </nav>
  )
}

export default header