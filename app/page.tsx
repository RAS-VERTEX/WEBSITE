// FILE PATH: /app/page.tsx
// This is your main homepage component

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Paintbrush,
  Wrench,
  Zap,
  Heart,
} from "lucide-react";

const HomePage = () => {
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

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: CheckCircle, value: "100%", label: "IRATA Certified" },
    { icon: Shield, value: "24/7", label: "Emergency Service" },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      content:
        "RAS-VERTEX transformed our heritage home beautifully. Their attention to detail and professional approach exceeded our expectations.",
      rating: 5,
      image: "/images/testimonials/sarah.jpg",
    },
    {
      name: "James Robertson",
      role: "Commercial Property Manager",
      content:
        "Outstanding rope access services for our high-rise building maintenance. Professional, safe, and efficient work every time.",
      rating: 5,
      image: "/images/testimonials/james.jpg",
    },
    {
      name: "Maria Santos",
      role: "Restaurant Owner",
      content:
        "Quick response for our emergency waterproofing issue. Prevented major damage and completed the work with minimal disruption.",
      rating: 5,
      image: "/images/testimonials/maria.jpg",
    },
  ];

  const projects = [
    {
      title: "Heritage Home Restoration",
      location: "Noosa Heads",
      image: "/images/projects/heritage-home.jpg",
      category: "Residential",
    },
    {
      title: "Commercial Complex Maintenance",
      location: "Maroochydore",
      image: "/images/projects/commercial-complex.jpg",
      category: "Commercial",
    },
    {
      title: "High-Rise Building Services",
      location: "Caloundra",
      image: "/images/projects/high-rise.jpg",
      category: "Rope Access",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">RAS-VERTEX</h1>
                <p className="text-xs text-blue-600 font-medium">
                  Sunshine Coast Specialists
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="tel:0412345678"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero-painting-work.jpg"
            alt="Professional painting and rope access work"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center text-white container-custom">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Vision Into Reality
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Professional painting, cleaning, waterproofing & rope access
            specialists serving the Sunshine Coast with 25+ years of excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#quote"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:0412345678"
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (04) 1234 5678</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Property
              <span className="block heading-gradient">
                Transformation Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's your home, business or body corporate building, we've
              got all surfaces covered with professional expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Award-winning, qualified &
                <span className="block heading-gradient">
                  insured professionals
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your place + our specialists = the transformation of your
                dreams. With over 25 years of experience serving the Sunshine
                Coast, we bring unmatched expertise to every project.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    IRATA Certified Rope Access Specialists
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Fully Insured & Licensed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Emergency Response Available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Local Sunshine Coast Family Business
                  </span>
                </div>
              </div>
              <Link
                href="#projects"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-professional-work.jpg"
                  alt="RAS-VERTEX team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    4.9★
                  </div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                  <div className="text-xs text-gray-500">
                    Based on 127+ reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recent
              <span className="heading-gradient"> Project Transformations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've transformed properties across the Sunshine Coast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our
              <span className="heading-gradient"> Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's Get it Done. Contact us today for your free consultation and
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:0412345678"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(04) 1234 5678</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In
              <span className="heading-gradient"> Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact us for a free consultation
              and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Call Us
                    </h3>
                    <p className="text-gray-600">(04) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email Us
                    </h3>
                    <p className="text-gray-600">info@rasvertex.com.au</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Service Area
                    </h3>
                    <p className="text-gray-600">
                      Sunshine Coast & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(04) 1234 5678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RV</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">RAS-VERTEX</h3>
                  <p className="text-sm text-gray-400">
                    Sunshine Coast Specialists
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional painting, cleaning, waterproofing & rope access
                specialists with 25+ years of Sunshine Coast experience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Residential Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Commercial Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Rope Access
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Waterproofing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(04) 1234 5678</li>
                <li>info@rasvertex.com.au</li>
                <li>Sunshine Coast, QLD</li>
                <li>Available 24/7 for emergencies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 RAS-VERTEX. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
