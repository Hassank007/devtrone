"use client";
import React from "react";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="relative custom-gradient text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Digital Excellence
          </h1>
          
          {/* Subheading */}
          <p className="text-base md:text-lg mb-6 max-w-xl">
            Driven by the top 1% of software engineering talent in India, we deliver robust, 
            scalable, and innovative solutions that positively impact the bottom line.
          </p>
          
          {/* Call-to-Action */}
          <Button/>
          
          {/* Key Stats */}
          <ul className="flex flex-wrap items-center space-x-4 text-sm md:text-base pt-5">
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span> 675+ Experts
            </li>
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span> 20+ Years Experience
            </li>
            <li className="flex items-center mb-2">
              <span className="text-primary-yellow mr-1">✔</span> 2500+ Customers
            </li>
          </ul>
        </div>
        
        {/* Right Content (Images / Shapes) */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative shape behind images (optional) */}
        
          
          {/* Example of two overlapping images (replace with your own) */}
          <div className="relative z-10 flex items-center space-x-4">
            <img
              src="/discover.png"
              alt="Person 1"
              className=" md:w-full md:h-80 object-cover rounded-lg shadow-lg"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
