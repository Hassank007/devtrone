"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight ,AiOutlineArrowRight} from 'react-icons/ai'

const Solutions = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title & Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions We Deliver
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base">
            We have the top 1% of the software engineering talent in India
            building robust, scalable, and reliable software solutions for
            clients across the globe.
          </p>
        </div>

        {/* Scrollable container with extra bottom padding for scrollbar */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-custom mx-0 md:mx-12 pb-6"
          >
            {/* Card 1 */}
            <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
            {/* Card 2 */}
            <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
            {/* Card 3 */}
            <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
            {/* Card 4 */}
            <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
            {/* Card 5 */}
            <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
    <div className="relative min-w-[250px] rounded-lg shadow-md group overflow-hidden">
      {/* Image container */}
      <div className="h-44 w-full relative">
        <Image
          src="/images/crm.jpg"
          alt="CRM"
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
        />
        {/* Always visible heading (fades out on hover) */}
        <div className="absolute -bottom-10 left-2  bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-sm font-semibold text-gray-900">CRM</h3>
        </div>
      </div>
      
      {/* Sliding info box (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">CRM</h3>
        <p className="text-sm text-gray-700">
          Your description goes here.
        </p>
      </div>
      
      {/* Arrow icon appears on hover */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AiOutlineArrowRight className="w-4 h-4 text-blue-600 rotate-45" />
      </div>
    </div>
            {/* Additional cards as needed */}
          </div>

          {/* Nav Buttons Positioned in Line with the Scrollbar */}
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-full shadow hover:bg-gray-200 absolute -bottom-4 right-14"
          >
            <AiOutlineLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-full shadow hover:bg-gray-200 absolute -bottom-4 right-2"
          >
            <AiOutlineRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Solutions
