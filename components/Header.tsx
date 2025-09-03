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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-8">
              <Image
                src="/logo.png"
                alt="Rochele Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Painting Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsPaintingDropdownOpen(true)}
                onMouseLeave={() => setIsPaintingDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200"
              >
                <span>Painting Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isPaintingDropdownOpen && (
                <div
                  onMouseEnter={() => setIsPaintingDropdownOpen(true)}
                  onMouseLeave={() => setIsPaintingDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-4"
                >
                  <div className="px-4 py-2 border-b border-gray-100 mb-2">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="text-sm font-semibold text-purple-900 mb-1">
                        Residential
                      </div>
                      <div className="text-sm font-semibold text-purple-900 mb-1">
                        Body Corporate
                      </div>
                      <div className="text-sm font-semibold text-purple-900">
                        Commercial
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/services/residential"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    Residential Painting
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    Commercial Painting
                  </Link>
                  <Link
                    href="/services/body-corporate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    Body Corporate
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200"
              >
                <span>Company</span>
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-900"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="tel:(07)31319177"
              className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200"
            >
              (07) 3113 9177
            </Link>
            <Link
              href="/quote"
              className="bg-purple-900 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Free Quote →
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
                className="block text-gray-700 hover:text-purple-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Painting Services
              </Link>
              <Link
                href="/company"
                className="block text-gray-700 hover:text-purple-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="tel:(07)31319177"
                  className="block text-gray-700 hover:text-brand-blue font-medium mb-3"
                >
                  (07) 3113 9177
                </Link>
                <Link
                  href="/quote"
                  className="bg-brand-blue hover:bg-primary-700 text-white font-semibold px-6 py-2 rounded-full transition-colors inline-flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Quote →
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
