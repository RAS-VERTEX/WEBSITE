"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ScrollServices = () => {
  const [activeService, setActiveService] = useState("painting");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const services = [
    { id: "painting", title: "PAINTING" },
    { id: "cleaning", title: "CLEANING" },
    { id: "maintenance", title: "MAINTENANCE" },
    { id: "waterproofing", title: "WATERPROOFING" },
    { id: "height-safety", title: "HEIGHT SAFETY" },
  ];

  const serviceContent = {
    painting: {
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      title: "Professional Painting Services",
      description:
        "Expert interior and exterior painting for residential, commercial, and body corporate properties across the Sunshine Coast.",
      tags: [
        "INTERIOR PAINTING",
        "EXTERIOR PAINTING",
        "COLOUR CONSULTING",
        "HERITAGE RESTORATION",
        "ROOF PAINTING",
        "SPRAY PAINTING",
      ],
    },
    cleaning: {
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      title: "Pressure Cleaning Services",
      description:
        "Professional pressure cleaning and surface preparation services to restore and maintain your property's appearance.",
      tags: [
        "PRESSURE WASHING",
        "SURFACE PREPARATION",
        "MOULD REMOVAL",
        "CONCRETE CLEANING",
        "BUILDING WASHING",
        "GRAFFITI REMOVAL",
      ],
    },
    maintenance: {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      title: "Property Maintenance",
      description:
        "Comprehensive maintenance services to keep your property in perfect condition year-round.",
      tags: [
        "BUILDING MAINTENANCE",
        "PREVENTIVE CARE",
        "EMERGENCY REPAIRS",
        "SCHEDULED MAINTENANCE",
        "PROPERTY INSPECTIONS",
        "COMPLIANCE CHECKS",
      ],
    },
    waterproofing: {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      title: "Waterproofing Services",
      description:
        "Expert waterproofing solutions and water damage repair to protect your property from the Queensland climate.",
      tags: [
        "WATER DAMAGE REPAIR",
        "ROOF WATERPROOFING",
        "BALCONY WATERPROOFING",
        "BASEMENT SEALING",
        "LEAK DETECTION",
        "MOISTURE CONTROL",
      ],
    },
    "height-safety": {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      title: "Height Safety & Rope Access",
      description:
        "IRATA-certified rope access specialists providing safe, efficient access to difficult-to-reach areas on high-rise buildings.",
      tags: [
        "ROPE ACCESS",
        "HIGH-RISE MAINTENANCE",
        "IRATA CERTIFIED",
        "HEIGHT INSPECTIONS",
        "SAFETY SYSTEMS",
        "ABSEILING SERVICES",
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const serviceId of Object.keys(serviceContent)) {
        const element = sectionsRef.current[serviceId];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveService(serviceId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (serviceId: string) => {
    const element = sectionsRef.current[serviceId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen">
      <div className="flex min-h-screen">
        {/* Fixed Left Navigation - 50% */}
        <div className="w-1/2 sticky top-0 h-screen bg-white flex items-center justify-center">
          <div className="space-y-1 px-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className="block text-left group w-full"
              >
                <div
                  className={`text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                    activeService === service.id
                      ? "text-brand-blue"
                      : "text-gray-300 hover:text-brand-grey"
                  }`}
                >
                  {service.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Right Content - 50% */}
        <div className="w-1/2">
          {Object.entries(serviceContent).map(([serviceId, content]) => (
            <div
              key={serviceId}
              ref={(el) => {
                sectionsRef.current[serviceId] = el;
              }}
              className="min-h-screen flex items-center p-12"
            >
              <div className="w-full space-y-8">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bebas text-brand-blue tracking-wide mb-4">
                      {content.title}
                    </h2>
                    <p className="text-lg text-brand-grey leading-relaxed">
                      {content.description}
                    </p>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 border border-gray-200 text-brand-grey text-xs px-3 py-1 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollServices;
