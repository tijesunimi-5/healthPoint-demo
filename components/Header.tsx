'use client'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-20 py-5 fixed top-0 right-0 left-0 bg-white z-50 h-14'>
      <img src="/logo.png" alt="logo" />

      <nav className='flex justify-baseline items-center gap-14'>
        <Link href={'/'}>Services</Link>
        <Link href={'/'}>Doctors</Link> 
        <Link href={'/'}>Blogs</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
      </nav>

      <Button>Buy Now</Button>
    </header>
  )
}

export default Header
