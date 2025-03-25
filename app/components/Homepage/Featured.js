'use client';

import Image from 'next/image';

const articles = [
  {
    title: 'Top 10 LLM Development Companies in 2025',
    description: 'The rise of Large Language Models (LLMs) has revolutionized how businesses operate. With advanced LLM solutions, data analysis, and customer...',
    image: '/images/llm.jpg',
    category: 'AI & ML',
    author: 'Roy Malhotra',
    authorImage: '/images/roy.jpg',
  },
  {
    title: 'Will Artificial General Intelligence Redefine the Tech Landscape?',
    description: 'According to Rootanalysis, the Artificial General Intelligence market is expected to reach over $116 billion by 2035, with a CAGR...',
    image: '/images/agi.jpg',
    category: 'AI & ML',
    author: 'Roy Malhotra',
    authorImage: '/images/roy.jpg',
  },
  {
    title: 'Why AI Deepfakes are a Threat to Facial Biometric Authentication?',
    description: 'In 2023, a shocking incident saw hackers using AI-generated Deepfakes to bypass a significant bank’s facial recognition security. This led...',
    image: '/images/deepfake.jpg',
    category: 'AI & ML',
    author: 'Roy Malhotra',
    authorImage: '/images/roy.jpg',
  },
];

export default function FeaturedInsights() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-left">Featured Insights</h2>
            <p className="text-gray-600 mt-2 text-left md:pr-20">
              From latest happenings in the tech world to detailed guides on how to turn your vision into an amazing product, we are here to guide you at every step.
            </p>
          </div>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Over 1000 articles on tech and talent →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image src={article.image} alt={article.title} width={400} height={250} className="w-full h-56 object-cover" />
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-md">{article.category}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{article.description}</p>
                <div className="flex items-center mt-4">
                  <Image src={article.authorImage} alt={article.author} width={30} height={30} className="w-8 h-8 rounded-full" />
                  <span className="ml-2 text-sm text-gray-700">{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
