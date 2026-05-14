import { motion } from "framer-motion";

const trustedLogos = [
  "/logos/aparna-zenon.png",
  "/logos/asbl-spire.png",
  "/logos/auro-regent.svg",
  "/logos/avani-tulasi-vanam.png",
  "/logos/candeur-40.png",
  "/logos/dsr-park-ridge.jpg",
  "/logos/elegance-emperia.png",
  "/logos/epil-carnerstone.png",
  "/logos/gem-nakshtra.png",
  "/logos/hallmark-skyrena.png",
  "/logos/indus-peblcity.png",
  "/logos/my-home-sayuk.jpg",
  "/logos/nyla-tema4.png",
  "/logos/tripura-lm-3.png",
  "/logos/vaishnavi-oasis.png",
];

const row1 = [...trustedLogos, ...trustedLogos];
const row2 = [...trustedLogos].reverse();
const duplicatedRow2 = [...row2, ...row2];

const TrustedBy = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-[#111111]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222]" />

      {/* GOLD GLOW */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center px-5"
        >
          <div className="px-5 py-2 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10 backdrop-blur-xl">
            <span className="text-sm font-semibold tracking-wide text-[#E5C76B] uppercase">
              Trusted By Premium Clients
            </span>
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 px-5"
        >
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-milchella
              font-semibold
              text-[#F5F5F5]
              leading-tight
              tracking-wider
            "
          >
            Spaces Designed For <br />

            <span className="text-[#C9A227] italic">
              Visionary Communities
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-[#A1A1AA]
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Collaborating with premium apartments, luxury residences,
            and modern architectural developments.
          </p>
        </motion.div>

        {/* ROW 1 */}
        <div className="relative mt-16 overflow-hidden">

          {/* LEFT FROST */}
          <div
            className="
              absolute
              left-0
              top-0
              z-20
              h-full
              w-24
              md:w-40
              bg-gradient-to-r
              from-[#111111]
              via-[#111111]/90
              to-transparent
              pointer-events-none
            "
          />

          {/* RIGHT FROST */}
          <div
            className="
              absolute
              right-0
              top-0
              z-20
              h-full
              w-24
              md:w-40
              bg-gradient-to-l
              from-[#111111]
              via-[#111111]/90
              to-transparent
              pointer-events-none
            "
          />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 w-max"
          >
            {row1.map((logo, index) => (
              <div
                key={index}
                className="
                  relative
                  w-[170px]
                  h-[80px]
                  md:w-[220px]
                  md:h-[95px]
                  rounded-[1.5rem]
                  overflow-hidden

                  /* WHITE + GOLD BACKGROUND */
                  bg-gradient-to-br
                  from-[#FFFDF7]
                  via-[#FFF8E7]
                  to-[#F5E3A1]

                  border
                  border-[#E5C76B]/40

                  shadow-[0_15px_50px_rgba(201,162,39,0.18)]

                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  group
                  transition-all
                  duration-500

                  hover:scale-[1.02]
                  hover:shadow-[0_20px_60px_rgba(201,162,39,0.28)]
                "
              >

                {/* GOLD SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/70
                    via-transparent
                    to-[#C9A227]/10
                    opacity-80
                  "
                />

                {/* HOVER EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#FFF5CC]/40
                    to-transparent
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform
                    duration-1000
                  "
                />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Trusted Brand"
                  className="
                    relative
                    z-10
                    w-[70%]
                    h-[70%]
                    object-contain
                    object-center
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="relative mt-6 overflow-hidden">

          {/* LEFT FROST */}
          <div
            className="
              absolute
              left-0
              top-0
              z-20
              h-full
              w-24
              md:w-40
              bg-gradient-to-r
              from-[#111111]
              via-[#111111]/90
              to-transparent
              pointer-events-none
            "
          />

          {/* RIGHT FROST */}
          <div
            className="
              absolute
              right-0
              top-0
              z-20
              h-full
              w-24
              md:w-40
              bg-gradient-to-l
              from-[#111111]
              via-[#111111]/90
              to-transparent
              pointer-events-none
            "
          />

          <motion.div
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 w-max"
          >
            {duplicatedRow2.map((logo, index) => (
              <div
                key={index}
                className="
                  relative
                  w-[170px]
                  h-[80px]
                  md:w-[220px]
                  md:h-[95px]
                  rounded-[1.5rem]
                  overflow-hidden

                  /* WHITE + GOLD BACKGROUND */
                  bg-gradient-to-br
                  from-[#FFFDF7]
                  via-[#FFF8E7]
                  to-[#F5E3A1]

                  border
                  border-[#E5C76B]/40

                  shadow-[0_15px_50px_rgba(201,162,39,0.18)]

                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  group
                  transition-all
                  duration-500

                  hover:scale-[1.02]
                  hover:shadow-[0_20px_60px_rgba(201,162,39,0.28)]
                "
              >

                {/* GOLD SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/70
                    via-transparent
                    to-[#C9A227]/10
                    opacity-80
                  "
                />

                {/* HOVER EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#FFF5CC]/40
                    to-transparent
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform
                    duration-1000
                  "
                />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Trusted Brand"
                  className="
                    relative
                    z-10
                    w-[70%]
                    h-[70%]
                    object-contain
                    object-center
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;