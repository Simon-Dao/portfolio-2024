import React, { MouseEventHandler } from 'react'
import TransitionLink from './transitionLink'
import Magnetic from './magnetic'

type Props = {
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type : any
}

function SendButton({ label, onClick, type }: Props) {
  return (
      <Magnetic>
        <button type={type} onClick={onClick} style={{ right: '40%', width: '200px', height: '200px' }} className="bg-tt absolute rounded-full cursor-pointer">
          <Magnetic>
            <div style={{ width: '200px', height: '200px' }} className='rounded-full flex justify-center items-center font-bold'>
              <TransitionLink hoverAnimation={false} href='/contact' label={label} />
            </div>
          </Magnetic>
        </button>
      </Magnetic>
  )
}

export default SendButton