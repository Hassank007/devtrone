import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=' w-full h-screen'>
    <section className="relative flex flex-col items-center lg:items-start  text-center justify-center min-h-screen px-4 py-16 custom-gradient lg:gap-10 ">
      {/* Text Content */}
      <div className=" lg:pl-20 lg:pr-[20rem] lg:space-y-4 ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading lg:leading-normal lg:text-left  text-white">
          Software Engineering,<br/> Consulting &amp; Outsourcing
        </h1>
        <p className="mt-4 text-base md:text-lg text-white lg:text-left">
          We are an award-winning Indian software engineering company focused on
          providing outsourced software development and software engineering teams
          to our clients globally.
        </p>
      </div>

      {/* Logos */}
      <div className="mt-8 lg:ml-20 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
        {/* Replace these src paths with your actual logo images in /public/logos/ */}
        <Image
          src="/logos/microsoft.png"
          alt="CSF"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logos/amz.png"
          alt="Yale"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logos/google.png"
          alt="Panasonic"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logos/clutch.png"
          alt="Orange"
          width={120}
          height={60}
          className="object-contain"
        />
        {/* Add as many logos as you need */}
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute right-6 bottom-6 flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-1">Scroll</span>
        <div className="w-6 h-6 border-2 border-gray-600 rounded-full flex items-center justify-center animate-bounce">
          <svg
            className="w-3 h-3 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
