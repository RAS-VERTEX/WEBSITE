// FILE PATH: /components/FAQSection.tsx

"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of painting services do you offer?",
      answer:
        "We offer comprehensive painting services including interior and exterior residential painting, commercial building maintenance, body corporate projects, heritage home restoration, roof painting, waterproofing, and specialized rope access services for high-rise buildings.",
    },
    {
      question:
        "Do you offer a colour consultation for your painting projects?",
      answer:
        "Yes, we provide professional colour consultation services. Our experienced team can help you choose the perfect colour schemes that complement your property's architecture, lighting, and your personal style preferences.",
    },
    {
      question:
        "How do you ensure quality and customer satisfaction for your painting projects?",
      answer:
        "We maintain quality through rigorous processes: IRATA-certified technicians, premium materials, detailed project management, regular quality checkpoints, comprehensive insurance coverage, and a satisfaction guarantee on all completed work.",
    },
    {
      question: "What areas do you service on the Sunshine Coast?",
      answer:
        "We service the entire Sunshine Coast region including Caloundra, Maroochydore, Noosa, Nambour, and surrounding areas within a 50km radius. We're available for emergency services 24/7 across all service areas.",
    },
    {
      question: "Are you fully licensed and insured?",
      answer:
        "Yes, we are fully licensed, insured, and IRATA certified for rope access work. We carry comprehensive public liability insurance and workers compensation, and all our technicians are professionally trained and certified.",
    },
    {
      question: "How long does a typical painting project take?",
      answer:
        "Project timelines vary based on scope: residential homes typically take 3-7 days, body corporate projects 2-8 weeks, and commercial projects 1-6 weeks. We provide detailed timelines during the quote process and maintain regular progress communication.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-brand-blue tracking-wide mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg text-brand-grey font-poppins">
              Everything you need to know about our painting services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-poppins font-semibold text-brand-blue pr-4">
                    {faq.question}
                  </h3>
                  <Plus
                    className={`w-6 h-6 text-brand-blue transition-transform duration-300 flex-shrink-0 ${
                      expandedFAQ === index ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-brand-grey font-poppins leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
