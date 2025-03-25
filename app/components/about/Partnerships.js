import { FaArrowRight } from "react-icons/fa";

const Partnerships = () => {
  const partners = [
    { name: "MongoDB", logo: "/images/partnerships/mongodb.png" },
    { name: "Nasscom", logo: "/images/partnerships/nasscom.png" },
    { name: "Deloitte", logo: "/images/partnerships/deloitte.png" },
    { name: "Indian Retail", logo: "/images/partnerships/indian-retail.png" },
  ];

  return (
    <section className="bg-[#F8F9FC] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-[40px] font-bold text-[#1A1A1A]">
                Partnerships
              </h2>
              <a
                href="#"
                className="inline-flex items-center group"
              >
                <div className="w-12 h-12 border border-[#1A1A1A] rounded-sm flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300">
                  <FaArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed">
              Several valuable partnerships were forged along this journey, and our research has been published on different websites.
            </p>
          </div>

          {/* Right Content - Partners Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships; 