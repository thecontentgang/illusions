import { motion } from 'framer-motion';
import {Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-white pt-24 pb-12 overflow-hidden">

      {/* 1. ARCHITECTURAL HERO: The Vision */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block"
            >
              Interior Illusion Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold font-serif text-[#374151] leading-[1.05] tracking-wider"
            >
              Redefining the <br />
              <span className="text-[#8B5CF6] italic">Modern Indian</span> Home.
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 lg:pt-20"
          >
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
              Based in Hyderabad, Interior Illusion is an architectural practice dedicated to the art of meaningful, high-end living. We don't just decorate spaces; we engineer lifestyles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & VISION: High-Contrast Blocks */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* Mission Card (Dark & Thick) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F2937] text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle background letter */}


            <span className="relative z-10 text-[#C4B5FD] text-[10px] font-black font-josefin uppercase tracking-[0.4em] mb-6 block">
              Our Mission
            </span>
            <h3 className="relative z-10 text-3xl md:text-4xl font-milchella font-semibold tracking-wider  mb-6 leading-tight">
              To engineer lifestyles through bespoke design.
            </h3>
            <p className="relative z-10 text-gray-400 font-medium leading-relaxed text-sm md:text-base">
              We commit to crafting spaces that perfectly balance the timeless warmth of Indian heritage with striking, modern minimalism. Every project is an exercise in empathy, precision, and artistry.
            </p>
          </motion.div>

          {/* Vision Card (Light & Thick) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-10 md:p-16 rounded-[2.5rem] shadow-inner border-[6px] border-white relative overflow-hidden group"
          >
            

            <span className="relative z-10 text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              Our Vision
            </span>
            <h3 className="relative z-10 text-3xl md:text-4xl font-milchella font-semibold tracking-wider text-[#374151] mb-6 leading-tight">
              Defining the future of <span className="italic">luxury living.</span>
            </h3>
            <p className="relative z-10 text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              To be the most trusted architectural and interior studio shaping the skylines and sanctuaries of Hyderabad's premier addresses, recognized for our uncompromising quality and soulful aesthetics.
            </p>
          </motion.div>

        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">

        {/* Compact & Sleek Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-gray-200 pb-8">
          <div>
            <span className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-milchella font-semibold tracking-wider text-[#374151] leading-tight">
              The architecture of <span className="italic text-[#8B5CF6]">experience.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm">
            We believe design should be invisible, yet deeply felt. Here is how we engineer your sanctuary.
          </p>
        </div>

        {/* Compact Grid with Sleek Lilac Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              id: "01",
              title: "Honest Materials",
              desc: "We favor raw stone, natural wood, and breathable textiles that age gracefully over time, bringing tactile richness to daily life."
            },
            {
              id: "02",
              title: "Intentional Lines",
              desc: "Every curve, arch, and corner is designed with absolute purpose, balancing minimal aesthetics with natural light."
            },
            {
              id: "03",
              title: "Cultural Depth",
              desc: "We seamlessly integrate traditional Indian warmth and spatial principles with striking, contemporary global aesthetics."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              /* 
                Sleek Design: Solid Lilac background, thin 1px border, smaller border-radius 
              */
              className="bg-[#C4B5FD] p-6 md:p-8 rounded-2xl border border-[#A78BFA]/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Sleek Minimalist Numbering */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-8 h-8 rounded-full border border-[#1F2937]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#1F2937] rounded-full group-hover:scale-150 transition-transform" />
                  </div>
                  <span className="text-sm font-bold text-[#1F2937]/40 font-mono tracking-widest">
                    {item.id}
                  </span>
                </div>

                {/* Crisp, High-Contrast Typography */}
                <h3 className="font-serif text-xl md:text-2xl text-[#1F2937] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1F2937]/70 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* 5. PRESTIGE & COMMUNITIES: Building Trust */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
          <div className="lg:w-1/3">
            <span className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Footprint</span>
            <h3 className="text-4xl md:text-5xl font-milchella font-semibold tracking-wider text-[#374151] leading-tight">
              Trusted across <br /> Hyderabad's most <br />
              <span className="text-[#C4B5FD] italic">premier</span> addresses.
            </h3>
          </div>
          <div className="lg:w-2/3 flex flex-wrap gap-4 md:gap-5">
            {["Aparna Zicon", "ASBL Spire", "Cyber Wood", "EIPL Cornerstone", "ASBL Spectra", "& Many More"].map((community, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "#C4B5FD", color: "#ffffff", borderColor: "#C4B5FD" }}
                className="px-6 md:px-8 py-3 md:py-4 border-[3px] border-gray-100 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 cursor-default transition-colors shadow-sm"
              >
                {community}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE FOUNDER: Trust & Story */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden relative z-10">
              <img src="/founder.jpeg" alt="Nikhil - Founder of Interior Illusion" className="w-full h-full object-center object-cover  transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-[#C4B5FD] p-6 md:p-8 rounded-[2rem] shadow-xl text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90 mb-1">Founder</p>
              <h4 className="text-3xl font-serif leading-none">Nikhil.</h4>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <header>
              <span className="text-[#C4B5FD] text-[10px] font-milchella md:text-xs font-black uppercase tracking-[0.3em] block mb-3">The Visionary</span>
              <h2 className="text-4xl md:text-6xl font-milchella font-semibold tracking-wider text-[#374151] leading-tight">
                Design is an act of <br /> <span className="italic">soulful curation.</span>
              </h2>
            </header>

            <div className="space-y-4 text-gray-500 text-base md:text-lg leading-relaxed font-medium">
              <p>With a profound understanding of spatial dynamics and luxury aesthetics, Nikhil founded Interior Illusion to bridge the gap between architectural precision and lived-in warmth.</p>
              <p>Having delivered exclusive projects across Hyderabad's elite communities, his approach is deeply personal. He believes that true luxury isn't just about expensive materials—it's about creating an environment that intuitively aligns with how a family moves, rests, and connects.</p>
            </div>

            

            <motion.a href="https://wa.me/918317503596" target="_blank" rel="noreferrer" whileHover={{ x: 10 }} className="inline-flex items-center gap-4 bg-[#1F2937] hover:bg-[#C4B5FD] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg transition-all duration-300 group mt-4">
              Direct Chat with Nikhil
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/30 flex items-center justify-center transition-colors">→</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 7. COMPACT CONVERSION CTA */}
      <section className="px-6 py-16 md:py-24">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-5xl mx-auto bg-[#1F2937] rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-16 py-14 md:py-16 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
        >

          {/* Top Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[3px] bg-[#C4B5FD] rounded-full shadow-[0_0_25px_rgba(196,181,253,0.7)]" />

          {/* Small Tag */}
          <span className="inline-block text-[#C4B5FD] text-[10px] md:text-xs font-black uppercase tracking-[0.35em] mb-5">
            Let’s Build Something Timeless
          </span>

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-milchella font-semibold  tracking-wider">
            Ready to create your <br />
            <span className="text-[#C4B5FD] italic">
              dream interior?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed font-medium">
            From luxury villas to modern apartments, we craft elegant interiors
            tailored to your lifestyle with refined detailing and timeless aesthetics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/contact">
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#C4B5FD] text-white font-black uppercase tracking-[0.18em] text-[10px] md:text-xs rounded-2xl hover:shadow-[0_10px_30px_rgba(196,181,253,0.4)] hover:scale-[1.02] transition-all duration-300">
              Book Consultation
            </button>
            </Link>

            <Link to="/projects">
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-black uppercase tracking-[0.18em] text-[10px] md:text-xs rounded-2xl hover:border-[#C4B5FD]/60 hover:bg-white/10 transition-all duration-300">
              Explore Portfolio
            </button>
            </Link>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;