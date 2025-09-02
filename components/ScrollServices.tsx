// FILE PATH: /components/ScrollServices.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ScrollServices = () => {
  const [activeSection, setActiveSection] = useState("residential");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections = [
    {
      id: "residential",
      navTitle: "Residential",
      title: "Residential Painting",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
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
    {
      id: "body-corporate",
      navTitle: "Body Corporate",
      title: "Body Corporate Painting",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description:
        "Renowned for prompt & professional painting services. Strata & body corporate painting is a field that we excel at. We've completed numerous interior and exterior painting projects on behalf of body corporates throughout SEQ.",
      tags: [
        "HIGH ACCESS PAINTING",
        "OFFICE PAINTING",
        "MAINTENANCE",
        "FLOOR AND DECK PAINTING",
        "POWER WASHING",
        "PLASTERING & RENDERING",
        "ROOF PAINTING",
        "SCHOOL PAINTING",
        "WATER DAMAGE REPAIR",
        "COLOUR CONSULTING",
      ],
    },
    {
      id: "commercial",
      navTitle: "Commercial",
      title: "Commercial Painting",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Left Navigation */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-md rounded-r-2xl border border-l-0 border-gray-200 p-8 space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-left text-xl font-bebas tracking-wider transition-all duration-300 ${
                activeSection === section.id
                  ? "text-brand-blue"
                  : "text-gray-400 hover:text-brand-grey"
              }`}
            >
              {section.navTitle}
            </button>
          ))}

          <div className="pt-6">
            <button className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-medium px-6 py-3 rounded-lg transition-all duration-300">
              See Services
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Content Sections */}
      <div className="pl-0 lg:pl-64">
        {sections.map((section) => (
          <section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="min-h-screen flex items-center py-20"
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-1 gap-12 max-w-5xl">
                {/* Image with rounded corners like Rochele */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bebas text-brand-blue tracking-wide mb-4">
                      {section.title}
                    </h2>
                    <p className="text-lg text-brand-grey font-poppins leading-relaxed max-w-3xl">
                      {section.description}
                    </p>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-3">
                    {section.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 border border-gray-200 text-brand-grey font-poppins text-sm px-4 py-2 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollServices;
