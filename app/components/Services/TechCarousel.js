"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const techData = [
  {
    title: "Programming Languages",
    items: [
      "Microsoft .NET",
      "Java",
      "Python",
      "Node.js",
      "PHP",
      "Golang",
      "HTML5",
      "CSS",
      "JavaScript",
      "Angular JS",
      "React JS",
      "MeteorJS",
      "Vue.js",
      "Next.js",
      "Ember.js",
    ],
  },
  {
    title: "Mobile & Platforms",
    items: [
      "iOS",
      "Android",
      "Xamarin",
      "Apache Cordova",
      "React Native",
      "Flutter",
      "Ionic",
      "Pimcore",
      "Magento",
      "SharePoint",
      "Microsoft Dynamics 365",
      "Salesforce",
    ],
  },
  {
    title: "Databases",
    items: [
      "Microsoft SQL Server",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Realm",
      "Apache Cassandra",
    ],
  },
];

export default function TechCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Technologies &amp; Frameworks We Use
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          As a leading web development company in India, we are proud to have a team of
          custom web application developers who hold relevant knowledge about the
          following core technologies:
        </p>

        <div className="relative mt-10">
          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {techData.map((category, index) => (
                // Use w-full for mobile screens and w-1/3 for medium screens and up
                <div key={index} className="flex-none w-full md:w-1/3 px-2">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-72">
                    <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-1rem] top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
          >
            <AiOutlineLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[-1rem] top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
          >
            <AiOutlineRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
