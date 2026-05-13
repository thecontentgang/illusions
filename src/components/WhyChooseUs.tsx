import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Clock3,
  PenTool,
  Gem,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Luxury Design Approach",
    description:
      "Every space is crafted with timeless elegance, modern aesthetics, and refined attention to detail.",
  },
  {
    icon: PenTool,
    title: "Tailored Customization",
    description:
      "We personalize every design according to your lifestyle, vision, and architectural identity.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    description:
      "From finishes to furnishings, we source only premium materials for exceptional durability and beauty.",
  },
  {
    icon: Clock3,
    title: "On-Time Project Delivery",
    description:
      "Our streamlined execution process ensures smooth coordination and timely completion.",
  },
  {
    icon: Gem,
    title: "Sophisticated Craftsmanship",
    description:
      "Every detail is thoughtfully executed by experienced artisans and skilled design professionals.",
  },
  {
    icon: Users,
    title: "Client-Centered Experience",
    description:
      "We collaborate closely with clients to ensure a seamless and inspiring design journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFF] to-[#F5F3FF]" />

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="px-5 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#C4B5FD]/30">
            <span className="text-sm font-semibold tracking-wide uppercase text-[#7C3AED]">
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
              font-semibold
              text-[#111827]
              leading-[1.1]
              font-milchella
              tracking-wider
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
    mt-16
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-5
  "
>
  {[
    {
      value: "250+",
      label: "Luxury Projects",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "20+",
      label: "Expert Designers",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#ECECEC]
        bg-white/80
        backdrop-blur-xl
        p-8
        text-center
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]
        hover:-translate-y-1
        transition-all
        duration-500
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#C4B5FD]/5
          via-transparent
          to-[#8B5CF6]/10
        "
      />

      <div className="relative z-10">

        <h3
          className="
            text-4xl
            sm:text-5xl
            font-bold
            tracking-tight
            text-[#8B5CF6]
          "
        >
          {item.value}
        </h3>

        <p
          className="
            mt-3
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
            const Icon = feature.icon;

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
                  hover:shadow-[0_25px_70px_rgba(139,92,246,0.12)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#C4B5FD]/0
                    via-[#C4B5FD]/0
                    to-[#C4B5FD]/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#8B5CF6]/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#8B5CF6]
                    transition-all
                    duration-500
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#8B5CF6]
                      group-hover:text-white
                      transition-colors
                      duration-500
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-semibold
                      text-[#111827]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[#6B7280]
                      leading-relaxed
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    top-5
                    right-6
                    text-6xl
                    font-bold
                    text-[#8B5CF6]/5
                    select-none
                  "
                >
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-[2.5rem]
            bg-gradient-to-r
            from-[#8B5CF6]
            via-[#A78BFA]
            to-[#8B5CF6]
            p-[1px]
          "
        >
          <div
            className="
              rounded-[2.5rem]
              bg-white
              px-8
              py-10
              md:px-14
              md:py-14
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-10
            "
          >

            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-semibold text-[#111827] leading-tight">
                Creating Beautiful Spaces <br />

                <span className="italic text-[#8B5CF6]">
                  That Inspire Everyday Living
                </span>
              </h3>

              <p className="mt-5 text-[#6B7280] leading-relaxed">
                Our expertise lies in transforming ordinary interiors
                into elegant experiences through thoughtful design,
                premium craftsmanship, and personalized attention.
              </p>
            </div>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-[#8B5CF6]
                text-white
                font-semibold
                shadow-[0_15px_40px_rgba(139,92,246,0.35)]
                hover:scale-105
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;