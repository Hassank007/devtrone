import { FaHandshake, FaAward, FaLightbulb, FaUserShield } from "react-icons/fa";

export default function CoreValuesSection() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left Side: Image (covering half the width) */}
      <div className="md:w-1/2">
        <img
          src="/core-values.webp"
          alt="Chess"
          className="w-full h-full md:h-4/5 object-cover"
        />
      </div>

      {/* Right Side: Content (covering half the width) */}
      <div className="md:w-1/2 bg-white p-8 md:p-16">
        {/* Heading and Intro Text */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Core Values
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          At ValueCoders, we embrace well-established cultural and professional
          values which represent our highest aspirations for how we engage as
          colleagues, fellows, alumni, partners, and board members.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* 1) Respect */}
          <div className="flex flex-col">
            <div className="text-5xl text-[#ffb81d] mb-2">
              <FaHandshake />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Respect
            </h3>
            <p className="text-lg text-gray-600">
              Set trends for your peers and the industry in general to follow.
            </p>
          </div>

          {/* 2) Exceptional Value */}
          <div className="flex flex-col">
            <div className="text-5xl text-[#ffb81d] mb-2">
              <FaAward />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Exceptional Value
            </h3>
            <p className="text-lg text-gray-600">
              Understand and exceed customers’ expectations all the time.
            </p>
          </div>

          {/* 3) Authenticity */}
          <div className="flex flex-col">
            <div className="text-5xl text-[#ffb81d] mb-2">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Authenticity
            </h3>
            <p className="text-lg text-gray-600">
              Be sincere, honest, and open in dealings to ensure trustworthiness.
            </p>
          </div>

          {/* 4) Leadership */}
          <div className="flex flex-col">
            <div className="text-5xl text-[#ffb81d] mb-2">
              <FaUserShield />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Leadership
            </h3>
            <p className="text-lg text-gray-600">
              Stay at the forefront of innovation and industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
