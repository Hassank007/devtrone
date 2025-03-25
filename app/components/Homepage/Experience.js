import React from 'react'
import Image from 'next/image'
import Button from '../Button'

// Define your logo data array
const logos = [
  { src: '/images/panasonic-logo.png', alt: 'Panasonic Logo' },
  { src: '/images/save-logo.png', alt: 'Save Logo' },
  { src: '/images/otava-logo.png', alt: 'Otava Logo' },
  { src: '/images/happyhr-logo.png', alt: 'Happy HR Logo' },
  { src: '/images/gruber-logo.png', alt: 'Gruber Logistics Logo' },
]

// Reusable component for a marquee line with centered logos
const MarqueeLine = ({ animationClass }) => (
  <div className="relative w-full overflow-hidden h-14">
    {/* First copy */}
    <div className={`flex justify-center ${animationClass} whitespace-nowrap`}>
      {logos.map((logo, idx) => (
        <div key={idx} className="flex items-center justify-center mx-2">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
      ))}
    </div>
    {/* Duplicate copy for seamless loop */}
    <div className={`flex justify-center ${animationClass} whitespace-nowrap absolute top-0`}>
      {logos.map((logo, idx) => (
        <div key={`${idx}-dup`} className="flex items-center justify-center mx-2">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </div>
)

const Experience = () => {
  return (
    <main className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Overall flex container for the hero layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left Side: Headline, Subtext, CTA */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Experience Excellence with ValueCoders
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Embrace the transformative power of technology with ValueCoders,
              where our expertise meets your vision. From startups to big enterprises, 
              development organizations to digital agencies, and SMEs to Governments, 
              we cater to varied software requirements, delivering unmatched quality.
            </p>
            <Button />
          </div>
          
          {/* Right Side: Grid with two boxes (stacked on mobile) and badges below */}
          <div className="w-full flex flex-col gap-5">
            {/* Grid container with two boxes of equal height */}
            <div className="rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left Box: Key Points */}
                <div className="bg-white flex flex-col rounded-md p-5 h-64">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    More Than 500 Brands Count on Us
                  </h2>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Top 1% Software Talent',
                      '97% Client Satisfaction',
                      '50+ Industry Verticals Covered',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500 mr-2 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Box: Brand Logos with mapped logos */}
                <div className="flex flex-col custom-gradient p-12 md:p-8 rounded-md h-64">
                  <div className="space-y-4">
                    <MarqueeLine animationClass="animate-marquee-left" />
                    <MarqueeLine animationClass="animate-marquee-right" />
                    <MarqueeLine animationClass="animate-marquee-left" />
                  </div>
                </div>
              </div>
            </div>

            {/* Badges/Certifications placed below the two boxes */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="relative w-20 h-10">
                <Image
                  src="/images/cmmi-level-3.png"
                  alt="CMMI Level 3"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-20 h-10">
                <Image
                  src="/images/android-enterprise.png"
                  alt="Android Enterprise Recommended"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-20 h-10">
                <Image
                  src="/images/clutch-rating.png"
                  alt="Clutch Rating 4.8"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-20 h-10">
                <Image
                  src="/images/goodfirms.png"
                  alt="GoodFirms Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-20 h-10">
                <Image
                  src="/images/great-place-to-work.png"
                  alt="Great Place to Work Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Experience
