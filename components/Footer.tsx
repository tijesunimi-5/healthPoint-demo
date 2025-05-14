'use client'
import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='h-[80vh] pt-[100px] px-32 bg-white'>
      <div className="con flex justify-between">
        <div className="col1 w-[420px]">
          <img src="/logo.png" alt="logo" />
          <p className='tracking-wide mt-12'>
            Letraset sheets containing lorem ipsum passages and more recently with desktop publishing various versions have evolved over the years, sometimes.
          </p>

        </div>

        <div className="col2">
          <h1 className='font-bold text-2xl'>Departments</h1>
          <ul className='mt-8 flex flex-col gap-4'>
            <li>Cardiology</li>
            <li>Sports Injury</li>
            <li>Radiology</li>
            <li>Lung Diseases</li>
            <li>Gynecology</li>
            <li>Eye Care</li>
          </ul>
        </div>

        <div className="col3">
          <h1 className='font-bold text-2xl'>Major Links</h1>
          <ul className='mt-8 flex flex-col gap-4'>
            <li>Doctors</li>
            <li>Departments</li>
            <li>Appointment</li>
            <li>Working Hours</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col4 ">
          <h1 className='font-bold text-2xl'>Quick Links</h1>
          <ul className='mt-8 flex flex-col gap-4'>
            <li>Health Insurance</li>
            <li>Medical Records</li>
            <li>Online Bill Pay</li>
            <li>Emergency Service</li>
            <li>Cobid 19 info</li>

          </ul>
        </div>
      </div>

      <hr className='border-blue-100 border mt-20' />

      <div className="end flex items-center justify-between pt-8">
        <div className="icons flex gap-4 text-4xl text-blue-600">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaLinkedin />
        </div>

        <div className='flex items-center'>
          <p className='font-bold mr-[180px]'>Newsletter</p>
          <div className='flex'>
            <input type="email" placeholder='Email address*' className='w-[300px] border-2 border-blue-400 px-5 py-2' />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
