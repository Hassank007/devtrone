// components/ProudExistenceSection.jsx

export default function ProudExistenceSection() {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
  
          {/* Top Section: Heading (Left) & Paragraph (Right) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-sm">
              20+ years of Proud Existence
            </h2>
            <p className="text-gray-600 mt-4 md:mt-0 md:ml-8 max-w-xl">
              ValueCoders set its first stone down in 2004 and has been thriving 
              ever since. The company takes great pride in announcing that they’ve 
              managed to provide top-notch IT service to their clients for 20 years.
            </p>
          </div>
  
          {/* Timeline Container */}
          {/* Horizontal scroll if needed; remove overflow-x-auto if you want it fixed */}
       <img src="/abouttimeline.png"/>
        </div>
      </section>
    );
  }
  
  /* Sub-component for each milestone on the timeline */
  