'use client'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaMarker } from 'react-icons/fa'

const page = () => {
  return (
    <section>
      <div className='bg-[#f0fbff] w-full h-[40vh] flex flex-col justify-center items-center pt-20'>
        <h1 className='font-bold text-3xl mb-4'>About Us</h1>
        <p className='text-center w-[370px] mb-10'>Letraset sheets containing lorem ipsum passages and more recently with desktop publishing</p>

        <div className="nextRoute">
          <Link href={'/'} className="text-gray-400">Home</Link> {'>'} <span>About</span>
        </div>
      </div>

      <div className="content flex mt-10 justify-center items-center gap-24">
        <div className="img">
          <img src="/doctors.png" alt="doctors" className='w-[350px] h-[400px]' />
        </div>
        <div>
          <h1 className='text-3xl font-bold w-[300px] mb-7'>Highly Innovative Technology</h1>
          <p className='w-[300px] mb-8 leading-7'>
            We help startups who want to rise above the ordinary with extraordinary messaging that speaks to thier audience
          </p>

          <Button styles='rounded-[9px]'>Contact Us</Button>

          <div className='mt-7 flex gap-5'>
            <div className='flex'>
              <img src="/verify.png" alt="verify" /> <p className='ml-3'>Expert Help</p>
            </div>
            <div className='flex'>
              <img src="/verify.png" alt="verify" /> <p className='ml-3'>Proven results</p>
            </div>
          </div>
        </div>
      </div>

      <div className="logs mt-20 bg-[#f0fbff] flex justify-center items-center h-[40vh]">
        <div className='flex flex-col justify-center mt-10'>
          <h1 className='w-[150px] font-bold text-2xl'>Health Point History</h1>
          <p className='w-[380px] mt-8'>
            Sometimes by accident sometimes chunks as necessary making this the first true generator
          </p>

          <div className='flex gap-5 mt-10'>
            <FaArrowLeft className='text-blue-400 bg-[#d4e8ef] border border-blue-400 rounded-full p-2 text-4xl' /> <FaArrowRight className='text-blue-400 bg-[#ffff] border border-blue-400 rounded-full p-2 text-4xl' />
          </div>
        </div>

        <div className='flex gap-5'>
          <div className="bg-white w-[280px] h-[250px] shadow flex flex-col rounded overflow-hidden">
            <div className='flex flex-col justify-center px-8 py-[35px]'>
              <h1 className='text-blue-600 font-bold text-3xl pb-4'>
                2016-2018
              </h1>
              <p className='w-[220px]'>
                Normal distribution of letters, as opposed to using Content here, content here
              </p>
            </div>
            <img src="/blogi.png" alt="blog" className='' />
          </div>

          <div className="bg-white w-[280px] h-[250px] shadow flex flex-col rounded overflow-hidden">
            <div className='flex flex-col justify-center px-4 py-[35px]'>
              <h1 className='text-blue-600 font-bold text-3xl pb-4'>
                2019-2021
              </h1>
              <p className='w-[260px]'>
                Letraset sheets containing lorem ipsum passages, and more recently with desktop publishing
              </p>
            </div>
            <img src="/blogii.png" alt="blog" className='' />
          </div>

          <div className="bg-white w-[280px] h-[250px] shadow flex flex-col rounded overflow-hidden">
            <div className='flex flex-col justify-center px-8 py-[35px]'>
              <h1 className='text-blue-600 font-bold text-3xl pb-4'>
                2022-2024
              </h1>
              <p className='w-[220px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis nobis
              </p>
            </div>
            <img src="/blogi.png" alt="blog" className='' />
          </div>
        </div>
      </div>

      {/* medical culture */}
      <div className="bg-white flex justify-center items-center pt-28 gap-28 pb-32">
        <div className="relative w-[300px] h-300px">
          <img src="/drug.png" alt="pharm" className='w-[300px] h-[300px]' />
          <p className='absolute bg-blue-600 w-[100px] h-[100px] rounded shadow top-8 right-[-40px] text-white flex flex-col pl-5 pt-2'>
            <span className='text-[28px] font-bold scale-y-125'>
              13+
            </span>
            <span className='text-[10px]'>
              YEARS OF EXPERIENCE
            </span>
          </p>
        </div>

        <div>
          <h1 className='text-3xl font-bold'>Medical Culture</h1>
          <p className='w-[470px] pt-5 leading-7'>
            We are a dedicated team of passionate product managers, full stack developers, UX/UI designers, QA engineers and marketing experts helping businesses of every size - from new startups
          </p>

          <div className='flex flex-col mt-10 gap-6'>
            <div className="flex">
              <div className="flex justify-center items-start gap-3">
                <img src="/verify.png" alt="verify" />
                <p className='w-[200px]'>Vesibulum non sapien mattis commodo.</p>
              </div>

              <div className="flex justify-center items-start gap-3">
                <img src="/verify.png" alt="verify" />
                <p className='w-[150px]'>Doneo luctus tincidunt ornare.</p>
              </div>
            </div>

            <div className="flex gap-[49px]">
              <div className="flex justify-center items-start gap-3">
                <img src="/verify.png" alt="verify" />
                <p className='w-[150px]'>Quisque pretium erat acdui posuere.</p>
              </div>

              <div className="flex justify-center items-start gap-3">
                <img src="/verify.png" alt="verify" />
                <p className='w-[150px]'>Fusce eleifend vitae eleifend ullamcor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <section className="testimonial flex justify-center relative h-[90vh] bg-white  gap-[200px] pt-28 mb-10">
        <div>
          <h1 className="text-2xl font-bold w-[200px]">Customers Testimonials</h1>

          <p className="mt-12">
            <span className="font-bold text-5xl tracking-wide text-blue-600">1950+</span> <br />
            <span className="text-blue-400">
              clients & 4.9 Rating based on 5
            </span>
          </p>

          <Button styles="bg-transparent border-2 border-blue-400 text-blue-400! px-4 mt-10 rounded">More Testimonials</Button>
        </div>

        <div className="flex flex-col">
          <p className="w-[350px] mb-8 leading-7">
            Letraset sheets containing lorem ipsum passages and more recently with dektop publishing various versions have evolved over the years sometimes
          </p>

          <span className="flex justify-between w-[400px] items-center">
            <span className="name">
              <h1 className="text-xl font-bold">Stephanie Sue</h1>
              <p className="text-gray-600">Designation</p>
            </span>

            <span className="next flex gap-4 items-center">
              <FaArrowLeft className="bg-white text-blue-400 rounded-full p-3 text-5xl scale-x-110" />
              <FaArrowRight className="bg-blue-600 text-white rounded-full p-3 text-5xl scale-x-110" /> 01/09
            </span>
          </span>

          <div className="w-[400px] h-[300px] overflow-hidden  absolute bottom-[40px]">
            <img src="/mama.png" alt="woman" className="scale-[1.7] ml-16 mt-[-90px] imghoverm" />
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </section>
  )
}

export default page
