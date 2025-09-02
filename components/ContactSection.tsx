// FILE PATH: /components/ContactSection.tsx

"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "residential",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Plastering & Rendering",
    "Roof Repair & Painting",
    "Waterproofing/Water Damage Repair",
    "Floor & Deck Recoating",
    "Height Access",
    "Commercial Maintenance",
    "Colour Consulting",
    "Power Washing",
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bebas text-gray-900 mb-6 tracking-wide">
            GET YOUR
            <span className="text-brand-blue"> FREE QUOTE</span>
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto font-poppins">
            Ready to transform your property? Get a detailed quote within 24
            hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bebas text-gray-900 tracking-wide mb-2">
                CALL US NOW
              </h3>
              <p className="text-brand-blue font-poppins text-lg font-semibold mb-1">
                (07) 3130 6043
              </p>
              <p className="text-brand-grey font-poppins text-sm">
                Available 7 days a week
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bebas text-gray-900 tracking-wide mb-2">
                EMAIL US
              </h3>
              <p className="text-brand-blue font-poppins text-lg font-semibold mb-1">
                info@rasvertex.com.au
              </p>
              <p className="text-brand-grey font-poppins text-sm">
                Response within 2 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bebas text-gray-900 tracking-wide mb-2">
                SERVICE AREA
              </h3>
              <p className="text-brand-grey font-poppins">
                Sunshine Coast & Surrounding Areas
              </p>
              <p className="text-brand-grey font-poppins text-sm">
                50km radius coverage
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bebas text-gray-900 tracking-wide mb-6">
                GET YOUR FREE QUOTE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Type Selector */}
                <div>
                  <label className="block text-sm font-poppins font-medium text-gray-700 mb-3">
                    Project Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["residential", "body-corporate", "commercial"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              projectType: type,
                            }))
                          }
                          className={`p-3 rounded-lg font-poppins font-medium transition-all duration-200 ${
                            formData.projectType === type
                              ? "bg-brand-blue text-white"
                              : "bg-gray-100 text-brand-grey hover:bg-gray-200"
                          }`}
                        >
                          {type.charAt(0).toUpperCase() +
                            type.slice(1).replace("-", " ")}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-poppins font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent font-poppins transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-poppins font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent font-poppins transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-poppins font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent font-poppins transition-all duration-200"
                      placeholder="(07) 1234 5678"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-poppins font-medium text-gray-700 mb-2"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent font-poppins transition-all duration-200"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-poppins font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent font-poppins transition-all duration-200"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-primary-700 text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Send Quote Request</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-brand-grey font-poppins text-sm">
                  We'll respond within 24 hours with a detailed quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
