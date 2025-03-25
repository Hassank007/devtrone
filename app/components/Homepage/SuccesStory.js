"use client"; // Only if you're using Next.js App Router with client components
import Image from "next/image";

export default function SuccessStories() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Success Stories</h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            From simple CRM to complex applications, our experts are capable of
            handling projects of all sizes. Here's a glimpse into some of our previous work.
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative group rounded-lg overflow-hidden">
            {/* Background Image */}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/restaurant-management.jpg"
                alt="Restaurant Management"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Gradient Overlay (darkens on hover) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Text & Button */}
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-semibold mb-2">
                Restaurant Management Platform
              </h3>
              <p className="text-sm text-gray-100 mb-3 max-w-md">
                Developed an online platform to streamline restaurant operations,
                inventory management, and supplier coordination.
              </p>

              {/* Circular Arrow Button in Bottom-Right */}
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full 
                           bg-white text-blue-900 hover:bg-gray-200 
                           transition-colors absolute bottom-6 right-6"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-lg overflow-hidden">
            {/* Background Image */}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/mental-health-app.jpg"
                alt="Mental Health App"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Gradient Overlay (darkens on hover) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Text & Button */}
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-semibold mb-2">Mental Health App</h3>
              <p className="text-sm text-gray-100 mb-3 max-w-md">
                Built telehealth platform to offer therapy sessions and
                AI-driven insights.
              </p>

              {/* Circular Arrow Button in Bottom-Right */}
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full 
                           bg-white text-blue-900 hover:bg-gray-200 
                           transition-colors absolute bottom-6 right-6"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
