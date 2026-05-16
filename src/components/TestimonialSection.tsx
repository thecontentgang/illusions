import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import videoimg1 from "../assets/video-1.png";
import videoimg2 from "../assets/video-2.png";
import videoimg3 from "/testimonial-3.png";

const testimonials = [
  {
    id: 1,
    client: "Anju & Rejul",
    project: "Apt team 4 nyla",
    thumbnail: videoimg1,
    duration: "0:44",
    videoUrl: "https://www.youtube.com/embed/bH1YmrjnvIc",
  },

  {
    id: 2,
    client: "Shristi & rahul",
    project: "Aparna Cyberlife",
    thumbnail: videoimg2,
    duration: "1:05",
    videoUrl: "https://www.youtube.com/embed/NCr72bMZv8I",
  },

  {
    id: 3,
    client: "Padmaja & Venu Gopal",
    project: "CyberWoods Apartment",
    thumbnail: videoimg3,
    duration: "2:10",
    videoUrl: "https://www.youtube.com/embed/0YRpyMOeLEM",
  },
];

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section
        className="
          relative
          py-20
          md:py-32
          bg-white
          px-6
          md:px-12
          lg:px-24
          overflow-hidden
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2FF]" />

        {/* PURPLE GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="
                text-[#8B5CF6]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-4
                block
              "
            >
              Client Stories
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
                text-4xl
                md:text-6xl
                font-abhre
                font-semibold
                tracking-tight
                text-[#111827]
              "
            >
              Voices of{" "}
              <span className="italic text-[#8B5CF6]">
                Satisfaction.
              </span>
            </motion.h2>
          </div>

          {/* VIDEO GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
            "
          >

            {testimonials.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveVideo(item.videoUrl)}
                className="group relative block text-left"
              >

                {/* VIDEO CARD */}
                <div
                  className="
                    relative
                    h-[500px]
                    md:h-[560px]
                    bg-white/80
                    backdrop-blur-xl
                    rounded-[2.5rem]
                    overflow-hidden
                    border
                    border-white/50
                    shadow-[0_20px_60px_rgba(139,92,246,0.12)]
                    hover:shadow-[0_20px_60px_rgba(139,92,246,0.22)]
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
                      to-[#7C3AED]/5
                      pointer-events-none
                    "
                  />

                  {/* THUMBNAIL */}
                  <img
                    src={item.thumbnail}
                    alt={item.client}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* PURPLE HOVER GLOW */}
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

                  {/* PLAY BUTTON */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-black/30
                        backdrop-blur-xl
                        border
                        border-[#8B5CF6]/20
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                    >

                      <svg
                        className="w-6 h-6 fill-[#8B5CF6] ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </motion.div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                    "
                  >

                    <div
                      className="
                        rounded-[1.8rem]
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        px-5
                        py-4
                      "
                    >

                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.25em]
                          text-[#8B5CF6]
                          mb-2
                        "
                      >
                        {item.project}
                      </p>

                      <h4
                        className="
                          text-white
                          text-xl
                          md:text-2xl
                          font-semibold
                          leading-tight
                        "
                      >
                        {item.client}
                      </h4>
                    </div>
                  </div>

                  {/* DURATION */}
                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      px-3
                      py-1.5
                      bg-black/40
                      backdrop-blur-xl
                      rounded-full
                      border
                      border-[#8B5CF6]/10
                    "
                  >

                    <span
                      className="
                        text-[#F5F5F5]
                        text-[10px]
                        font-bold
                        tracking-[0.2em]
                      "
                    >
                      {item.duration}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="
                fixed
                inset-0
                z-[999]
                bg-black/80
                backdrop-blur-md
              "
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                inset-0
                z-[1000]
                flex
                items-center
                justify-center
                px-4
              "
            >

              <div
                className="
                  relative
                  w-full
                  max-w-5xl
                  rounded-[2rem]
                  overflow-hidden
                  border
                  border-[#2A2A2A]
                  shadow-[0_30px_90px_rgba(0,0,0,0.7)]
                  bg-black
                "
              >

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="
                    absolute
                    top-4
                    right-4
                    z-10
                    w-11
                    h-11
                    rounded-full
                    bg-black/40
                    backdrop-blur-xl
                    border
                    border-[#8B5CF6]/20
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:text-[#8B5CF6]
                    transition-all
                  "
                >
                  <X size={20} />
                </button>

                {/* VIDEO */}
                <div className="aspect-video w-full">
                  <iframe
                    src={`${activeVideo}?autoplay=1&rel=0`}
                    title="Client Testimonial"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialSection;