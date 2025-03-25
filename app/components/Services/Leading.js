import React from 'react';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs'
const LeadingSection = () => {
  const techStacks = [
    { name: "PHP", src: "/icons/php.png" },
    { name: "Golang", src: "/icons/golang.png" },
    { name: "JavaScript", src: "/icons/javascript.png" },
    { name: "Ruby", src: "/icons/ruby.png" },
    { name: "Node", src: "/icons/node.png" },
    { name: "Laravel", src: "/icons/laravel.png" },
    { name: "React", src: "/icons/react.png" },
    { name: "Vue.js", src: "/icons/vue.png" },
    { name: "Django", src: "/icons/dj.png" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Heading & Description and Animated Logos */}
        <div className="flex flex-wrap items-start -mx-4">
          {/* Left Column: Heading, description, bullet points */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We’re a Leading Custom Web App Development Company in India
            </h2>
            <p className="text-gray-600 mb-6">
              At ValueCoders, a leading custom web app and website development company in India, 
              we help businesses turn their goals into reality. With over 20+ years of experience 
              in agile project management and a deep understanding of the latest web trends, we 
              deliver feature-rich web applications that provide great user experience and 
              maximize ROI, even under tight deadlines and budgets.
            </p>
            <ul className="space-y-3 text-gray-700">
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          India’s Top 1% Software Talent
        </li>
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          Trusted by Startups to Fortune 500
        </li>
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          Idea to Deployment, We Handle All
        </li>
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          Time-Zone Friendly, Global Presence
        </li>
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          Top-tier Data Security Protocols
        </li>
        <li className="flex items-center">
          <BsFillCheckCircleFill className="text-primary-yellow w-5 h-5 mr-2" />
          On-time Delivery, No Surprises
        </li>
      </ul>
          </div>

          {/* Right Column: Animated Logos & Awards */}
          <div className="w-full lg:w-1/2 md:px-20">
            <div className="overflow-hidden relative w-full">
              {/* Animated Logos */}
              <div className="flex animate-marquee whitespace-nowrap space-x-8 space-y-10">
                {techStacks.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex flex-col items-center justify-center w-24"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                   
                  </div>
                ))}
                {techStacks.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex flex-col items-center justify-center w-32"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                  
                  </div>
                ))}
              </div>
              <div className="flex animate-marqueeRightt whitespace-nowrap space-x-8 space-y-10">
                {techStacks.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex flex-col items-center justify-center w-24"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                   
                  </div>
                ))}
                {techStacks.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex flex-col items-center justify-center w-32"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                   
                  </div>
                ))}
              </div>
              <div className="flex animate-marquee whitespace-nowrap space-x-8 space-y-10">
                {techStacks.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex flex-col items-center justify-center w-24"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                   
                  </div>
                ))}
                {techStacks.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex flex-col items-center justify-center w-32"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mx-auto mb-2"
                    />
                    
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Certifications placed directly below the animated logos */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Awards &amp; Certifications</h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {/* Replace these with your actual award images */}
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/clutch.png"
                    alt="Rated on Clutch"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/cmmi.png"
                    alt="CMMI"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/goodfirms.png"
                    alt="GoodFirms"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/top1percent.png"
                    alt="Top 1% Talent"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/aws.png"
                    alt="AWS Partner"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center border p-2">
                  <Image
                    src="/awards/microsoft.png"
                    alt="Microsoft Silver Partner"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
