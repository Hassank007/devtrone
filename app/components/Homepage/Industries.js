"use client";
import { useState, useEffect } from "react";

export default function Industries() {
  const industriesData = [
    {
      title: "Logistics & Transport",
      subTitle: "Optimized Logistics",
      imageUrl: "/images/logistics.jpg",
    },
    {
      title: "Banking & Finance",
      subTitle: "Secure. Reliable. Scalable",
      imageUrl: "/images/banking.jpg",
    },
    {
      title: "Media & Entertainment",
      subTitle: "Improve Engagement",
      imageUrl: "/images/media.jpg",
    },
    {
      title: "Retail & Ecommerce",
      subTitle: "Scalable Tech for Seamless Sales",
      imageUrl: "/images/retail.jpg",
    },
    {
      title: "Fintech",
      subTitle: "Innovating Finance, Empowering Growth",
      imageUrl: "/images/fintech.jpg",
    },
    {
      title: "Education & Learning",
      subTitle: "Smart Learning",
      imageUrl: "/images/education.jpg",
    },
  ];

  // Set default slidesToShow to 5 for larger screens.
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = industriesData.length;

  // Update slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(5);
      }
    };
    // Set initial slidesToShow based on current window width
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate max index each render based on slidesToShow
  const maxIndex = totalSlides - slidesToShow;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-full py-36">
      {/* Header section with title on left and nav buttons on right */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Industries We Cater to</h2>
          <p className="text-gray-600">
            Get what you are looking for to fulfill your software development
            and outsourcing needs at ValueCoders, with our expertise in all
            on-demand technologies &amp; platforms.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel section below header, covering full width */}
      <div className="w-full mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
          }}
        >
          {industriesData.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 basis-1/2 s:basis-[20%] px-3">
              {/* 
                Group container: 
                - "group" allows child elements to respond to hover states 
              */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 h-[315px]">
                {/* Top Section: Title */}
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="pt-3 text-gray-700 space-y-2">
                    <p className="text-gray-600">{item.subTitle}</p>
                  </div>
                </div>

                {/* Middle Section: Image + Hover Overlay */}
                <div className="relative w-full h-32 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transform transition-transform duration-300
                      group-hover:-translate-x-full
                    "
                  />
                  {/* Overlay that slides in from the right */}
                  <div
                    className="
                      absolute inset-0 bg-white flex flex-col items-center justify-center
                      transform transition-transform duration-300
                      translate-x-full group-hover:translate-x-0
                    "
                  >
                    <p className="p-4 text-gray-700">
                      More details about {item.title}...
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline inline-flex items-start"
                    >
                      Expand &rarr;
                    </a>
                  </div>
                </div>

                {/* Bottom Section can be added here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
