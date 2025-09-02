// FILE PATH: /components/ServicesAccordion.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, CheckCircle } from "lucide-react";

interface ServiceSection {
  title: string;
  description: string;
  services: string[];
  image: string;
  features: string[];
}

const ServicesAccordion = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const serviceSections: ServiceSection[] = [
    {
      title: "Full-service transformations",
      description:
        "Complete property transformation services from interior to exterior, roof to foundation.",
      services: [
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
      image: "/images/services/full-service.jpg",
      features: [
        "Complete project management",
        "Quality materials & finishes",
        "Minimal disruption guarantee",
        "Post-completion care",
      ],
    },
    {
      title: "Award-winning, qualified & insured painters",
      description:
        "Our painters are experienced professionals backed by expert customer service and project management teams.",
      services: [
        "Reliable & experienced",
        "Professionally trained & licenced",
        "Friendly & respectful",
        "Compliant & capable",
      ],
      image: "/images/services/qualified-painters.jpg",
      features: [
        "IRATA certified specialists",
        "Fully insured & licensed",
        "Ongoing training programs",
        "Quality assurance processes",
      ],
    },
    {
      title: "Project Management in every project",
      description:
        "Dedicated project management ensures your project runs smoothly from start to finish.",
      services: [
        "Initial consultation & planning",
        "Timeline management",
        "Quality control checkpoints",
        "Regular progress updates",
        "Final inspection & handover",
      ],
      image: "/images/services/project-management.jpg",
      features: [
        "Dedicated project manager",
        "Real-time progress tracking",
        "Quality control standards",
        "Client communication protocols",
      ],
    },
    {
      title: "Streamlined digital process",
      description:
        "Modern digital workflows for quotes, scheduling, and project tracking.",
      services: [
        "Online quote requests",
        "Digital project tracking",
        "Photo progress updates",
        "Digital invoicing",
        "Customer portal access",
      ],
      image: "/images/services/digital-process.jpg",
      features: [
        "Instant quote responses",
        "Real-time project updates",
        "Digital documentation",
        "Seamless communication",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={serviceSections[activeSection].image}
              alt={serviceSections[activeSection].title}
              fill
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {serviceSections.map((section, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  activeSection === index ? "shadow-xl" : "hover:shadow-xl"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveSection(activeSection === index ? -1 : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <h3 className="text-2xl font-bebas text-brand-blue tracking-wide mb-2">
                      {section.title}
                    </h3>
                    <p className="text-brand-grey font-poppins">
                      {section.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-blue transition-transform duration-300 ${
                      activeSection === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeSection === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bebas text-lg text-gray-900 tracking-wide mb-3">
                          SERVICES INCLUDED
                        </h4>
                        <ul className="space-y-2">
                          {section.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-poppins text-brand-grey">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bebas text-lg text-gray-900 tracking-wide mb-3">
                          KEY FEATURES
                        </h4>
                        <ul className="space-y-2">
                          {section.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                              <span className="text-sm font-poppins text-brand-grey">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default ServicesAccordion;
