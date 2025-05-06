'use client'
import React from 'react'
import { FaAddressBook, FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa'
import Button from './Button'

const Newsletter = () => {
  return (
    <section className='relative w-full h-[100vh]'>
      <div className="bg flex absolute top-0 bottom-0 right-0 left-0">
        <div className="firstHalf bg-blue-500 w-[60%]"></div>
        <div className="secondHalf bg-blue-300 w-[40%]"></div>
      </div>

      <div className="newsContent relative text-white pl-[200px] py-[100px]">
        <h1 className='text-2xl font-bold w-[300px] mb-10'>
          Get Quick Free Professional Consultation
        </h1>
        <div className='flex items-center mb-10 text-[20px]'>
          <span className="clock text-3xl mr-4"> <FaClock /></span>
          <div className='flex flex-col'>
            <span><b>Mon-Fri:</b> 9:00am - 10:00pm</span>
            <span><b>Sat-Sun:</b> 9:00pm - 8:00pm</span>
          </div>
        </div>

        <hr className='w-[300px]' />

        <div className='my-10 flex items-center'>
          <span className="mail text-3xl mr-4"><FaPhone /></span>
          <div className='flex flex-col'>
            <span><b>Phone:</b> +(690) 2560 0020</span>
            <span><b>Email:</b> booking@healthpoint.com</span>
          </div>
        </div>

        <hr className='w-[300px]' />

        <div className='mt-10 flex items-center'>
          <span className="location text-3xl mr-4"><FaLocationArrow /></span>
          <div>
            <span><b>Address:</b> Healthpoint</span>
            <p>4263 Wilkinson Street Tennesse</p>
          </div>
        </div>

        <Button styles='mt-20'>View Location Map</Button>
      </div>

      <div className='absolute top-20 right-[200px]'>
        <form className='bg-white w-[700px] px-10'>
          <div className="flex pt-10">
            <div className='flex flex-col mr-5'>
              <label htmlFor="name" className='text-blue-400 font-semibold'>Name</label>
              <input type="text" id='name' placeholder='Full Name' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-blue-400 font-semibold'>Email</label>
              <input type="email" id='email' placeholder='Email address' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
          </div>

          <div className="flex pt-6">
            <div className='flex flex-col mr-5'>
              <label htmlFor="phone" className='text-blue-400 font-semibold'>Phone</label>
              <input type="number" id='phone' placeholder='+91' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="department" className='text-blue-400 font-semibold'>Department</label>
              <input type="text" placeholder='Ortho' id='department' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
          </div>

          <div className="flex pt-6">
            <div className='flex flex-col mr-5'>
              <label htmlFor="time" className='text-blue-400 font-semibold'>Time</label>
              <input type='text' id='time' placeholder='90:15' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="date" className='text-blue-400 font-semibold'>Date</label>
              <input type="text" id='date' placeholder='15-05-2022' className='w-[300px] border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' />
            </div>
          </div>

          <div className='flex flex-col pb-10'>
            <label htmlFor="message" className='mt-5 text-blue-400 font-semibold'>Message</label>
            <textarea name="message" id="message" className='w-full h-[100px] resize-none border-blue-300 border py-3 px-2 placeholder:text-blue-200 mt-4' placeholder='Anything else you wanna communicate'></textarea>
          </div>

          <Button styles='bg-transparent border-2 border-blue-400 text-blue-400! px-10 py-1 mb-10'>Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
