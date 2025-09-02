// FILE PATH: /components/ServiceCategories.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState<
    "residential" | "commercial" | "body-corporate"
  >("residential");

  const categories = {
    residential: {
      title: "Residential",
      subtitle:
        "From apartments to Queenslander homes, we've got the experience and know-how to complete any house painting job.",
      image: "/images/categories/residential-hero.jpg",
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
    "body-corporate": {
      title: "Body Corporate",
      subtitle:
        "Professional body corporate painting and maintenance services with minimal disruption to residents.",
      image: "/images/categories/body-corporate-hero.jpg",
      tags: [
        "BUILDING MAINTENANCE",
        "EXTERIOR REFRESH",
        "COMMON AREA PAINTING",
        "BALCONY RESTORATION",
        "ROOF MAINTENANCE",
        "PRESSURE CLEANING",
        "WATERPROOFING",
        "SCHEDULED MAINTENANCE",
        "EMERGENCY REPAIRS",
        "COMPLIANCE STANDARDS",
      ],
    },
    commercial: {
      title: "Commercial",
      subtitle:
        "Keep your business looking professional with our commercial painting and maintenance services.",
      image: "/images/categories/commercial-hero.jpg",
      tags: [
        "OFFICE PAINTING",
        "RETAIL SPACES",
        "INDUSTRIAL COATING",
        "WAREHOUSE MAINTENANCE",
        "RESTAURANT PAINTING",
        "MEDICAL FACILITIES",
        "EDUCATION FACILITIES",
        "HOSPITALITY VENUES",
        "EMERGENCY SERVICES",
        "MINIMAL DOWNTIME",
      ],
    },
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Category Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 rounded-full p-1">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() =>
                  setActiveCategory(key as keyof typeof categories)
                }
                className={`px-8 py-4 rounded-full font-bebas text-lg tracking-wide transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-brand-blue text-white shadow-lg"
                    : "text-brand-grey hover:text-brand-blue"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bebas text-brand-blue tracking-wide mb-4">
                {categories[activeCategory].title}
              </h2>
              <p className="text-xl text-brand-grey font-poppins leading-relaxed">
                {categories[activeCategory].subtitle}
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              {categories[activeCategory].tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-200 text-brand-grey font-poppins text-sm px-4 py-2 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span className="font-poppins font-semibold">See Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={categories[activeCategory].image}
              alt={`${categories[activeCategory].title} painting services`}
              fill
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
