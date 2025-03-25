"use client";

import React from "react";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineLock,
} from "react-icons/ai";
import { FaTrophy, FaUserAlt, FaUsers } from "react-icons/fa";
import ClientsSection from "../components/Numbers";
import Footer from "../Footer";

export default function ContactPage() {
  return (
    <><main className="bg-[#05164d] min-h-screen w-full flex items-center justify-center py-10 px-4">
          {/* Container: make the left form wider using a custom grid definition */}
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

              {/* Left/Form Section */}
              <div className="bg-white rounded-md shadow-md p-6 lg:p-8 relative">

                  {/* Heading */}
                  <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Get In Touch</h2>
                      <p className="text-xs text-gray-600 mt-1">
                          Our team will get back to you within 1 business hour or less.
                      </p>
                  </div>

                  {/* Top row with icons and NDA */}
                  <div className="flex flex-wrap items-center justify-between mb-5">
                      {/* Left side: Book a call, Whatsapp, Emails */}
                      <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-gray-700">
                              <AiOutlinePhone className="text-sm" />
                              <span className="text-xs font-medium">Book a Call</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-700">
                              <AiOutlineWhatsApp className="text-sm" />
                              <span className="text-xs font-medium">Whatsapp</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-700">
                              <AiOutlineMail className="text-sm" />
                              <span className="text-xs font-medium">Emails</span>
                          </div>
                      </div>
                      {/* Right side: NDA icon */}
                      <div className="flex items-center space-x-1 text-gray-700">
                          <AiOutlineLock className="text-sm" />
                          <span className="text-xs font-medium">NDA</span>
                      </div>
                  </div>

                  {/* The Form */}
                  <form onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* Full Name */}
                          <div className="flex flex-col">
                              <label className="text-xs font-medium text-gray-700 mb-1">
                                  Full Name
                              </label>
                              <input
                                  type="text"
                                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  placeholder="Enter Your Name"
                                  required />
                          </div>

                          {/* Email Address */}
                          <div className="flex flex-col">
                              <label className="text-xs font-medium text-gray-700 mb-1">
                                  Email Address
                              </label>
                              <input
                                  type="email"
                                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  placeholder="Enter Your Email"
                                  required />
                          </div>

                          {/* Country */}
                          <div className="flex flex-col">
                              <label className="text-xs font-medium text-gray-700 mb-1">
                                  Country
                              </label>
                              <input
                                  type="text"
                                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  placeholder="Set Your Country" />
                          </div>

                          {/* Phone Number */}
                          <div className="flex flex-col">
                              <label className="text-xs font-medium text-gray-700 mb-1">
                                  Phone Number (Optional)
                              </label>
                              <input
                                  type="text"
                                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  placeholder="Enter Your Phone Number" />
                          </div>
                      </div>

                      {/* Select Your Service */}
                      <div className="mb-4">
                          <label className="text-xs font-medium text-gray-700 mb-1 block">
                              Select Your Service
                          </label>
                          <select
                              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                              defaultValue=""
                          >
                              <option value="" disabled>
                                  Please select from the dropdown
                              </option>
                              <option value="web">Web Development</option>
                              <option value="mobile">Mobile App Development</option>
                              <option value="uiux">UI/UX Design</option>
                              <option value="marketing">Digital Marketing</option>
                          </select>
                      </div>

                      {/* How can we help? (Textarea) */}
                      <div className="mb-4">
                          <label className="text-xs font-medium text-gray-700 mb-1 block">
                              How Can We Help?
                          </label>
                          <textarea
                              rows={4}
                              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                              placeholder="Describe your requirements..."
                          ></textarea>
                      </div>

                      {/* File Upload */}
                      <div className="mb-6">
                          <label className="text-xs font-medium text-gray-700 mb-1 block">
                              Attach files (if any)
                          </label>
                          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center text-gray-500 cursor-pointer text-sm">
                              Browse | Drop Files Here
                          </div>
                      </div>

                      {/* Submit Button */}
                      <button
                          type="submit"
                          className="bg-green-500 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-green-600 transition-colors"
                      >
                          Send Your Query
                      </button>
                  </form>
              </div>

              {/* Right/Info Section */}
              <div className="text-white flex flex-col justify-center">
                  {/* Heading */}
                  <h3 className="text-lg font-semibold mb-3">
                      Trusted by startups and Fortune 500 companies
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-5 mb-5">
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
                              <h4 className="text-base font-semibold text-white">
                                  20+ years of experience
                              </h4>
                              <p className="text-gray-400 text-sm">
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
                              <h4 className="text-base font-semibold text-white">
                                  2500+ satisfied customers
                              </h4>
                              <p className="text-gray-400 text-sm">
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
                              <h4 className="text-base font-semibold text-white">
                                  675+ in-house team
                              </h4>
                              <p className="text-gray-400 text-sm">
                                  Top 1% industry talent to ensure your digital success.
                              </p>
                          </div>
                      </li>
                  </ul>

                  {/* Logos Section */}
                  <div className="flex flex-wrap gap-4 items-center">
                      {/* Placeholder for logos */}
                      <img
                          src="/logos/logocontactpg.png"
                          alt="Influx Logo"
                          className=" w-full" />
                      {/* ...add more logos as needed */}
                  </div>
              </div>
          </div>
      </main><ClientsSection />
      <Footer/>
      </>  
  );
}
