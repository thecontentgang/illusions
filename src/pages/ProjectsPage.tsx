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
    // Increased pb-40 and lg:pb-48 to ensure huge spacing before footer
    <div className="bg-[#FDFDFF] pt-32 pb-40 lg:pb-48 min-h-screen">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* GRAND HERO SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 mb-14 md:mb-20 border-b border-gray-200 pb-10 md:pb-12">

          {/* Left Content */}
          <div className="max-w-4xl">

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#8B5CF6] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.35em] sm:tracking-[0.4em] mb-3 md:mb-4 block"
            >
              Our Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl
        font-serif
        text-[#374151]
        leading-[1.05]
        tracking-tight
      "
            >
              Spaces designed to <br />
              <span className="italic text-[#8B5CF6]">
                inspire life.
              </span>
            </motion.h1>
          </div>

          {/* Right Content */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="
      text-gray-500
      font-medium
      text-sm
      sm:text-base
      leading-relaxed
      max-w-md
      lg:text-right
    "
          >
            A curated collection of our finest work across Hyderabad’s most prestigious addresses. Step inside and explore.
          </motion.p>
        </div>

        {/* SLEEK FILTER BAR */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => setFilter(cat)}
              
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* DYNAMIC MASONRY GRID */}
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
          bg-[#F3F4F6]
          shadow-[0_12px_40px_rgba(0,0,0,0.08)]
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
              from-black/85
              via-black/10
              to-transparent
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
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
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
                  text-[#C4B5FD]
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
                  font-serif
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