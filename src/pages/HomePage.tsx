import { Helmet } from 'react-helmet-async';

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialSection from "../components/TestimonialSection";
import TrustedBy from "../components/TrustedBy";
import ServicesSection from "../components/ServicesSection";
import DesignProcess from "../components/DesignProcess";
import CTASection from "../components/CTASection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Illusion Interior Studio | Luxury Interior Designers in Hyderabad</title>
        <meta 
          name="description" 
          content="Transform your space with Illusion Interior Studio, Hyderabad's premier luxury interior designers. We specialize in bespoke residential, commercial, and villa interiors." 
        />
        <meta 
          name="keywords" 
          content="luxury interior design Hyderabad, best interior designers, Suncity interior decorators, residential interiors, commercial design, premium villa interiors" 
        />
        <meta name="author" content="Illusion Interior Studio" />

        {/* Canonical URL (Prevents duplicate content issues) */}
        <link rel="canonical" href="https://www.illusioninteriors.com/" />

        {/* Open Graph / Facebook (How it looks when shared on WhatsApp/FB) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.illusioninteriors.com/" />
        <meta property="og:title" content="Illusion Interior Studio | Luxury Interior Designers" />
        <meta property="og:description" content="Transform your space with Illusion Interior Studio, Hyderabad's premier luxury interior designers." />
        <meta property="og:image" content="https://www.illusioninteriors.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.illusioninteriors.com/" />
        <meta property="twitter:title" content="Illusion Interior Studio | Luxury Interior Designers" />
        <meta property="twitter:description" content="Transform your space with Illusion Interior Studio, Hyderabad's premier luxury interior designers." />
        <meta property="twitter:image" content="https://www.illusioninteriors.com/og-image.jpg" />

        {/* JSON-LD Structured Data (Crucial for Local SEO & Google Rich Snippets) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesignBusiness",
            "name": "Illusion Interior Studio",
            "image": "https://www.illusioninteriors.com/illusion-dark.png",
            "description": "Luxury interior design studio based in Hyderabad, specializing in bespoke residential and commercial spaces.",
            "url": "https://www.illusioninteriors.com",
            "telephone": "+918317503596",
            "email": "hello@illusioninteriors.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H.no 7-31/16, Laxmi Narsimha colony",
              "addressLocality": "Suncity, Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500086", // Update with your actual pin code
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.3650566", // Update with exact coordinates if needed
              "longitude": "78.0901336"
            },
            "priceRange": "$$$"
          })}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <HeroSection />
      <WhyChooseUs />
      <TrustedBy />
      <ServicesSection />
      <TestimonialSection />
      <ProjectsSection />
      <DesignProcess />
      <CTASection />
    </>
  )
}

export default HomePage;