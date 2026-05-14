import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { portfolioData } from '../data/data';

const ProjectDetails = () => {
  const { id } = useParams();

  // FIND PROJECT
  const project = portfolioData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // REDIRECT IF INVALID
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-[#111111] min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] -z-10" />

      {/* GOLD GLOW */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 blur-3xl rounded-full -z-10" />

      {/* HERO SECTION */}
      <section
        className="
          relative
          h-[70vh]
          md:h-[85vh]
          w-full
          bg-[#111111]
        "
      >

        {/* BACK BUTTON */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">

          <Link
            to="/projects"
            className="
              group
              flex
              items-center
              gap-3
              text-white
              text-[10px]
              font-black
              uppercase
              tracking-[0.3em]
              hover:text-[#C9A227]
              transition-colors
              bg-black/20
              backdrop-blur-xl
              px-6
              py-3
              rounded-full
              border
              border-[#C9A227]/10
            "
          >

            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>

            Back to Portfolio
          </Link>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.05
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
          className="absolute inset-0 w-full h-full"
        >

          <img
            src={project.heroImage}
            alt={project.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="
              w-full
              h-full
              object-cover
              opacity-80
              will-change-transform
              transform-gpu
              backface-hidden
            "
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/10
              via-black/20
              to-[#111111]
            "
          />

          {/* GOLD GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_35%)]
            "
          />
        </motion.div>
      </section>

      {/* TITLE BLOCK */}
      <section
        className="
          relative
          z-10
          px-6
          md:px-12
          lg:px-24
          max-w-7xl
          mx-auto
          -mt-32
          md:-mt-48
          mb-20
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3,
            duration: 0.8
          }}
          className="
            relative
            overflow-hidden
            bg-[#1A1A1A]
            p-10
            md:p-16
            lg:p-20
            rounded-[3rem]
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            border
            border-[#2A2A2A]
          "
        >

          {/* INNER GLOW */}
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

          <div className="relative z-10">

            {/* CATEGORY */}
            <span
              className="
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-4
                block
              "
            >
              {project.category} • {project.community}
            </span>

            {/* TITLE */}
            <h1
              className="
                text-4xl
                md:text-6xl
                lg:text-7xl
                font-milchella
                font-semibold
                tracking-wider
                text-[#F5F5F5]
                leading-[1.1]
                mb-12
              "
            >
              {project.title}
            </h1>

            {/* PROJECT MATRIX */}
            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-8
                pt-8
                border-t
                border-[#2A2A2A]
              "
            >

              {[
                {
                  label: 'Client',
                  value: project.client
                },
                {
                  label: 'Location',
                  value: project.community
                },
                {
                  label: 'Area',
                  value: project.area
                },
                {
                  label: 'Year',
                  value: project.year
                },
              ].map((stat, i) => (

                <div key={i} className="space-y-1">

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-widest
                      text-[#666666]
                    "
                  >
                    {stat.label}
                  </p>

                  <p
                    className="
                      text-sm
                      md:text-base
                      font-bold
                      text-[#F5F5F5]
                    "
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section
        className="
          px-6
          md:px-12
          lg:px-24
          max-w-[90rem]
          mx-auto
          mb-32
        "
      >

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            md:gap-8
            auto-rows-[400px]
            md:auto-rows-[600px]
            grid-flow-dense
          "
        >

          {project.gallery.map((img, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: "-100px"
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.1
              }}
              className={`
                ${img.layout}
                rounded-[2.5rem]
                overflow-hidden
                bg-[#1A1A1A]
                group
                relative
                border
                border-[#2A2A2A]
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              `}
            >

              <img
                src={img.src}
                alt={`Project detail ${i + 1}`}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="
                  w-full
                  h-full
                  object-cover
                  will-change-transform
                  transform-gpu
                  backface-hidden
                  transition-transform
                  duration-[1.2s]
                  ease-out
                  group-hover:scale-105
                "
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#C9A227]/5
                  via-transparent
                  to-[#C9A227]/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          px-6
          md:px-12
          lg:px-24
          max-w-7xl
          mx-auto
          mb-20
          md:mb-32
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="
            relative
            overflow-hidden
            bg-[#1A1A1A]
            rounded-[2.5rem]
            p-8
            md:p-12
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            border
            border-[#2A2A2A]
          "
        >

          {/* GOLD LINE */}
          <div
            className="
              absolute
              top-0
              left-0
              w-2
              h-full
              bg-[#C9A227]
            "
          />

          {/* GLOW */}
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

          {/* LEFT */}
          <div className="relative z-10 text-center md:text-left">

            <span
              className="
                text-[#E5C76B]
                text-[10px]
                font-black
                uppercase
                tracking-[0.4em]
                mb-2
                block
              "
            >
              Inspired by this space?
            </span>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-milchella
                font-semibold
                tracking-wide
                text-white
                leading-tight
              "
            >
              Let's design your{" "}

              <span className="italic text-[#C9A227]">
                sanctuary.
              </span>
            </h2>
          </div>

          {/* BUTTONS */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              sm:flex-row
              items-center
              gap-4
              w-full
              md:w-auto
              shrink-0
            "
          >

            {/* PRIMARY */}
            <Link
              to="/contact"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                bg-[#C9A227]
                text-black
                font-black
                uppercase
                tracking-[0.2em]
                text-[10px]
                md:text-xs
                rounded-2xl
                hover:bg-[#E5C76B]
                transition-all
                duration-300
                text-center
                shadow-[0_15px_40px_rgba(201,162,39,0.3)]
              "
            >
              Book Consult
            </Link>

            {/* SECONDARY */}
            <Link
              to="/projects"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                bg-black/20
                backdrop-blur-xl
                border
                border-[#C9A227]/10
                text-white
                font-black
                uppercase
                tracking-[0.2em]
                text-[10px]
                md:text-xs
                rounded-2xl
                hover:border-[#C9A227]/40
                hover:text-[#E5C76B]
                transition-all
                duration-300
                text-center
              "
            >
              Next Project →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetails;