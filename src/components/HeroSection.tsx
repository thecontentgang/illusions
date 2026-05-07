import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const showcaseImages = [
  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778139714/IMG_0768_vkuqst.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778136576/Flow_IMG_20260313_152549_01_079_bjyb1x.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133984/IMG_8635_ejqaag.heic",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133965/Flow_IMG_20260419_214104_01_466_x1gftl.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778134821/IMG_3740_dtkjqs.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133981/IMG_8637_ayjad7.heic",
];

/* Optimized Image Card */
const ImageCard = memo(({ img, index }: { img: string; index: number }) => {
  return (
    <div
      className="
        w-[280px]
        sm:w-[340px]
        md:w-[420px]
        lg:w-[500px]
        h-[220px]
        sm:h-[260px]
        md:h-[300px]
        lg:h-[340px]
        rounded-[2rem]
        overflow-hidden
        bg-gray-100
        flex-shrink-0
        will-change-transform
        transform-gpu
      "
    >
      <img
        src={img}
        alt={`Interior ${index + 1}`}
        loading={index < 2 ? "eager" : "lazy"}
        fetchPriority={index < 2 ? "high" : "auto"}
        decoding="async"
        draggable="false"
        className="
          w-full
          h-full
          object-cover
          will-change-transform
          transform-gpu
          backface-hidden
          hover:scale-105
          transition-transform
          duration-700
        "
      />
    </div>
  );
});

ImageCard.displayName = "ImageCard";

const HeroSection = memo(() => {

  /* Prevent Re-rendering */
  const duplicatedImages = useMemo(
    () => [...showcaseImages, ...showcaseImages],
    []
  );

  return (
    <section className="relative min-h-screen mt-20 w-full flex flex-col items-center justify-center overflow-hidden bg-black">

  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/Video-Project.mp4"
      type="video/mp4"
    />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/45 z-[1]" />

  {/* BOTTOM GRADIENT */}
  <div className="absolute bottom-0 left-0 w-full h-[45%] z-[2] bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-aesthetic text-5xl pt-10 sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
        >
          Bespoke Interiors <br />
          <span className="text-[#C4B5FD] italic">
            Personally
          </span>
          curated.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="max-w-2xl mt-6 text-white text-base md:text-lg font-medium leading-relaxed"
        >
          We place you at the heart of the process. Through dedicated
          one-on-one service and superior artistry, we transform your vision
          into a timeless sanctuary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Link to="/projects">
            <button className="group relative px-8 md:px-10 py-4 bg-[#C4B5FD] text-white font-bold rounded-2xl shadow-[0_15px_30px_-10px_rgba(196,181,253,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(196,181,253,0.8)] transition-all duration-300 active:scale-95 will-change-transform transform-gpu">
              Our Projects
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-8 md:px-10 py-4 bg-white text-[#374151] font-bold rounded-2xl border-2 border-gray-100 hover:border-[#C4B5FD]/30 hover:bg-gray-50 transition-all duration-300 will-change-transform transform-gpu">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

      {/* FULL WIDTH AUTO SCROLL CAROUSEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="relative w-screen mt-16 overflow-hidden z-20"
      >
        <div className="flex gap-6 animate-marquee w-max px-6 will-change-transform transform-gpu">
          
          {duplicatedImages.map((img, index) => (
            <ImageCard
              key={`${img}-${index}`}
              img={img}
              index={index}
            />
          ))}

        </div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;