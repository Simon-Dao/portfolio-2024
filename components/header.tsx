import React from 'react'
import FollowButton from './followButton'
import TransitionLink from './transitionLink'

function header() {
  return (
    <nav className='flex pt-14 px-16'>
      <div className='grow flex justify-start text-white'>
        <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/home" label="Simon Dao" />
        </FollowButton>
      </div>
      <div className='grow flex justify-end text-white'>
        <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/projects" label="Projects" />
        </FollowButton >
        <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/resume" label="Resume" />
        </FollowButton>
        <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/about" label="About" />
        </FollowButton>
        <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/contact" label="Contact" />
        </FollowButton>
      </div>
    </nav>
  )
}

export default header