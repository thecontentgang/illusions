import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your lifestyle, preferences, and vision for the space.",
  },
  {
    title: "Concept & Moodboarding",
    description:
      "Curating inspirations, materials, textures, and aesthetics tailored to your personality.",
  },
  {
    title: "Space Planning",
    description:
      "Optimizing layouts and functionality while maintaining elegance and comfort.",
  },
  {
    title: "Material Selection",
    description:
      "Selecting premium finishes, furnishings, lighting, and textures for timeless interiors.",
  },
  {
    title: "3D Visualization",
    description:
      "Immersive renders and walkthroughs helping you visualize the final outcome.",
  },
  {
    title: "Execution & Styling",
    description:
      "Bringing the vision to life with flawless execution and sophisticated final styling.",
  },
];

const DesignProcess = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2FF]" />

      {/* PURPLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#8B5CF6] font-semibold uppercase tracking-[0.25em] text-sm">
            Design Process
          </span>

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-abhre
              font-semibold
              text-[#1F2937]
              
              leading-[1.1]
            "
          >
            A Seamless Journey <br />

            <span className="italic text-[#8B5CF6]">
              From Vision To Reality
            </span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-base md:text-lg leading-relaxed">
            Our process blends creativity, planning, and craftsmanship
            to deliver extraordinary interior experiences.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              hidden
              lg:block
              w-[3px]
              bg-gradient-to-b
              from-[#8B5CF6]/30
              via-[#8B5CF6]
              to-[#8B5CF6]/30
              rounded-full
            "
          />

          <div className="space-y-16">
            {steps.map((step, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >

                  {/* TIMELINE DOT */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      hidden
                      lg:flex
                      w-16
                      h-16
                      rounded-full
                      bg-white
                      border-4
                      border-[#8B5CF6]
                      items-center
                      justify-center
                      shadow-[0_10px_40px_rgba(139,92,246,0.25)]
                      z-20
                    "
                  >
                    <span className="text-[#8B5CF6] font-bold text-lg">
                      0{index + 1}
                    </span>
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                      w-full
                      lg:w-[46%]
                      relative
                    `}
                  >
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[2.5rem]

                        bg-white/80
                        backdrop-blur-xl

                        border
                        border-white/50

                        p-8
                        md:p-10

                        shadow-[0_20px_60px_rgba(139,92,246,0.12)]

                        hover:shadow-[0_25px_80px_rgba(139,92,246,0.18)]
                        hover:-translate-y-2

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
                          from-[#8B5CF6]/5
                          via-transparent
                          to-[#7C3AED]/10
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                        "
                      />

                      {/* MOBILE NUMBER */}
                      <div
                        className="
                          lg:hidden
                          w-14
                          h-14
                          rounded-2xl
                          bg-[#8B5CF6]
                          text-white
                          flex
                          items-center
                          justify-center
                          text-lg
                          font-bold
                          shadow-[0_10px_30px_rgba(139,92,246,0.3)]
                        "
                      >
                        0{index + 1}
                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10">

                        <h3
                          className="
                            mt-6
                            text-2xl
                            md:text-3xl
                            font-semibold
                            text-[#1F2937]
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-5
                            text-[#6B7280]
                            leading-relaxed
                            text-base
                            md:text-lg
                          "
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* BIG NUMBER */}
                      <div
                        className="
                          absolute
                          top-4
                          right-6
                          text-7xl
                          font-bold
                          text-[#8B5CF6]/5
                          select-none
                        "
                      >
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;