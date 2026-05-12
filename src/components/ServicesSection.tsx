import { motion } from "framer-motion";
import {
  Sofa,
  Building2,
  PencilRuler,
  Hammer,
  LampFloor,
  Cuboid,
} from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Luxury Interiors",
    description:
      "Elegant and timeless interior solutions tailored for modern living spaces and premium residences.",
  },
  {
    icon: Building2,
    title: "Architecture Design",
    description:
      "Functional architecture blended with aesthetics to create extraordinary environments.",
  },
  {
    icon: PencilRuler,
    title: "Space Planning",
    description:
      "Optimizing layouts and flow to maximize comfort, beauty, and functionality.",
  },
  {
    icon: Hammer,
    title: "Turnkey Execution",
    description:
      "From concept to completion, we manage every detail with precision and craftsmanship.",
  },
  {
    icon: LampFloor,
    title: "Custom Furniture",
    description:
      "Bespoke furniture crafted to elevate your interiors with uniqueness and elegance.",
  },
  {
    icon: Cuboid,
    title: "3D Visualization",
    description:
      "Photorealistic renders and walkthroughs helping you visualize the final masterpiece.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFF] to-[#F5F3FF]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#8B5CF6] font-semibold uppercase tracking-[0.2em] text-sm">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-milchella font-semibold tracking-wider text-[#111827]">
            Designing Spaces <br />

            <span className="text-[#8B5CF6] italic">
              Beyond Expectations
            </span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-base md:text-lg leading-relaxed">
            We craft sophisticated interiors and architectural experiences
            blending luxury, functionality, and timeless aesthetics.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  rounded-[2rem]
                  p-8
                  bg-white/80
                  border
                  border-[#ECECEC]
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >

                <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center">
                  <Icon className="text-[#8B5CF6]" size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#111827]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;