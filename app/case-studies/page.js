'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const mainTabs = ["Services", "Industries", "Technologies"];

  const subTabsData = {
    Services: [
      "Application Development",
      "IT Consulting & Strategy",
      "Maintenance & Support",
      "Migration & Modernisation",
      "Mobile Application Development",
      "Mobile Development",
      "Product Engineering",
      "Software Development",
      "Team Extension",
      "Testing & QA",
      "Website Development",
    ],
    Industries: ["Healthcare", "Finance", "E-commerce", "Education"],
    Technologies: ["React", "Next.js", "Node.js", "Python", "Docker"],
  };

  // Define the content data for each sub‑tab.
  // Each sub‑tab maps to three sections that will be rendered in each row.
  const contentData = {
    "Application Development": {
      section1: { image: "/featured1.webp" },
      section2: {
        label: "Blog",
        title: "Top 10 Web Application Development Trends To Look",
        description:
          "Many new web technologies are ruling in web application development trends,...",
        link: "#",
      },
      section3: {
        label: "Case Study",
        title: "SAP ERP",
        description:
          "It is a low-code/no-code, cloud-native platform that enables you to develop mission-critical apps 20 times faster than traditional methods, leveraging the power of SAP's...",
        coreTech: "JAVA, React JS",
        link: "#",
        bgImage: "/featured2.webp",
      },
    },
    "IT Consulting & Strategy": {
      section1: { image: "/it-featured1.webp" },
      section2: {
        label: "Insight",
        title: "How Strategy Drives IT Consulting",
        description:
          "Explore how strategic IT consulting transforms business...",
        link: "#",
      },
      section3: {
        label: "Case Study",
        title: "Digital Transformation",
        description:
          "A real-world example of digital transformation in a global enterprise...",
        coreTech: "Cloud, AI",
        link: "#",
        bgImage: "/it-featured2.webp",
      },
    },
    "Maintenance & Support": {
      section1: { image: "/maintenance-featured1.webp" },
      section2: {
        label: "Update",
        title: "Ensuring Stability with Regular Maintenance",
        description:
          "A deep dive into the importance of maintenance and support for long-term software success...",
        link: "#",
      },
      section3: {
        label: "Case Study",
        title: "Legacy System Overhaul",
        description:
          "How a major firm updated its aging systems with cutting-edge solutions.",
        coreTech: "Java, .NET",
        link: "#",
        bgImage: "/maintenance-featured2.webp",
      },
    },
    // Add more entries as needed...
  };

  // State for current main and sub tab.
  const [activeMainTab, setActiveMainTab] = useState("Services");
  const [activeSubTab, setActiveSubTab] = useState(
    subTabsData["Services"][0]
  );

  const handleMainTabClick = (tab) => {
    setActiveMainTab(tab);
    // Reset the active sub‑tab when changing the main category.
    setActiveSubTab(subTabsData[tab][0]);
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

  // Get current content based on activeSubTab.
  // Use a fallback in case there is no data for the sub‑tab.
  const currentContent =
    contentData[activeSubTab] || {
      section1: { image: "/default-featured1.webp" },
      section2: {
        label: "Blog",
        title: "Default Title",
        description: "Default description text...",
        link: "#",
      },
      section3: {
        label: "Case Study",
        title: "Default Case Study",
        description: "Default case study description...",
        coreTech: "Default Tech",
        link: "#",
        bgImage: "/default-featured2.webp",
      },
    };

  return (
    <div className="min-h-screen bg-[#171535] text-white">
        <div className="mx-auto max-w-[90rem]">
      <div className=" py-10">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-left">
          Success Stories
        </h1>

        {/* Main Tabs */}
        <div className="flex space-x-8 text-2xl font-semibold">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleMainTabClick(tab)}
              className={`pb-2 transition-all ${
                activeMainTab === tab
                  ? "text-orange-400 border-b-2 border-orange-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {subTabsData[activeMainTab].map((subTab) => (
            <button
              key={subTab}
              onClick={() => handleSubTabClick(subTab)}
              className={`px-5 py-3 text-lg rounded-md transition-all ${
                activeSubTab === subTab
                  ? "bg-gray-800 text-white"
                  : "border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {subTab}
            </button>
          ))}
        </div>
        </div>
        </div>
        {/* Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent rounded-lg shadow-md"
            >
              <main className="w-full">
                {/* FIRST ROW */}
                <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0">
                  {/* Box 1: Foreground Image */}
                  <div className="md:col-span-3 bg-gray-100 flex justify-center items-center">
                    <img
                      src={currentContent.section1.image}
                      alt="Illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Box 2: Solid Color (Blog/Info) */}
                  <div className="md:col-span-3 bg-blue-900 p-8 flex flex-col justify-center">
                    <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
                      {currentContent.section2.label}
                    </span>
                    <h2 className="text-2xl font-bold mb-4">
                      {currentContent.section2.title}
                    </h2>
                    <p className="text-sm mb-4">
                      {currentContent.section2.description}
                    </p>
                    <a
                      href={currentContent.section2.link}
                      className="mt-auto inline-flex items-center text-sm font-medium hover:opacity-80"
                    >
                      Learn More
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>
                  {/* Box 3: Background Image (Case Study) */}
                  <div
                    className="md:col-span-6 relative bg-cover bg-center flex flex-col justify-center"
                    style={{
                      backgroundImage: `url(${currentContent.section3.bgImage})`,
                    }}
                  >
                    <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
                      <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
                        {currentContent.section3.label}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {currentContent.section3.title}
                      </h2>
                      <p className="mb-4 text-sm md:text-base leading-relaxed">
                        {currentContent.section3.description}
                      </p>
                      <div className="mb-4 text-sm md:text-base">
                        <span className="font-semibold">Core tech:</span>{" "}
                        {currentContent.section3.coreTech}
                      </div>
                      <a
                        href={currentContent.section3.link}
                        className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* SECOND ROW (Reversed Order) */}
                <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0 ">
                  {/* Box 3: Case Study */}
                  <div
                    className="md:col-span-6 relative bg-cover bg-center flex flex-col justify-center"
                    style={{
                      backgroundImage: `url(${currentContent.section3.bgImage})`,
                    }}
                  >
                    <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
                      <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
                        {currentContent.section3.label}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {currentContent.section3.title}
                      </h2>
                      <p className="mb-4 text-sm md:text-base leading-relaxed">
                        {currentContent.section3.description}
                      </p>
                      <div className="mb-4 text-sm md:text-base">
                        <span className="font-semibold">Core tech:</span>{" "}
                        {currentContent.section3.coreTech}
                      </div>
                      <a
                        href={currentContent.section3.link}
                        className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  {/* Box 2: Solid Color (Blog/Info) */}
                  <div className="md:col-span-3 bg-blue-900 p-8 flex flex-col justify-center">
                    <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
                      {currentContent.section2.label}
                    </span>
                    <h2 className="text-2xl font-bold mb-4">
                      {currentContent.section2.title}
                    </h2>
                    <p className="text-sm mb-4">
                      {currentContent.section2.description}
                    </p>
                    <a
                      href={currentContent.section2.link}
                      className="mt-auto inline-flex items-center text-sm font-medium hover:opacity-80"
                    >
                      Learn More
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>
                  {/* Box 1: Foreground Image */}
                  <div className="md:col-span-3 bg-gray-100 flex justify-center items-center">
                    <img
                      src={currentContent.section1.image}
                      alt="Illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* THIRD ROW (Same Order as FIRST ROW) */}
                <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0 ">
                  {/* Box 1: Foreground Image */}
                  <div className="md:col-span-3 bg-gray-100 flex justify-center items-center">
                    <img
                      src={currentContent.section1.image}
                      alt="Illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Box 2: Solid Color (Blog/Info) */}
                  <div className="md:col-span-3 bg-blue-900 p-8 flex flex-col justify-center">
                    <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
                      {currentContent.section2.label}
                    </span>
                    <h2 className="text-2xl font-bold mb-4">
                      {currentContent.section2.title}
                    </h2>
                    <p className="text-sm mb-4">
                      {currentContent.section2.description}
                    </p>
                    <a
                      href={currentContent.section2.link}
                      className="mt-auto inline-flex items-center text-sm font-medium hover:opacity-80"
                    >
                      Learn More
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>
                  {/* Box 3: Background Image (Case Study) */}
                  <div
                    className="md:col-span-6 relative bg-cover bg-center flex flex-col justify-center"
                    style={{
                      backgroundImage: `url(${currentContent.section3.bgImage})`,
                    }}
                  >
                    <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
                      <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
                        {currentContent.section3.label}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {currentContent.section3.title}
                      </h2>
                      <p className="mb-4 text-sm md:text-base leading-relaxed">
                        {currentContent.section3.description}
                      </p>
                      <div className="mb-4 text-sm md:text-base">
                        <span className="font-semibold">Core tech:</span>{" "}
                        {currentContent.section3.coreTech}
                      </div>
                      <a
                        href={currentContent.section3.link}
                        className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </motion.div>
          </AnimatePresence>
        </div>
      
    </div>
  );
}
