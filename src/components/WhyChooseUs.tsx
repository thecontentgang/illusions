import { motion } from "framer-motion";
import CTAImage from "../assets/cta-image.jpg";
import { useState } from "react";
import { LeadModal } from "./LeadModal";
import luxurydesign from "../assets/whychooseus/luxury-design-approach.jpg";
import tailoredcustomization from "../assets/whychooseus/cutomization.jpg";
import premiumquality from "../assets/whychooseus/quality-materials.jpg";
import ontimeproject from "../assets/whychooseus/on-time-delivery.jpg";
import sophisticatedcraftsmanship from "../assets/whychooseus/sophiscated-craftmanship.jpg";
import clientcentered from "../assets/whychooseus/client-centered-approach.jpg";

const features = [
  {
    image: luxurydesign,
    title: "Luxury Design Approach",
    description:
      "Every space is crafted with timeless elegance, modern aesthetics, and refined attention to detail.",
  },
  {
    image: tailoredcustomization,
    title: "Tailored Customization",
    description:
      "We personalize every design according to your lifestyle, vision, and architectural identity.",
  },
  {
    image: premiumquality,
    title: "Premium Quality Materials",
    description:
      "From finishes to furnishings, we source only premium materials for exceptional durability and beauty.",
  },
  {
    image: ontimeproject,
    title: "On-Time Project Delivery",
    description:
      "Our streamlined execution process ensures smooth coordination and timely completion.",
  },
  {
    image: sophisticatedcraftsmanship,
    title: "Sophisticated Craftsmanship",
    description:
      "Every detail is thoughtfully executed by experienced artisans and skilled design professionals.",
  },
  {
    image: clientcentered,
    title: "Client-Centered Experience",
    description:
      "We collaborate closely with clients to ensure a seamless and inspiring design journey.",
  },
];

const WhyChooseUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2FF]" />

        {/* PURPLE GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="px-5 py-2 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30">
              <span className="text-sm font-semibold tracking-wide uppercase text-[#8B5CF6]">
                Why Choose Us
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mt-8"
          >
            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
              
                text-[#1F2937]
                leading-[1.1]
                font-abhre
                tracking-tight
              "
            >
              Crafting Interiors With <br />

              <span className="italic text-[#8B5CF6]">
                Precision & Passion
              </span>
            </h2>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                text-[#6B7280]
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              We blend creativity, luxury, and functionality to create
              spaces that feel timeless, elegant, and deeply personal.
            </p>
          </motion.div>

          {/* STATS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mt-12 sm:mt-16
              grid
              grid-cols-1 sm:grid-cols-3
              gap-4 sm:gap-5
            "
          >
            {[
              {
                value: "187+",
                label: "Luxury Projects",
              },
              {
                value: "8+",
                label: "Years Experience",
              },
              {
                value: "98%",
                label: "Client Satisfaction",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/50
                  bg-white/70
                  backdrop-blur-xl
                  p-6 sm:p-8
                  text-center
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                {/* CARD GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#8B5CF6]/10
                    via-transparent
                    to-[#7C3AED]/10
                  "
                />

                <div className="relative z-10">

                  <h3
                    className="
                      text-3xl
                      sm:text-4xl lg:text-5xl
                      font-bold
                      tracking-tight
                      text-[#8B5CF6]
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2 sm:mt-3
                      text-sm
                      sm:text-base
                      font-medium
                      text-[#6B7280]
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* FEATURE GRID */}
          <div
            className="
              mt-20
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >
            {features.map((feature, index) => {
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
                  whileHover={{ y: -8 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    h-[200px]
                    md:h-[300px]
                    shadow-[0_20px_60px_rgba(139,92,246,0.15)]
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={feature.image}
                    alt={feature.title}
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

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      p-5
                    "
                  >

                    {/* GLASS TITLE CARD */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[1.5rem]
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        px-6
                        py-5
                      "
                    >

                      {/* INNER GLOW */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-[#8B5CF6]/10
                          via-transparent
                          to-[#7C3AED]/10
                        "
                      />

                      <div className="relative z-10">

                        <h5
                          className="
                            text-lg
                            md:text-xl
                            font-semibold
                            text-center
                            text-white
                            leading-tight
                          "
                        >
                          {feature.title}
                        </h5>

                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* DESIGNER CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[3rem]
              h-[360px]
              md:h-[420px]
              shadow-[0_30px_90px_rgba(0,0,0,0.15)]
            "
          >

            {/* BACKGROUND IMAGE */}
            <img
              src={CTAImage}
              alt="Interior Designer"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/70
                via-black/40
                to-black/10
              "
            />

            {/* CTA GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%)]
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                h-full
                px-7
                md:px-14
                flex
                items-center
                justify-center
                md:justify-start
              "
            >

              <div className="max-w-2xl text-center md:text-left">

                {/* LABEL */}
                <div
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                  "
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8B5CF6] font-semibold">
                    Luxury Interior Studio
                  </span>
                </div>

                {/* HEADING */}
                <h3
                  className="
                    mt-6
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-semibold
                    font-abhre
                    text-white
                    leading-[1.05]
                    tracking-tight
                  "
                >
                  Creating Beautiful Spaces

                  <span className="block italic text-[#8B5CF6]">
                    That Inspire Living
                  </span>
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-[#E5E7EB]
                    leading-relaxed
                    max-w-xl
                  "
                >
                  Transforming interiors into timeless luxury experiences
                  with creativity and craftsmanship.
                </p>

                {/* BUTTON */}
                <div className="mt-7">

                  <button
                    onClick={() => setOpen(true)}
                    className="
                      px-7
                      py-3.5
                      rounded-2xl
                      bg-[#8B5CF6]
                      text-white
                      font-semibold
                      shadow-[0_15px_40px_rgba(139,92,246,0.35)]
                      hover:scale-105
                      hover:bg-[#7C3AED]
                      transition-all
                      duration-300
                    "
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WhyChooseUs;