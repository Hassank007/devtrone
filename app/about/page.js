
import Image from "next/image";
import MissionSection from "../components/about/Mission";
import CoreValuesSection from "../components/about/CoreValue";
import ProudExistenceSection from "../components/about/ProdExistense";
import KeyClientsSection from "../components/about/KeyClient";
import Awards from "../components/about/Awards";
import Partnerships from "../components/about/Partnerships";
import Team from "../components/about/Team";
import Testimonials from "../components/about/Testimonials";
import ConsultationSection from "../components/ContactForm";
import Footer from "../Footer";
export default function AboutSection() {
    return (
      <><section className="bg-[#05164d] py-10 md:py-32">
            <div className="container mx-auto px-4">
                {/* Main Content: Logos, Text Left, Image Right */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Left Side (Logos, Heading & Text) */}
                    <div className="mt-8 md:w-2/3">
                        {/* Partner Logos placed just above the heading */}
                        <div className="flex flex-wrap items-end gap-6 mb-4">
                            <Image
                                src="/logos/microsoft.png"
                                alt="CSF"
                                width={80}
                                height={40}
                                className="object-contain" />
                            <Image
                                src="/logos/amz.png"
                                alt="Yale"
                                width={80}
                                height={40}
                                className="object-contain" />
                            <Image
                                src="/logos/google.png"
                                alt="Panasonic"
                                width={80}
                                height={40}
                                className="object-contain" />
                            <Image
                                src="/logos/clutch.png"
                                alt="Orange"
                                width={80}
                                height={80}
                                className="object-contain" />
                        </div>

                        <h2 className="text-3xl md:text-7xl text-yellow-500 font-bold mb-4">
                            About Us
                        </h2>
                        <p className="text-white text-xl max-w-3xl">
                            Since our inception in 2004, ValueCoders has been delivering IT
                            outsourcing services worldwide. We combine business domain
                            knowledge, proven methodologies, and the technology expertise of
                            650+ skilled software professionals to yield high-quality solutions
                            that add value to businesses.
                        </p>
                    </div>

                    {/* Right Side (Image) */}
                    <div className="flex flex-col justify-center mt-8 md:mt-0">
                        <div className="flex items-start space-x-4 mb-6">
                            <img
                                src="/abouthero.png"
                                alt="Great Place to Work"
                                className="" />
                        </div>
                    </div>
                </div>
            </div>
        </section><MissionSection />
        <CoreValuesSection/>
        <ProudExistenceSection/>
        <KeyClientsSection/>
        <Awards/>
        <Partnerships/>
        <Team/>
        <Testimonials/>
        <ConsultationSection/>
        <Footer/>
        </>
    );
  }
  