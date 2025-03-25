import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-2">
            Serving Clients in 38+ Countries
          </h2>
          <p className="text-black">
            We are making an impact worldwide with our global presence
            and exceptional software solutions.
          </p>
        </div>

        {/* Two-column layout with custom width distribution */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
          {/* Left Column: Phone Numbers */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ul className="divide-y divide-gray-200">
              {/* India */}
              <li className="py-4 flex items-stretch space-x-3">
                {/* Flag + Country */}
                <div className="flex items-center space-x-2 min-w-[80px]">
                  <img
                    src="/flags/india.png"
                    alt="India Flag"
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-black">India</span>
                </div>
                {/* Vertical Divider */}
                <div className="border-l border-gray-300" />
                {/* Phone Numbers */}
                <div className="pl-3 text-sm text-black leading-5">
                  <p>
                    +91 888 210 8080 <span className="text-gray-500">(Sales)</span>
                  </p>
                  <p>
                    +91 704 202 0782 <span className="text-gray-500">(HR)</span>
                  </p>
                </div>
              </li>

              {/* USA */}
              <li className="py-4 flex items-stretch space-x-3">
                <div className="flex items-center space-x-2 min-w-[80px]">
                  <img
                    src="/flags/usa.png"
                    alt="USA Flag"
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-black">USA</span>
                </div>
                <div className="border-l border-gray-300" />
                <div className="pl-3 text-sm text-black leading-5">
                  <p>+1 415 230 0123</p>
                </div>
              </li>

              {/* UK */}
              <li className="py-4 flex items-stretch space-x-3">
                <div className="flex items-center space-x-2 min-w-[80px]">
                  <img
                    src="/flags/uk.png"
                    alt="UK Flag"
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-black">UK</span>
                </div>
                <div className="border-l border-gray-300" />
                <div className="pl-3 text-sm text-black leading-5">
                  <p>+44 20 3239 2299</p>
                </div>
              </li>

              {/* UAE */}
              <li className="py-4 flex items-stretch space-x-3">
                <div className="flex items-center space-x-2 min-w-[80px]">
                  <img
                    src="/flags/uae.png"
                    alt="UAE Flag"
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-black">UAE</span>
                </div>
                <div className="border-l border-gray-300" />
                <div className="pl-3 text-sm text-black leading-5">
                  <p>
                    +971 544954255 <span className="text-gray-500">(WhatsApp)</span>
                  </p>
                </div>
              </li>

              {/* AUS */}
              <li className="py-4 flex items-stretch space-x-3">
                <div className="flex items-center space-x-2 min-w-[80px]">
                  <img
                    src="/flags/australia.png"
                    alt="Australia Flag"
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-black">AUS</span>
                </div>
                <div className="border-l border-gray-300" />
                <div className="pl-3 text-sm text-black leading-5">
                  <p>+61 2 8005 8080</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Office Addresses */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            {/* First Row: Gurugram & Noida */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 pb-6 mb-6">
              {/* Gurugram */}
              <div className="border-r border-gray-200 pr-6">
                <h3 className="font-semibold text-black mb-1">Gurugram:</h3>
                <p className="text-black text-sm leading-5">
                  10th Floor, Tower-B, Unitech Cyber Park, Sector - 39,<br />
                  Gurugram, Haryana - 122001
                </p>
              </div>
              {/* Noida */}
              <div>
                <h3 className="font-semibold text-black mb-1">Noida:</h3>
                <p className="text-black text-sm leading-5">
                  11th Floor, Max Square, Noida-Greater Noida Expy,<br />
                  Sector 129, Noida, Uttar Pradesh 201304
                </p>
              </div>
            </div>

            {/* Second Row: USA, UK, UAE */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {/* USA */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-black mb-1">USA:</h3>
                <p className="text-black text-sm leading-5">
                  5900 Balcones Drive, STE 100,<br />
                  Austin, TX 78731, USA
                </p>
              </div>
              {/* UK */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-black mb-1">UK:</h3>
                <p className="text-black text-sm leading-5">
                  167-169 Great Portland Street,<br />
                  5th Floor, London W1W 5PF,<br />
                  United Kingdom
                </p>
              </div>
              {/* UAE */}
              <div>
                <h3 className="font-semibold text-black mb-1">UAE:</h3>
                <p className="text-black text-sm leading-5">
                  5&1, B4, Level 5, Dubai Airport Free Zone,<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
