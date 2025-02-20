import React from 'react'
import { FaRegStar } from "react-icons/fa";
const Reviews = () => {
  return (
    <div className='bg-white '>
      <div className="flex flex-col items-center justify-center p-6  space-y-10 rounded-lg">
      {/* Rating Section */}
      <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className="flex items-center space-x-2">
        <FaRegStar className="text-yellow-500" fill="currentColor" />
        <span className="font-bold text-lg md:text-xl">4.5/5</span>
        <span className="text-gray-600 md:text-xl">based on 1200+ reviews on</span>
      </div>

      {/* Review Platforms */}
      <div className="flex space-x-3 my-3 md:ml-8">
        <div className="w-8 h-8  border border-gray-400 rounded-md flex items-center justify-center">
        <FaRegStar className="text-yellow-500" fill="currentColor" />
        </div>
        <div className="w-8 h-8 border border-gray-400  rounded-md flex items-center justify-center">
        <FaRegStar className="text-yellow-500" fill="currentColor" />
        </div>
        <div className="w-8 h-8 border border-gray-400  rounded-md flex items-center justify-center">
        <FaRegStar className="text-yellow-500" fill="currentColor" />
        </div>
      </div>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 border border-gray-400 md:border-none rounded-lg text-center">
  <div className="p-4 md:p-8 border-r md:border-b md:border-r border-gray-400">
    <p className="text-4xl md:text-6xl font-bold">675+</p>
    <p className="text-gray-600">Developers</p>
  </div>
  <div className="p-4 md:p-8  md:border-b border-gray-400">
    <p className="text-4xl md:text-6xl font-bold ">4200+</p>
    <p className="text-gray-600">Projects Delivered</p>
  </div>
  <div className=" md:p-8 col-span-2 md:col-span-1 p-4 border-t md:border-t-0 border-gray-400 md:border-b md:border-l">
    <p className="text-4xl md:text-6xl font-bold">97%</p>
    <p className="text-gray-600">Client Satisfaction</p>
  </div>
</div>


      {/* Trusted by Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full mt-4">
  {/* Left Logo (hidden on small screens) */}
  <img
    src="/logos/logoreviewleft.png"
    alt="Left Logo"
    className="hidden md:block w-60 h-60"
  />

  {/* Main Content Box */}
  <div className="flex flex-col items-start justify-center w-full md:w-fit md:h-60 p-5 custom-gradient text-white rounded-lg">
    <p className="text-lg text-left">Trusted By</p>
    <p className="text-3xl font-bold text-left">2500 Companies</p>
    <p className="text-lg text-left">Globally</p>
    <a href="#" className="text-yellow-400 mt-2 inline-block">
      See our clients →
    </a>
  </div>

  {/* Right Logo (hidden on small screens) */}
  <img
    src="/logos/logoreviewright.png"
    alt="Right Logo"
    className="hidden md:block w-60 h-60"
  />
</div>

    </div>
    </div>
  )
}

export default Reviews
