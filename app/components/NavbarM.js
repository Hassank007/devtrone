"use client";
import React, { useState } from "react";
import { FaChevronDown,FaLongArrowAltRight } from "react-icons/fa";
import { FaCode,FaArrowUpRightFromSquare } from "react-icons/fa6";

import Button from "./Button";

const NavbarM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    home: false,
    about: false,
    services: false,
    contact: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="xl:hidden block">
      <div className="bg-[#1d1c39] w-full h-24 relative font-LexenDeca">
        <div className="flex flex-row items-center justify-between px-7 pt-7">
          {/* Brand Name */}
          <div className="font-sans">
            <h1 className="text-white text-4xl font-LexenDeca">DevTrone</h1>
          </div>

          {/* Hamburger Button */}
          <button
            className="relative w-10 h-6 flex flex-col justify-between items-center z-50 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute w-8 h-1 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
              }`}
            />
            <span
              className={`absolute w-8 h-1 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
              }`}
            />
            <span
              className={`absolute w-8 h-1 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-24 right-0 w-full bg-[#1d1c39] transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-fit" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 py-6 px-6">
            {/* Home Dropdown */}
            <li
              className="flex justify-between items-center text-white text-sm hover:text-gray-300 cursor-pointer font-LexenDeca"
              onClick={() => toggleDropdown("home")}
            >
              <span>Home</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  dropdowns.home ? "rotate-180" : ""
                }`}
              />
            </li>
            <ul
              className={`pl-6 transition-all duration-300 overflow-hidden ${
                dropdowns.home ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Dashboard
              </li>
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Profile
              </li>
            </ul>

            {/* About Dropdown */}
            <li
              className="flex justify-between items-center text-white text-sm hover:text-gray-300 cursor-pointer"
              onClick={() => toggleDropdown("about")}
            >
              <span>About</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  dropdowns.about ? "rotate-180" : ""
                }`}
              />
            </li>
            <ul
              className={`pl-6 transition-all duration-300 overflow-hidden ${
                dropdowns.about ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Our Team
              </li>
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Company History
              </li>
            </ul>

            {/* Services Dropdown */}
            <li
              className="flex justify-between items-center text-white text-sm hover:text-gray-300 cursor-pointer"
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  dropdowns.services ? "rotate-180" : ""
                }`}
              />
            </li>
            <ul
              className={` transition-all duration-300 overflow-hidden ${
                dropdowns.services ? "max-h-fit" : "max-h-0"
              }`}
            >
              {/* Software Development Card */}
              <li
                className="bg-white p-4 shadow-md cursor-pointer  "
                onClick={() => toggleDropdown("softwareDevelopment")}
              >
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-start space-x-3 pr-7 pb-6">
                    <FaCode className="text-yellow-500 text-3xl " />
                    <div>
                      <h3 className="text-black font-semibold text-md font-LexenDeca">
                        Software Development
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Innovative, future-proof solutions
                      </p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${
                      dropdowns.softwareDevelopment ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Sub-sub-dropdown inside Card */}
                <ul
                  className={` transition-all duration-300 overflow-hidden   pl-2 space-y-5  border-t ${
                    dropdowns.softwareDevelopment ? "max-h-fit" : "max-h-0"
                  }`}
                >
                  <li className="text-gray-500 font-extralight text-xs pt-3 ">
                    {" "}
                    CONSULTING
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <div className="border-t">
                  <button className="flex flex-row items-center gap-5 text-sm text-[#E1BA4D] py-6">

                    View More 
                    <FaLongArrowAltRight />
                  </button>
                  </div>
                </ul>
              </li>

              {/* Mobile App Development Dropdown */}
              <li
                className="bg-white p-4 shadow-md cursor-pointer  "
                onClick={() => toggleDropdown("mobileAppDevelopment")}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-start space-x-3 pr-7 pb-6">
                    <FaCode className="text-yellow-500 text-3xl" />
                    <div>
                      <h3 className="text-black font-semibold text-md">
                        Application Development
                      </h3>
                      <p className="text-gray-500 text-sm">
                      End-to-end app development
                      </p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${
                      dropdowns.mobileAppDevelopment ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Sub-sub-dropdown inside Card */}
                <ul
                  className={` transition-all duration-300 overflow-hidden  pl-2 space-y-3 border-t ${
                    dropdowns.mobileAppDevelopment ? "max-h-fit" : "max-h-0"
                  }`}
                >
                  
                  <li className="text-black text-sm hover:text-gray-700 py-3 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  
                </ul>
              </li>
              <li
                className="bg-white p-4 shadow-md cursor-pointer  "
                onClick={() => toggleDropdown("softwareteams")}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-start space-x-3 pr-7 pb-6">
                    <FaCode className="text-yellow-500 text-3xl" />
                    <div>
                      <h3 className="text-black font-semibold text-md">
                        Software Teams
                      </h3>
                      <p className="text-gray-500 text-sm">
                      Skilled developers, Transparent billing
                      </p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${
                      dropdowns.softwareteams ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Sub-sub-dropdown inside Card */}
                <ul
                  className={` transition-all duration-300 overflow-hidden pt-3  pl-2 space-y-3 border-t ${
                    dropdowns.softwareteams ? "max-h-fit" : "max-h-0"
                  }`}
                >
                  <li className="text-gray-500 font-extralight text-xs">
                    {" "}
                    CONSULTING
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  <li className="text-black text-sm hover:text-gray-700 py-1 ">
                    Software Consulting <br />
                    <span className="text-gray-400">
                      {" "}
                      Expert advice on tech
                    </span>
                  </li>
                  
                </ul>
              </li>
            </ul>

            {/* UI/UX Design Dropdown */}
            <li
              className="flex justify-between items-center text-white text-sm hover:text-gray-300 cursor-pointer py-2"
              onClick={() => toggleDropdown("uiuxDesign")}
            >
              <span>UI/UX Design</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  dropdowns.uiuxDesign ? "rotate-180" : ""
                }`}
              />
            </li>
            <ul
              className={`pl-6 transition-all duration-300 overflow-hidden ${
                dropdowns.uiuxDesign ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="text-white text-xs hover:text-gray-300 cursor-pointer py-1">
                Wireframing
              </li>
              <li className="text-white text-xs hover:text-gray-300 cursor-pointer py-1">
                Prototyping
              </li>
            </ul>
            {/* Contact Dropdown */}
            <li
              className="flex justify-between items-center text-white text-sm hover:text-gray-300 cursor-pointer"
              onClick={() => toggleDropdown("contact")}
            >
              <span>Contact</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  dropdowns.contact ? "rotate-180" : ""
                }`}
              />
            </li>
            <ul
              className={`pl-6 transition-all duration-300 overflow-hidden ${
                dropdowns.contact ? "max-h-40" : "max-h-0"
              }`}
            >
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Email Us
              </li>
              <li className="text-white text-sm hover:text-gray-300 cursor-pointer py-2">
                Visit Office
              </li>
            </ul>
            <div className="flex flex-col items-start space-y-5">
              <a href="#" className="flex flex-row gap-2 text-white hover:text-gray-600">
                Hire
                <FaArrowUpRightFromSquare  className="mt-1 text-white"/>
              </a>
              <a
                href="#"
                className="pr-5"
              >
                <Button/>
              </a>
            </div>
          </ul>
          
        </div>
        
      </div>
     
    </div>
  );
};

export default NavbarM;8