import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const showcaseImages = [
  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778139714/IMG_0768_vkuqst.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778136576/Flow_IMG_20260313_152549_01_079_bjyb1x.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133984/IMG_8635_ejqaag.heic",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133965/Flow_IMG_20260419_214104_01_466_x1gftl.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778134821/IMG_3740_dtkjqs.jpg",

  "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto:best,f_auto,dpr_auto,w_1400/v1778133981/IMG_8637_ayjad7.heic",
];

const ImageCard = memo(
  ({ img, index }: { img: string; index: number }) => {
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
          bg-white
          shadow-[0_10px_40px_rgba(208,188,200,0.15)]
          border
          border-white/50
          flex-shrink-0
        "
      >
        <img
          src={img}
          alt={`Interior ${index + 1}`}
          draggable="false"
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition-transform
            duration-700
          "
        />
      </div>
    );
  }
);

ImageCard.displayName = "ImageCard";

const ShowcaseCarousel = () => {

  const duplicatedImages = useMemo(
    () => [...showcaseImages, ...showcaseImages],
    []
  );

  return (
    <section className="relative w-full overflow-hidden py-20 bg-transparent">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]" />

      {/* BLUSH GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d0bcc8]/20 blur-3xl rounded-full" />

      {/* BOTTOM SOFT GLOW */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#F5F1F3] via-white/60 to-transparent" />

      {/* LEFT FADE */}
      <div
        className="
          absolute
          left-0
          top-0
          w-24
          h-full
          z-20
          bg-gradient-to-r
          from-[#FAF8F9]
          to-transparent
          pointer-events-none
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          absolute
          right-0
          top-0
          w-24
          h-full
          z-20
          bg-gradient-to-l
          from-[#FAF8F9]
          to-transparent
          pointer-events-none
        "
      />

      {/* CAROUSEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="relative z-10"
      >
        <div className="flex w-max gap-6 px-6 animate-marquee">

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
};

export default ShowcaseCarousel;