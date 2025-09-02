// FILE PATH: /components/Hero.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    "residential"
  );

  const content = {
    residential: {
      title: "Residential",
      subtitle: "Body Corporate",
      tertiaryTitle: "Commercial",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center",
      description:
        "From apartments to Queenslander homes, we've got the experience and know-how to complete any house painting job.",
    },
    commercial: {
      title: "Commercial",
      subtitle: "Body Corporate",
      tertiaryTitle: "Residential",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center",
      description:
        "Need a professional painter who can do a fantastic job on your commercial property? Our painters are safety inducted and nationally accredited to work at heights.",
    },
  };

  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Service Type Navigation */}
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("residential")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeTab === "residential"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                RESIDENTIAL
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeTab === "commercial"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                BODY CORPORATE
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`block text-left text-4xl lg:text-5xl font-bebas tracking-wider transition-all duration-300 ${
                  activeTab === "commercial"
                    ? "text-brand-blue"
                    : "text-gray-300 hover:text-brand-grey"
                }`}
              >
                COMMERCIAL
              </button>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="#services"
                className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-all duration-300 inline-block"
              >
                See Services
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Content */}
          <div className="space-y-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={content[activeTab].image}
                alt={`${activeTab} painting services`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            {/* Current Section Info */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bebas text-brand-blue tracking-wide">
                {activeTab === "residential"
                  ? "Residential Painting"
                  : "Commercial Painting"}
              </h1>
              <p className="text-lg text-brand-grey font-poppins leading-relaxed">
                {content[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
