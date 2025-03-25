import React from 'react'
// Import some Font Awesome icons
import { FaWindows, FaAmazon, FaGoogle, FaCloudversify } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="custom-gradient text-white text-base">
      <div className="max-w-[90rem] mx-auto px-6 py-20">
        {/* TOP ROW: Stats + Brand Icons */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          {/* Left: Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold">$5B+</p>
              <p className="uppercase text-gray-300">Business Value Created</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="uppercase text-gray-300">Server Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1,000,000+</p>
              <p className="uppercase text-gray-300">Hours of Dev Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">675+</p>
              <p className="uppercase text-gray-300">Experts on Staff</p>
            </div>
          </div>
          {/* Right: Some brand-ish icons (Font Awesome) */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <FaWindows className="w-10 h-10" title="Windows" />
            <FaAmazon className="w-10 h-10" title="Amazon" />
            <FaGoogle className="w-10 h-10" title="Google" />
            <FaCloudversify className="w-10 h-10" title="Cloud" />
          </div>
        </div>

        {/* MIDDLE ROW: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* 1. Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">In Media</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Our Blog</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* 2. Our Expertise */}
          <div>
            <h3 className="font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Software Product Engineering</a></li>
              <li><a href="#" className="hover:underline">Digital Transformation</a></li>
              <li><a href="#" className="hover:underline">AI &amp; ML</a></li>
              <li><a href="#" className="hover:underline">Cloud &amp; DevOps</a></li>
              <li><a href="#" className="hover:underline">More Services</a></li>
            </ul>
          </div>

          {/* 3. Hire Developers */}
          <div>
            <h3 className="font-semibold mb-4">Hire Developers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Hire AI Engineers</a></li>
              <li><a href="#" className="hover:underline">Hire Backend Developers</a></li>
              <li><a href="#" className="hover:underline">Hire Frontend Developers</a></li>
              <li><a href="#" className="hover:underline">Hire eCommerce Devs</a></li>
              <li><a href="#" className="hover:underline">Hire Blockchain Devs</a></li>
            </ul>
          </div>

          {/* 4. Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Offshore Development Center</a></li>
              <li><a href="#" className="hover:underline">Nearshore Software Development</a></li>
              <li><a href="#" className="hover:underline">Onshore Software Development</a></li>
              <li><a href="#" className="hover:underline">Dedicated Teams</a></li>
              <li><a href="#" className="hover:underline">More Solutions</a></li>
            </ul>
          </div>

          {/* 5. Clients We Serve */}
          <div>
            <h3 className="font-semibold mb-4">Clients We Serve</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">For Startups</a></li>
              <li><a href="#" className="hover:underline">For Enterprises</a></li>
              <li><a href="#" className="hover:underline">For Agencies</a></li>
              <li><a href="#" className="hover:underline">For ISVs</a></li>
              <li><a href="#" className="hover:underline">For SMEs</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Partners, Ratings, DMCA, etc. */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          {/* LEFT: Proudly Brought to You By */}
          <div className="flex flex-col  items-start gap-4">
            <p className="text-sm text-gray-200">
              PROUDLY BROUGHT TO YOU BY{' '}
              <span className="font-medium text-white">ValueCoders</span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/invoicera.png"
                alt="Invoicera"
                className="h-8 object-contain"
              />
              <img
                src="/workstatus.png"
                alt="WorkStatus"
                className="h-8 object-contain"
              />
            </div>
          </div>

          {/* CENTER: Follow Us + Social Icons */}
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <span className="text-gray-200 text-base">Follow Us</span>
            <div className="flex gap-3 mt-2 text-white">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300 text-xl">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300 text-xl">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT: Rating, "Rate Us" Button, DMCA Icon */}
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 gap-2">
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <polygon points="9.9 1.1 7.6 6.7 1.5 7.7 6.2 11.7 4.9 17.8 9.9 14.8 14.9 17.8 13.6 11.7 18.3 7.7 12.2 6.7" />
                </svg>
              ))}
              <p className="ml-2">4.9 out of 5 by</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                type="button"
                className="border border-yellow-400 text-yellow-400 rounded px-4 py-1
                           hover:bg-yellow-400 hover:text-white transition-colors"
              >
                Rate Us
              </button>
              <p className="text-sm text-gray-300 mt-1">
                100+ clients on 2000+ projects
              </p>
            </div>
          </div>

          {/* DMCA Icon */}
          <div className="mt-4 md:mt-0">
            <img
              src="/dmca-protected.png"
              alt="DMCA Protected"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* COPYRIGHT */}
      
      </div>
      <div className='flex items-center justify-center bg-blue-950 w-full h-7'>
      <div className="text-center text-sm text-gray-200 ">
          © 2004 - 2025 ValueCoders. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
