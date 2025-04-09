"use client"
import React from 'react'
import {
  FaLightbulb,
  FaPenNib,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaTools,
} from 'react-icons/fa'

export default function WebAppDevelopment() {
  // Step data (icon, title, description)
  const steps = [
    {
      title: "Planning",
      description:
        "We define the web app's purpose, target audience, and desired features for user feedback.",
      icon: <FaLightbulb />,
    },
    {
      title: "Design",
      description:
        "Our team creates a visual structure and interactive prototype for user feedback.",
      icon: <FaPenNib />,
    },
    {
      title: "Development",
      description:
        "Our experts build UI and server-side functionality to bring your idea to life.",
      icon: <FaCode />,
    },
    {
      title: "Testing",
      description:
        "Our testing team ensures the web app functions flawlessly across all devices.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Launch",
      description:
        "Our professionals ensure the web app is launched on-time without any glitches.",
      icon: <FaRocket />,
    },
    {
      title: "Maintenance",
      description:
        "Lastly, our support team ensures continuous support & maintenance for future improvements.",
      icon: <FaTools />,
    },
  ]

  return (
    <div className="bg-white py-10 md:py-40 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">
          Our Web App Development Process
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Here is a streamlined overview of our custom web app development process.
        </p>

        {/* Desktop layout: 6 steps in a row with arrows */}
        <div className="hidden md:flex items-center justify-between pt-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Single Step */}
              <div className="flex flex-col items-center text-center max-w-xs bg-white p-4 rounded-md shadow-sm">
                <div className="text-yellow-500 text-3xl mb-3">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {/* Dotted Arrow (except after the last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center">
                  <svg
                    className="text-yellow-500"
                    width="60"
                    height="24"
                    viewBox="0 0 60 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dotted line */}
                    <path
                      d="M0 12 L50 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                    />
                    {/* Arrowhead */}
                    <path
                      d="M50 6 L60 12 L50 18 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile layout: stack steps vertically (no arrows) */}
        <div className="flex flex-col space-y-8 md:hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-md shadow-sm"
            >
              <div className="text-yellow-500 text-3xl mb-3">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
