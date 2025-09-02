// FILE PATH: /components/ProjectsShowcase.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const ProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Heritage Home Restoration",
      location: "Noosa Heads",
      category: "Residential",
      beforeImage:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da02f3f?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description:
        "Complete exterior restoration of a 1920s Queenslander, preserving heritage character while modernizing protection and aesthetics.",
      services: [
        "Exterior Painting",
        "Heritage Restoration",
        "Colour Consulting",
        "Roof Painting",
      ],
      duration: "3 weeks",
    },
    {
      title: "Modern Apartment Complex",
      location: "Maroochydore",
      category: "Body Corporate",
      beforeImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description:
        "120-unit apartment complex refresh including exterior painting, balcony restoration, and common area updates.",
      services: [
        "Body Corporate Painting",
        "Balcony Restoration",
        "Pressure Cleaning",
        "Waterproofing",
      ],
      duration: "8 weeks",
    },
    {
      title: "Commercial Office Tower",
      location: "Caloundra",
      category: "Commercial",
      beforeImage: "/images/projects/commercial-before.jpg",
      afterImage: "/images/projects/commercial-after.jpg",
      description:
        "High-rise office building maintenance using specialized rope access techniques for minimal business disruption.",
      services: [
        "Rope Access",
        "Commercial Painting",
        "Height Safety",
        "Window Cleaning",
      ],
      duration: "6 weeks",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bebas text-gray-900 mb-6 tracking-wide">
            PROJECT
            <span className="text-brand-blue"> TRANSFORMATIONS</span>
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto font-poppins">
            See the dramatic transformations we've delivered across the Sunshine
            Coast
          </p>
        </div>

        {/* Project Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Before/After Images */}
            <div className="relative">
              <div className="aspect-video lg:aspect-square relative">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-poppins">
                  Before
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video lg:aspect-square relative">
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-poppins">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-poppins font-medium">
                    {project.category}
                  </span>
                  <span className="text-brand-grey text-sm font-poppins">
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-bebas text-gray-900 tracking-wide mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 text-brand-grey">
                  <MapPin className="w-4 h-4" />
                  <span className="font-poppins">{project.location}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4 mt-6 lg:mt-0">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 bg-gray-100 hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentProject
                          ? "bg-brand-blue"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 bg-gray-100 hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-brand-grey font-poppins text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Services Used */}
            <div>
              <h4 className="font-bebas text-lg text-gray-900 tracking-wide mb-3">
                SERVICES PROVIDED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-brand-grey font-poppins text-sm px-3 py-1 rounded-full"
                  >
                    {service}
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

export default ProjectsShowcase;
