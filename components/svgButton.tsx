"use client"
import React, { ReactNode, MouseEventHandler, useRef } from 'react';
import TransitionLink from './transitionLink';
import Magnetic from './magnetic';
import Image from 'next/image';
import gsap from 'gsap';

type Props = {
  size: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  svg: any;
  layoutMode: string;
  setLayoutMode: Function;
  mode: string;
};

function SvgButton({ onClick, size, svg, layoutMode, setLayoutMode, mode }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Magnetic>
      <button ref={ref} onClick={() => {setLayoutMode(mode)}} style={{ borderWidth: "1px" }} className={(layoutMode == mode ? "bg-tt" : "bg-transparent") + " transition-all mr-3 flex justify-center items-center border-solid border-gray-500 rounded-full cursor-pointer w-20 h-20"}>
        <Magnetic>
          <Image
            className=''
            priority
            src={svg}
            width={size}
            height={size}
            alt=""
          />
        </Magnetic>
      </button>
    </Magnetic>
  );
}

export default SvgButton;