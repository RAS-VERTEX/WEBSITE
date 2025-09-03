// FILE PATH: /components/ServicesToggle.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesToggle = () => {
  const [activeService, setActiveService] = useState<
    "residential" | "commercial"
  >("residential");

  const services = {
    residential: {
      title: "Let's Get it Done.",
      subtitle: "Your place + our painters =",
      description: "the transformation of your dreams",
      buttonText: "Book a quote →",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tagline:
        "RAS-VERTEX. RESIDENTIAL & HOUSE PAINTERS YOU CAN TRUST\nYOUR PROMPT & PROFESSIONAL PAINTERS SINCE 1999",
    },
    commercial: {
      title: "Professional Results.",
      subtitle: "Your business + our expertise =",
      description: "commercial painting excellence",
      buttonText: "Get commercial quote →",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      tagline:
        "RAS-VERTEX. COMMERCIAL PAINTERS YOU CAN TRUST\nYOUR PROFESSIONAL PAINTING PARTNERS SINCE 1999",
    },
  };

  const currentService = services[activeService];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="w-full px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Service Toggle Buttons */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveService("residential")}
                className={`px-6 py-3 font-bebas text-lg tracking-wide rounded-full transition-all duration-300 ${
                  activeService === "residential"
                    ? "bg-brand-blue text-white"
                    : "bg-white text-gray-600 hover:text-brand-blue border border-gray-200"
                }`}
              >
                RESIDENTIAL
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`px-6 py-3 font-bebas text-lg tracking-wide rounded-full transition-all duration-300 ${
                  activeService === "commercial"
                    ? "bg-brand-blue text-white"
                    : "bg-white text-gray-600 hover:text-brand-blue border border-gray-200"
                }`}
              >
                COMMERCIAL
              </button>
            </div>

            {/* Small tagline */}
            <p className="text-sm text-gray-600 font-bebas tracking-wide uppercase whitespace-pre-line">
              {currentService.tagline}
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-bebas text-brand-blue tracking-wide leading-tight">
              {currentService.title}
            </h2>

            {/* Subtitle and Description */}
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-brand-blue font-bebas tracking-wide">
                {currentService.subtitle}
              </p>
              <p className="text-xl lg:text-2xl text-brand-blue font-bebas tracking-wide italic">
                {currentService.description}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/quote"
              className="inline-block bg-brand-blue hover:bg-primary-700 text-white font-bebas text-lg tracking-wide px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {currentService.buttonText}
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={currentService.image}
                alt={`${activeService} painting services`}
                fill
                className="object-cover transition-all duration-500"
                key={activeService} // Force re-render on service change
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesToggle;
