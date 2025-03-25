// pages/index.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-fit md:h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/custom-web-development-banner.jpg.webp')" }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto  py-10 sm:py-20">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs sm:text-sm text-gray-200">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">{'>'}</span>
            <span className="hover:underline cursor-pointer">Services</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-white">Web Development</span>
          </nav>

          {/* 2-column layout */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8 sm:gap-32">
            {/* Left Column */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary-yellow font-bold mb-4">
                Web Application Development Services
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
                Stand out online with ValueCoders custom web application
                development services. With innovative solutions tailored to
                your unique needs, we enhance your online presence to capture
                attention and drive success.
              </p>
              <button className="flex flex-row items-center bg-transparent border border-white px-4 py-2 sm:px-5 sm:py-3 rounded-full gap-2 sm:gap-3 font-semibold text-sm sm:text-base text-white">
                GET FREE CONSULTATION
                <MdKeyboardArrowRight className="bg-white text-xl sm:text-2xl rounded-full text-black" />
              </button>
            </div>

            {/* Right Column - Testimonial Card */}
            <div className="md:w-1/2">
              <div className="relative bg-white rounded-lg shadow-lg max-w-lg mx-auto">
                {/* Top border in orange */}
                <div className="h-2 w-full bg-orange-500 rounded-t-lg"></div>

                {/* Floating icon (e.g., arrow or custom icon) */}
                <div className="absolute -top-5 left-5 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center border border-orange-500">
                  {/* Replace with your arrow/icon */}
                  <img src="/icon.png" alt="Icon" className="w-6 h-6" />
                </div>

                {/* Floating reviewer image */}
                <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
                  <img
                    src="/reviewer.jpg"
                    alt="Reviewer"
                    className="w-20 h-20 rounded-full border-4 border-white object-cover shadow"
                  />
                </div>

                {/* Card content */}
                <div className="pt-16 px-6 pb-6 text-center">
                  <p className="text-gray-800 text-base sm:text-lg italic mb-4">
                    “Outstanding results, clear communication, and a dedicated team.
                    We’re extremely satisfied with their IT services.”
                  </p>
                  <p className="text-gray-900 font-semibold">- Jonathan</p>

                  {/* Divider */}
                  <hr className="my-4" />

                  {/* First rating row */}
                  <div className="mt-6 flex items-center justify-center space-x-8">
                    {/* Left Rating (G2) */}
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Rated 4.8/5 stars on G2
                      </p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-6 w-px bg-gray-300"></div>

                    {/* Right Rating (Clutch) */}
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Rated 4.9/5 stars on Clutch
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logos Row - keep original size */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6 ml-auto max-w-md">
                <img
                  src="/logos/microsoft.png"
                  alt="Microsoft"
                  className="h-8 object-contain"
                />
                <img
                  src="/logos/amz.png"
                  alt="AWS"
                  className="h-8 object-contain"
                />
                <img
                  src="/logos/google.png"
                  alt="Google"
                  className="h-8 object-contain"
                />
                <img
                  src="/logos/clutch.png"
                  alt="Clutch"
                  className="h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with horizontal lines on each side */}
          <div className="flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <h2 className="mx-4 text-xs sm:text-base md:text-lg text-gray-700 text-center">
              Trusted by startups and{" "}
              <span className="text-orange-500 font-semibold">Fortune 500</span> companies
            </h2>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Logos Row (unchanged sizes) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <img
              src="/logos/yale.png"
              alt="Yale University"
              className="h-8 object-contain"
            />
            <img
              src="/logos/dubai-police.png"
              alt="Dubai Police"
              className="h-8 object-contain"
            />
            <img
              src="/logos/panasonic.png"
              alt="Panasonic"
              className="h-8 object-contain"
            />
            <img
              src="/logos/infosys.png"
              alt="Infosys"
              className="h-8 object-contain"
            />
            <img
              src="/logos/kia.png"
              alt="KIA"
              className="h-8 object-contain"
            />
            <img
              src="/logos/eatigo.png"
              alt="Eatigo"
              className="h-8 object-contain"
            />
            <img
              src="/logos/hitachi.png"
              alt="Hitachi"
              className="h-8 object-contain"
            />
            <img
              src="/logos/orange.png"
              alt="Orange Business Services"
              className="h-8 object-contain"
            />
            <img
              src="/logos/csf.png"
              alt="CSF"
              className="h-8 object-contain"
            />
            <img
              src="/logos/spinny.png"
              alt="Spinny"
              className="h-8 object-contain"
            />
            <img
              src="/logos/happy-hr.png"
              alt="Happy HR"
              className="h-8 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
