// "use client"
import React, { useState } from 'react'
import resumeImage from './Simon_Dao_Resume_2024_page-0001.jpg'
import Image from 'next/image'
function page() {

  // const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex flex-col items-center w-screen'>
        <h1 className='pt-20 pb-20 text-pm'>
          My Resume
        </h1>
      </div>

      <div className='w-full hidden sm:block' style={{ padding: '0% 20% 5% 20%' }}>
        <Image src={resumeImage.src} alt="" className='rounded-lg w-full' width={1500} height={1500} />
      </div>

      <div className='pb-20'>
        <a className='text-tt ' href="https://drive.google.com/file/d/1556EPc436JEts7fVR-p9jlGMXRb-JFZA/view?usp=sharing">Link to Resume</a>
      </div>

      {/* {selected && (
        <div onClick={() => setSelected(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div onClick={() => setSelected(false)} className="relative">
           
            <Image src={resumeImage.src} alt="" className='justify-self-center w-4/6 overflow-y-scroll' width={1500} height={1500} onClick={ () => setSelected(true) } />
          </div>
        </div>
      )} */}
    </div>
  )
}

export default page