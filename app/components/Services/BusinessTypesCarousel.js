"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaLaptopCode,
  FaBuilding,
} from 'react-icons/fa'

export default function BusinessTypesPage() {
  // --- Embla Carousel Setup ---
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect() // Initial state
  }, [emblaApi, onSelect])

  // --- Card Data (3 Slides) ---
  const slides = [
    {
      title: 'Startups',
      imageSrc: '/images/startups.jpg', // Replace with your own image
      icon: <FaRocket size={24} className="text-yellow-500 mx-auto mb-2" />,
      paragraph:
        "Accelerate your startup’s growth with tailored software web app development solutions designed to streamline operations and scale your business effectively.",
    },
    {
      title: 'Digital Agencies',
      imageSrc: '/images/digital-agencies.jpg', // Replace with your own image
      icon: <FaLaptopCode size={24} className="text-blue-500 mx-auto mb-2" />,
      paragraph:
        "Empower digital agencies with advanced web solutions to manage client projects, optimize workflows, and deliver exceptional online experiences.",
    },
    {
      title: 'Enterprises',
      imageSrc: '/images/enterprises.jpg', // Replace with your own image
      icon: <FaBuilding size={24} className="text-green-600 mx-auto mb-2" />,
      paragraph:
        "Scale your enterprise operations with secure, high-performance platforms designed to handle complex business processes and global expansion.",
    },
  ]

  return (
    <div className="min-h-fit bg-gray-50 ">
      <div className="mx-auto max-w-[90rem] px-4  py-40">
        {/* Left Column: Title, Paragraph, and Carousel Nav */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-4xl pr-0 md:pr-10 font-bold text-gray-800 mb-4">
              Tailored Tech for All Business Types
            </h2>
            <p className="text-gray-600 max-w-md">
              Our wide range of web app development services cater to the needs
              of businesses of different types and sizes.
            </p>

            {/* Carousel Nav Buttons */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Column: Embla Carousel */}
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              {/* Embla container */}
              <div className="flex space-x-4">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    // FLEX-NONE so each slide won't shrink, w-full on mobile, w-1/3 on md+ 
                    className="relative flex-none w-full lg:w-1/3 h-72 rounded-2xl overflow-hidden group"
                  >
                    {/* Front Layer (Image + Title + Down Arrow) */}
                    <div className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <img
                        src={slide.imageSrc}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Title (Top-Left) */}
                      <div className="absolute top-2 left-2 text-white font-semibold">
                        {slide.title}
                      </div>
                      {/* Down Arrow (Top-Right) */}
                      <div className="absolute top-2 right-2 text-white">
                        <FaChevronDown />
                      </div>
                    </div>

                    {/* Back Layer (Icon + Paragraph + Up Arrow) */}
                    <div className="absolute inset-0 z-20 bg-white p-4 flex flex-col justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {/* Icon */}
                      {slide.icon}
                      {/* Paragraph */}
                      <p className="text-gray-700 text-sm text-center">
                        {slide.paragraph}
                      </p>
                      {/* Up Arrow (Top-Right) */}
                      <div className="absolute top-2 right-2 text-gray-500">
                        <FaChevronUp />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
