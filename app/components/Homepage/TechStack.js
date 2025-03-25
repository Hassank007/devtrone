"use client"; // If you're using Next.js App Router and need client-side features
import Image from "next/image";

export default function TechStacks() {
  // List of tech stack items
  const techStacks = [
    { name: "PHP", src: "/icons/php.png" },
    { name: "Golang", src: "/icons/golang.png" },
    { name: "JavaScript", src: "/icons/javascript.png" },
    { name: "Ruby", src: "/icons/ruby.png" },
    { name: "Node", src: "/icons/node.png" },
    { name: "Laravel", src: "/icons/laravel.png" },
    { name: "React", src: "/icons/react.png" },
    { name: "Vue.js", src: "/icons/vue.png" },
    { name: "Django", src: "/icons/dj.png" },
  ];

  return (
    <section className="w-full py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stacks We Have</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Get what you are looking for to fulfill your software development
          and outsourcing needs at ValueCoders. We have expertise in all
          the latest technologies &amp; platforms.
        </p>

        {/* Marquee Container */}
        <div className="overflow-hidden relative w-full">
          {/* 
            We repeat the list of icons twice for a seamless loop.
            Use `space-x-8` (or any other value) for spacing between divs.
          */}
          <div className="flex animate-marquee whitespace-nowrap space-x-8 space-y-10">
            {techStacks.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center justify-center w-24"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="mx-auto mb-2"
                />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
            {techStacks.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center w-32"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="mx-auto mb-2"
                />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link or CTA */}
        <div className="mt-20">
          <a
            href="#"
            className="inline-block text-sm md:text-base text-blue-200 hover:text-white border-b border-blue-200 hover:border-white transition-colors"
          >
            Explore IT Technologies &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
