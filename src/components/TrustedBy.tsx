import { motion } from "framer-motion";

const trustedLogos = [
  "/aparna-logo.svg",
  "/asbl-logo.png",
  "/asbl-spire-logo.jpg",

  "/eipl-cornerstone-logo.jpg",
  "/nyla-logo.png",
  "/smr-logo.png",
];

const TrustedBy = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFF] to-[#F5F3FF]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
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
          className="text-center mt-8"
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
            and modern architectural developments to craft timeless
            living experiences.
          </p>
        </motion.div>

        {/* LOGO GRID */}
        <div
  className="
    mt-16
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-6
    gap-5
    md:gap-6
  "
>
  {trustedLogos.map((logo, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="
        group
        relative
        h-[120px]
        sm:h-[140px]
        md:h-[160px]
        rounded-[2rem]
        overflow-hidden
        bg-white
        border
        border-[#F3F4F6]
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
        hover:shadow-[0_25px_70px_rgba(139,92,246,0.18)]
        transition-all
        duration-500
        flex
        items-center
        justify-center
        p-0
      "
    >

      {/* PREMIUM GLOW */}
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

      {/* LOGO IMAGE */}
      <img
        src={logo}
        alt={`Trusted Brand ${index + 1}`}
        className="
          relative
          z-10
          w-full
          h-full
          object-cover
          object-center
          brightness-100
          saturate-150
          contrast-110
          group-hover:scale-105
          transition-all
          duration-700
        "
      />

      {/* LIGHT REFLECTION */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-tr
          from-transparent
          via-white/10
          to-white/30
          opacity-40
          pointer-events-none
        "
      />
    </motion.div>
  ))}
</div>

        
      </div>
    </section>
  );
};

export default TrustedBy;