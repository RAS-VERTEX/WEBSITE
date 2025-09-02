// FILE PATH: /components/InteractiveServicesGrid.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, CheckCircle } from "lucide-react";

const InteractiveServicesGrid = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const serviceSections = [
    {
      title: "Full-service transformations",
      items: [
        "Interior Painting",
        "Exterior Painting",
        "Plastering & Rendering",
        "Roof repair & painting",
        "Colour consulting",
        "Power washing",
        "Waterproofing/water damage repair",
        "Floor & Deck recoating",
        "Height Access",
        "Qualified Project Management",
      ],
    },
    {
      title: "Award-winning, qualified & insured painters",
      items: [
        "Reliable & experienced",
        "Professionally trained & licenced",
        "Friendly & respectful",
        "Compliant & capable",
      ],
    },
    {
      title: "Project Management in every project",
      items: [
        "Dedicated project coordination",
        "Timeline management",
        "Quality control processes",
        "Regular progress updates",
        "Final inspection guarantee",
      ],
    },
    {
      title: "Streamlined digital process",
      items: [
        "Online quote system",
        "Digital project tracking",
        "Photo progress updates",
        "Automated scheduling",
        "Digital invoicing",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Hero Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop"
              alt="Professional painter at work"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Interactive Sections */}
          <div className="space-y-4">
            {serviceSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <h3 className="text-2xl font-bebas text-brand-blue tracking-wide">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-blue transition-transform duration-300 ${
                      expandedSection === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4 grid md:grid-cols-2 gap-3">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-poppins text-brand-grey">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesGrid;
