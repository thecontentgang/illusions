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
          group
          relative
          w-[280px]
          sm:w-[340px]
          md:w-[420px]
          lg:w-[500px]
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          lg:h-[340px]
          rounded-[2.2rem]
          overflow-hidden
          bg-[#1A1A1A]
          border
          border-[#2F2F2F]
          shadow-[0_15px_60px_rgba(0,0,0,0.45)]
          flex-shrink-0
        "
      >

        {/* GOLD BORDER GLOW */}
        <div
          className="
            absolute inset-0
            rounded-[2.2rem]
            border border-[#C9A227]/10
            group-hover:border-[#C9A227]/30
            transition-all duration-500
            z-20
            pointer-events-none
          "
        />

        {/* IMAGE */}
        <img
          src={img}
          alt={`Interior ${index + 1}`}
          draggable="false"
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-[1600ms]
            ease-out
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* GOLD SHINE EFFECT */}
        <div
          className="
            absolute
            top-0
            left-[-120%]
            w-[60%]
            h-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            rotate-12
            group-hover:left-[140%]
            transition-all
            duration-[1800ms]
            ease-out
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
    <section className="relative w-full overflow-hidden py-24 bg-[#111111]">

      {/* MAIN BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#111111]
          via-[#181818]
          to-[#222222]
        "
      />

      {/* TOP GOLD GLOW */}
      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          rounded-full
          bg-[#C9A227]/10
          blur-3xl
        "
      />

      {/* BOTTOM SOFT DARK GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[40%]
          bg-gradient-to-t
          from-black
          via-[#111111]/70
          to-transparent
        "
      />

      {/* SIDE FADE LEFT */}
      <div
        className="
          absolute
          left-0
          top-0
          w-32
          h-full
          z-20
          bg-gradient-to-r
          from-[#111111]
          to-transparent
          pointer-events-none
        "
      />

      {/* SIDE FADE RIGHT */}
      <div
        className="
          absolute
          right-0
          top-0
          w-32
          h-full
          z-20
          bg-gradient-to-l
          from-[#111111]
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
        <div className="flex w-max gap-7 px-6 animate-marquee">

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