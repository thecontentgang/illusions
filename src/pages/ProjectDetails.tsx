import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Added for SEO
import { portfolioData } from '../data/data';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === id);

  useEffect(() => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="bg-white min-h-screen overflow-hidden relative z-0">
      {/* --- DYNAMIC SEO META TAGS --- */}
      <Helmet>
        <title>{project.title} | Your Portfolio Name</title>
        <meta name="description" content={`Explore ${project.title}, a ${project.category} project located in ${project.community}.`} />
        <meta property="og:title" content={project.title} />
        <meta property="og:image" content={project.heroImage} />
        <meta property="og:type" content="article" />
        {/* Preload the LCP (Largest Contentful Paint) image */}
        <link rel="preload" as="image" href={project.heroImage} />
      </Helmet>

      {/* BACKGROUND DECORATIONS (Hidden from screen readers) */}
      <div aria-hidden="true" className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />
      <div aria-hidden="true" className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C4B5FD]/15 blur-3xl rounded-full -z-10" />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] md:h-[85vh] w-full bg-[#F3F4F6]">
        {/* BACK BUTTON */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <Link
            to="/projects"
            aria-label="Go back to portfolio projects"
            className="
              group flex items-center gap-3 text-[#1F2937] text-[10px] font-black uppercase tracking-[0.3em]
              hover:text-[#8B5CF6] transition-colors bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full 
              border border-[#E5E7EB] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2
            "
          >
            <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Portfolio
          </Link>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={project.heroImage}
            alt={`Hero view of ${project.title}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            // ADD RESPONSIVE SIZES/SRCSET IF AVAILABLE IN YOUR DATA:
            // srcSet={`${project.heroImageSm} 640w, ${project.heroImageMd} 1024w, ${project.heroImage} 1920w`}
            // sizes="100vw"
            className="w-full h-full object-cover will-change-transform transform-gpu backface-hidden"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* OVERLAYS */}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_40%)] pointer-events-none" />
        </motion.div>
      </section>

      {/* TITLE BLOCK */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto -mt-32 md:-mt-48 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative overflow-hidden bg-white/85 backdrop-blur-2xl p-10 md:p-16 lg:p-20 rounded-[3rem] shadow-[0_30px_90px_rgba(139,92,246,0.1)] border border-white/60"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/10 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              {project.category} • {project.community}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wider text-[#1F2937] leading-[1.1] mb-12">
              {project.title}
            </h1>

            {/* PROJECT MATRIX */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#E5E7EB]">
              {[
                { label: 'Client', value: project.client },
                { label: 'Location', value: project.community },
                { label: 'Area', value: project.area },
                { label: 'Year', value: project.year },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                    {stat.label}
                  </h2>
                  <p className="text-sm md:text-base font-bold text-[#1F2937]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-[400px] md:auto-rows-[600px] grid-flow-dense">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`${img.layout || ''} rounded-[2.5rem] overflow-hidden bg-[#E5E7EB] group relative border border-[#E5E7EB] shadow-[0_15px_40px_rgba(139,92,246,0.06)]`}
            >
              <img
                src={img.src}
                alt={`${project.title} architectural detail ${i + 1}`}
                loading="lazy"
                decoding="async"
                width="800" 
                height="600" 
                className="w-full h-full object-cover will-change-transform transform-gpu backface-hidden transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#7C3AED]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_25px_60px_rgba(139,92,246,0.12)] border border-[#E5E7EB]"
        >
          <div aria-hidden="true" className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#C4B5FD] to-[#8B5CF6]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/10 pointer-events-none" />

          <div className="relative z-10 text-center md:text-left pl-2">
            <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
              Inspired by this space?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-[#1F2937] leading-tight">
              Let's design your <span className="italic text-[#8B5CF6]">sanctuary.</span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              aria-label="Book a consultation"
              className="w-full sm:w-auto px-8 py-4 bg-[#8B5CF6] text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-2xl hover:bg-[#7C3AED] transition-all duration-300 text-center shadow-[0_12px_35px_rgba(139,92,246,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B5CF6]"
            >
              Book Consult
            </Link>
            <Link
              to="/projects"
              aria-label="View the next project"
              className="w-full sm:w-auto px-8 py-4 bg-[#F8FAFC] border border-[#E5E7EB] text-[#6B7280] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-2xl hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] transition-all duration-300 text-center shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B5CF6]"
            >
              Next Project →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ProjectDetails;