"use client" // Required for Next.js 13+ (app router) if using client-side interactions

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa" // <-- import your icon here

// Example data for each tab
const TABS = [
  {
    id: 0,
    label: "Fixed Price Model",
    title: "Fixed Price Model",
    description:
      "For businesses with well-defined project scope and requirements.",
    bulletPoints: [
      "Simplified process",
      "Higher predictability",
      "Greater transparency",
      "Reduced risk",
      "Low management efforts",
    ],
    // Image that shows the process steps visually
    imageSrc: "/images/fixed-price.png", // Replace with your own image
  },
  {
    id: 1,
    label: "Dedicated Hiring Model",
    title: "Dedicated Hiring Model",
    description:
      "Ideal for long-term projects requiring dedicated resources & close collaboration.",
    bulletPoints: [
      "Full-time dedicated resources",
      "Flexible team scaling",
      "Deep integration with in-house teams",
      "Transparent communication",
      "Optimal cost-efficiency",
    ],
    imageSrc: "/images/dedicated-hiring.png", // Replace with your own image
  },
  {
    id: 2,
    label: "Time & Material Model",
    title: "Time & Material Model",
    description:
      "Best for projects with evolving requirements & dynamic scope changes.",
    bulletPoints: [
      "Pay only for actual work",
      "High flexibility",
      "Adaptable to changing needs",
      "Easy to add new features",
      "Transparent billing",
    ],
    imageSrc: "/images/time-material.png", // Replace with your own image
  },
]

export default function HiringModelsPage() {
  const [activeTab, setActiveTab] = useState(0)

  const currentTabData = TABS[activeTab]

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our Custom Hiring Models
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Choose from our flexible hiring models designed to fit your needs and budget.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTabData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {/* Card (Single-Card Layout) */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-start gap-6">
                {/* Left Column */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {currentTabData.title}
                  </h3>
                  <p className="text-gray-600">
                    {currentTabData.description}
                  </p>

                  {/* Bullet Points with icons */}
                  <ul className="space-y-2">
                    {currentTabData.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-yellow-500 mr-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: image */}
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={currentTabData.imageSrc}
                    alt={currentTabData.title}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
