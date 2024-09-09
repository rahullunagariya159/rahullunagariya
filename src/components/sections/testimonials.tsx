'use client';  // Add this to mark the component as a Client Component

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container id="testimonials" className="bg-gray-50 py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </div>

      <div className="relative mt-8">
        {/* Carousel */}
        <div className="flex items-center justify-center overflow-hidden">
          <div
            className="flex w-full transition-transform duration-700"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {TESTIMONIALS?.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: '100%' }}
              >
                <TestimonialDetails {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-gray-800 p-2 rounded-full"
          onClick={handlePrevClick}
        >
          &#9664;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-gray-800 p-2 rounded-full"
          onClick={handleNextClick}
        >
          &#9654;
        </button>
      </div>

      {/* Slider indicators */}
      <div className="mt-6 flex justify-center space-x-2">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
