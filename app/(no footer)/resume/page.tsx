import React from 'react'
import Image from 'next/image'
function page() {

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex flex-col items-center w-screen'>
        <h1 className='pt-20 pb-10 text-pm'>
          My Resume
        </h1>
      </div>
      <div className='mb-10 p-10'>
        <a
          className='text-tt underline-offset-8 underline text-3xl justify-self-start'
          href="https://drive.google.com/file/d/1556EPc436JEts7fVR-p9jlGMXRb-JFZA/view?usp=sharing"
        >
          ⇉ Resume Link ⇇
        </a>
      </div>

      <div className='w-full hidden sm:block' style={{ padding: '0% 20% 5% 20%' }}>
        <Image src={'/resume.jpg'} alt="" className='rounded-lg w-full' width={1500} height={1500} />
      </div>

    </div>
  )
}

export default page