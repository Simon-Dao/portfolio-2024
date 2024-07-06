import React from 'react'
import TransitionLink from './transitionLink'
import Magnetic from './magnetic'
import UnderlineAnim from './underlineAnim'
import DotAnim from './dotAnim'
function header() {
  return (
    <nav className='flex pt-14 px-16'>
      <div className='grow flex justify-start text-white' >
        <Magnetic>
          <div className='ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/home" label="Home" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
      </div>
      <div className='grow flex justify-end text-white'>
        {/* <FollowButton className='ml-20 p-2'>
          <TransitionLink href="/projects" label="Projects" hoverAnimation={true}/>
        </FollowButton > */}
        <Magnetic>
          <div className='ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/resume" label="Resume" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className='ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/about" label="About" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className='ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/contact" label="Contact" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>

      </div>
    </nav >
  )
}

export default header