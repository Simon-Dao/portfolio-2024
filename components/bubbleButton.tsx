import React from 'react'
import FollowButton from './followButton'

function BubbleButton() {
  return (
    <div style={{ right: '40%', width: '200px', height: '200px' }} className="bg-tt absolute rounded-full">
      <FollowButton className=''>
        <div style={{ width: '200px', height: '200px' }} className='rounded-full flex justify-center items-center font-bold'>
          Get in Touch
        </div>
      </FollowButton>
    </div>
  )
}

export default BubbleButton