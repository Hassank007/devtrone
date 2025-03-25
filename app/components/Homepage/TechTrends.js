"use client"; // Only needed if using Next.js App Router and client components
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TechTabs() {
  // Tab data
  const tabs = [
    {
      id: 1,
      label: "Artificial Intelligence",
      title: "Artificial Intelligence",
      description:
        "Revolutionize your business with AI-driven solutions tailored to your unique needs. From predictive analytics to intelligent automation, we help you harness the power of machine learning and data science.",
      bullets: ["AI Consulting", "Machine Learning", "Data Analytics"],
      image: "/images/ai.jpg",
    },
    {
      id: 2,
      label: "Blockchain",
      title: "Blockchain",
      description:
        "Secure, scalable, and future-ready blockchain solutions tailored to your business needs. From decentralized apps to smart contracts, we ensure seamless integration and top-tier security.",
      bullets: ["Blockchain Consulting", "Hyperledger Development", "Smart Contracts"],
      image: "/images/blockchain.jpg",
    },
    {
      id: 3,
      label: "Computer Vision",
      title: "Computer Vision",
      description:
        "Leverage the latest in computer vision technology for real-time object detection, image processing, and advanced analytics. Transform raw data into actionable insights.",
      bullets: ["Image Recognition", "Video Analytics", "AR/VR Integration"],
      image: "/images/computer-vision.jpg",
    },
    {
      id: 4,
      label: "Internet of Things",
      title: "Internet of Things (IoT)",
      description:
        "Build connected ecosystems with IoT solutions that streamline operations and enhance user experiences. We deliver end-to-end IoT platforms, from device integration to data analytics.",
      bullets: ["IoT Consulting", "Edge Computing", "Sensor Integration"],
      image: "/images/iot.jpg",
    },
    {
      id: 5,
      label: "Mixed Reality",
      title: "Mixed Reality",
      description:
        "Transform how users interact with the digital and physical world through immersive Mixed Reality solutions. Drive innovation in training, entertainment, and more.",
      bullets: ["AR Solutions", "VR Applications", "3D Modeling"],
      image: "/images/mixed-reality.jpg",
    },
  ];

  // Track the active tab
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tech Trends We Follow
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Helping clients from different industry verticals transform business
          with the latest tech capabilities.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 
              border-b-2 
              transition-colors 
              ${
                activeTab.id === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Content Panel */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {activeTab.title}
              </h3>
              <p className="text-gray-700 mb-4">{activeTab.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {activeTab.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                Find Out More &rarr;
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
