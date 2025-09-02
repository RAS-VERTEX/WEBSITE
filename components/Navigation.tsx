// FILE PATH: /components/Navigation.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-primary-800 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bebas text-lg tracking-wider">
                RV
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bebas tracking-wide text-gray-900">
                RAS-VERTEX
              </h1>
              <p className="text-xs text-brand-blue font-poppins font-medium">
                Sunshine Coast Specialists
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                href="#services"
                className={`font-poppins font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-grey hover:text-brand-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Painting Services
              </Link>
              <Link
                href="#projects"
                className={`font-poppins font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-grey hover:text-brand-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Projects
              </Link>
              <Link
                href="#about"
                className={`font-poppins font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-grey hover:text-brand-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Company
              </Link>
              <Link
                href="#contact"
                className={`font-poppins font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-grey hover:text-brand-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <Link
                href="tel:0731306043"
                className={`font-poppins font-medium transition-colors duration-200 ${
                  isScrolled ? "text-brand-blue" : "text-white"
                }`}
              >
                (07) 3130 6043
              </Link>
              <Link
                href="#quote"
                className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <div className="p-6 space-y-4">
              <Link
                href="#services"
                className="block text-brand-grey hover:text-brand-blue font-poppins font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Painting Services
              </Link>
              <Link
                href="#projects"
                className="block text-brand-grey hover:text-brand-blue font-poppins font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="block text-brand-grey hover:text-brand-blue font-poppins font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="#contact"
                className="block text-brand-grey hover:text-brand-blue font-poppins font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="tel:0731306043"
                  className="block text-brand-blue font-poppins font-medium py-2"
                >
                  (07) 3130 6043
                </Link>
                <Link
                  href="#quote"
                  className="btn-primary mt-4 w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
