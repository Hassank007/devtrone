import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import ExpandableCard from './ExpandableCard';
const ServiceContent = () => {
  return (
    <section className='bg-white text-black'>
    <div className="max-w-[90rem] mx-auto px-4 py-8">
      {/* Main Container: using flex to place content + TOC side by side */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Content Section (wider) */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4">
            Success-Driven Services for Your Business
          </h1>
          <p className="text-gray-600 mb-8">
            Experience the best of full-stack web development to ensure
            growth-centric digital transformation for your business.
          </p>

          {/* Services Section */}
          <section id="web-app-development" className="mb-10 py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Services</h2>

              {/* 2-column grid on md+ screens, 1-column on smaller screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-semibold mb-2">Web App Development</h3>
                  <div className="h-[2px] w-16 bg-orange-500 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    Web applications that address your specific business challenges
                    and goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Focus on improving your online presence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Enhance your business processes and user engagement</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <div className="h-[2px] w-16 bg-orange-500 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    Visually appealing and user-friendly frontends that provide
                    an exceptional user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Analyze target audience insights and brand identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Integrate stunning interactive effects for a dynamic UX</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <div className="h-[2px] w-16 bg-orange-500 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    Secure backend systems to power your web applications effectively.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Enhanced security and performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Advanced data structures for actionable insights</span>
                    </li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-semibold mb-2">eCommerce Development</h3>
                  <div className="h-[2px] w-16 bg-orange-500 mb-4"></div>
                  <p className="text-gray-700 mb-4">
                    eCommerce solutions designed for businesses ranging from
                    startups to large enterprises.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Design microservices architectures to handle growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-[2px]" />
                      <span>Optimize business processes for improved efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative w-full bg-[#181c49] text-white rounded-xl p-8 mt-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Is Your Current Web App Falling Short?
        </h2>
        <p className="text-base md:text-lg mb-6">
          Upgrade with Devtrone’ expert custom web app development services.
        </p>
        <button className="inline-flex items-center bg-white text-[#181850] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
          CONTACT US
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Right Placeholder for an Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="w-64 h-64 rounded-lg flex items-center justify-center">
          {/* Placeholder content: replace with your own image/avatars */}
        <img src="/web.png"/>
        </div>
      </div>
    </div>
            </div>
          </section>

          {/* Frontend Development */}
          <section id="frontend-development" className="mb-10">
          <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          Our Formula for Web Development Success
        </h2>
        <p className="text-gray-700 mb-8">
          At ValueCoders, our custom web app development services are designed 
          to guarantee success through meticulous attention to detail and 
          industry-leading practices. Here’s how we ensure your project 
          achieves its goals:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExpandableCard
            title="Scoping"
            shortContent={[
              'Assess feasibility.',
              'Align scope with goals.',
              'Define precise requirements.'
            ]}
            expandedContent={[
              'We also perform thorough risk analysis and refine project objectives.',
              'Involve stakeholders early for better clarity.'
            ]}
          />

          <ExpandableCard
            title="Cost Estimation"
            shortContent={[
              'Enable effective planning.',
              'Ensure budget transparency.'
            ]}
            expandedContent={[
              'Utilize industry benchmarks to create realistic estimates.',
              'Adjust scope and resources to meet budget constraints.'
            ]}
          />

          <ExpandableCard
            title="Quality Management"
            shortContent={['Follow strict quality assurance.']}
            expandedContent={[
              'Implement rigorous testing protocols at every development stage.',
              'Leverage automated and manual testing for reliable outcomes.'
            ]}
          />

          <ExpandableCard
            title="Collaboration"
            shortContent={['Foster seamless collaboration.']}
            expandedContent={[
              'Use agile methodologies to keep stakeholders involved.',
              'Encourage open communication for rapid issue resolution.'
            ]}
          />
        </div>
      </div>
    </section>
          </section>

          {/* Backend Development */}
          <section id="backend-development" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
            <p className="text-gray-600">
              Secure backend systems to power your web applications efficiently.
              Enhance data handling, security, and performance.
            </p>
          </section>

          {/* eCommerce Development */}
          <section id="ecommerce-development" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">eCommerce Development</h2>
            <p className="text-gray-600">
              Scalable and high-performing online stores tailored to your target
              audience. Seamless integration of payment gateways, shipping
              services, and more.
            </p>
          </section>
        </div>

        {/* Table of Contents (Right Sidebar, narrower) */}
        <div className="hidden lg:block w-1/4">
          <div className="sticky top-8 border-l border-gray-200 pl-4">
            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#web-app-development"
                  className="text-blue-600 hover:underline"
                >
                  Web App Development
                </a>
              </li>
              <li>
                <a
                  href="#frontend-development"
                  className="text-blue-600 hover:underline"
                >
                  Frontend Development
                </a>
              </li>
              <li>
                <a
                  href="#backend-development"
                  className="text-blue-600 hover:underline"
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="#ecommerce-development"
                  className="text-blue-600 hover:underline"
                >
                  eCommerce Development
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServiceContent;
