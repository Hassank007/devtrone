import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: "Parvesh Aggarwal",
      position: "Founder & CEO",
      image: "/images/team/parvesh.jpg",
      description: ""
    },
    {
      name: "Mohit Malik",
      position: "VP - Operations",
      image: "/images/team/mohit.jpg",
      description: "Mohit oversees ValueCoders' vast engineering organization, which drives the company's core programming."
    },
    {
      name: "Vivek Avasthi",
      position: "VP - Digital Marketing",
      image: "/images/team/vivek.jpg",
      description: ""
    },
    {
      name: "Rahul Srivastava",
      position: "VP - Human Resource",
      image: "/images/team/rahul.jpg",
      description: ""
    },
    {
      name: "Akhil Mendiratta",
      position: "AVP - Business Development",
      image: "/images/team/akhil.jpg",
      description: ""
    },
    {
      name: "Neha Raina",
      position: "Head Of Resourcing And Partnerships",
      image: "/images/team/neha.jpg",
      description: ""
    },
    {
      name: "Saundaraya Gupta",
      position: "Technical Manager",
      image: "/images/team/saundaraya.jpg",
      description: ""
    },
    {
      name: "Sanjiv",
      position: "VP-Business Development",
      image: "/images/team/sanjiv.jpg",
      description: ""
    },
   
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Our Team
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Our team members have respect, trust & care for each other. Our greatest strength is team spirit & dedication towards the common goal of client satisfaction.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="group relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center grayscale"
                />
                
                {/* Overlay that shows on hover */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-semibold text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {member.position}
                    </p>
                    {member.description && (
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Default Text (visible when not hovering) */}
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(47,50,65,0.85)] p-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-semibold text-lg text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-200 text-center">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 