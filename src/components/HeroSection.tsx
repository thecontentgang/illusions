import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { LeadModal } from "./LeadModal";
import ShowcaseCarousel from "./ShowcaseCarousel";

const HeroSection = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]" />

        {/* PURPLE GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/20 blur-3xl rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-32">

          <div className="flex flex-col items-center text-center">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <span className="px-5 py-2 rounded-full bg-[#C4B5FD]/20 border border-[#A78BFA]/30 text-[#6D28D9] text-sm font-semibold tracking-wide backdrop-blur-xl">
                Luxury Interior Studio
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Silkier ease-out curve
              }}
              className="
    font-serif 
    font-normal
    text-[2.75rem] 
    leading-[1.1] 
    sm:text-6xl 
    md:text-7xl 
    lg:text-8xl 
    text-[#111827] 
    tracking-tight 
    max-w-5xl
  "
            >
              Bespoke Interiors <br />
              <span className="
    font-serif 
    italic 
    font-light 
    text-[#8B5CF6] 
    pr-2 
  ">
                Personally
              </span>{" "}
              curated.
            </motion.h1>

            {/* VIDEO SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                relative
                mt-14
                w-full
                max-w-5xl
                rounded-[2rem]
                overflow-hidden
                shadow-[0_25px_80px_rgba(139,92,246,0.15)]
                border
                border-white/50
                backdrop-blur-xl
              "
            >

              {/* YOUTUBE VIDEO */}
              <iframe
                className="
                  w-full
                  h-[240px]
                  sm:h-[340px]
                  md:h-[480px]
                  lg:h-[560px]
                  object-cover
                "
                src="https://www.youtube.com/embed/pKpGFAlQQkk?autoplay=1&mute=1&loop=1&playlist=pKpGFAlQQkk&controls=1&rel=0&showinfo=0&modestbranding=1"
                title="Founder Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* PURPLE GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#C4B5FD]/10
                  via-transparent
                  to-[#8B5CF6]/10
                  pointer-events-none
                "
              />

              
              
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                max-w-2xl
                mt-7
                text-gray-500
                text-base
                sm:text-lg
                md:text-xl
                font-medium
                leading-relaxed
              "
            >
              We place you at the heart of the process. Through dedicated
              one-on-one service and superior artistry, we transform your
              vision into a timeless sanctuary.
            </motion.p>

            {/* GOOGLE REVIEWS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.28,
              }}
              className="
                mt-5
                flex
                flex-col
                sm:flex-row
                items-center
                gap-5
              "
            >

              {/* MAIN REVIEW CARD */}
              <div
                className="
                  flex
                  items-center
                  gap-5
                  px-5
                  py-4
                  rounded-[1.8rem]
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/50
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                "
              >

                {/* PEOPLE IMAGES */}
                <div className="flex -space-x-4">

                  <img
                    src="/gr-3.webp"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-white
                    "
                  />

                  <img
                    src="/gr-2.webp"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-white
                    "
                  />

                  <img
                    src="/gr-1.webp"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-white
                    "
                  />
                </div>

                {/* REVIEW CONTENT */}
                <div className="text-left">

                  <div className="flex items-center gap-2">

                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />

                    <span className="font-semibold text-[#1F2937]">
                      Google Reviews
                    </span>
                  </div>

                  {/* STARS */}
                  <div className="flex items-center gap-1 mt-2">

                    <div className="flex text-[#8B5CF6] text-sm">
                      ★★★★★
                    </div>

                    <span className="text-[#1F2937] font-bold ml-1">
                      4.9
                    </span>

                    <span className="text-gray-500 text-sm">
                      (250+ Reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* TRUST TAG */}
              <div
                className="
                  px-5
                  py-4
                  rounded-[1.6rem]
                  bg-[#C4B5FD]/20
                  border
                  border-[#A78BFA]/30
                  text-[#6D28D9]
                  font-semibold
                  text-sm
                  tracking-wide
                "
              >
                Trusted by Luxury Homeowners
              </div>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.35,
              }}
              className="
                flex
                flex-row
                items-center
                gap-4
                mt-10
              "
            >

              {/* PRIMARY BUTTON */}
              <Link to="/projects">
                <button
                  className="
                    group
                    relative
                    px-8
                    md:px-10
                    py-4
                    bg-[#8B5CF6]
                    text-white
                    font-bold
                    rounded-2xl
                    shadow-[0_15px_30px_-10px_rgba(139,92,246,0.45)]
                    hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.6)]
                    hover:scale-[1.03]
                    transition-all
                    duration-300
                    active:scale-95
                  "
                >
                  Our Projects
                </button>
              </Link>

              {/* SECONDARY BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="
                  px-8
                  md:px-10
                  py-4
                  bg-white
                  text-[#1F2937]
                  font-bold
                  rounded-2xl
                  border-2
                  border-[#E5E7EB]
                  hover:border-[#8B5CF6]
                  hover:bg-[#F8FAFC]
                  transition-all
                  duration-300
                  shadow-sm
                "
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative z-10 mt-24">
          <ShowcaseCarousel />
        </div>
      </section>

      <LeadModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;