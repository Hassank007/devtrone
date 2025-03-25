import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTrophy, FaUserAlt, FaWhatsapp,FaUsers } from 'react-icons/fa'
const ConsultationSection = () => {
  return (
    <section className="w-full mx-auto">
      {/* 12-column grid: left is col-span-5 (narrower), right is col-span-7 (wider) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* LEFT COLUMN (Peach BG), all left-aligned like the screenshot */}
        <div className="md:col-span-5 bg-[#FFF7E0] px-10 py-10 md:px-32 md:py-28 flex flex-col ">
          
          {/* Top row of contact actions (left-aligned) */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="#"
              className="flex items-center space-x-2 text-gray-800 font-medium hover:underline"
            >
              <MdCall className="text-xl" />
              <span>Book a Call</span>
            </a>
            <a 
              href="#"
              className="flex items-center space-x-2 text-gray-800 font-medium hover:underline"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="#"
              className="flex items-center space-x-2 text-gray-800 font-medium hover:underline"
            >
              <MdEmail className="text-xl" />
              <span>Email us</span>
            </a>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Trusted by Startups and Fortune 500 companies
          </h3>

          {/* Bullet points (left-aligned) */}
          <ul className="space-y-6">
      {/* 1st Item */}
      <li className="flex items-start space-x-4">
        {/* Icon in a circle */}
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-700">
            <FaTrophy className="h-5 w-5" />
          </div>
        </div>
        {/* Text block */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            20+ years of experience
          </h4>
          <p className="text-gray-600">
            We can handle projects of all complexities.
          </p>
        </div>
      </li>

      {/* 2nd Item */}
      <li className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-700">
            <FaUserAlt className="h-5 w-5" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            2500+ satisfied customers
          </h4>
          <p className="text-gray-600">
            Startups to Fortune 500, we have worked with all.
          </p>
        </div>
      </li>

      {/* 3rd Item */}
      <li className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-700">
            <FaUsers className="h-5 w-5" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            675+ in-house team
          </h4>
          <p className="text-gray-600">
            Top 1% industry talent to ensure your digital success.
          </p>
        </div>
      </li>
    </ul>

            <div className="mt-auto">
            <div className="flex items-center gap-4">
              <img
                src="/logos/microsoft.png"
                alt="Microsoft"
                className="h-10 object-contain"
              />
              
              <img
                src="/logos/google.png"
                alt="Google"
                className="h-10 object-contain"
              />
              <img
                src="logos/amz.png"
                alt="PayPal"
                className="h-10 object-contain"
              />
            </div>
          </div>
          </div>
          
          {/* Trusted by heading (left-aligned) */}
          
          {/* Logos pinned to bottom (left-aligned) */}
        
        </div>
        
        {/* RIGHT COLUMN (White BG), ~58% width on md+ */}
        <div className="md:col-span-7 bg-white px-10 py-10 md:px-16   md:py-28 flex flex-col items-start text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Book Free Consultation
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Guaranteed response within 1 business hours.
          </p>
          
          {/* Form */}
          <form className="w-full">
            {/* Row 1: Full Name & Email side-by-side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            
            {/* Row 2: Phone & Country side-by-side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="w-full rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
               <input
                type="email"
                placeholder="Country"
                className="w-full rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            
            {/* Project Brief / Your Requirements */}
            <div className="mb-4">
              <textarea
                rows="4"
                placeholder="Your Requirements (Project Brief)"
                className="w-full rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            
            {/* File Upload */}
            <div className="border border-gray-300 rounded p-4 w-full">
      {/* Section Title */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Your Requirements
      </label>
      
      {/* Project Brief Text Area */}
      <textarea
        rows="4"
        placeholder="Project Brief"
        className="w-full border border-gray-200 rounded p-2 focus:outline-none 
                   focus:ring-1 focus:ring-gray-400 text-gray-800 mb-4"
      />

      {/* File Upload */}
      <div className="flex items-center">
        {/* Label styled as a button */}
        <label
          htmlFor="projectFile"
          className="border border-gray-300 text-gray-700 text-sm 
                     px-4 py-2 rounded cursor-pointer hover:bg-gray-100"
        >
          BROWSE | DROP FILES HERE
        </label>
        
        {/* Hidden file input */}
        <input
          type="file"
          id="projectFile"
          name="projectFile"
          className="hidden"
        />
      </div>
    </div>
            {/* Simple captcha row (1 + 5?) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 mt-8">
              <span className="text-gray-700">1 + 5 = ? <input
                type="text"
                placeholder="Your answer"
                className="w-44 rounded-md border border-gray-300 px-3 py-2
                           focus:outline-none focus:ring-1 focus:ring-yellow-500"
              /></span>
              
               <button className='flex flex-row bg-primary-yellow p-4 rounded-full gap-3 font-semibold text-blue-950 '> ENQUIRE NOW  < MdKeyboardArrowRight className='bg-white text-2xl rounded-full text-blue-950 '/></button>
            </div>
            
            {/* Enquire Now Button */}
            
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection
