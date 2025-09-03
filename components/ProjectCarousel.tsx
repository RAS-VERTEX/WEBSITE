// FILE PATH: /components/ProjectCarousel.tsx

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ProjectCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "1920S QUEENSLANDER RESIDENTIAL PAINTING",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "101 DORNOCH TERRACE EXTERIOR PAINTING",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "169 MARY ST COMMERCIAL PAINTING",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "HERITAGE BUILDING RESTORATION",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "MODERN APARTMENT COMPLEX",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "RETAIL SPACE TRANSFORMATION",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    },
  ];

  // Triple for infinite scroll
  const infiniteProjects = [...projects, ...projects, ...projects];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto-reset for infinite scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const maxScroll = carousel.scrollWidth / 3;
      if (carousel.scrollLeft >= maxScroll * 2) {
        carousel.scrollLeft = maxScroll;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = maxScroll;
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-24">
      <div
        ref={carouselRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-8 pb-6"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {infiniteProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-[350px] group select-none"
          >
            {/* Container for image with cutout and label */}
            <div className="relative aspect-[3/2]">
              {/* Image with top-left corner cutout using background-image */}
              <div
                className="relative w-full h-full rounded-2xl bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${project.image})`,
                  clipPath:
                    "polygon(0% 25%, 25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />

              {/* White Label in the cutout area */}
              <div className="absolute top-0 left-0">
                <div className="bg-white rounded-br-2xl px-4 py-2">
                  <p className="font-bebas text-xs tracking-wide text-[#1e293b] leading-none">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drag hint */}
      <div className="text-center mt-16">
        <p className="text-sm text-[#94a3b8] font-bebas tracking-wide">
          DRAG TO EXPLORE MORE PROJECTS
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectCarousel;
