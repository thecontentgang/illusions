import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTAImage from "../assets/cta-image.jpg";
import { Link } from "react-router-dom";
import { LeadModal } from "./LeadModal";
import { useState } from "react";

const ConsultationCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="
          relative
          py-16
          md:py-24
          px-5
          sm:px-6
          lg:px-8
         bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222]
          overflow-hidden
        "
      >

       

      
        {/* CTA CARD */}
        <div
          className="
            relative
            z-10
            max-w-6xl
            mx-auto
            rounded-[2.5rem]
            overflow-hidden
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            border
            border-[#2A2A2A]
          "
        >

          {/* BACKGROUND IMAGE */}
          <img
            src={CTAImage}
            alt="Luxury Interior"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/75
              via-black/60
              to-black/75
            "
          />

          {/* GOLD GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_35%)]
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              px-6
              sm:px-10
              py-16
              md:py-20
              flex
              flex-col
              items-center
              text-center
            "
          >

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-full
                bg-black/20
                border
                border-[#C9A227]/10
                backdrop-blur-xl
              "
            >
              <span
                className="
                  text-[10px]
                  md:text-xs
                  font-semibold
                  tracking-[0.25em]
                  uppercase
                  text-[#E5C76B]
                "
              >
                Luxury Interior Studio
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
                mt-6
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                text-white
                leading-[1.05]
                tracking-tight
                max-w-3xl
              "
            >
              Designing Timeless <br />

              <span className="italic text-[#C9A227]">
                Luxury Interiors
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
                mt-5
                text-sm
                sm:text-base
                md:text-lg
                text-[#D1D5DB]
                leading-relaxed
                max-w-2xl
              "
            >
              Elegant interiors crafted with creativity,
              functionality, and premium detailing.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
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
                gap-4
                mt-8
              "
            >

              {/* PRIMARY BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="
                  group
                  px-7
                  py-3.5
                  rounded-2xl
                  bg-[#C9A227]
                  text-black
                  text-sm
                  md:text-base
                  font-semibold
                  shadow-[0_15px_40px_rgba(201,162,39,0.35)]
                  hover:scale-105
                  hover:bg-[#E5C76B]
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                Book Consultation

                <ArrowRight
                  size={18}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />
              </button>

              {/* SECONDARY BUTTON */}
              <Link to="/projects">
                <button
                  className="
                    px-7
                    py-3.5
                    rounded-2xl
                    bg-black/20
                    border
                    border-[#C9A227]/10
                    text-white
                    text-sm
                    md:text-base
                    font-semibold
                    backdrop-blur-xl
                    hover:bg-black/30
                    hover:border-[#C9A227]/20
                    transition-all
                    duration-300
                  "
                >
                  View Projects
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <LeadModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ConsultationCTA;