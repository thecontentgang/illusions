import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';

const ProjectsSection = () => {
  const featuredProjects = portfolioData.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          
          <div className="max-w-2xl">
            <span className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Selected Works
            </span>

            <h2 className="text-4xl md:text-6xl font-milchella font-semibold tracking-wider text-[#374151] leading-tight">
              Creating spaces that <br />
              <span className="italic text-[#C4B5FD]">
                inspire
              </span>{" "}
              living.
            </h2>
          </div>

          {/* Desktop Button */}
          <Link
            to="/projects"
            className="hidden md:block px-8 py-4 bg-[#C4B5FD] border border-[#C4B5FD] rounded-xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-gray-50 hover:text-[#374151] transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {featuredProjects.map((project, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 will-change-transform transform-gpu ${
                  isLarge ? 'md:aspect-[4/5]' : 'md:aspect-square'
                } aspect-[4/5] shadow-2xl cursor-pointer`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block w-full h-full relative"
                >

                  {/* Image */}
                  <div className="absolute inset-0 bg-[#E5E7EB] will-change-transform transform-gpu transition-transform duration-700 ease-out group-hover:scale-105">

                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      fetchPriority={index === 0 ? "high" : "auto"}
                      className="w-full h-full object-cover will-change-transform transform-gpu backface-hidden"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Fallback */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-milchella italic -z-10">
                      {project.title}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#374151]/90 via-[#374151]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">

                    <div className="flex items-end justify-between">

                      <div className="text-white">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C4B5FD] mb-2">
                          {project.category} / {project.community}
                        </p>

                        <h3 className="text-2xl md:text-3xl font-milchella leading-none">
                          {project.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div className="w-12 h-12 rounded-full bg-white text-[#374151] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 shadow-xl">

                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>

                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <Link
          to="/projects"
          className="flex justify-center items-center w-full mt-12 md:hidden px-8 py-5 bg-[#C4B5FD] rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
        >
          Explore All Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;