"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTime, setSelectedTime] = useState("4:00 PM");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    customerType: "Residential",
    buildingName: "",
    address: "",
    unit: "",
    serviceType: "",
    projectDescription: "",
    numberOfUnits: "6-10 units",
    role: "",
    occupancyType: "",
    projectStartDate: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Quote request submitted! We'll contact you within 24 hours.");
  };

  // Generate calendar dates for September 2025
  const generateCalendarDates = () => {
    const currentMonth = 8; // September (0-indexed)
    const currentYear = 2025;

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const dates = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      dates.push(null);
    }

    // Add actual dates
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(day);
    }

    return { dates, currentMonth, currentYear };
  };

  const { dates, currentMonth, currentYear } = generateCalendarDates();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Main Container - The "Pill" */}
      <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Form Content (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-purple-900 mb-6 leading-tight">
                Book a no obligation,
                <br />
                hassle-free quote.
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      4.8 ⭐⭐⭐⭐⭐
                    </div>
                    <div className="text-sm text-gray-600">
                      Based on 570 reviews
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    f
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      4.6 ⭐⭐⭐⭐⭐
                    </div>
                    <div className="text-sm text-gray-600">
                      Based on 71 reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center space-x-16 mb-12">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${
                    currentStep === 1
                      ? "bg-purple-900 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  1
                </div>
                <div
                  className={`text-sm text-center ${
                    currentStep === 1
                      ? "text-purple-900 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Your
                  <br />
                  Details
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${
                    currentStep === 2
                      ? "bg-purple-900 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  2
                </div>
                <div
                  className={`text-sm text-center ${
                    currentStep === 2
                      ? "text-purple-900 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Property
                  <br />
                  Details
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${
                    currentStep === 3
                      ? "bg-purple-900 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  3
                </div>
                <div
                  className={`text-sm text-center ${
                    currentStep === 3
                      ? "text-purple-900 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Project
                  <br />
                  Details
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3 ${
                    currentStep === 4
                      ? "bg-purple-900 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  4
                </div>
                <div
                  className={`text-sm text-center ${
                    currentStep === 4
                      ? "text-purple-900 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Date /<br />
                  Time
                </div>
              </div>
            </div>

            {/* Form Fields - Direct on background */}
            <div className="space-y-6">
              {/* Step 1: Your Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      FIRST NAME*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LAST NAME*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-MAIL*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      MOBILE*
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CUSTOMER TYPE*
                    </label>
                    <select
                      name="customerType"
                      value={formData.customerType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Body Corporate">Body Corporate</option>
                      <option value="Property Manager">Property Manager</option>
                      <option value="Contractor">Contractor</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IS THERE A BUILDING NAME?
                    </label>
                    <input
                      type="text"
                      name="buildingName"
                      value={formData.buildingName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ADDRESS*
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                      placeholder="Type address here"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      UNIT (IF APPLICABLE)
                    </label>
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SERVICE TYPE*
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none"
                    >
                      <option value="">Please select a service type</option>
                      <option value="interior-painting">
                        Interior Painting
                      </option>
                      <option value="exterior-painting">
                        Exterior Painting
                      </option>
                      <option value="roof-painting">Roof Painting</option>
                      <option value="commercial-painting">
                        Commercial Painting
                      </option>
                      <option value="body-corporate-painting">
                        Body Corporate Painting
                      </option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="rope-access">Rope Access Services</option>
                      <option value="pressure-cleaning">
                        Pressure Cleaning
                      </option>
                      <option value="heritage-restoration">
                        Heritage Restoration
                      </option>
                      <option value="colour-consultation">
                        Colour Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WHAT AREAS ARE YOU LOOKING AT GETTING QUOTED ON?
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <p className="text-sm text-gray-600">
                    Please note: our minimum charge is $3,300 inc GST.{" "}
                    <span className="text-blue-600 underline cursor-pointer">
                      Learn More
                    </span>
                  </p>
                </div>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HOW MANY UNITS/LOTS IN COMPLEX?
                    </label>
                    <input
                      type="text"
                      name="numberOfUnits"
                      value={formData.numberOfUnits}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WHAT IS YOUR ROLE?
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none"
                    >
                      <option value="">Please select your role</option>
                      <option value="owner">Owner</option>
                      <option value="property-manager">Property Manager</option>
                      <option value="body-corporate-manager">
                        Body Corporate Manager
                      </option>
                      <option value="committee-member">Committee Member</option>
                      <option value="tenant">Tenant</option>
                      <option value="agent">Real Estate Agent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      OCCUPANCY TYPE*
                    </label>
                    <select
                      name="occupancyType"
                      value={formData.occupancyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none"
                    >
                      <option value="">Please select occupancy type</option>
                      <option value="owner-occupied">Owner Occupied</option>
                      <option value="rental-property">Rental Property</option>
                      <option value="vacant">Vacant</option>
                      <option value="mixed">Mixed Occupancy</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DESIRED PROJECT START DATE*
                    </label>
                    <select
                      name="projectStartDate"
                      value={formData.projectStartDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-60 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none"
                    >
                      <option value="">Please select</option>
                      <option value="asap">ASAP</option>
                      <option value="within-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="planning-stage">Just planning</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Date/Time Selection */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  {/* Calendar */}
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <ChevronLeft className="w-6 h-6 text-gray-400 cursor-pointer" />
                      <h3 className="text-lg font-semibold">September 2025</h3>
                      <ChevronRight className="w-6 h-6 text-gray-400 cursor-pointer" />
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-semibold text-gray-500 py-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {dates.map((date, index) => (
                        <div key={index} className="aspect-square">
                          {date && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDate(date);
                                setFormData((prev) => ({
                                  ...prev,
                                  preferredDate: `2025-09-${String(
                                    date
                                  ).padStart(2, "0")}`,
                                }));
                              }}
                              className={`w-full h-full rounded-lg text-sm font-medium transition-all ${
                                selectedDate === date || date === 10
                                  ? "bg-purple-900 text-white"
                                  : date < 9
                                  ? "text-gray-300 cursor-not-allowed"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                              disabled={date < 9}
                            >
                              {date}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Date & Time */}
                  <div className="bg-white bg-opacity-60 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Wednesday, 10 September 2025
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          AFTERNOON
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTime("4:00 PM");
                            setFormData((prev) => ({
                              ...prev,
                              preferredTime: "4:00 PM",
                            }));
                          }}
                          className="px-6 py-3 bg-purple-900 text-white rounded-lg text-sm font-medium"
                        >
                          4:00 PM
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-purple-900 hover:bg-purple-800 text-white px-12 py-4 rounded-full font-semibold transition-colors"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                  >
                    Book an estimator to quote
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Video Testimonial (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop"
                  alt="Customer testimonial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                    <Play className="w-6 h-6 text-gray-900 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-purple-900 text-white px-3 py-1 rounded text-sm font-medium">
                  PAINT WITH LOVE - CUSTOMER STORY
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  SEE WHY OUR CUSTOMERS LOVE RAS-VERTEX
                </h3>
                <p className="text-gray-600">
                  Watch real customer stories about their painting experience
                  with our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
