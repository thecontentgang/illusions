import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { portfolioData } from '../data/data';

// Mock Data: In a real app, you would fetch this based on the ID from the URL


const ProjectDetails = () => {
  const { id } = useParams();

  // Find the specific project based on the URL ID
  const project = portfolioData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If someone types a wrong URL, redirect them back to the projects page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-[#FDFDFF] min-h-screen">

      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative h-[70vh] md:h-[85vh] w-full bg-[#1F2937]">
        {/* Back Button Overlay */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <Link to="/projects" className="group flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#C4B5FD] transition-colors bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-full object-cover opacity-80 will-change-transform transform-gpu backface-hidden"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFDFF]" />
        </motion.div>
      </section>

      {/* 2. THE THICK TITLE BLOCK (Overlaps the Hero) */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto -mt-32 md:-mt-48 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white p-10 md:p-16 lg:p-20 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border-[6px] border-white"
        >
          <span className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            {project.category} • {project.community}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#374151] leading-[1.1] mb-12">
            {project.title}
          </h1>

          {/* Project Details Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
            {[
              { label: 'Client', value: project.client },
              { label: 'Location', value: project.community },
              { label: 'Area', value: project.area },
              { label: 'Year', value: project.year },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                <p className="text-sm md:text-base font-bold text-[#374151]">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. THE NARRATIVE & MATERIAL PALETTE */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Story & Quote (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <h3 className="text-3xl font-serif text-[#374151]">The Design Narrative</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              {project.story}
            </p>
            <div className="pl-6 md:pl-10 border-l-[4px] border-[#C4B5FD]">
              <p className="text-2xl md:text-3xl font-serif text-[#374151] italic leading-snug">
                "{project.quote}"
              </p>
            </div>
          </motion.div>

          {/* Material Palette - High-end UI feature (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gray-50 p-10 rounded-[2.5rem]"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C4B5FD] mb-8">
              Material Palette
            </h4>
            <div className="space-y-6">
              {project.materials.map((mat, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div
                    className="w-16 h-16 rounded-2xl shadow-inner border-2 border-white group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: mat.hex }}
                  />
                  <div>
                    <p className="font-bold text-[#374151] text-sm">{mat.name}</p>
                    <p className="text-[10px] font-mono tracking-widest text-gray-400 mt-1 uppercase">{mat.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. GRAND GALLERY (More Viewing) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-[400px] md:auto-rows-[600px] grid-flow-dense">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`${img.layout} rounded-[2.5rem] overflow-hidden bg-gray-200 group relative`}
            >
              <img
                src={img.src}
                alt={`Project detail ${i + 1}`}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="w-full h-full object-cover will-change-transform transform-gpu backface-hidden transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-[#374151]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. NEXT PROJECT / CTA */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1F2937] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Sleek Vertical Accent Line */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#C4B5FD]" />

          {/* Left: Punchy Text */}
          <div className="text-center md:text-left">
            <span className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
              Inspired by this space?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Let's design your <span className="italic text-[#C4B5FD]">sanctuary.</span>
            </h2>
          </div>

          {/* Right: Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#C4B5FD] text-[#1F2937] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-xl hover:bg-white transition-colors text-center shadow-lg"
            >
              Book Consult
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-xl hover:border-[#C4B5FD] hover:text-[#C4B5FD] transition-colors text-center"
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