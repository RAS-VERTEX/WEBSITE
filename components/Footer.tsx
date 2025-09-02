// FILE PATH: /components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Large Logo */}
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-7xl font-bebas text-brand-blue tracking-wider">
              RAS-VERTEX
            </h2>
          </div>

          {/* Certifications & Licenses */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            {/* Certification Icons */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-xs text-brand-grey font-poppins font-medium mb-1">
                  CERTIFICATES/LICENSES:
                </p>
                <div className="flex items-center space-x-4">
                  {/* Add your certification logos here */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-poppins text-brand-grey">
                      IRATA
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-poppins text-brand-grey">
                      WorkCover
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-poppins text-brand-grey">
                      QBCC
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-brand-grey font-poppins font-medium mb-1">
                  ASSOCIATIONS:
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-poppins text-brand-grey">
                      MPAQ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Button */}
            <Link
              href="#quote"
              className="bg-brand-blue hover:bg-primary-700 text-white font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get a quote →
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-grey font-poppins text-sm">
              © 2024 RAS-VERTEX. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-brand-grey hover:text-brand-blue font-poppins text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-brand-grey hover:text-brand-blue font-poppins text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="tel:0731306043"
                className="text-brand-blue font-poppins font-medium"
              >
                (07) 3130 6043
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
