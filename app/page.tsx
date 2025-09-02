// FILE PATH: /app/page.tsx

import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServicesSection />
      <TestimonialsCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
