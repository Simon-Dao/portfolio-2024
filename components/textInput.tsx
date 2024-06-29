'use client';
import React, { ReactNode, CSSProperties, MouseEventHandler, useState, MouseEvent, useRef, useEffect, useCallback } from 'react';

interface CustomButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  placeholder?: string
  value?: any
  setValue?: Function
}

function TextInput({className, style, placeholder, value, setValue }: CustomButtonProps) {
  
  let customClassName = "bg-transparent text-2xl outline-none"

  return (
    <textarea value={value} className={className + " " + customClassName} style={style} placeholder={placeholder}/>
  );
}

export default TextInput;
