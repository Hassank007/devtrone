"use client" // Only if you're on Next.js 13+ and need client-side code
import React from "react"

export default function FeaturedRow() {
  return (
    <main className="w-full">
      {/* FIRST ROW (same order) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0">
        {/* 1) First Box: Smaller width, foreground image */}
        <div className="md:col-span-3 bg-gray-100 flex flex-col justify-center items-center">
          <img
            src="/featured1.webp"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2) Second Box: Smaller width, solid color background */}
        <div className="md:col-span-3 bg-blue-900 p-8 text-white flex flex-col justify-center">
          <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
            Blog
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Top 10 Web Application Development Trends To Look
          </h2>
          <p className="text-sm mb-4">
            Many new web technologies are ruling in web application development trends,...
          </p>
          <a
            href="#"
            className="mt-auto inline-flex items-center text-sm font-medium text-white hover:opacity-80"
          >
            Learn More
            <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* 3) Third Box: Larger width, background image */}
        <div
          className="md:col-span-6 relative bg-cover bg-center text-white flex flex-col justify-center"
          style={{ backgroundImage: "url('/featured2.webp')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
            <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
              Case Study
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SAP ERP</h2>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              It is a low-code/no-code, a cloud-native platform that enables you to
              develop mission-critical apps 20 times faster than traditional methods,
              leveraging the power of SAP's...
            </p>
            <div className="mb-4 text-sm md:text-base">
              <span className="font-semibold">Core tech:</span> JAVA, React JS
            </div>
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* SECOND ROW (REVERSED ORDER) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0">
        {/* 3) Third Box first */}
        <div
          className="md:col-span-6 relative bg-cover bg-center text-white flex flex-col justify-center"
          style={{ backgroundImage: "url('/featured2.webp')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
            <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
              Case Study
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SAP ERP</h2>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              It is a low-code/no-code, a cloud-native platform that enables you to
              develop mission-critical apps 20 times faster than traditional methods,
              leveraging the power of SAP's...
            </p>
            <div className="mb-4 text-sm md:text-base">
              <span className="font-semibold">Core tech:</span> JAVA, React JS
            </div>
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* 2) Second Box second */}
        <div className="md:col-span-3 bg-blue-900 p-8 text-white flex flex-col justify-center">
          <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
            Blog
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Top 10 Web Application Development Trends To Look
          </h2>
          <p className="text-sm mb-4">
            Many new web technologies are ruling in web application development trends,...
          </p>
          <a
            href="#"
            className="mt-auto inline-flex items-center text-sm font-medium text-white hover:opacity-80"
          >
            Learn More
            <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* 1) First Box last */}
        <div className="md:col-span-3 bg-gray-100 flex flex-col justify-center items-center">
          <img
            src="/featured1.webp"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-0">
        {/* 1) First Box: Smaller width, foreground image */}
        <div className="md:col-span-3 bg-gray-100 flex flex-col justify-center items-center">
          <img
            src="/featured1.webp"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2) Second Box: Smaller width, solid color background */}
        <div className="md:col-span-3 bg-blue-900 p-8 text-white flex flex-col justify-center">
          <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md">
            Blog
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Top 10 Web Application Development Trends To Look
          </h2>
          <p className="text-sm mb-4">
            Many new web technologies are ruling in web application development trends,...
          </p>
          <a
            href="#"
            className="mt-auto inline-flex items-center text-sm font-medium text-white hover:opacity-80"
          >
            Learn More
            <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* 3) Third Box: Larger width, background image */}
        <div
          className="md:col-span-6 relative bg-cover bg-center text-white flex flex-col justify-center"
          style={{ backgroundImage: "url('/featured2.webp')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded">
            <span className="inline-block w-fit mb-4 text-sm font-semibold border border-white px-3 py-1 rounded-md uppercase">
              Case Study
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SAP ERP</h2>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              It is a low-code/no-code, a cloud-native platform that enables you to
              develop mission-critical apps 20 times faster than traditional methods,
              leveraging the power of SAP's...
            </p>
            <div className="mb-4 text-sm md:text-base">
              <span className="font-semibold">Core tech:</span> JAVA, React JS
            </div>
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
