import React from 'react'
import resumeImage from '../resume/Simon_Dao_Resume_2024_page-0001.jpg'
function page() {
  return (
    <>
      <h1 className='pt-20 pb-20  text-pm' style={{ paddingLeft:'20%'}}>
        My Resume
      </h1>

      <div className='w-full ' style={{ padding: '0% 20% 20% 20%' }}>
        <img src={resumeImage.src} alt="" className='rounded-lg'/>
      </div>
    </>
  )
}

export default page