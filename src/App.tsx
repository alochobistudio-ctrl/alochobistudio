/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WeddingSection } from './components/WeddingSection';
import { GallerySection } from './components/GallerySection';
import { PackagesSection } from './components/PackagesSection';
import { VideoSection } from './components/VideoSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#EAEAE8] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Specialized Services Section (17 Services) */}
        <ServicesSection />

        {/* Impressive Wedding Section */}
        <WeddingSection />

        {/* Curated Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* Pricing & Custom Packages Section */}
        <PackagesSection />

        {/* Cinematic Video Showcase Section */}
        <VideoSection />

        {/* Why Choose Us Features */}
        <WhyChooseUs />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* FAQs Section */}
        <FaqSection />

        {/* Contact Form & Google Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons: WhatsApp, Call, Scroll-to-Top */}
      <FloatingActions />
    </div>
  );
}
