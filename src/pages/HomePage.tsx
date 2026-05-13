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

export default HomePage