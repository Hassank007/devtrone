"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLongArrowAltRight, FaCode } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Button from "./Button";

const dropdownData = {
  Services: [
    {
      label: "Application Development",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Software Development
                </h3>
                <p className="text-gray-500 text-sm">
                  Innovative, future‑proof solutions
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            {/* First Column */}
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
            {/* You can duplicate or add more columns if needed */}
          </div>
        </div>
      ),
    },
    {
      label: "Dedicated Software Teams",
      content: (
        <div className="flex flex-row h-full">
          {/* Left Side: Main Content (75% width) */}
          <div className="w-3/4">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
                <FaCode className="text-yellow-500 text-5xl" />
                <div>
                  <h3 className="text-black font-semibold text-md font-LexenDeca">
                    Dedicated Software Teams
                  </h3>
                  <p className="text-gray-500 text-sm">
                    On‑demand top resources
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  IT Staff Augmentation <br />
                  <span className="text-gray-400">On‑demand top resources</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                  Dedicated Development Team <br />
                  <span className="text-gray-400">Your expert dev team</span>
                </li>
                <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                  Offshore Development <br />
                  <span className="text-gray-400">
                    Nearshore excellence, always
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side: Extra Info Section (25% width) */}
          <div className="w-2/5 px-2 flex flex-col justify-start bg-gray-100">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-start space-x-5 w-full p-3 rounded-lg border-b">
                <div className="pb-1">
                  <h3 className="text-black font-semibold text-md font-LexenDeca">
                    Other Service
                  </h3>
                  <p className="text-gray-500 text-sm">
                    On‑demand top resources
                  </p>
                </div>
              </div>
              {/* You can add more extra info items here */}
            </div>
          </div>
        </div>
      ),
    },
    // Add more Service tabs if needed
  ],
  "Who We Serve": [
    {
      label: "Healthcare",
      content: (
        <div className="flex flex-row h-full">
        {/* Left Side: Main Content (75% width) */}
        <div className="w-3/4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Dedicated Software Teams
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On‑demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                <span className="text-gray-400">
                  Nearshore excellence, always
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side: Extra Info Section (25% width) */}
        <div className="w-2/5 px-2 flex flex-col justify-start bg-gray-100">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-start space-x-5 w-full p-3 rounded-lg border-b">
              <div className="pb-1">
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Other Service
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
            {/* You can add more extra info items here */}
            
          </div>
          <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Dedicated Software Teams
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
        </div>
      </div>
      ),
    },
    {
      label: "Finance",
      content: (
        <div className="flex flex-row h-full">
        {/* Left Side: Main Content (75% width) */}
        <div className="w-3/4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Dedicated Software Teams
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On‑demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                <span className="text-gray-400">
                  Nearshore excellence, always
                </span>
              </li>
            </ul>
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On‑demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                <span className="text-gray-400">
                  Nearshore excellence, always
                </span>
              </li>
            </ul>
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                <span className="text-gray-400">On‑demand top resources</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                <span className="text-gray-400">Your expert dev team</span>
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                <span className="text-gray-400">
                  Nearshore excellence, always
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side: Extra Info Section (25% width) */}
      
      </div>
      ),
    },
   
  ],
  Technologies: [
    {
      label: "React",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Software Development
                </h3>
                <p className="text-gray-500 text-sm">
                  Innovative, future‑proof solutions
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            {/* First Column */}
            <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
              <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
             
            </ul>
            <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
              <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
             
            </ul>
            <ul className="transition-all duration-300 overflow-hidden pl-2 w-full space-y-5">
              <li className="text-gray-500 text-sm pt-3 p-2">CONSULTING</li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5 ">
                Software Consulting <br />
              
              </li>
             
            </ul>
            {/* You can duplicate or add more columns if needed */}
          </div>
        </div>
      ),
    },
    {
      label: "Node.js",
      content: (
        <div className="flex flex-row h-full">
        {/* Left Side: Main Content (75% width) */}
        <div className="w-3/4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Dedicated Software Teams
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                
              </li>
            </ul>
            <ul className="transition-all duration-300 overflow-hidden pt-5 w-full space-y-6">
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                IT Staff Augmentation <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1">
                Dedicated Development Team <br />
                
              </li>
              <li className="text-black text-md hover:bg-bg-yellow rounded-lg p-2 hover:text-gray-700 py-1 pb-5">
                Offshore Development <br />
                
              </li>
            </ul>
            
          </div>
        </div>
        {/* Right Side: Extra Info Section (25% width) */}
        <div className="w-2/5 px-2 flex flex-col justify-start bg-gray-100">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-start space-x-5 w-full p-3 rounded-lg border-b">
              <div className="pb-1">
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Other Service
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
            {/* You can add more extra info items here */}
            
          </div>
          <div className="flex items-start space-x-5 w-full p-3 hover:bg-bg-yellow rounded-lg border-b">
              <FaCode className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-black font-semibold text-md font-LexenDeca">
                  Dedicated Software Teams
                </h3>
                <p className="text-gray-500 text-sm">
                  On‑demand top resources
                </p>
              </div>
            </div>
        </div>
      </div>
      ),
    },
    {
      label: "Python",
      content: (
        <div>
          <h3 className="text-lg font-bold">Python</h3>
          <p className="text-sm text-gray-500">
            Detailed information about our Python solutions.
          </p>
        </div>
      ),
    },
    {
      label: "Java",
      content: (
        <div>
          <h3 className="text-lg font-bold">Java</h3>
          <p className="text-sm text-gray-500">
            Detailed information about our Java services.
          </p>
        </div>
      ),
    },
  ],
  Solutions: [
    {
      label: "Digital Transformation",
      content: (
        <div>
          <h3 className="text-lg font-bold">Digital Transformation</h3>
          <p className="text-sm text-gray-500">
            Detailed information about digital transformation services.
          </p>
        </div>
      ),
    },
    {
      label: "Cloud Migration",
      content: (
        <div>
          <h3 className="text-lg font-bold">Cloud Migration</h3>
          <p className="text-sm text-gray-500">
            Detailed information about cloud migration services.
          </p>
        </div>
      ),
    },
    {
      label: "Cybersecurity",
      content: (
        <div>
          <h3 className="text-lg font-bold">Cybersecurity</h3>
          <p className="text-sm text-gray-500">
            Detailed information about cybersecurity services.
          </p>
        </div>
      ),
    },
  ],
  "Case Studies": [
    {
      label: "Project A",
      content: (
        <div>
          <h3 className="text-lg font-bold">Project A</h3>
          <p className="text-sm text-gray-500">
            Detailed case study for Project A.
          </p>
        </div>
      ),
    },
    {
      label: "Project B",
      content: (
        <div>
          <h3 className="text-lg font-bold">Project B</h3>
          <p className="text-sm text-gray-500">
            Detailed case study for Project B.
          </p>
        </div>
      ),
    },
    {
      label: "Project C",
      content: (
        <div>
          <h3 className="text-lg font-bold">Project C</h3>
          <p className="text-sm text-gray-500">
            Detailed case study for Project C.
          </p>
        </div>
      ),
    },
  ],
  Company: [
    {
      label: "About Us",
      content: (
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-sm text-gray-500">
            Detailed information about our company.
          </p>
        </div>
      ),
    },
    {
      label: "Careers",
      content: (
        <div>
          <h3 className="text-lg font-bold">Careers</h3>
          <p className="text-sm text-gray-500">
            Detailed information about career opportunities.
          </p>
        </div>
      ),
    },
    {
      label: "Press",
      content: (
        <div>
          <h3 className="text-lg font-bold">Press</h3>
          <p className="text-sm text-gray-500">Detailed press information.</p>
        </div>
      ),
    },
    {
      label: "Blog",
      content: (
        <div>
          <h3 className="text-lg font-bold">Blog</h3>
          <p className="text-sm text-gray-500">
            Latest updates and articles.
          </p>
        </div>
      ),
    },
  ],
};

