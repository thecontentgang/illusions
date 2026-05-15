import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data'; // Ensure this path is correct

const ProjectsPage = () => {
  return (
    <div className="bg-white pt-32 pb-40 lg:pb-48 min-h-screen overflow-hidden relative z-0">
      
      {/* BACKGROUND GRADIENT */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />

      {/* SOFT PURPLE GLOW */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/15 blur-3xl rounded-full -z-10" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* GRAND HERO SECTION */}
        <div
          className="
            flex flex-col lg:flex-row lg:items-end justify-between
            gap-10 lg:gap-16
            mb-14 md:mb-20
            border-b border-gray-200
            pb-10 md:pb-12
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[#8B5CF6]
                text-[9px] sm:text-[10px]
                font-black uppercase tracking-[0.35em] sm:tracking-[0.4em]
                mb-3 md:mb-4 block
              "
            >
              Our Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                 font-abhre
                text-[#111827]
                leading-[1.05]
              "
            >
              Spaces designed to <br />
              <span className="italic text-[#8B5CF6]">
                inspire life.
              </span>
            </motion.h1>
          </div>

          {/* RIGHT CONTENT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="
              text-gray-500
              font-medium
              text-sm sm:text-base
              leading-relaxed
              max-w-md
              lg:text-right
            "
          >
            A curated collection of our finest work across Hyderabad’s
            most prestigious addresses. Step inside and explore.
          </motion.p>
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="
                  group relative overflow-hidden rounded-[2rem]
                  h-[280px] md:h-[340px] lg:h-[400px]
                  bg-white border border-[#E5E7EB]
                  shadow-[0_15px_40px_rgba(139,92,246,0.08)]
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
                      absolute inset-0 w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* SUBTLE IMAGE OVERLAY (To ensure image depth without being too dark) */}
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-t from-black/40 via-black/5 to-transparent
                    "
                  />

                  {/* PURPLE HOVER GLOW */}
                  <div
                    className="
                      absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#7C3AED]/20
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    "
                  />

                  {/* CONTENT (White Glassmorphism) */}
                  <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
                    <div
                      className="
                        rounded-[1.5rem]
                        bg-white/35 backdrop-blur-xl
                        border border-white/50
                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                        px-6 py-5
                        transform transition-transform duration-500
                        group-hover:-translate-y-1
                      "
                    >
                      {/* CATEGORY & COMMUNITY */}
                      <p
                        className="
                          text-[10px] md:text-xs font-black uppercase tracking-[0.25em]
                          text-[#8B5CF6] mb-2
                        "
                      >
                        {project.category} • {project.community}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          text-xl md:text-2xl lg:text-3xl
                          font-abhre text-[#1F2937]
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