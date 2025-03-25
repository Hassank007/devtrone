// components/ExpandableCard.js
"use client";

import React, { useState } from 'react';
import { FaCheckCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpandableCard = ({ title, shortContent, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      {/* Card Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Short bullet points with orange check icons */}
      <ul className="space-y-2 mb-4">
        {shortContent.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <FaCheckCircle className="text-orange-500 mt-[2px]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Conditionally rendered expanded content */}
      {isExpanded && (
        <div className="text-gray-700 mb-4">
          <ul className="space-y-2">
            {expandedContent.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-orange-500 mt-[2px]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggle Button: see more / see less */}
      <div className="flex justify-end">
        <button
          onClick={handleToggle}
          className="flex items-center text-blue-900 font-semibold hover:underline"
        >
          {isExpanded ? 'See Less' : 'See More'}
          {isExpanded ? (
            <FaMinusCircle className="ml-1" />
          ) : (
            <FaPlusCircle className="ml-1" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ExpandableCard;
