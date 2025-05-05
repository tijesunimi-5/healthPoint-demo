'use client'
import React from 'react'

type ButtonProps ={
  styles?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({onClick, styles, children}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles} bg-[#2F73F2] text-white font-bold px-4 py-2 cursor-pointer overflow-hidden`}>
      {children}
    </button>
  )
}

export default Button
