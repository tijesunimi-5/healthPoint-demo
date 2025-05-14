'use client'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()

  // this function handles the information of each doctors clicked on - dynamic routing
  const handleDoctorRouting = (id : number) => {
    router.push(`/doctors/${id}`)
  }
  
  return (
    <section>
      <div className='bg-[#f0fbff] w-full h-[40vh] flex flex-col justify-center items-center pt-20'>
        <h1 className='font-bold text-3xl mb-4'>Meet our Doctors</h1>
        <p className='text-center w-[370px] mb-10'>Letraset sheets containing lorem ipsum passages and more recently with desktop publishing</p>

        <div className="nextRoute">
          <Link href={'/'} className="text-gray-400">Home</Link> {'>'} <span>Doctor</span>
        </div>
      </div>

      {/* doctors collage */}
      <section className="doctors mb-10">
        <div className="doctors flex justify-center items-center mt-14 gap-5">
          {/* first column of doctors */}
          <div className="col1 mt-28">
            <div className="jess w-[250px] h-[390px]" onClick={() => handleDoctorRouting(1)}>
              <div className="overflow-hidden">
                <img src="/jess.png" alt="Dr. Jessica Joan" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Jessica Joan</h1>
                <p className="field text-gray-500">Nephrology</p>
              </div>
            </div>

            <div className="rebecca w-[250px] h-[390px]" onClick={() => handleDoctorRouting(5)}>
              <div className="overflow-hidden">
                <img src="/rebecca.png" alt="Dr. Rebecca Rose" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">
                  Dr. Rebecca Rose
                </h1>
                <p className="field text-gray-500">
                  Gynecology
                </p>
              </div>
            </div>
          </div>

          {/* second column of doctors */}
          <div className="col2 mt-[-60px]">
            <div className="alex w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(2)}>
              <div className="overflow-hidden">
                <img src="/alex.png" alt="Dr. Alexandra" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Alexandra</h1>
                <p className="field text-gray-500">Gastroenterology</p>
              </div>
            </div>

            <div className="step w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(6)}>
              <div className="overflow-hidden">
                <img src="/step.png" alt="Dr. Stephanie Sue" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Stephanie Sue</h1>
                <p className="field text-gray-500">Haematology</p>
              </div>
            </div>
          </div>

          {/* third column of doctors */}
          <div className="col3 mt-28">
            <div className="kim w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(3)}>
              <div className="overflow-hidden">
                <img src="/kim.png" alt="Dr. Kimberly" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Kimberly</h1>
                <p className="field text-gray-500">Neurology</p>
              </div>
            </div>

            <div className="penelope w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(7)}>
              <div className="overflow-hidden">
                <img src="/pene.png" alt="Dr. Penelop" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">
                  Dr. Penelop
                </h1>
                <p className="field text-gray-500">
                  Physiotherapy
                </p>
              </div>
            </div>
          </div>

          {/* fourth column of doctors */}
          <div className="col4">
            <div className="bella w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(4)}>
              <div className="overflow-hidden">
                <img src="/bella.png" alt="Dr. Bella Carol" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Bella Carol</h1>
                <p className="field text-gray-500">Obstetrics</p>
              </div>
            </div>

            <div className="lauren w-[250px] h-[390px] rounded-xl" onClick={() => handleDoctorRouting(8)}>
              <div className="overflow-hidden">
                <img src="/lauren.png" alt="Dr. Lauren Leah" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Lauren Leah</h1>
                <p className="field text-gray-500">Oncology</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button styles="bg-transparent border-2 border-blue-400 text-blue-300! rounded ml-[700px] mt-10 btnhover relative ">
            <span className="txt z-40">View More</span>
          </Button>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </section>
  )
}

export default page
