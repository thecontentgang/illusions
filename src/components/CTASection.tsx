import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section className="relative py-24 px-5 sm:px-6 lg:px-8 bg-white overflow-hidden">

      {/* OUTER GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFF] via-white to-[#F5F3FF]" />

      {/* FLOATING GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/10 blur-3xl rounded-full" />

      {/* CTA CARD */}
      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          rounded-[3rem]
          overflow-hidden
          border
          border-white/20
          bg-gradient-to-br
          from-[#111827]
          via-[#1F2937]
          to-[#111827]
          shadow-[0_30px_100px_rgba(17,24,39,0.25)]
        "
      >

        {/* INNER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%)]" />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            px-6
            sm:px-10
            md:px-16
            py-20
            md:py-24
            text-center
          "
        >

          {/* SMALL LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl"
          >
            <span className="text-sm font-medium tracking-wide text-[#C4B5FD] uppercase">
              Book Your Dream Space
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              text-white
              leading-[1.05]
              tracking-tight
            "
          >
            Let’s Create Something <br />

            <span className="italic text-[#C4B5FD]">
              Extraordinary Together
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mt-7
              text-base
              sm:text-lg
              md:text-xl
              text-gray-300
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Transform your vision into a luxurious and timeless interior
            experience crafted with elegance, precision, and attention
            to every detail.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-5
              mt-12
            "
          >

            {/* PRIMARY BUTTON */}
            <button
              className="
                group
                px-8
                sm:px-10
                py-4
                rounded-2xl
                bg-[#8B5CF6]
                text-white
                font-semibold
                shadow-[0_15px_40px_rgba(139,92,246,0.35)]
                hover:scale-105
                hover:shadow-[0_20px_50px_rgba(139,92,246,0.5)]
                transition-all
                duration-300
                flex
                items-center
                gap-3
              "
            >
              Book Consultation

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            {/* SECONDARY BUTTON */}
            <button
              className="
                px-8
                sm:px-10
                py-4
                rounded-2xl
                bg-white/10
                border
                border-white/10
                text-white
                font-semibold
                backdrop-blur-xl
                hover:bg-white/20
                hover:border-white/20
                transition-all
                duration-300
              "
            >
              View Projects
            </button>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;