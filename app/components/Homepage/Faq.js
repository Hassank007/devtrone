
"use client";
import { useState } from "react";
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
      {
        question: "Why should I choose ValueCoders for software engineering, consulting, and outsourcing?",
        answer:
          "We are a highly experienced and qualified team of professionals with a proven track record of delivering quality software solutions to clients. Here are a few reasons to choose us: 675+ software developers Expertise in different technologies Strong reputation for quality work Experience working on complex projects for different industry verticalsQ",
      },
      {
        question: "Can I test the services of ValueCoders before committing to long-term engagement?",
        answer:
          "You can test the services of ValueCoders before committing to long-term engagementWe offer free trial to clients worldwide. This is to give our potential customers a risk-free way to try our software development services before committing to long-term engagement.We strongly believe in our products and services and want to allow everyone to experience firsthand the value we can bring.Just fill out a form and connect with our team. We hope you’ll take advantage of this and give us a chance to show you what we can do.",
      },
      {
        question: "How much does outsourcing software development to India cost?",
        answer:
          "The cost of outsourcing software development depends on several factors such as:Size and build of the applicatioFeatures & third-party integrationsAPIsAnimationsLocalizationsBackendCross-platform toolsetsPlatforms, and more.If you share your basic idea, we can provide you with an ETA and estimated cost..",
      },
      {
        question: "I own a digital agency. Do you offer white-label software development services?",
        answer:
          "Yes, we provide all types of white-label software development services, including business-to-business (B2B), business-to-customer (B2C), and software-as-a-service (SaaS).Get in touch with our experts to know more about white-label software services.We believe in complete transparency and collaboration with our clients regarding white-label software development.We understand that every business has unique requirements and needs, and we work closely with our clients to ensure that we meet all their specific needs.We also offer 24/7 support and maintenance services to ensure that our client’s businesses always run smoothly.",
      },
      {
        question: "Do you work with startups and clients on a budget?",
        answer:
          "Yes, we work with startups. Since our establishment, we have worked with thousands of startups across the globe and become the proud partner in their success journey.We have built hundreds of Minimum Viable Products (MVPs) and scaled several startups to new heights.Also, we provide you with initial technology consulting that helps you cut costs & time.Let us know your budget, and our experts will be happy to help you.",
      },
      {
        question: "Is outsourcing software development risky? How do you ensure IP (Intellectual Property) and data protection?",
        answer:
          "Software product development outsourcing is not risky at all if you outsource your project to a reputed company. ValueCoders ensures IP (Intellectual Property) & data protection in the following ways:We sign a Non-Disclosure Agreement (NDA)We meet special industry regulations such as GDPR, HIPAA, etc.We follow secure coding and data protection practicesWe establish firewalls, encryption, and VPN services to prevent online security breachesAll our employees are strictly verified before recruitment",
      },
      {
        question: "I want to outsource software development. What engagement options do you offer?",
        answer:
          "At ValueCoders, we offer a variety of engagement models to suit your specific project requirementsWhether you need a dedicated team of coders for an ongoing project or just a few extra hands for a one-off task, we have an engagement model that will fit your needs.Dedicated Team: Dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project.Staff Augmentation: We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager.Offshore Development Center: We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR.",
      },
      {
        question: "How does the software development outsourcing process work?",
        answer:
          "Software development outsourcing works differently, depending on the project requirements and the company’s needs. But ‌the process typically looks something like this:The company defines the project scope and objectives and finds a trustworthy providerThe provider creates a team of qualified professionals working on the project.The team works closely with the client to ensure all deliverables meet or exceed expectations.Upon completion, the client gives final approval and pays for the work completed.Each software development outsourcing project is unique, so this process will vary somewhat from case to case.It fulfills the requirement of a capable team cost-efficiently, and you get technical support after the experts complete the project..",
      },
      {
        question: "What are the advantages of outsourcing software development to India over Latin America, Philippines or Eastern Europe?",
        answer:
          "Many reasons make India an ideal destination for software outsourcing services. Here are a few reasons that give a competitive edge to India over Latin America, Philippines, or Eastern Europe:Outsourcing software development projects to India is always more cost-effective.You get a large pool of English-speaking skilled workforce in India, which might be a challenge in Eastern Europe and Philippines.Indian companies provide state-of-the-art infrastructural and technological support to the clients outsourcing to them.IT companies in India keep themselves abreast with the latest technological advancements.",
      },
     
    ];
  
    return (
      <div className="bg-white w-full h-full py-20">
        
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl">
            {" "}
            FREQUENTLY ASKED QUESTIONS
          </h1>
         
          <p className="font-Montserrat text-[#848484] text-center  text-base  px-3 lg:px-12 xl:px-56">
          Have questions related to Software Engineering and IT Outsourcing? We have tried to address some of the common concerns of our clients.
          </p>
        </div>
        <div
          className={`w-full max-w-3xl lg:max-w-4xl xl:max-w-4xl mx-auto bg-white rounded-lg  p-6 sm:p-8 md:p-1 `}
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`  transition-colors duration-200  shadow-md py-3 px-3 ${
                  activeIndex === index
                    ? "bg-white rounded-t-lg"
                    : "bg-white rounded-lg"
                }`}
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className={`w-full text-left text-lg md:text-lg font-bold  font-Montserrat flex justify-between items-center focus:outline-none ${
                    activeIndex === index ? "text-black" : "text-black"
                  }`}
                >
                  {faq.question}
                  <span className="text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] w-full duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="bg-white px-4 py-3 text-gray-600  font-Montserrat text-xs md:text-xs mt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
     
  
        
      </div>
    );
  }
  

export default Faq