// FILE PATH: /components/Hero.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [activeService, setActiveService] = useState<
    "painting" | "cleaning" | "maintenance" | "waterproofing" | "height-safety"
  >("painting");

  const services = {
    painting: {
      title: "Painting",
      subtitle: "Residential & Commercial",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      description:
        "From heritage Queenslanders to modern commercial buildings, we deliver exceptional painting services across all property types.",
      tags: [
        "INTERIOR PAINTING",
        "EXTERIOR PAINTING",
        "HERITAGE RESTORATION",
        "COMMERCIAL PAINTING",
        "ROOF PAINTING",
        "COLOUR CONSULTING",
        "PLASTERING & RENDERING",
        "PRE-SALE PAINTING",
      ],
    },
    cleaning: {
      title: "Cleaning",
      subtitle: "Residential & Commercial",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      description:
        "Professional pressure washing and surface cleaning for residential homes and commercial properties.",
      tags: [
        "PRESSURE WASHING",
        "BUILDING WASHING",
        "DRIVEWAY CLEANING",
        "ROOF CLEANING",
        "DECK CLEANING",
        "GRAFFITI REMOVAL",
      ],
    },
    maintenance: {
      title: "Maintenance",
      subtitle: "Residential & Commercial",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      description:
        "Comprehensive building maintenance services to keep your property in perfect condition year-round.",
      tags: [
        "BUILDING MAINTENANCE",
        "PREVENTIVE CARE",
        "EMERGENCY REPAIRS",
        "SCHEDULED MAINTENANCE",
        "PROPERTY INSPECTIONS",
      ],
    },
    waterproofing: {
      title: "Waterproofing",
      subtitle: "Residential & Commercial",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description:
        "Expert waterproofing and water damage repair services to protect your property investment.",
      tags: [
        "WATER DAMAGE REPAIR",
        "ROOF WATERPROOFING",
        "BALCONY WATERPROOFING",
        "BASEMENT SEALING",
        "LEAK DETECTION",
      ],
    },
    "height-safety": {
      title: "Height Safety",
      subtitle: "Residential & Commercial",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      description:
        "IRATA-certified rope access specialists for high-rise and difficult-to-reach areas.",
      tags: [
        "ROPE ACCESS",
        "HIGH-RISE MAINTENANCE",
        "IRATA CERTIFIED",
        "HEIGHT INSPECTIONS",
        "SAFETY SYSTEMS",
      ],
    },
  };

  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left Side - Service Navigation */}
          <div className="space-y-8">
            <div className="space-y-1">
              <button
                onClick={() => setActiveService("painting")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "painting"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                PAINTING
              </button>
              <button
                onClick={() => setActiveService("cleaning")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "cleaning"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                CLEANING
              </button>
              <button
                onClick={() => setActiveService("maintenance")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "maintenance"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                MAINTENANCE
              </button>
              <button
                onClick={() => setActiveService("waterproofing")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "waterproofing"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                WATERPROOFING
              </button>
              <button
                onClick={() => setActiveService("height-safety")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeService === "height-safety"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                HEIGHT SAFETY
              </button>
            </div>

            <div className="pt-6">
              <Link
                href="#services"
                className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-all duration-300"
              >
                See Services
              </Link>
            </div>
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            {/* Service Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bebas text-brand-blue tracking-wide mb-2">
                  {services[activeService].title}
                </h1>
                <p className="text-sm text-brand-grey font-poppins font-medium mb-4">
                  {services[activeService].subtitle}
                </p>
                <p className="text-lg text-brand-grey font-poppins leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3">
                {services[activeService].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 border border-gray-200 text-brand-grey font-poppins text-sm px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
