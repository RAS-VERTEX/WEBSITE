// FILE PATH: /components/TestimonialsCarousel.tsx

"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Stuart Logue",
      initial: "S",
      content:
        "We are really impressed with the RAS-VERTEX team, from our first interaction to the final inspection they have been amazing. We had a very short time frame, but they managed to complete the task in advance of our requested completion date, can't thank them enough. Will have them back to paint the house exterior in the future.",
      rating: 5,
    },
    {
      name: "Andrea Steinecker",
      initial: "A",
      content:
        "Our Body Corporate Committee engaged RAS-VERTEX to repair and repaint our complex of 7 town houses. This was a major project which involved crack and render repairs and repaint of the entire complex including the roof, fences and retaining walls. From start to finish RAS-VERTEX was friendly, professional and organised. Estimate and Contractual documentation was easy to understand. If we had any questions they were always available and happy to discuss.",
      rating: 5,
    },
    {
      name: "K.J. Reid",
      initial: "K",
      content:
        "Recommend RAS-VERTEX to anyone looking for a quality painter who can produce superior work at a competitive price and complete projects to time. Very professional and courteous. All the team members were very pleasant to date one another. No mess, cleaned up well and we were extremely happy with our customer service experience. Great value for money and we have received many questions.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-brand-grey font-poppins text-sm font-medium mb-2 tracking-wide uppercase">
                PAINTING CONTRACTORS, SUNSHINE COAST & BEYOND
              </p>
              <h2 className="text-4xl lg:text-5xl font-bebas text-brand-blue tracking-wide">
                What Our Customers Say:
              </h2>
            </div>

            {/* Rating Display */}
            <div className="text-right space-y-4">
              <div>
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <span className="text-2xl font-bold text-brand-blue">G</span>
                  <span className="text-lg font-bold text-brand-grey">4.8</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-brand-grey font-poppins">
                  Based on 570 reviews
                </p>
                <p className="text-xs text-brand-grey font-poppins font-medium">
                  Google Rating
                </p>
              </div>

              <div>
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <span className="text-2xl font-bold text-blue-600">f</span>
                  <span className="text-lg font-bold text-brand-grey">4.6</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-brand-grey font-poppins">
                  Based on 71 reviews
                </p>
                <p className="text-xs text-brand-grey font-poppins font-medium">
                  Facebook Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl transition-all duration-500 ${
                index === currentIndex
                  ? "shadow-xl border-2 border-brand-blue/10 scale-105"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Quote */}
              <p className="text-brand-grey font-poppins leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center">
                  <span className="font-bebas text-lg tracking-wide">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <div className="font-bebas text-lg text-gray-900 tracking-wide">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-gray-100 hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-brand-blue"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-gray-100 hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
