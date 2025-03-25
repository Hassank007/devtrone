"use client"
import { useState, useCallback, useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
      author: "James Kelly",
      position: "Co-founder, Miracle Choice",
      rating: 4.5
    },
    {
      quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
      author: "Judith Mueller",
      position: "Executive Director, Mueller Health Foundation",
      rating: 4.5
    },
    {
      quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
      author: "Kris Bruynson",
      position: "Director, Storloft",
      rating: 4.5
    },
    {
        quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
        author: "James Kelly",
        position: "Co-founder, Miracle Choice",
        rating: 4.5
      },
      {
        quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
        author: "Judith Mueller",
        position: "Executive Director, Mueller Health Foundation",
        rating: 4.5
      },
      {
        quote: "We have worked with ValueCoders for more than a year, and their skilled team has allowed us to scale up during certain projects.",
        author: "Kris Bruynson",
        position: "Director, Storloft",
        rating: 4.5
      }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Add event listener when carousel is initialized
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      // Initial selection
      onSelect();
    }
  }, [emblaApi, onSelect]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`star-${i}`} className="text-yellow-400 inline-block" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalf key="half-star" className="text-yellow-400 inline-block" />
      );
    }

    return stars;
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            What Our Clients Have to Say About Us
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            We are grateful for our clients' trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us:
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.333%] px-4"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg h-[320px] flex flex-col justify-between">
                  {/* Quote */}
                  <blockquote className="text-center">
                    <p className="text-[#666666] text-lg leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  <div>
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-xl text-[#1A1A1A] mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-[#666666]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? 'bg-[#1A1A1A] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 