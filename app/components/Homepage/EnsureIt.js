"use client";

import {
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
  AiOutlineAlert,
  AiOutlineReload,
  AiOutlineCheckCircle,
  AiOutlineBarChart,
  AiOutlineTeam
} from "react-icons/ai";

export default function StepsSection() {
  // Define each step's title, description, icon, and background color
  const steps = [
    {
      title: "Analysis",
      description: "Gather requirements, define scope, and prevent scope creep.",
      icon: AiOutlineSearch,
      bgColor: "#ffe8b7",
    },
    {
      title: "Resource Planning",
      description: "Assemble top experts to build a scalable product.",
      icon: AiOutlineUsergroupAdd,
      bgColor: "#FFF6ED",
    },
    {
      title: "Costing",
      description: "Generate detailed cost estimates and optimize project expenses.",
      icon: AiOutlineDollarCircle,
      bgColor: "#ffe8b7",
    },
    {
      title: "Risk Management",
      description: "Identify potential threats to ensure smooth development and timely delivery.",
      icon: AiOutlineAlert,
      bgColor: "#FFF6ED",
    },
    {
      title: "Change Management",
      description: "Implement structured change management to keep projects on track.",
      icon: AiOutlineReload,
      bgColor: "#FFF6ED",
    },
    {
      title: "Success Review",
      description: "Review KPIs to gauge project health and success.",
      icon: AiOutlineCheckCircle,
      bgColor: "#ffe8b7",
    },
    {
      title: "Project Reporting",
      description: "Provide insights with detailed performance analysis.",
      icon: AiOutlineBarChart,
      bgColor: "#FFF6ED",
    },
    {
      title: "Collaboration",
      description: "Tools for seamless collaboration and communication.",
      icon: AiOutlineTeam,
      bgColor: "#ffe8b7",
    },
  ];

  return (
    <section className="bg-[#FFF6ED] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading (Centered) */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#212529]">
            Ensure IT Project Success at Every Step
          </h2>
          <p className="text-center text-[#6C757D] mt-2 mb-8 max-w-3xl mx-auto">
            Get what you are looking for to fulfill your software development and 
            outsourcing needs at ValueCoders.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ backgroundColor: step.bgColor }}
              className="p-6 rounded-md shadow-sm flex flex-col"
            >
              {/* Icon + Heading Row */}
              <div className="flex items-center mb-3">
                {/* Icon (no circle behind it, but you can add one if you wish) */}
                <step.icon className="w-10 h-10 bg-white p-1 rounded-full text-[#F59E0B]" />
                <h3 className="ml-3 text-lg font-semibold text-[#212529]">
                  {step.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-[#6C757D]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
