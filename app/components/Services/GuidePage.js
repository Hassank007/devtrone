"use client" // Only if using Next.js 13+ and need client-side code

import React from "react"

export default function GuidePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Page Title */}
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Guide to Understanding Custom Web Application Development
      </h1>

      <div className="md:flex gap-8">
        {/* LEFT SIDEBAR (Guide Topics) */}
        <aside className="md:w-1/3 lg:w-1/4 bg-gray-50 p-4 rounded-md overflow-y-auto md:sticky md:top-8 h-auto md:h-[calc(100vh-4rem)]">
          <h2 className="text-xl font-semibold mb-4">GUIDE TOPICS</h2>
          <ul className="space-y-2">
            {/* Each topic links to a section on the right side */}
            <li>
              <a
                href="#section1"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                Custom Web Development and Benefits
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                Medium &amp; Large Enterprise Custom App Adoption
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                Types of Web Applications
              </a>
            </li>
            <li>
              <a
                href="#section4"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                The Importance of Progressive Web Apps (PWAs)
              </a>
            </li>
            <li>
              <a
                href="#section5"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                The Growing Trends in Web App Development
              </a>
            </li>
            <li>
              <a
                href="#section6"
                className="block p-2 hover:bg-gray-200 rounded transition"
              >
                Core Elements of Your Web Application
              </a>
            </li>
          </ul>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <section className="md:w-2/3 lg:w-3/4 mt-8 md:mt-0 space-y-16">
          {/* Section 1 */}
          <article id="section1">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Custom Web Development and Benefits
            </h2>
            <p className="mb-4 text-sm md:text-base">
              Custom web development allows businesses to tailor their applications 
              to unique needs, providing greater scalability, flexibility, and 
              integration options...
            </p>
            <img
              src="/featured1.webp"
              alt="Custom Web Development Illustration"
              className="w-full h-auto rounded-md shadow mb-4"
            />
            <p className="text-sm md:text-base">
              By choosing custom solutions, companies can optimize performance, 
              enhance security, and deliver user experiences that stand out in 
              competitive markets.
            </p>
          </article>

          {/* Section 2 */}
          <article id="section2">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Medium &amp; Large Enterprise Custom App Adoption
            </h2>
            <p className="text-sm md:text-base">
              Many medium and large enterprises are increasingly adopting custom 
              applications to streamline workflows...
            </p>
          </article>

          {/* Section 3 */}
          <article id="section3">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Types of Web Applications
            </h2>
            <p className="text-sm md:text-base">
              Single-page applications (SPAs), multi-page apps (MPAs), and 
              progressive web apps (PWAs) each offer unique benefits...
            </p>
          </article>

          {/* Section 4 */}
          <article id="section4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              The Importance of Progressive Web Apps (PWAs)
            </h2>
            <p className="text-sm md:text-base">
              PWAs deliver app-like experiences directly in the browser, 
              leveraging offline functionality...
            </p>
          </article>

          {/* Section 5 */}
          <article id="section5">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              The Growing Trends in Web App Development
            </h2>
            <p className="text-sm md:text-base">
              From AI-driven personalization to serverless architectures, 
              new trends continue to reshape modern web app development...
            </p>
          </article>

          {/* Section 6 */}
          <article id="section6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Core Elements of Your Web Application
            </h2>
            <p className="text-sm md:text-base">
              Security, performance, scalability, and user experience are 
              foundational elements that every successful web application 
              should prioritize...
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
