import { motion } from "framer-motion";
import luxuryInterior from "../assets/serviceimages/luxury-interior.jpg";
import architectureDesign from "../assets/serviceimages/arc-design.jpg";
import spacePlanning from "../assets/serviceimages/space-planing.jpg";
import turnkeyExecution from "../assets/serviceimages/turnkey-execution.jpg";
import customFurniture from "../assets/serviceimages/custom-furniture.jpg";
import visualization from "../assets/serviceimages/3d-visual.jpg";

const services = [
  {
    title: "Luxury Interiors",
    description:
      "Elegant and timeless interior solutions tailored for modern living spaces.",
    image: luxuryInterior,
  },

  {
    title: "Architecture Design",
    description:
      "Functional architecture blended with aesthetics for extraordinary environments.",
    image: architectureDesign,
  },

  {
    title: "Space Planning",
    description:
      "Optimizing layouts and flow for comfort, beauty, and functionality.",
    image: spacePlanning,
  },

  {
    title: "Turnkey Execution",
    description:
      "Managing every detail from concept to completion with precision.",
    image: turnkeyExecution,
  },

  {
    title: "Custom Furniture",
    description:
      "Bespoke furniture crafted to elevate interiors with elegance.",
    image: customFurniture,
  },

  {
    title: "3D Visualization",
    description:
      "Photorealistic renders and walkthroughs for immersive previews.",
    image: visualization,
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

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-milchella
              font-semibold
              tracking-wider
              text-[#111827]
            "
          >
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
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
            mt-20
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-white
                shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[260px]
                  overflow-hidden
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                {/* TITLE ON IMAGE */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                  "
                >
                  <div
                    className="
                      rounded-[1.5rem]
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      px-5
                      py-2
                    "
                  >
                    <h3
                      className="
                        text-lg
                        md:text-xl
                        font-semibold
                        text-white
                        leading-tight
                        text-center
                      "
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <p
                  className="
                    text-[#6B7280]
                    leading-relaxed
                    text-base
                    md:text-lg
                  "
                >
                  {service.description}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;