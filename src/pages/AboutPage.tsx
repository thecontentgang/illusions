import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-[#111111] pt-24 pb-12 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] -z-10" />

      {/* GOLD GLOW */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 blur-3xl rounded-full -z-10" />

      {/* 1. ARCHITECTURAL HERO */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-8">

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.5em]
                mb-6
                block
              "
            >
              Interior Illusion Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-semibold
                text-[#F5F5F5]
                leading-[1.05]
                
              "
            >
              Redefining the <br />

              <span className="text-[#C9A227] italic">
                Modern Indian
              </span>{" "}

              Home.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 lg:pt-20"
          >
            <p
              className="
                text-[#A1A1AA]
                text-lg
                md:text-xl
                font-medium
                leading-relaxed
              "
            >
              Based in Hyderabad, Interior Illusion is an architectural
              practice dedicated to the art of meaningful, high-end living.
              We don't just decorate spaces; we engineer lifestyles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-[#1A1A1A]
              border
              border-[#2A2A2A]
              text-white
              p-10
              md:p-16
              rounded-[2.5rem]
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#C9A227]/5
                via-transparent
                to-[#C9A227]/10
              "
            />

            <span
              className="
                relative z-10
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-6
                block
              "
            >
              Our Mission
            </span>

            <h3
              className="
                relative
                z-10
                text-3xl
                md:text-4xl
                font-milchella
                font-semibold
                tracking-wider
                mb-6
                leading-tight
                text-[#F5F5F5]
              "
            >
              To engineer lifestyles through bespoke design.
            </h3>

            <p
              className="
                relative
                z-10
                text-[#A1A1AA]
                font-medium
                leading-relaxed
                text-sm
                md:text-base
              "
            >
              We commit to crafting spaces that perfectly balance the timeless warmth
              of Indian heritage with striking, modern minimalism.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              bg-[#1A1A1A]
              border
              border-[#2A2A2A]
              p-10
              md:p-16
              rounded-[2.5rem]
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#C9A227]/5
                via-transparent
                to-[#C9A227]/10
              "
            />

            <span
              className="
                relative
                z-10
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-6
                block
              "
            >
              Our Vision
            </span>

            <h3
              className="
                relative
                z-10
                text-3xl
                md:text-4xl
               
                font-semibold
                
                text-[#F5F5F5]
                mb-6
                leading-tight
              "
            >
              Defining the future of{" "}

              <span className="italic text-[#C9A227]">
                luxury living.
              </span>
            </h3>

            <p
              className="
                relative
                z-10
                text-[#A1A1AA]
                font-medium
                leading-relaxed
                text-sm
                md:text-base
              "
            >
              To be the most trusted architectural and interior studio shaping
              Hyderabad's premier addresses with uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            gap-6
            mb-12
            md:mb-16
            border-b
            border-[#2A2A2A]
            pb-8
          "
        >

          <div>

            <span
              className="
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-3
                block
              "
            >
              Core Principles
            </span>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-milchella
                font-semibold
                tracking-wider
                text-[#F5F5F5]
                leading-tight
              "
            >
              The architecture of{" "}

              <span className="italic text-[#C9A227]">
                experience.
              </span>
            </h2>
          </div>

          <p
            className="
              text-[#A1A1AA]
              text-sm
              md:text-base
              font-medium
              max-w-sm
            "
          >
            We believe design should be invisible, yet deeply felt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {[
            {
              id: "01",
              title: "Honest Materials",
              desc: "We favor raw stone, natural wood, and breathable textiles."
            },
            {
              id: "02",
              title: "Intentional Lines",
              desc: "Every curve and corner is designed with purpose."
            },
            {
              id: "03",
              title: "Cultural Depth",
              desc: "Traditional Indian warmth blended with global aesthetics."
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5
              }}
              whileHover={{ y: -5 }}
              className="
                bg-[#1A1A1A]
                border
                border-[#2A2A2A]
                p-6
                md:p-8
                rounded-[2rem]
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                hover:shadow-[0_20px_60px_rgba(201,162,39,0.12)]
                transition-all
                duration-300
              "
            >

              <div className="flex justify-between items-start mb-8">

                <div
                  className="
                    w-8
                    h-8
                    rounded-full
                    border
                    border-[#C9A227]/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                </div>

                <span className="text-sm font-bold text-[#C9A227]/30 tracking-widest">
                  {item.id}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl text-[#F5F5F5] mb-3">
                {item.title}
              </h3>

              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            max-w-5xl
            mx-auto
            bg-[#1A1A1A]
            border
            border-[#2A2A2A]
            rounded-[3rem]
            px-8
            md:px-16
            py-14
            md:py-16
            text-center
            relative
            overflow-hidden
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-60
              h-[3px]
              bg-[#C9A227]
              rounded-full
              shadow-[0_0_25px_rgba(201,162,39,0.45)]
            "
          />

          <span
            className="
              inline-block
              text-[#E5C76B]
              text-[10px]
              md:text-xs
              font-black
              uppercase
              tracking-[0.35em]
              mb-5
            "
          >
            Let’s Build Something Timeless
          </span>

          <h2
            className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              leading-[1.05]
              font-milchella
              font-semibold
              tracking-wider
            "
          >
            Ready to create your <br />

            <span className="text-[#C9A227] italic">
              dream interior?
            </span>
          </h2>

          <p
            className="
              text-[#A1A1AA]
              max-w-2xl
              mx-auto
              mt-6
              text-sm
              md:text-base
              leading-relaxed
            "
          >
            From luxury villas to modern apartments, we craft elegant interiors
            tailored to your lifestyle.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
              mt-10
            "
          >

            <Link to="/contact">
              <button
                className="
                  px-10
                  py-4
                  bg-[#C9A227]
                  text-black
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-xs
                  rounded-2xl
                  hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]
                  transition-all
                  duration-300
                "
              >
                Book Consultation
              </button>
            </Link>

            <Link to="/projects">
              <button
                className="
                  px-10
                  py-4
                  border
                  border-[#C9A227]/10
                  bg-white/5
                  backdrop-blur-sm
                  text-white
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-xs
                  rounded-2xl
                  hover:border-[#C9A227]/40
                  transition-all
                  duration-300
                "
              >
                Explore Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;