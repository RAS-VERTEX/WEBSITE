// FILE PATH: /components/ServicesCard.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Single Yellow Card */}
        <div className="bg-[#fef3c7] rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Side - Content */}
            <div className="p-12 lg:p-16 space-y-6">
              {/* Small tagline */}
              <p className="text-sm text-[#1e293b] font-sans tracking-wide uppercase">
                RAS-VERTEX. MAINTENANCE SOLUTIONS YOU CAN TRUST
                <br />
                YOUR PROMPT & PROFESSIONAL TEAM SINCE 1999
              </p>

              {/* Main Heading */}
              <h2 className="text-6xl lg:text-7xl font-bebas tracking-wide leading-tight text-[#011955]">
                LET'S GET IT DONE.
              </h2>

              {/* Subtitle and Description */}
              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl text-[#011955] font-bebas tracking-wide">
                  YOUR PROPERTY + OUR EXPERTISE =
                </p>
                <p className="text-2xl lg:text-3xl text-[#011955] font-bebas tracking-wide italic">
                  THE TRANSFORMATION YOU NEED
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="inline-block bg-[#011955] hover:bg-[#0195FF] text-white font-bebas text-lg tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                BOOK A QUOTE →
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] m-8">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="RAS-VERTEX maintenance services"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
