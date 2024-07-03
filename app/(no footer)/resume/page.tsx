import React from 'react'
import resumeImage from './Simon_Dao_Resume_2024_page-0001.jpg'
import Image from 'next/image'
function page() {
  return (
    <>
      <h1 className='pt-20 pb-20  text-pm' style={{ paddingLeft:'20%'}}>
        My Resume
      </h1>

      <div className='w-full ' style={{ padding: '0% 20% 20% 20%' }}>
        <Image src={resumeImage.src} alt="" className='rounded-lg w-full' width={1500} height={1500}/>
      </div>
    </>
  )
}

export default page