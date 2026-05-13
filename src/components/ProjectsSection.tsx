import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';

const ProjectsSection = () => {
  const featuredProjects = portfolioData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white px-5 md:px-10 lg:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">

          <div className="max-w-2xl">

            <span
              className="
                text-[#8B5CF6]
                text-[10px]
                font-black
                uppercase
                tracking-[0.35em]
                mb-4
                block
              "
            >
              Selected Works
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-milchella
                font-semibold
                tracking-wider
                text-[#374151]
                leading-tight
              "
            >
              Creating spaces that <br />

              <span className="italic text-[#8B5CF6]">
                inspire
              </span>{" "}

              living.
            </h2>
          </div>

          {/* DESKTOP BUTTON */}
          <Link
            to="/projects"
            className="
              hidden
              md:flex
              items-center
              justify-center
              px-7
              py-4
              bg-[#8B5CF6]
              border
              border-[#8B5CF6]
              rounded-2xl
              text-xs
              font-black
              uppercase
              tracking-[0.25em]
              text-white
              hover:bg-white
              hover:text-[#374151]
              transition-all
              duration-300
            "
          >
            View All Projects
          </Link>
        </div>

        {/* PROJECTS GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            md:gap-7
          "
        >

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
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
                    from-black/80
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
                    p-2
                    md:p-3
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
                      px-3
                      py-2
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        md:text-xs
                        font-black
                        uppercase
                        text-center
                        tracking-[0.25em]
                        text-[#C4B5FD]
                        mb-2
                      "
                    >
                      {project.category}
                    </p>

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        text-center
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
        </div>

        {/* MOBILE BUTTON */}
        <Link
          to="/projects"
          className="
            flex
            md:hidden
            justify-center
            items-center
            w-full
            mt-10
            px-8
            py-4
            bg-[#8B5CF6]
            rounded-2xl
            text-xs
            font-black
            uppercase
            tracking-[0.25em]
            text-white
            shadow-lg
          "
        >
          Explore Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;