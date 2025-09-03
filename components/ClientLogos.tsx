// FILE PATH: /components/ClientLogos.tsx

"use client";

import React from "react";

const ClientLogos = () => {
  // Dummy company logos using SVG
  const logos = [
    {
      name: "BlueCare",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 120 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="4" fill="#0195FF" />
          <text
            x="40"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            BlueCare
          </text>
        </svg>
      ),
    },
    {
      name: "ClubLime",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 120 40" fill="none">
          <circle cx="20" cy="20" r="10" fill="#0195FF" />
          <text
            x="40"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            CLUBLIME
          </text>
        </svg>
      ),
    },
    {
      name: "Bolton Clarke",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 140 40" fill="none">
          <path d="M10 10 L25 10 L20 25 L10 25 Z" fill="#011955" />
          <text
            x="35"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            Bolton Clarke
          </text>
        </svg>
      ),
    },
    {
      name: "Bunnings",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 120 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="2" fill="#0195FF" />
          <text
            x="40"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            BUNNINGS
          </text>
        </svg>
      ),
    },
    {
      name: "Eggers Automotive",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 150 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="8"
            stroke="#0195FF"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="40"
            y="25"
            fontSize="12"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            eggers automotive
          </text>
        </svg>
      ),
    },
    {
      name: "ACU",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 80 40" fill="none">
          <polygon points="15,10 25,10 20,20 15,20" fill="#011955" />
          <text
            x="35"
            y="25"
            fontSize="16"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            ACU
          </text>
        </svg>
      ),
    },
    {
      name: "Carlile Hotel",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 130 40" fill="none">
          <rect x="10" y="12" width="16" height="16" rx="8" fill="#0195FF" />
          <text
            x="35"
            y="25"
            fontSize="12"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            THE CARLILE
          </text>
        </svg>
      ),
    },
    {
      name: "C&K Childcare",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 140 40" fill="none">
          <circle cx="15" cy="20" r="6" fill="#0195FF" />
          <circle cx="25" cy="20" r="6" fill="#4DB8FF" />
          <text
            x="40"
            y="25"
            fontSize="10"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            C&K Childcare
          </text>
        </svg>
      ),
    },
    {
      name: "Guardian",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 120 40" fill="none">
          <path d="M15 10 L25 15 L20 25 L10 20 Z" fill="#011955" />
          <text
            x="35"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            Guardian
          </text>
        </svg>
      ),
    },
    {
      name: "NUDOC",
      logo: (
        <svg className="h-12 w-auto" viewBox="0 0 100 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="10" fill="#0195FF" />
          <text
            x="40"
            y="25"
            fontSize="14"
            fontWeight="bold"
            fill="#011955"
            fontFamily="Arial"
          >
            NUDOC
          </text>
        </svg>
      ),
    },
  ];

  // Double the logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="font-bebas text-2xl tracking-wide text-[#475569] mb-4">
            OUR PARTNERS:
          </h3>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {duplicatedLogos.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
