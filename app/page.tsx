'use client'
import Button from "@/components/Button";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGreaterThan, FaPhone } from "react-icons/fa";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.fromTo('.hero-txt',
      { opacity: 0, marginLeft: '-50px' },
      { opacity: 1, marginLeft: 0, duration: 3, ease: 'power2.inOut' }
    )
    gsap.fromTo('.fade',
      { opacity: 0 },
      { opacity: 1, duration: 3, ease: 'power2.inOut', delay: 1 }
    )
    gsap.fromTo('.btn-fade',
      { marginTop: '50px', opacity: 0 },
      { marginTop: 0, opacity: 1, duration: 2, delay: 2, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade1',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade2',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.2, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade3',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.4, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade4',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.6, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade5',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.8, ease: 'power2.inOut' }
    )
    gsap.fromTo('.img-fade6',
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2, ease: 'power2.inOut' }
    )
    gsap.to('.imgContainer', {
      marginTop: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.scrollStart',
        start: 'top 70%',
        end: 'top 30%',
        // markers: true,
        scrub: 5,
      }
    })
    gsap.to('.scrolltxt', {
      marginLeft: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.scrollStart',
        start: 'top 40%',
        end: 'top 10%',
        // markers: true,
        scrub: 5,
      }
    })
    gsap.to('.scrollp', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.scrollStart',
        start: 'top: 40%',
        end: 'top: 10%',
        // markers: true,
        scrub: 2
      }
    })
    gsap.to('.scrollBtn', {
      marginBottom: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.scrollStart',
        start: 'top 30%',
        end: 'top 10%',
        scrub: 3
      }
    })
    gsap.to('.scrollhead', {
      marginRight: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        // markers: true,
        start: 'top 70%',
        end: 'top 20%',
        scrub: 3
      }
    })
    gsap.to('.scrollgrid1', {
      // marginRight: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 60%',
        end: 'top 50%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.scrollgrid2', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 65%',
        end: 'top 50%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.scrollgrid3', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 50%',
        end: 'top 40%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.scrollgrid4', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 30%',
        end: 'top 20%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.scrollgrid5', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 25%',
        end: 'top 10%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.scrollgrid6', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'top 15%',
        end: 'top 5%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.nxtBtn', {
      marginTop: 0,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'center 80%',
        end: 'center 50%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.gshd', {
      marginLeft: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'center 55%',
        end: 'center 20%',
        // markers: true,
        scrub: 3
      }
    })
    gsap.to('.pfade', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.scrollnxt',
        start: 'center 45%',
        end: 'center 20%',
        scrub: 3
      }
    })
  }, [])

  return (
    <section id="homepage" className="bg-[#f0fbff] h-full w-full flex flex-col pt-20">
      <section className="h-[80vh]">
        <div id="hero" className="relative w-full">
          <div className="image w-full h-full absolute">
            <img src="/massage.png" alt="massage image" className="pt-10 img-fade1" />
            <img src="/child.png" alt="***" className="absolute bottom-[-490px] w-[150px] h-[150px] left-[100px] img-fade2" />


            <div className="second-image-div relative ml-[200px] mt-[-100px]">
              <img src="/dent.png" alt="dentist" className="w-[150px] h-[150px] left-[800px] top-[0px] absolute img-fade3" />
              <img src="/temp.png" alt="temp measure" className="w-[270px] h-[290px] absolute left-[800px] top-[150px] img-fade4" />
              <span className="fade">
                <img src="/fessSq.png" alt="color" className="w-[120px] h-[120px] left-[680px] absolute top-[320px]" />
                <p className="absolute left-[687px] text-white font-bold text-[18px] tracking-wider top-[350px]">16800+ <br /> Customers</p>
              </span>
              <span className="fade">
                <img src="/secSq.png" alt="sec color" className="w-[150px] h-[150px] absolute left-[1070px] top-[0px]" />
                <p className="absolute right-[125px] text-white font-bold tracking-wider top-[50px] text-[18px]">4.9/5 <br /> Client Rating</p>
              </span>

              <img src="/eyeg.png" alt="eye glasses" className="absolute right-0 w-[120px] h-[150px] img-fade5" />
              <img src="/nurse.png" alt="nurse" className="w-[120px] h-[160px] absolute right-0 top-[150px] img-fade6" />

              <span className="fade">
                <img src="/fessSq.png" alt="color" className="absolute right-0 bottom-[20px] w-[120px] h-[130px] top-[310px]" />
                <p className="absolute right-1 top-[348px] text-white font-bold tracking-wide text-[16px]">306 <br /> Professionals</p>
              </span>
            </div>
          </div>
          <div className="content w-[390px] absolute top-[150px] left-[300px]">
            <h1 className="text-3xl font-bold leading-[40px] text-[#102D47] hero-txt w-[390px]">
              Advanced HealthCare Made Personal
            </h1>
            <p className="my-5 fade">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus vitae aspernatur totam quae laboriosam accusamus.
            </p>
            <Button styles="btn-fade">
              Book appointment
            </Button>
          </div>
        </div>
      </section>

      <section id="content1" className="relative w-full h-[100vh] flex justify-center items-center gap-14 scrollStart bg-white">
        <div className="imgContainer w-[300px] h-[480px] mt-[500px] z-30 relative">
          <img src="/groupimg1.png" alt="doctor" className="w-[150px] h-[150px] absolute right-0 top-16" />
          <img src="/groupimg2.png" alt="doctor" className="w-[200px] h-[200px] absolute top-4 left-[-65px]" />
          <img src="/groupimg3.png" alt="doctor" className="w-[400px] h-[250px] absolute bottom-0" />
        </div>
        <div className="txt-content">
          <h1 className="text-[28px] font-bold w-[320px] mt-[-100px] scrolltxt ml-[-200px] opacity-0">
            The Heart and Science Of Medicine Service
          </h1>


          <p className="w-[450px] leading-[32px] my-10 opacity-0 scrollp">
            Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing various versions have evolved over the years, sometimes by accident, sometimes chunks as mecessary making desktop publishing various versions have evolved over the years, sometimes by accident.
          </p>

          <Button styles="bg-white border-blue-500 border text-blue-500! px-8 rounded-[1.8px] mb-[-150px] scrollp opacity-0">
            Read More
          </Button>
        </div>
      </section>

      <section id="services" className="w-full bg-blue-50 scrollnxt">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-[24px] font-bold w-[300px] ml-[-400px] mt-[80px] scrollhead mr-[300px] opacity-0">Highly Innovative Technology & Services</h1>
          <div className="flex flex-col gap-7 w-[700px]">

            <div className="grid grid-cols-3">
              <div className="bg-white w-[200px] h-[200px] flex flex-col px-5 justify-between py-5 rounded shadow scrollgrid1 opacity-0">
                <div className="icon">
                  <img src="/heart.png" alt="heart" className='w-[50px]' />
                </div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Cardiology <FaGreaterThan /></Link>
                </div>
              </div>

              <div className="bg-white w-[200px] h-[200px] rounded shadow flex flex-col px-5 justify-between py-5 scrollgrid2 opacity-0 ml-[-232px]">
                <div className="icon">[**]</div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Radiology <FaGreaterThan /></Link>
                </div>
              </div>

              <div className="bg-white w-[200px] h-[200px] rounded shadow flex flex-col px-5 justify-between py-5 scrollgrid3 ml-[-232px] opacity-0">
                <div className="icon">
                  <img src="/fetus.png" alt="fetus" className='w-[50px]' />
                </div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Gynecology <FaGreaterThan /></Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="bg-white w-[200px] h-[200px] rounded shadow flex flex-col px-5 justify-between py-5 scrollgrid4 opacity-0">
                <div className="icon">
                  <img src="/joint.png" alt="joint" className='w-[50px]' />
                </div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Sports Injury <FaGreaterThan /></Link>
                </div>
              </div>

              <div className="bg-white w-[200px] h-[200px] rounded shadow flex flex-col px-5 justify-between py-5 scrollgrid5 opacity-0 ml-[-232px]">
                <div className="icon">
                  <img src="/lungs.png" alt="lung" className='w-[50px]' />
                </div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Lung Diseases <FaGreaterThan /></Link>
                </div>
              </div>

              <div className="bg-white w-[200px] h-[200px] rounded shadow flex flex-col px-5 justify-between py-5 scrollgrid6 opacity-0 ml-[-232px]">
                <div className="icon">
                  <img src="/eye.png" alt="eye" className='w-[50px]' />
                </div>
                <div>
                  <hr className="w-[150px] border-blue-300 mb-5" />
                  <Link href={'/'} className="mt-5 flex justify-between items-center">Eye Care <FaGreaterThan /></Link>
                </div>
              </div>
            </div>
          </div>

          <Button styles="bg-transparent text-blue-500! border-2 border-blue-400 ml-[-570px] px-6 rounded mt-2 btnhover relative nxtBtn mt-[200px]">
            <span className="txt z-40">View More</span>
          </Button>
        </div>

        <div className="flex items-center mt-20">
          <div className="img bg-gray-400 w-[450px] h-[420px] rounded-tl-[10px] rounded-br relative overflow-hidden ml-[410px] z-20">
            <img src="/testt.png" alt="doctor test patient" className="h-full" />
            <div className="emer flex bg-white justify-center items-center py-3 w-[240px] absolute bottom-0 left-0 gap-3">
              <FaPhone />
              <div className="txt font-bold">
                <h2 className="font-bold">EMERGENCY SERVICE</h2>
                <span className="tracking-widest">+(690) 2560 0020</span>
              </div>
            </div>
          </div>
          <div className="content bg-white w-[660px] h-[420px] pl-20">
            <h1 className="pt-10 font-bold text-2xl w-[300px] mt-9 gshd ml-[-300px] opacity-0">
              Support Groups for Depression & Anxiety
            </h1>
            <p className="w-[350px] leading-[30px] py-10 text-blue-300 pfade opacity-0">
              Letraset sheets containing lorem ipsum passages and more recently with desktop publishing various versions have evolved over the years, sometimes by accident, sometimes chunks as necessary making.
            </p>

            <Button styles="bg-transparent text-blue-500! border-2 mt-[-24px] border-blue-400 rounded px-7 btnhover pfade opacity-0">
              <span className="txt z-40">Learn More</span>
            </Button>
          </div>
        </div>
      </section>

      <section id="docteam" className="flex flex-col h-[155vh] pt-20 bg-white">
        <div className="start flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Team of Doctors
          </h1>
          <p className="text-center w-[380px] mt-5 text-gray-400">
            Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing
          </p>
        </div>

        {/* doctor collages */}
        <div className="doctors flex justify-center items-center mt-8 gap-5">
          {/* first column of doctors */}
          <div className="col1 mt-28">
            <div className="jess w-[250px] h-[390px]">
              <div className="overflow-hidden">
                <img src="/jess.png" alt="Dr. Jessica Joan" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Jessica Joan</h1>
                <p className="field text-gray-500">Nephrology</p>
              </div>
            </div>

            <div className="rebecca w-[250px] h-[390px]">
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
            <div className="alex w-[250px] h-[390px] rounded-xl">
              <div className="overflow-hidden">
                <img src="/alex.png" alt="Dr. Alexandra" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Alexandra</h1>
                <p className="field text-gray-500">Gastroenterology</p>
              </div>
            </div>

            <div className="step w-[250px] h-[390px] rounded-xl">
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
            <div className="kim w-[250px] h-[390px] rounded-xl">
              <div className="overflow-hidden">
                <img src="/kim.png" alt="Dr. Kimberly" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Kimberly</h1>
                <p className="field text-gray-500">Neurology</p>
              </div>
            </div>

            <div className="penelope w-[250px] h-[390px] rounded-xl">
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
          <div className="col4 mt-[-60px]">
            <div className="bella w-[250px] h-[390px] rounded-xl">
              <div className="overflow-hidden">
                <img src="/bella.png" alt="Dr. Bella Carol" className="imghover" />
              </div>
              <div className="py-4 px-1">
                <h1 className="name text-[21px]">Dr. Bella Carol</h1>
                <p className="field text-gray-500">Obstetrics</p>
              </div>
            </div>

            <div className="lauren w-[250px] h-[390px] rounded-xl">
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

      <section className="testimonial flex justify-center relative h-[90vh] bg-blue-50  gap-[200px] pt-28">
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

          <div className="w-[400px] h-[350px] overflow-hidden mt-14 absolute bottom-[-80px]">
            <img src="/mama.png" alt="woman" className="scale-[1.7] ml-16 mt-[-12px] imghoverm" />
          </div>
        </div>
      </section>

      <section className="blogpost pt-32 px-[300px] pb-20 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold font-sans">Blog Post</h1>
          <Button styles="bg-transparent border-blue-400 text-blue-400! border-2">View More</Button>
        </div>
        <div className="flex justify-between mt-14">
          <div className="flex flex-col justify-between ">
            <p>April 27, 2022</p>

            <FaArrowRight className="text-blue-400 text-[34px] border border-blue-500 rounded-full p-2" />
          </div>

          <div className="detail flex flex-col justify-between">
            <p className="w-[210px]">Pellentesque erat mattis inibus felis non, consectetur...</p>
            <img src="/blogp1.png" alt="first blog post" className="w-[250px] h-[150px] mt-5" />
          </div>

          <div className="flex flex-col justify-between ">
            <p>April 28, 2022</p>

            <FaArrowRight className="text-blue-400 text-[34px] border border-blue-500 rounded-full p-2" />
          </div>

          <div className="detail flex flex-col justify-between">
            <p className="w-[210px]">Curabitur eu eroset metus euismod facilisis...</p>
            <img src="/blogp2.png" alt="second blog post" className="w-[250px] h-[150px] mt-5" />
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </section>
  );
}
