
"use client";
import { useState } from "react";
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
      {
        question: "Q. Why should I choose ValueCoders for custom web app development?",
        answer:
          "Ans. ValueCoders is a trusted choice for custom web app development because we have expertise, experience, and a focus on client satisfaction. We offer tailored solutions, follow an agile methodology, and provide dedicated teams with efficient collaboration. With our emphasis on quality, cost-effectiveness, and delivering value, we are a reliable partner for successful web app development.",
      },
      {
        question: "Q. Can you help me improve my existing web application?",
        answer:
          "Ans.  Yes, we can help you improve your existing web application. Our team of experienced developers is skilled in enhancing and optimizing web applications.",
      },
      {
        question: "Q. How much does it cost & time it takes to create a custom web application?",
        answer:
          "Ans. The cost & time of custom web application development depends on several factors such as the size and build of the web application, the features & third-party integrations, APIs, animations, localizations, backend, cross-platform development toolsets, platforms, etc. We can provide an ETA and estimated cost if you share your basic idea. Contact us today to get a clear idea about cost and time.",
      },
      {
        question: "Q. What are the types of web solutions does ValueCoders develop??",
        answer:
          "Ans. ValueCoders is a leading software application development company when it comes to custom web development. We use the latest web development technologies and frameworks to deliver scalable, high-performance, and user-friendly web solutions that meet our client’s business goals. Our web solutions include:Custom web development,eCommerce web development,CMS development,Enterprise web development and more.",
      },
      {
        question: "Q. What type of ongoing support do you offer after the website is completed?",
        answer:
          "Ans. We offer ongoing maintenance and support services to ensure our clients’ websites run smoothly. Our team of dedicated developers provides timely updates, bug fixes, and security patches to keep our clients’ websites secure and optimized for performance",
      },
      {
        question: "Q. Can you provide examples of your past work (portfolio, case studies)?",
        answer:
          "Ans. Explore our past work and case studies. We have successfully delivered custom web app solutions across various industries, showcasing our expertise and innovative approaches.",
      },
      {
        question: "Q. How do you approach website design and development?",
        answer:
          "Ans. At ValueCoders, we adopt a comprehensive approach to website design and development. Our process begins with understanding your business goals and target audience. We emphasize user-centric design, responsive layouts, intuitive navigation, and scalable architecture to ensure your website meets both current and future needs.",
      },
      {
        question: "Q. How do you ensure quality assurance and testing?",
        answer:
          "Ans. We maintain rigorous quality assurance standards throughout the development lifecycle. Our dedicated QA team conducts thorough testing, including functionality, usability, performance, security, and compatibility testing. This ensures your web app is robust, reliable, and delivers an exceptional user experience.",
      },
      {
        question: "Q. How will you optimize my website for search engines (SEO)?",
        answer:
          "Ans. We implement SEO best practices to optimize your website for search engines. Our strategies include keyword research, on-page optimization, SEO-friendly coding practices, mobile responsiveness, site speed optimization, and content optimization. This enhances visibility, drives organic traffic, and improves your site’s ranking on search engine results pages (SERPs).",
      },
      {
        question: "Q. What is your communication and collaboration style?",
        answer:
          "Ans. Communication and collaboration are integral to our process. We maintain transparent and open communication channels throughout the project. Our team utilizes project management tools for real-time updates, conducts regular status meetings, and provides comprehensive progress reports. This ensures alignment with your goals, timely feedback incorporation, and successful project delivery.",
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