import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { LeadModal } from "./LeadModal";
import ShowcaseCarousel from "./ShowcaseCarousel";

const HeroSection = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#111111]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#2A2A2A]" />

        {/* TOP GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 blur-3xl rounded-full" />

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
              <span className="px-5 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#E5C76B] text-sm font-semibold tracking-wide backdrop-blur-xl">
                Luxury Interior Studio
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-semibold
                text-[2.6rem]
                leading-[0.95]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                text-[#F5F5F5]
                tracking-normal
                max-w-6xl
              "
            >
              Bespoke Interiors <br />

              <span className="text-[#C9A227] italic">
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
    shadow-[0_25px_80px_rgba(201,162,39,0.12)]
    border
    border-[#333333]
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

              {/* DARK OVERLAY */}
              <div
                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/70
      via-black/10
      to-transparent
      pointer-events-none
    "
              />

              {/* GOLD GLOW */}
              <div
                className="
      absolute
      inset-0
      bg-gradient-to-br
      from-[#C9A227]/10
      via-transparent
      to-[#C9A227]/5
      pointer-events-none
    "
              />

              {/* PLAY LABEL */}
              <div
                className="
      absolute
      bottom-5
      left-5
      flex
      items-center
      gap-3
      bg-[#1A1A1A]/90
      backdrop-blur-md
      px-4
      py-3
      rounded-2xl
      shadow-xl
      border
      border-[#333333]
    "
              >

                {/* PLAY ICON */}
                <div
                  className="
        w-10
        h-10
        rounded-full
        bg-[#C9A227]
        flex
        items-center
        justify-center
        text-black
        shadow-lg
      "
                >
                  <Play size={18} fill="black" />
                </div>

                {/* TEXT */}
                {/* <div className="text-left">
      <p className="text-sm font-bold text-[#F5F5F5]">
        Founder Story
      </p>

      <p className="text-xs text-[#A1A1AA]">
        Discover our design philosophy
      </p>
    </div> */}
              </div>
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
                text-[#A1A1AA]
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
                  bg-[#1A1A1A]/90
                  backdrop-blur-xl
                  border
                  border-[#333333]
                  shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                "
              >

                {/* PEOPLE IMAGES */}
                <div className="flex -space-x-4">

                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-[#111111]
                    "
                  />

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-[#111111]
                    "
                  />

                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-2
                      border-[#111111]
                    "
                  />
                </div>

                {/* REVIEW CONTENT */}
                <div className="text-left">

                  {/* GOOGLE LOGO */}
                  <div className="flex items-center gap-2">

                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />

                    <span className="font-semibold text-[#F5F5F5]">
                      Google Reviews
                    </span>
                  </div>

                  {/* STARS */}
                  <div className="flex items-center gap-1 mt-2">

                    <div className="flex text-[#C9A227] text-sm">
                      ★★★★★
                    </div>

                    <span className="text-[#F5F5F5] font-bold ml-1">
                      4.9
                    </span>

                    <span className="text-[#A1A1AA] text-sm">
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
                  bg-[#C9A227]/10
                  border
                  border-[#C9A227]/20
                  text-[#E5C76B]
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
                    bg-[#C9A227]
                    text-black
                    font-bold
                    rounded-2xl
                    shadow-[0_15px_30px_-10px_rgba(201,162,39,0.45)]
                    hover:shadow-[0_20px_40px_-10px_rgba(201,162,39,0.6)]
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
                  bg-[#1A1A1A]
                  text-[#F5F5F5]
                  font-bold
                  rounded-2xl
                  border-2
                  border-[#3A3A3A]
                  hover:border-[#C9A227]
                  hover:bg-[#222222]
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