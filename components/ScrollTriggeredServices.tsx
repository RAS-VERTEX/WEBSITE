// FILE PATH: /components/ScrollTriggeredServices.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ScrollTriggeredServices = () => {
  const [activeService, setActiveService] = useState("painting");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const services = [
    {
      id: "painting",
      title: "PAINTING",
      subtitle: "Residential & Commercial",
    },
    {
      id: "cleaning",
      title: "CLEANING",
      subtitle: "Residential & Commercial",
    },
    {
      id: "maintenance",
      title: "MAINTENANCE",
      subtitle: "Residential & Commercial",
    },
    {
      id: "waterproofing",
      title: "WATERPROOFING",
      subtitle: "Residential & Commercial",
    },
    {
      id: "height-safety",
      title: "HEIGHT SAFETY",
      subtitle: "Residential & Commercial",
    },
  ];

  const serviceContent = {
    painting: {
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      title: "Painting Services",
      description:
        "From heritage Queenslanders to modern commercial buildings, we deliver exceptional painting services across all property types with 25+ years of expertise.",
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
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      title: "Professional Cleaning",
      description:
        "High-pressure cleaning and surface restoration for residential homes and commercial properties using professional-grade equipment.",
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
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      title: "Building Maintenance",
      description:
        "Comprehensive maintenance services to protect and preserve your property investment with scheduled and emergency response options.",
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
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Service Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className="text-center group"
              >
                <div
                  className={`text-2xl lg:text-3xl font-bebas tracking-wider transition-all duration-300 ${
                    activeService === service.id
                      ? "text-brand-blue"
                      : "text-gray-300 hover:text-brand-grey"
                  }`}
                >
                  {service.title}
                </div>
                <div className="text-xs text-brand-grey font-poppins font-medium mt-1">
                  {service.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Service Sections */}
      <div className="space-y-0">
        {Object.entries(serviceContent).map(([serviceId, content]) => (
          <section
            key={serviceId}
            ref={(el) => {
              sectionsRef.current[serviceId] = el;
            }}
            className="min-h-screen flex items-center py-20"
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bebas text-brand-blue tracking-wide mb-4">
                      {content.title}
                    </h2>
                    <p className="text-lg text-brand-grey font-poppins leading-relaxed max-w-lg">
                      {content.description}
                    </p>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-3">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 border border-gray-200 text-brand-grey font-poppins text-sm px-4 py-2 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollTriggeredServices;
