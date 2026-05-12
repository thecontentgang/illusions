import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialSection from "../components/TestimonialSection";
import TrustedBy from "../components/TrustedBy";
import ServicesSection from "../components/ServicesSection";
import DesignProcess from "../components/DesignProcess";
import CTASection from "../components/CTASection";



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <DesignProcess />
      <TestimonialSection />
      <CTASection />
    </>
  )
}

export default HomePage