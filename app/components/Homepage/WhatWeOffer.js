"use client";
import React from "react";
import Button from "../Button";

export default function StickySection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[85rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Sticky Card */}
          <div className="md:w-2/4">
            {/* 
              The sticky class with a top offset ensures this card 
              remains in view as the user scrolls through the section.
            */}
            <div className="sticky top-20">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                {/* Left Column */}
                <div>
                  {/* Small Heading */}
                  <p className="text-sm font-semibold text-yellow-500 uppercase">
                    What We Offer
                  </p>

                  {/* Main Title */}
                  <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Software Development &amp; Engineering Services
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-gray-700 max-w-2xl">
                    Driven by the top 1% of software engineering talent in
                    India, we deliver robust, scalable, and reliable software
                    product solutions to clients across the globe.
                  </p>
                </div>

                {/* Right Column: Card */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative bg-gray-50 shadow-md p-6  space-y-4 rounded-lg  w-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>

           

                    {/* Card Title */}
                    <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-2">
                      Fuel your{" "}
                      <span className="text-yellow-500">Digital-First</span>{" "}
                      Idea
                    </h3>

                    {/* Card Description */}
                    <p className="text-gray-700 mb-6 lg:text-xl">
                      With 675+ Transformation Experts, 20+ Years of Experience,
                      we are helping businesses across 30+ countries create
                      their digital footprints.
                    </p>

                    {/* Call-to-Action Button */}
                    <Button/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable Cards */}
          <div className="md:w-2/4">
            {/* If you want the right side to scroll independently, you can set a fixed height and add overflow-y-scroll.
                For example: <div className="h-[600px] overflow-y-scroll"> ... </div>
                Otherwise, the entire page will scroll naturally. */}
            <div className="space-y-16">
              <div className="relative bg-[#fcfcfc] p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  AI & ML
                </h3>
                {/* Description */}
                <p className="text-gray-700 mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
              <div className="relative custom-gradient p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">AI & ML</h3>
                {/* Description */}
                <p className="text-white mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
              <div className="relative bg-[#fcfcfc] p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  AI & ML
                </h3>
                {/* Description */}
                <p className="text-gray-700 mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
              <div className="relative custom-gradient p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">AI & ML</h3>
                {/* Description */}
                <p className="text-white mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
              <div className="relative bg-[#fcfcfc] p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  AI & ML
                </h3>
                {/* Description */}
                <p className="text-gray-700 mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
              <div className="relative custom-gradient p-6 rounded-lg shadow-md  space-y-4">
                {/* Top-right arrow button */}
                <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
                  {/* Replace this SVG with any arrow icon you prefer */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4.999 4.999a1 1 
               0 010 1.414l-4.999 4.999a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Icon + Title Row */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    {/* Example icon container */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 01.894.553l3 6a1 1 0 01.064.883l-3 6A1 1 0 0110 16H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.064-.883l3-6A1 1 0 0110 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">AI & ML</h3>
                {/* Description */}
                <p className="text-white mb-4">
                  Embrace AI & ML to drive innovation and efficiency in your
                  business. Our customized solutions offer advanced insights and
                  automation, enabling streamlined processes, data-driven
                  decisions, and a competitive edge in the evolving tech world.
                </p>

                {/* Bullet Points in a 2-column grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Large Language Model
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    RPA Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ML Development
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    Generative AI
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    ChatGPT Solutions
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-yellow-500 mr-2">✔</span>
                    AI Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
