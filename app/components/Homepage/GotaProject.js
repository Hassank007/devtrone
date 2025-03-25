"use client";
import React from "react";
import Button from "../Button";

export default function GotaProject() {
  return (
    <section className="relative custom-gradient text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Got a Project in Mind?
          </h1>
          
          {/* Subheading */}
          <p className="text-base md:text-lg mb-6 max-w-xl">
          Let’s work together to turn your idea into a compelling and successful tech product.
          </p>
          
          {/* Call-to-Action */}
          <Button/>
          
          {/* Key Stats */}
          <ul className="flex flex-wrap items-center space-x-4 text-sm md:text-base pt-5">
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span> 50+ Industry Sectors

            </li>
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span>97% Client Satisfaction

            </li>
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span> 4200+ Projects
            </li>
          </ul>
        </div>
        
        {/* Right Content (Images / Shapes) */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative shape behind images (optional) */}
        
          
          {/* Example of two overlapping images (replace with your own) */}
          <div className="relative z-10 flex items-center space-x-4">
            <img
              src="/gotaproject.png"
              alt="Person 1"
              className=" md:w-full md:h-80 object-cover rounded-lg shadow-lg"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
