import React from 'react'
import TransitionLink from './transitionLink'
import Magnetic from './magnetic'
import DotAnim from './dotAnim'
import NavLink from './navLink'
function header() {
  return (
    <>
      <NormalView />
      <MobileView />
    </>
  )
}

function NormalView() {
  return (
    <nav className='hidden sm:flex pt-14 sm:px-16'>
      <div className='lg:grow flex justify-start text-white'>
        <Magnetic>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/home" label="Home" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
      </div>
      <div className='grow flex justify-end text-white'>
        <Magnetic>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/projects" label="Projects" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/resume" label="Resume" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/about" label="About" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/contact" label="Contact" hoverAnimation={true} />
            </DotAnim>
          </div>
        </Magnetic>

      </div>
    </nav >
  )
}

function MobileView() {

  const openNav = () => {

  }

  const closeNav = () => {
    
  }

  return (
    <div className='sm:hidden'>

      <button className='rounded-full bg-tt w-10 h-10 fixed top-2 right-2'>
        =
      </button>
      {/* <nav className='z-10 fixed h-screen w-full bg-orange-700'>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/home" label="Home" hoverAnimation={true} />
            </DotAnim>
          </div>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/projects" label="Projects" hoverAnimation={true} />
            </DotAnim>
          </div>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/resume" label="Resume" hoverAnimation={true} />
            </DotAnim>
          </div>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/about" label="About" hoverAnimation={true} />
            </DotAnim>
          </div>
          <div className='sm:ml-20 p-2'>
            <DotAnim>
              <TransitionLink href="/contact" label="Contact" hoverAnimation={true} />
            </DotAnim>
          </div>
      </nav> */}
    </div>
  )
}

export default header