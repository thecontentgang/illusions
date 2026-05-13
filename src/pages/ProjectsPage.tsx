import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';



const categories = ['All', 'Villa', 'Apartment', 'Commercial'];

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
              className={`px-7 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${filter === cat
                ? 'bg-[#1F2937] border-[#1F2937] text-white shadow-lg shadow-gray-900/20'
                : 'bg-transparent border-gray-200 text-gray-500 hover:border-[#8B5CF6] hover:text-[#374151] hover:bg-white'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* DYNAMIC MASONRY GRID */}
        <motion.div
          layout
          // Added grid-flow-dense to pack cards tightly and auto-rows for height control
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px] grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                // Added physical lift (-translate-y-2) and massive shadow on hover
                className={`${project.layout} relative group rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out`}
              >
                <Link to={`/projects/${project.id}`} className="block w-full h-full relative">

                  {/* Project Image Container */}
                  <div className="absolute inset-0 bg-[#E5E7EB] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      fetchPriority="high"
                      className="w-full h-full object-cover will-change-transform transform-gpu transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 font-serif italic -z-10">
                      <span>Image Placeholder</span>
                      <span className="text-sm">{project.community}</span>
                    </div>
                  </div>

                  {/* Glassmorphism Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/95 via-[#1F2937]/40 to-transparent opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500" />

                  {/* Project Details Panel */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">

                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.3em] mb-3 block transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                          {project.category} • {project.community}
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.title}
                        </h3>
                      </div>

                      {/* Elegant Arrow Button */}
                      <div className="w-14 h-14 rounded-full bg-white text-[#1F2937] flex items-center justify-center scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
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