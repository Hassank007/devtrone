// components/MissionSection.jsx
export default function MissionSection() {
    return (
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* 2-column layout on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Heading & Paragraph */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We drive business success through innovative digital solutions, 
                enhancing efficiency, fostering growth, and providing a competitive 
                edge for businesses of all sizes, everywhere.
              </p>
            </div>
  
            {/* Right Column: Quote & Profile */}
            <div>
              <blockquote className="text-lg text-gray-700 italic mb-8">
                “We help businesses unveil and satisfy demand for digital 
                transformation by providing engineering and consulting 
                services that foster competitiveness and innovation.”
              </blockquote>
              
              <div className="flex items-center">
                {/* Replace with your actual image or remove if not needed */}
                <img
                  src="/images/parvesh.jpg"
                  alt="Parvesh Aggarwal"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Parvesh Aggarwal
                  </p>
                  <p className="text-base text-gray-500">
                    CEO, ValueCoders
                  </p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  