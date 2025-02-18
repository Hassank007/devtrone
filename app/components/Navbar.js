"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const tabItems = [
  {
    label: "Application Development",
    content: "Details about Application Development.",
  },
  {
    label: "Dedicated Software Teams",
    content: "Information on Dedicated Software Teams.",
  },
  { label: "eCommerce", content: "Overview of our eCommerce solutions." },
  { label: "QA & Testing", content: "Our QA & Testing approach." },
  { label: "Cloud Services", content: "Insights into our Cloud Services." },
  { label: "Data Solutions", content: "Learn about our Data Solutions." },
  { label: "AI & ML Solutions", content: "Discover our AI & ML Solutions." },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabItems[0].label);

  const renderContent = () => {
    switch (activeTab) {
      case "Application Development":
        return (
          <div>
            <div className="flex justify-between items-center ">
              <div className="flex items-start space-x-5 w-full  p-3 hover:bg-bg-yellow rounded-lg border-b ">
                <FaCode className="text-yellow-500 text-5xl " />
                <div>
                  <h3 className="text-black font-semibold text-md font-LexenDeca">
                    Software Development
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Innovative, future-proof solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
                <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 border-b">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <div>
                  <button className="flex flex-row items-center gap-5 text-sm p-2 text-[#E1BA4D] py-1">
                    View More
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </ul>
              <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
                <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 border-b">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <div>
                  <button className="flex flex-row items-center gap-5 text-sm p-2 text-[#E1BA4D] py-1">
                    View More
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </ul>
              <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
                <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 border-b">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <div>
                  <button className="flex flex-row items-center gap-5 text-sm p-2 text-[#E1BA4D] py-1">
                    View More
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </ul>
              <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
                <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 border-b">
                  Software Consulting <br />
                  <span className="text-gray-400">Expert advice on tech</span>
                </li>
                <div>
                  <button className="flex flex-row items-center gap-5 text-sm p-2 text-[#E1BA4D] py-1">
                    View More
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </ul>
              {/* Repeat similar structure for other columns */}
            </div>
          </div>
        );
        case "Dedicated Software Teams":
  return (
    <div className="flex flex-row h-full">
      {/* Left Side: Main Content (75% width) */}
      <div className="w-3/4">
        {/* Header Section */}
        <div className="flex justify-between items-center w-full ">
          <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
            <FaCode className="text-yellow-500 text-5xl" />
            <div>
              <h3 className="text-black font-semibold text-md font-LexenDeca">
                Dedicated Software Teams
              </h3>
              <p className="text-gray-500 text-sm">
                On-demand top resources
              </p>
            </div>
          </div>
        </div>

        {/* Main Content with List Columns */}
        <div className="flex flex-row">
          <div className="w-full flex flex-row px-5">
            <ul className="transition-all duration-300 overflow-hidden  pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On-demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Offshore Development <br />
                <span className="text-gray-400">Nearshore excellence, always</span>
              </li>
            </ul>
            <ul className="transition-all duration-300 overflow-hidden  px-5 pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On-demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Offshore Development <br />
                <span className="text-gray-400">Nearshore excellence, always</span>
              </li>
            </ul>
            {/* You can add more columns if needed */}
          </div>
        </div>
      </div>

      {/* Right Side: Extra Info Section (25% width) */}
      <div className="w-2/5 px-2 flex flex-col justify-start  bg-gray-100">
      <div className="flex justify-between items-center w-full ">
          <div className="flex items-start space-x-5 w-full p-3   rounded-lg border-b">
           
            <div className="pb-1">
              <h3 className="text-black font-semibold text-md font-LexenDeca">
                Other Service 
              </h3>
              <p className="text-gray-500 text-sm">
                On-demand top resources
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-[0.05rem]"></div>
        <div className="flex justify-between items-center w-full pt-4">
          <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg ">
            <FaCode className="text-yellow-500 text-5xl" />
            <div>
              <h3 className="text-black font-semibold text-md font-LexenDeca">
                Dedicated Software Teams
              </h3>
              <p className="text-gray-500 text-sm">
                On-demand top resources
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-4">
          <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg ">
            <FaCode className="text-yellow-500 text-5xl" />
            <div>
              <h3 className="text-black font-semibold text-md font-LexenDeca">
                Dedicated Software Teams
              </h3>
              <p className="text-gray-500 text-sm">
                On-demand top resources
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

        
      // Add cases for other tabs as needed
      default:
        return null;
    }
  };

  return (
    <div className="lg:block hidden">
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-2xl mx-auto px-8 relative">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold text-gray-800">
                Devtrone
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-gray-800 hover:text-gray-600">
                  Services
                </button>
              </div>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Who We Serve
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Technologies
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Solutions
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Case Studies
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Company
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Hire
              </a>
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="fixed top-24 left-0 right-0 bg-white shadow-lg z-10"
          >
            <div className="max-w-screen-2xl mx-auto px-8 py-6">
              <div className="flex">
                <div className="w-1/4 border-r pr-4">
                  {tabItems.map((item) => (
                    <div
                      key={item.label}
                      onMouseEnter={() => setActiveTab(item.label)}
                      className={`py-4 cursor-pointer p-4 rounded-lg flex items-center ${
                        activeTab === item.label
                          ? "font-bold bg-bg-yellow text-gray-800"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      {item.label}
                      <FaLongArrowAltRight className="ml-4" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 pl-4">{renderContent()}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;