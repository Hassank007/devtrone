// components/KeyClientsSection.jsx

import { FaArrowRight } from "react-icons/fa";

const KeyClient = () => {
  const clients = [
    { name: "Aroneo", logo: "/images/clients/aroneo.png" },
    { name: "Eatigo", logo: "/images/clients/eatigo.png" },
    { name: "Save", logo: "/images/clients/save.png" },
    { name: "Spinny", logo: "/images/clients/spinny.png" },
    { name: "Happy HR", logo: "/images/clients/happyhr.png" },
    { name: "CSF", logo: "/images/clients/csf.png" },
    { name: "Reaqua", logo: "/images/clients/reaqua.png" },
    { name: "Jackson", logo: "/images/clients/jackson.png" },
    { name: "Panasonic", logo: "/images/clients/panasonic.png" },
    { name: "Grundfos", logo: "/images/clients/grundfos.png" },
    { name: "Yale", logo: "/images/clients/yale.png" },
    { name: "Thomson Reuters", logo: "/images/clients/thomson-reuters.png" },
  ];

  return (
    <section className="bg-[#F8F9FC] py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-[40px] font-bold text-[#1A1A1A]">
                Our Key Clients
              </h2>
              {/* Arrow Button */}
              <a
                href="#"
                className="inline-flex items-center group"
              >
                <div className="w-12 h-12 border border-[#1A1A1A] rounded-sm flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300">
                  <FaArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              We deliver exceptional technology solutions for world-class businesses in every business industry from dynamic startups and SMBs to Fortune 500 companies.
            </p>
          </div>

          {/* Right Content - Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-12 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyClient;
