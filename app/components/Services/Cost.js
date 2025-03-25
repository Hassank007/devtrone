import React from 'react'
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaMoneyBillWave,
  FaArrowRight, // <-- Import arrow icon
} from 'react-icons/fa'

export default function Cost() {
  return (
    <div className="min-h-fit bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Cost of Web Development Projects
        </h1>
        <p className="text-center text-gray-600 max-w-6xl mx-auto mt-7">
          The cost of web application development depends on various factors
          such as the service scope, sourcing model, technical design patterns,
          and software complexity.
        </p>

        {/* Cards Section */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg bg-white p-8 shadow hover:shadow-lg transition-shadow text-center">
            <div className="mb-4 flex items-center justify-center text-blue-600">
              <FaCode size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Starting at $55,000
            </h2>
            <p className="text-gray-600">
              Custom end-to-end digital solutions for robust enterprise
              applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-white p-8 shadow hover:shadow-lg transition-shadow text-center">
            <div className="mb-4 flex items-center justify-center text-green-600">
              <FaLaptopCode size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Starting at $70,000
            </h2>
            <p className="text-gray-600">
              Vendor or sales portal designed for global expansion and
              cross-functional operations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg bg-white p-8 shadow hover:shadow-lg transition-shadow text-center">
            <div className="mb-4 flex items-center justify-center text-purple-600">
              <FaMobileAlt size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Starting at $100,000
            </h2>
            <p className="text-gray-600">
              Multiplatform solutions with the latest frameworks for
              feature-rich, bespoke designs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg bg-white p-8 shadow hover:shadow-lg transition-shadow text-center">
            <div className="mb-4 flex items-center justify-center text-orange-500">
              <FaServer size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              From $80,000 to $250,000
            </h2>
            <p className="text-gray-600">
              Comprehensive eCommerce and payment integration for mid-scale
              and large-scale internal systems.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition-shadow text-center">
            <div className="mb-4 flex items-center justify-center text-red-500">
              <FaMoneyBillWave size={40} />
            </div>
            <h2 className="text-xl font-bold  text-gray-800 mb-2">
              Approximately $250,000
            </h2>
            <p className="text-gray-600">
              Enterprise-grade platforms for mission-critical operations and
              large-scale global user bases.
            </p>
          </div>

          {/* Card 6 - Gradient "Get in Touch" Card */}
          <div className="rounded-lg p-8 custom-gradient text-white flex flex-col justify-between ">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Wondering how much your development project will cost?
              </h2>
              <p className="mb-4">
                Our consultants will be happy to learn more about your
                requirement and suggest a tentative cost for the same.
              </p>
            </div>
            <div>
              <button
                className="flex flex-row border border-white  p-3 rounded-full gap-3 font-semibold text-white"
                type="button"
              >
                <span>Get in Touch</span>
                <FaArrowRight className='mt-1'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
