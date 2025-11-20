// FILE PATH: /app/page.tsx

import React from "react";
import Navigation from "@/components/Navigation";
import ScrollServices from "@/components/ScrollServices";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactSection from "@/components/ContactSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ClientLogos from "@/components/ClientLogos";
import VideoHero from "@/components/VideoHero";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <VideoHero />
      <ClientLogos />
      <ProjectCarousel />
      <ScrollServices />
      <TestimonialsCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
