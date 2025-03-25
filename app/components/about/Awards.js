import { FaArrowRight } from "react-icons/fa";

const Awards = () => {
  const certifications = [
    { name: "Great Place To Work", logo: "/images/certifications/gptw.png" },
    { name: "ISO 9001:2015", logo: "/images/certifications/iso.png" },
    { name: "AWS Select Technology Partner", logo: "/images/certifications/aws-partner.png" },
    { name: "CMMI Level 3", logo: "/images/certifications/cmmi.png" },
    { name: "Clutch 4.8", logo: "/images/certifications/clutch.png" },
    { name: "Docker Authorized Partner", logo: "/images/certifications/docker.png" },
    { name: "Android Enterprise Recommended", logo: "/images/certifications/android-enterprise.png" },
    { name: "Okta", logo: "/images/certifications/okta.png" },
  ];

  return (
    <section className="bg-[#05164d] py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16">
          {/* Left Content - Certification Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center justify-center">
                <img
                  src={cert.logo}
                  alt={`${cert.name}`}
                  className="max-h-16 w-auto object-contain brightness-100"
                />
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-[40px] font-bold text-white">
                Awards & Recognitions
              </h2>
              <a
                href="#"
                className="inline-flex items-center group"
              >
                <div className="w-12 h-12 border border-[#FFA500] rounded-sm flex items-center justify-center text-[#FFA500] group-hover:bg-[#FFA500] group-hover:text-white transition-all duration-300">
                  <FaArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              In the last 20 years, we have been acknowledged by prestigious organizations and awarded for our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
