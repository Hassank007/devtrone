import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141e41] to-[#0b1230] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Say Goodbye to Security <br /> and Performance Worries
          </h2>
          <p className="text-gray-300 mb-6">
            ValueCoders offers robust and secure custom web app development to meet your standards.
          </p>
          <button className="flex items-center gap-3 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#141e41] transition">
            CONTACT US <FaArrowRight />
          </button>
        </div>

        {/* Right Content (Stats) */}
        <div className="flex flex-col md:flex-row gap-10">
          <StatCircle
            number="675+"
            label="Full-time Staff"
            arcText="projects executed successfully"
            circleId="circle1"
          />
          <StatCircle
            number="20+"
            label="Years Experience"
            arcText="years of experience in this field"
            circleId="circle2"
          />
          <StatCircle
            number="2500+"
            label="Satisfied Customers"
            arcText="total no. of satisfied customers"
            circleId="circle3"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * A circular stat component:
 * - Outer circle (faint white stroke).
 * - Centered "number" + "label".
 * - Repeated rotating text around the circle using <textPath>.
 */
const StatCircle = ({ number, label, arcText, circleId }) => {
  // Repeat the arc text so it covers most of the circle
  // Feel free to repeat more times (3×, 4×, etc.) if needed
  const repeatedArcText = `${arcText} • ${arcText} • ${arcText}`

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="absolute w-full h-full" viewBox="0 0 160 160">
        <defs>
          {/* Define a circular path (radius = 70, centered at x=80, y=80). */}
          <path
            id={circleId}
            d="M80,80
               m -70,0
               a 70,70 0 1,1 140,0
               a 70,70 0 1,1 -140,0"
          />
          {/* Define a slow rotation animation for the arc text. */}
          <style>
            {`
              .rotate-text {
                animation: rotateCircle 10s linear infinite;
                transform-origin: center;
              }
              @keyframes rotateCircle {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
        </defs>

        {/* Faint circle outline */}
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />

        {/* Rotating text around the circle */}
        <g className="rotate-text">
          <text fill="#808080" fontSize="15">
            <textPath
              xlinkHref={`#${circleId}`}
              startOffset="0"
              textAnchor="start"
              dominantBaseline="middle"
            >
              {repeatedArcText}
            </textPath>
          </text>
        </g>

        {/* Center number */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="-5"
          className="text-lg font-bold fill-white"
        >
          {number}
        </text>

        {/* Label below the number */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          className="text-xs fill-white opacity-80"
        >
          {label}
        </text>
      </svg>
    </div>
  )
}

export default StatsSection
