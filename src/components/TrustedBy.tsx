import { motion } from "framer-motion";

const trustedLogos = [
  "/logos/aparna-zenon.png","/logos/asbl-spire.png",
  "/logos/auro-regent.svg","/logos/avani-tulasi-vanam.png",
  "/logos/candeur-40.jpg","/logos/dsr-park-ridge.jpg",
  "/logos/elegance-emperia.png","/logos/epil-carnerstone.jpg",
  "/logos/gem-nakshtra.png","/logos/hallmark-skyrena.jpg",
  "/logos/indus-peblcity.png","/logos/my-home-sayuk.jpg",
  "/logos/nyla-tema4.png","/logos/tripura-lm-3.jpg",
  "/logos/vaishnavi-oasis.png"

];

const row1 = [...trustedLogos, ...trustedLogos];
const row2 = [...trustedLogos].reverse();
const duplicatedRow2 = [...row2, ...row2];

const TrustedBy = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFF] to-[#F5F3FF]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center px-5"
        >
          <div className="px-5 py-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/5">
            <span className="text-sm font-semibold tracking-wide text-[#7C3AED] uppercase">
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
              text-[#111827]
              leading-tight
              tracking-wider
            "
          >
            Spaces Designed For <br />

            <span className="text-[#8B5CF6] italic">
              Visionary Communities
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-[#6B7280]
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
              from-[#FAFAFF]
              via-[#FAFAFF]/90
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
              from-[#F5F3FF]
              via-[#F5F3FF]/90
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
  bg-white
  border
  border-[#F3F4F6]
  shadow-[0_15px_50px_rgba(0,0,0,0.05)]
  flex-shrink-0
  group
"
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#C4B5FD]/10
                    via-transparent
                    to-[#8B5CF6]/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Trusted Brand"
                  className="
                    relative
                    z-10
                    w-full
                    h-full
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
              from-[#FAFAFF]
              via-[#FAFAFF]/90
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
              from-[#F5F3FF]
              via-[#F5F3FF]/90
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
  bg-white
  border
  border-[#F3F4F6]
  shadow-[0_15px_50px_rgba(0,0,0,0.05)]
  flex-shrink-0
  group
"
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#C4B5FD]/10
                    via-transparent
                    to-[#8B5CF6]/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Trusted Brand"
                  className="
                    relative
                    z-10
                    w-full
                    h-full
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