import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data/data'; // Ensure this path is correct

const ProjectsPage = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* 1. ON-PAGE SEO & JSON-LD SCHEMA */}
      <Helmet>
        <title>Our Portfolio | Illusion Interior Studio Hyderabad</title>
        <meta 
          name="description" 
          content="Explore our curated collection of luxury interior design projects across Hyderabad's most prestigious addresses. Spaces designed to inspire life." 
        />
        <meta name="keywords" content="interior design portfolio, luxury interiors Hyderabad, apartment interior designs, modern villa interiors, Illusion Interior Studio projects" />
        <link rel="canonical" href="https://www.illusioninteriors.com/projects" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Portfolio | Illusion Interior Studio" />
        <meta property="og:description" content="Explore our curated collection of luxury interior design projects across Hyderabad's most prestigious addresses." />
        <meta property="og:url" content="https://www.illusioninteriors.com/projects" />

        {/* JSON-LD Schema for Portfolio / ImageGallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Illusion Interior Studio Portfolio",
            "description": "A curated collection of luxury interior design projects.",
            "url": "https://www.illusioninteriors.com/projects",
            "publisher": {
              "@type": "InteriorDesignBusiness",
              "name": "Illusion Interior Studio"
            }
          })}
        </script>
      </Helmet>

      {/* SEMANTIC MAIN WRAPPER */}
      <main className="bg-white pt-32 pb-40 lg:pb-48 min-h-screen overflow-hidden relative z-0">
        
        {/* BACKGROUND GRADIENT (Decorative) */}
        <div aria-hidden="true" className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />

        {/* SOFT PURPLE GLOW (Decorative) */}
        <div aria-hidden="true" className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/15 blur-3xl rounded-full -z-10" />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          
          {/* GRAND HERO SECTION */}
          <header
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
              <m.span
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
              </m.span>

              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                  font-abhre text-[#111827] leading-[1.05]
                "
              >
                Spaces designed to <br />
                <span className="italic text-[#8B5CF6]">
                  inspire life.
                </span>
              </m.h1>
            </div>

            {/* RIGHT CONTENT */}
            <m.p
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
            </m.p>
          </header>

          {/* PROJECT GRID */}
          <section>
            <m.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {portfolioData.map((project, index) => (
                  <m.div
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
                      aria-label={`View details for ${project.title} located at ${project.community}`}
                      className="block w-full h-full relative"
                    >
                      {/* IMAGE: Optimized for Performance */}
                      <img
                        src={project.heroImage}
                        alt={`${project.title} interior design`}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                        draggable="false"
                        className="
                          absolute inset-0 w-full h-full object-cover
                          transition-transform duration-700
                          group-hover:scale-105 bg-gray-100
                        "
                      />

                      {/* SUBTLE IMAGE OVERLAY */}
                      <div
                        aria-hidden="true"
                        className="
                          absolute inset-0 
                          bg-gradient-to-t from-black/40 via-black/5 to-transparent
                        "
                      />

                      {/* PURPLE HOVER GLOW */}
                      <div
                        aria-hidden="true"
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

                          {/* TITLE: Upgraded to h2 for proper Document Hierarchy */}
                          <h2
                            className="
                              text-xl md:text-2xl lg:text-3xl
                              font-abhre text-[#1F2937]
                              leading-tight m-0
                            "
                          >
                            {project.title}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </m.div>
                ))}
              </AnimatePresence>
            </m.div>
          </section>
          
        </div>
      </main>
    </LazyMotion>
  );
};

export default ProjectsPage;
