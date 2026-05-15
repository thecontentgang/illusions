import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';

const ProjectsSection = () => {
  const featuredProjects = portfolioData.slice(0, 4);

  return (
    <section className="relative py-20 md:py-28 bg-white px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* BACKGROUND (Hidden from screen readers) */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2FF]" />

      {/* PURPLE GLOW (Hidden from screen readers) */}
      <div aria-hidden="true" className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.35em] mb-4 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-abhre font-semibold text-[#1F2937] leading-tight">
              Creating spaces that <br />
              <span className="italic text-[#8B5CF6]">inspire</span> living.
            </h2>
          </div>

          {/* DESKTOP BUTTON */}
          <Link
            to="/projects"
            aria-label="View all portfolio projects"
            className="
              hidden md:flex items-center justify-center px-7 py-4 bg-[#8B5CF6] border border-[#8B5CF6] 
              rounded-2xl text-xs font-black uppercase tracking-[0.25em] text-white hover:bg-[#7C3AED] 
              hover:border-[#7C3AED] hover:shadow-[0_12px_35px_rgba(139,92,246,0.35)] transition-all duration-300
              outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2
            "
          >
            View All Projects
          </Link>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              // Added a slight margin so it starts animating *just before* it hits the screen
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="
                group relative overflow-hidden rounded-[2rem] h-[280px] md:h-[340px] lg:h-[380px]
                bg-[#E5E7EB] /* Solid fallback color while image loads */
                border border-white/50 shadow-[0_20px_60px_rgba(139,92,246,0.12)]
                hover:shadow-[0_20px_60px_rgba(139,92,246,0.22)] transition-all duration-500
                will-change-transform
              "
            >
              {/* CARD GLOW */}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/5 pointer-events-none z-10" />

              <Link
                to={`/projects/${project.id}`}
                aria-label={`View details for ${project.title}`}
                className="block w-full h-full relative outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6] focus-visible:ring-inset"
              >
                {/* IMAGE */}
                <img
                  src={project.heroImage}
                  alt={`${project.title} - ${project.category} project`}
                  loading="lazy"
                  decoding="async" /* CRITICAL FOR SCROLL PERFORMANCE */
                  draggable="false"
                  // OPTIONAL BUT RECOMMENDED: If you have different sizes in your data
                  // srcSet={`${project.heroImageSm} 640w, ${project.heroImage} 1024w`}
                  // sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    absolute inset-0 w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105 will-change-transform transform-gpu backface-hidden z-0
                  "
                />

                {/* OVERLAYS */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-2 md:p-3 z-20">
                  <div className="rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2">
                    <h3 className="text-[10px] md:text-xs font-black uppercase text-center tracking-[0.25em] text-[#8B5CF6] mb-2">
                      {project.category}
                    </h3>
                    <p className="text-xl md:text-2xl text-center font-semibold text-white leading-tight">
                      {project.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <Link
          to="/projects"
          aria-label="Explore the full portfolio"
          className="
            flex md:hidden justify-center items-center w-full mt-10 px-8 py-4 bg-[#8B5CF6] 
            rounded-2xl text-xs font-black uppercase tracking-[0.25em] text-white 
            shadow-[0_12px_35px_rgba(139,92,246,0.35)] hover:bg-[#7C3AED] transition-all duration-300
            outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2
          "
        >
          Explore Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;