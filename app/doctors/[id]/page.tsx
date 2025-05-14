'use client'
import Link from 'next/link'
import React from 'react'
import doctors from '@/doctor_info_data'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

interface DoctorPageProps {
  params: {
    id: string
  }
}

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params)
  const doctor = doctors.find((doc) => doc.id === parseInt(id))

  if (!doctor) {
    return <div>Doctor not found</div>
  }

  return (
    <section>
      <div className='bg-[#f0fbff] w-full h-[40vh] flex flex-col justify-center items-center pt-20'>
        <h1 className='font-bold text-3xl mb-4'>{doctor?.name}</h1>
        <p className='text-center w-[370px] mb-10'>Letraset sheets containing lorem ipsum passages and more recently with desktop publishing</p>

        <div className="nextRoute">
          <Link href={'/'} className="text-gray-400">Home</Link>
          {' > '}
          <Link href={'/doctors'} className="text-gray-400">Doctor</Link>
          {' > '}
          <span>Doctor Information</span>
        </div>
      </div>

      {/* Doctor information */}
      <div className="doc-info flex justify-center items-center gap-7 mt-22">
        <div className="image-container h-full">
          <img src={doctor.imageUrl} alt={doctor.name} className='w-[400px] h-[550px] mt-[-680px]' />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className='text-[22px] font-bold'>Biography</h1>
          <p className='w-[470px]'>{doctor.biography}</p>

          <div className="extra mt-7 flex flex-col gap-2">
            <p><b>Occupation:</b> {doctor.occupation}</p>
            <p><b>Experience:</b> {doctor.experience}</p>
            <p><b>Certificate:</b> {doctor.certificate}</p>
            <p><b>Skills:</b> {doctor.skills}</p>
            <p><b>Location:</b> {doctor.location}</p>
            <p><b>Phone:</b> {doctor.phone}</p>
            <p><b>Email:</b> {doctor.email}</p>
          </div>

          <div className="awards mt-24">
            <h1 className='font-bold text-[21px] mb-5'>Awards & Hours</h1>
            <p className='w-[400px] mb-14'>
              it uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate lorem ipsum is therefore always free from re
            </p>

            <div className="flex awards items-center gap-10">
              <div>
                <img src="/heart.png" alt="heart" className='w-[60px] bg-gray-300 p-2 mb-4 rounded-full' />
                <h1 className='font-bold mb-3 text-[16px]'>Robert L. Nobel Price</h1>
                <p>Canadian Cancer Society</p>
              </div>

              <div>
                <img src="/eye.png" alt="eye" className='w-[60px] bg-gray-300 p-2 mb-4 rounded-full' />
                <h1 className='font-bold mb-3 text-[16px]'>Edison Awards</h1>
                <p>Research in Developmental</p>
              </div>
            </div>

            <div className='mt-10'>
              <h1 className='font-bold text-[22px] mb-5'>My Skills</h1>
              <p className='w-[450px] mb-5'>
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate.
              </p>

              <div className='w-full mb-8'>
                <div className='w-full flex flex-col gap-6'>
                  <span className='flex flex-col '>
                    <div className='flex justify-between mb-2'>
                      <h1>Empathy</h1>
                      <p>95%</p>
                    </div>

                    <span className='bg-blue-200 w-[100%] rounded-xl h-[10px] overflow-hidden relative'>
                      <span className='bg-blue-500 w-[65%] h-full absolute'></span>
                    </span>
                  </span>

                  <span className='flex flex-col '>
                    <div className='flex justify-between mb-2'>
                      <h1>Technique</h1>
                      <p>84%</p>
                    </div>

                    <span className='bg-blue-200 w-[100%] rounded-xl h-[10px] overflow-hidden relative'>
                      <span className='bg-blue-500 w-[55%] h-full absolute'></span>
                    </span>
                  </span>

                  <span className='flex flex-col '>
                    <div className='flex justify-between mb-2'>
                      <h1>Operation</h1>
                      <p>90%</p>
                    </div>

                    <span className='bg-blue-200 w-[100%] rounded-xl h-[10px] overflow-hidden relative'>
                      <span className='bg-blue-500 w-[60%] h-full absolute'></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Newsletter />
      <Footer />
    </section>
  )
}

export default page
