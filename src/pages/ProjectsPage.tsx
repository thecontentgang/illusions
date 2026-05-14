import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';

const categories = [''];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = portfolioData.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <div className="bg-[#111111] pt-32 pb-40 lg:pb-48 min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] -z-10" />

      {/* GOLD GLOW */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* GRAND HERO SECTION */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-10
            lg:gap-16
            mb-14
            md:mb-20
            border-b
            border-[#2A2A2A]
            pb-10
            md:pb-12
          "
        >

          {/* LEFT CONTENT */}
          <div className="max-w-4xl">

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[#E5C76B]
                text-[9px]
                sm:text-[10px]
                font-black
                uppercase
                tracking-[0.35em]
                sm:tracking-[0.4em]
                mb-3
                md:mb-4
                block
              "
            >
              Our Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.7
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              
                font-semibold
                
                text-[#F5F5F5]
                leading-[1.05]
              "
            >
              Spaces designed to <br />

              <span className="italic text-[#C9A227]">
                inspire life.
              </span>
            </motion.h1>
          </div>

          {/* RIGHT CONTENT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.7
            }}
            className="
              text-[#A1A1AA]
              font-medium
              text-sm
              sm:text-base
              leading-relaxed
              max-w-md
              lg:text-right
            "
          >
            A curated collection of our finest work across Hyderabad’s
            most prestigious addresses. Step inside and explore.
          </motion.p>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-16">

          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1
              }}
              onClick={() => setFilter(cat)}
              className="
                px-6
                py-3
                rounded-2xl
                bg-[#1A1A1A]
                border
                border-[#2A2A2A]
                text-[#D1D5DB]
                text-sm
                font-medium
                hover:bg-[#C9A227]
                hover:border-[#C9A227]
                hover:text-black
                transition-all
                duration-300
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              "
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            md:gap-7
          "
        >
          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  h-[280px]
                  md:h-[340px]
                  lg:h-[380px]
                  bg-[#1A1A1A]
                  border
                  border-[#2A2A2A]
                  shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                "
              >

                <Link
                  to={`/projects/${project.id}`}
                  className="block w-full h-full relative"
                >

                  {/* IMAGE */}
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    draggable="false"
                    className="
                      absolute
                      inset-0
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

                  {/* GOLD HOVER GLOW */}
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

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      p-5
                      md:p-6
                    "
                  >

                    {/* GLASS CARD */}
                    <div
                      className="
                        rounded-[1.5rem]
                        bg-black/20
                        backdrop-blur-xl
                        border
                        border-[#C9A227]/10
                        px-5
                        py-4
                      "
                    >

                      {/* CATEGORY */}
                      <p
                        className="
                          text-[10px]
                          md:text-xs
                          font-black
                          uppercase
                          tracking-[0.25em]
                          text-[#E5C76B]
                          mb-2
                        "
                      >
                        {project.category} • {project.community}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          lg:text-3xl
                          font-semibold
                          text-white
                          leading-tight
                        "
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;