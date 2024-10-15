"use client"; // Add this to mark the component as a Client Component

import { useState } from "react";
import { SERVICES, TESTIMONIALS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TestimonialDetails from "@/components/data-display/testimonial-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import ServicesDetails from "../data-display/services-details";

const ServicesSection = () => {
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
          <Tag label="Services" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What Can I Do For You?
        </Typography>

        <Typography variant="body2" className="max-w-xl text-center">
          I specialize in crafting robust, user-friendly web and mobile
          applications tailored to meet your unique needs.
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
            {SERVICES?.map((services, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: "100%" }}
              >
                <ServicesDetails {...services} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-transparent p-2 text-gray-800"
          onClick={handlePrevClick}
        >
          &#9664;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-transparent p-2 text-gray-800"
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
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