const mainNavLinks = Object.keys(dropdownData);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  // When the active dropdown changes, default to its first tab
  useEffect(() => {
    if (activeDropdown && dropdownData[activeDropdown]) {
      setActiveTab(dropdownData[activeDropdown][0].label);
    } else {
      setActiveTab(null);
    }
  }, [activeDropdown]);

  return (
    <div className="xl:block hidden">
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-2xl mx-auto px-8 relative">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold text-gray-800">
                Devtrone
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {mainNavLinks.map((link) => (
                <div
                  key={link}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-800 hover:text-gray-600">
                    {link}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center space-x-4">
              <a href="#" className="flex flex-row gap-2 text-gray-800 hover:text-gray-600">
                Hire
                <FaArrowUpRightFromSquare  className="mt-1"/>
              </a>
              <a
                href="#"
                className=""
              >
                <Button/>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            // Keep the panel open on hover
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed top-24 left-0 right-0 bg-white shadow-lg z-10"
          >
            <div className="max-w-screen-2xl mx-auto px-8 py-6">
              <div className="flex">
                {/* Left Column: Tab List */}
                <div className="w-1/4 border-r pr-4">
                  {dropdownData[activeDropdown].map((item) => (
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
                {/* Right Column: Active Tab Content */}
                <div className="flex-1 pl-4">
                  {dropdownData[activeDropdown]
                    .find((item) => item.label === activeTab)
                    ?.content}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
