import React from 'react'
import Image from 'next/image'
import GenericButton from '@/components/genericButton'
import TransitionLink from '@/components/transitionLink'

function page() {

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex flex-col items-center w-screen'>
        <h1 className='pt-20 pb-10 text-4xl sm:text-8xl'>
          My Resume
        </h1>
      </div>
      <div className='mb-10 p-10'>
        <GenericButton className='my-3 self-center sm:self-auto sm:my-0 w-36 mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer h-20'>
          <a href="https://drive.google.com/file/d/1556EPc436JEts7fVR-p9jlGMXRb-JFZA/view?usp=sharing">
            <TransitionLink href="/resume" label='Resume' hoverAnimation={true} />
          </a>
        </GenericButton>
      </div>

      <div className='w-full hidden sm:block' style={{ padding: '0% 20% 5% 20%' }}>
        <Image src={'/resume.jpg'} alt="" className='rounded-lg w-full' width={1500} height={1500} priority={true} />
      </div>

    </div>
  )
}

export default page