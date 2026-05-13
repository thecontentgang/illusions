import { memo , useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { LeadModal } from './LeadModal';

import ShowcaseCarousel from './ShowcaseCarousel';

const HeroSection = memo(() => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section className="relative w-full overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]" />

      {/* TOP GLOW */}
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
            <span className="px-5 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#C4B5FD]/30 text-[#7C3AED] text-sm font-semibold tracking-wide">
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
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-[#111827]
              leading-[1]
              tracking-wider
              max-w-6xl
            "
          >
            Bespoke Interiors <br />

            <span className="text-[#8B5CF6] italic">
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

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="
                w-full
                h-[240px]
                sm:h-[340px]
                md:h-[480px]
                lg:h-[560px]
                object-cover
              "
              poster="/video-thumbnail.jpg"
            >
              <source src="/founder-video.mp4" type="video/mp4" />
            </video>

            {/* VIDEO OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* PLAY LABEL */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl">

              <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white">
                <Play size={18} fill="white" />
              </div>

              <div className="text-left">
                <p className="text-sm font-bold text-[#111827]">
                  Founder Story
                </p>

                <p className="text-xs text-gray-500">
                  Discover our design philosophy
                </p>
              </div>
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
              text-[#4B5563]
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

            
              <button
              onClick={() => setOpen(true)}
                className="
                  px-8
                  md:px-10
                  py-4
                  bg-white
                  text-[#111827]
                  font-bold
                  rounded-2xl
                  border-2
                  border-[#E5E7EB]
                  hover:border-[#C4B5FD]
                  hover:bg-[#F9FAFB]
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