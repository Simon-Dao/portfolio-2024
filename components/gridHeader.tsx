import React from 'react'

function GridHeader() {
  return (
    <div className='grid grid-cols-3 pb-10'>
      <div className='text-gray-300 pt-14'>
        Name
      </div>
      <div className='text-gray-300 pt-14'>
        Tech Stack
      </div>
      <div className='text-gray-300 pt-14'>
        Project Type
      </div>
    </div>
  )
}

export default GridHeader