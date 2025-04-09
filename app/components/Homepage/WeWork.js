"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeWorkWith() {
  const [activeTab, setActiveTab] = useState('startups');

  // Define your tabs
  const tabs = [
    { id: 'startups', label: 'Startups' },
    { id: 'enterprises', label: 'Enterprises' },
    { id: 'agencies', label: 'Agencies' },
  ];

  // Mapping active tab to image path
  const tabImages = {
    startups: '/startup.png',
    enterprises: '/enterprise.png',
    agencies: '/agency.png',
  };

  // Variants for content transition
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // Variants for image transition
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section className="bg-[#FFF6ED] py-12">
      <div className="max-w-7xl mx-auto px-4 md:flex items-start lg:gap-56 ">
        {/* Left Column: Tab Panel */}
        <div className="md:w-1/2 pt-10">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            We Work With
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Startups, enterprises, and agencies to add more value to their tech 
            portfolio and improve the bottom line with custom software engineering and IT solutions.
          </p>

          {/* Tab Buttons */}
          <div className="inline-flex items-center bg-white shadow-md rounded-full p-1 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-2 rounded-full text-[10px] s:text-sm lg:text-xl font-medium transition-colors
                  ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content with Framer Motion */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === 'startups' && (
                <motion.div
                  key="startups"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Startups
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We help startups accelerate their growth with agile IT and digital transformation strategies.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Product Discovery
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Product Development
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      MVP Development
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      CTO as a Service
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-blue-600 font-medium inline-flex items-center hover:underline lg:mt-7"
                  >
                    Get Details <span className="ml-1">&rarr;</span>
                  </a>
                </motion.div>
              )}

              {activeTab === 'enterprises' && (
                <motion.div
                  key="enterprises"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Enterprises
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Large-scale businesses rely on our expertise to modernize legacy systems, build new software solutions, and create seamless customer experiences.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Enterprise Software Development
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Cloud & DevOps
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      System Integration
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Consulting & Support
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-blue-600 font-medium inline-flex items-center hover:underline lg:mt-7"
                  >
                    Get Details <span className="ml-1">&rarr;</span>
                  </a>
                </motion.div>
              )}

              {activeTab === 'agencies' && (
                <motion.div
                  key="agencies"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Agencies
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We partner with design and marketing agencies to handle the technical heavy lifting, from custom software engineering to IT solutions that elevate your clients’ brands and bottom lines.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      White-Label Development
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Custom Integrations
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Maintenance & Support
                    </li>
                    <li className="flex items-center text-black">
                      <span className="text-yellow-500 mr-2">✔</span>
                      Ongoing Collaboration
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-blue-600 font-medium inline-flex items-center hover:underline lg:mt-10"
                  >
                    Get Details <span className="ml-1">&rarr;</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Dynamic Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={tabImages[activeTab]}
              alt={`${activeTab} illustration`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="max-w-full h-auto"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
