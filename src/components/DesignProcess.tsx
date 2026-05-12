import { motion } from "framer-motion";

const steps = [
  "Discovery & Consultation",
  "Concept & Moodboarding",
  "Space Planning",
  "Material Selection",
  "3D Visualization",
  "Execution & Styling",
];

const DesignProcess = () => {
  return (
    <section className="relative py-24 bg-[#FAFAFF] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#8B5CF6] font-semibold uppercase tracking-[0.2em] text-sm">
            Design Process
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-milchella font-semibold text-[#111827] tracking-wider">
            A Seamless Journey <br />

            <span className="italic text-[#8B5CF6]">
              From Vision To Reality
            </span>
          </h2>
        </div>

        {/* STEPS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((step, index) => (
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
                relative
                bg-white
                rounded-[2rem]
                p-8
                border
                border-[#ECECEC]
                shadow-sm
              "
            >
              <div className="text-6xl font-bold text-[#8B5CF6]/10 absolute top-4 right-5">
                0{index + 1}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6] text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#111827]">
                {step}
              </h3>

              <p className="mt-4 text-[#6B7280] leading-relaxed">
                Every project is carefully curated with precision,
                creativity, and attention to luxurious detail.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;