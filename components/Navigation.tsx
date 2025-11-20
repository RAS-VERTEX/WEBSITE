// FILE PATH: /components/Navigation.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaintingDropdownOpen, setIsPaintingDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-24 max-w-none">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="RAS-VERTEX Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            {/* Painting Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsPaintingDropdownOpen(true)}
                onMouseLeave={() => setIsPaintingDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-600 hover:text-brand-blue font-bebas text-2xl tracking-wide transition-colors duration-200"
              >
                <span>OUR SERVICES</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isPaintingDropdownOpen && (
                <div
                  onMouseEnter={() => setIsPaintingDropdownOpen(true)}
                  onMouseLeave={() => setIsPaintingDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-4"
                >
                  <Link
                    href="/services/residential"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    RESIDENTIAL PAINTING
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    COMMERCIAL PAINTING
                  </Link>
                  <Link
                    href="/services/body-corporate"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    BODY CORPORATE
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-600 hover:text-brand-blue font-bebas text-2xlg tracking-wide transition-colors duration-200"
              >
                <span>COMPANY</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Company Dropdown Menu */}
              {isCompanyDropdownOpen && (
                <div
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                >
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    OUR TEAM
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors font-bebas tracking-wide"
                  >
                    TESTIMONIALS
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Contact & CTA - Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="tel:(07)31319177"
              className="text-gray-600 hover:text-brand-blue font-bebas text-lg tracking-wide transition-colors duration-200"
            >
              (07) 3113 9177
            </Link>
            <Link
              href="/quote"
              className="bg-brand-blue hover:bg-primary-700 text-white font-bebas text-lg tracking-wide px-6 py-3 rounded-full transition-all duration-200"
            >
              FREE QUOTE →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              <Link
                href="/services"
                className="block text-gray-700 hover:text-brand-blue font-bebas text-lg tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PAINTING SERVICES
              </Link>
              <Link
                href="/company"
                className="block text-gray-700 hover:text-brand-blue font-bebas text-lg tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COMPANY
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="tel:(07)31319177"
                  className="block text-gray-700 hover:text-brand-blue font-bebas text-lg tracking-wide mb-3"
                >
                  (07) 3113 9177
                </Link>
                <Link
                  href="/quote"
                  className="bg-brand-blue hover:bg-primary-700 text-white font-bebas text-lg tracking-wide px-6 py-2 rounded-full transition-colors inline-flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FREE QUOTE →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
