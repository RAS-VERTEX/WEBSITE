// FILE PATH: /components/ServicesSection.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("commercial");

  const services = {
    commercial: {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      title: "Commercial Painting",
      description:
        "Need a professional painter who can do a fantastic job on your commercial property? Our painters are safety inducted and are also nationally accredited to work at heights.",
      tags: [
        "HIGH ACCESS PAINTING",
        "OFFICE PAINTING",
        "MAINTENANCE",
        "INDUSTRIAL PAINTING",
        "FLOOR AND DECK PAINTING",
        "POWER WASHING",
        "PLASTERING & RENDERING",
        "ROOF PAINTING",
        "SCHOOL PAINTING",
        "WATER DAMAGE REPAIR",
        "COLOUR CONSULTING",
        "EXTERIOR PAINTING",
        "INTERIOR PAINTING",
      ],
    },
    residential: {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      title: "Residential Painting",
      description:
        "From apartments to Queenslander homes, we've got the experience and know-how to complete any house painting job.",
      tags: [
        "LUXURY HOUSE PAINTING",
        "PLASTERING & RENDERING",
        "WATER DAMAGE REPAIR",
        "ROOF PAINTING",
        "POWER WASHING",
        "FLOOR AND DECK PAINTING",
        "RENTAL REFRESH AND TOUCH-UPS",
        "PRE-SALE PAINTING",
        "COLOUR CONSULTING",
        "HERITAGE HOME PAINTING",
        "EXTERIOR PAINTING",
        "INTERIOR PAINTING",
        "COLORBOND ROOF PAINTING",
        "METAL ROOF PAINTING",
        "TILED ROOF PAINTING",
      ],
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Service Navigation */}
          <div className="space-y-8">
            <div className="space-y-2">
              <button
                onClick={() => setActiveService("residential")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "residential"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                RESIDENTIAL
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "commercial"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                BODY CORPORATE
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "commercial"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                COMMERCIAL
              </button>
            </div>

            <div className="pt-4">
              <button className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-all duration-300">
                See Services
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={services[activeService as keyof typeof services].image}
                alt={services[activeService as keyof typeof services].title}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            {/* Service Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bebas text-brand-blue tracking-wide mb-4">
                  {services[activeService as keyof typeof services].title}
                </h2>
                <p className="text-lg text-brand-grey font-poppins leading-relaxed">
                  {services[activeService as keyof typeof services].description}
                </p>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3">
                {services[activeService as keyof typeof services].tags.map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 border border-gray-200 text-brand-grey font-poppins text-sm px-4 py-2 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
