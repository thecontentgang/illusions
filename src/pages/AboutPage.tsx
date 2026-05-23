import { m, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    // LazyMotion slashes the JavaScript bundle size by loading animation features asynchronously
    <LazyMotion features={domAnimation} strict>
      {/* ON-PAGE SEO & JSON-LD SCHEMA */}
      <Helmet>
        <title>About Us | Illusion Interior Studio Hyderabad</title>
        <meta 
          name="description" 
          content="Based in Hyderabad, Interior Illusion is an architectural practice dedicated to the art of meaningful, high-end living. Founded by Nikhil, we engineer luxury lifestyles." 
        />
        <meta name="keywords" content="Interior Illusion Studio, Nikhil interior designer, luxury interiors Hyderabad, best interior design studio, bespoke design" />
        <link rel="canonical" href="https://www.illusioninteriors.com/about" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About | Illusion Interior Studio" />
        <meta property="og:description" content="We don't just decorate spaces; we engineer lifestyles. Discover the vision behind Hyderabad's premier interior studio." />
        <meta property="og:image" content="https://www.illusioninteriors.com/founder.jpeg" />
        <meta property="og:url" content="https://www.illusioninteriors.com/about" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "InteriorDesignBusiness",
                "name": "Illusion Interior Studio",
                "image": "https://www.illusioninteriors.com/illusion-dark.png",
                "url": "https://www.illusioninteriors.com",
                "telephone": "+918317503596",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Suncity, Hyderabad",
                  "addressRegion": "Telangana",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "Person",
                "name": "Nikhil",
                "jobTitle": "Founder & Principal Designer",
                "worksFor": {
                  "@type": "InteriorDesignBusiness",
                  "name": "Illusion Interior Studio"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* SEMANTIC MAIN WRAPPER FOR ACCESSIBILITY */}
      <main className="bg-white pt-24 pb-12 overflow-hidden">

        {/* 1. ARCHITECTURAL HERO: The Vision */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <m.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block"
              >
                Interior Illusion Studio
              </m.span>
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-semibold font-serif text-[#111827] leading-[1.05]"
              >
                Redefining the <br />
                <span className="text-[#8B5CF6] italic">Modern Indian</span> Home.
              </m.h1>
            </div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4 lg:pt-20"
            >
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                Based in Hyderabad, Interior Illusion is an architectural practice dedicated to the art of meaningful, high-end living. We don't just decorate spaces; we engineer lifestyles.
              </p>
            </m.div>
          </div>
        </section>

        {/* 2. MISSION & VISION: High-Contrast Blocks */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {/* Mission Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1F2937] text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 text-[#8B5CF6] text-[10px] font-black font-josefin uppercase tracking-[0.4em] mb-6 block">
                Our Mission
              </span>
              <h2 className="relative z-10 text-3xl md:text-4xl font-abhre mb-6 leading-tight">
                To engineer lifestyles through bespoke design.
              </h2>
              <p className="relative z-10 text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                We commit to crafting spaces that perfectly balance the timeless warmth of Indian heritage with striking, modern minimalism. Every project is an exercise in empathy, precision, and artistry.
              </p>
            </m.div>

            {/* Vision Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-10 md:p-16 rounded-[2.5rem] shadow-inner border-[6px] border-white relative overflow-hidden group"
            >
              <span className="relative z-10 text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
                Our Vision
              </span>
              <h2 className="relative z-10 text-3xl md:text-4xl font-abhre text-[#111827] mb-6 leading-tight">
                Defining the future of <span className="italic">luxury living.</span>
              </h2>
              <p className="relative z-10 text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                To be the most trusted architectural and interior studio shaping the skylines and sanctuaries of Hyderabad's premier addresses, recognized for our uncompromising quality and soulful aesthetics.
              </p>
            </m.div>

          </div>
        </section>

        {/* 3. CORE PRINCIPLES */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
  
  {/* Heading */}
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-gray-200 pb-8">
    
    <div>
      <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
        Core Principles
      </span>

      <h2 className="text-3xl md:text-5xl font-abhre text-[#111827] leading-tight">
        The architecture of{" "}
        <span className="italic text-[#8B5CF6]">
          experience.
        </span>
      </h2>
    </div>

    <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm">
      We believe design should be invisible, yet deeply felt. Here is how we engineer your sanctuary.
    </p>
  </div>

  {/* Cards */}
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

      <m.div
        key={i}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="
          bg-gradient-to-br
          from-[#faf7ff]
          via-[#f5f0ff]
          to-[#efe7ff]

          p-6 md:p-8
          rounded-2xl

          border border-[#e9dcff]

          shadow-[0_4px_20px_rgba(139,92,246,0.06)]

          hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)]
          hover:border-[#d8c4ff]

          transition-all duration-500

          flex flex-col justify-between
          group
        "
      >

        <div>

          {/* Top */}
          <div className="flex justify-between items-start mb-8">

            {/* Circle */}
            <div
              aria-hidden="true"
              className="
                w-8 h-8
                rounded-full
                border border-[#d8c4ff]
                bg-white/70
                flex items-center justify-center
                backdrop-blur-sm
              "
            >
              <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full group-hover:scale-150 transition-transform duration-300" />
            </div>

            {/* Number */}
            <span className="text-sm font-bold text-[#8B5CF6]/50 font-mono tracking-widest">
              {item.id}
            </span>

          </div>

          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl text-[#1f1b2d] mb-3">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[#4b445d] text-sm leading-relaxed font-medium">
            {item.desc}
          </p>

        </div>

      </m.div>
    ))}

  </div>
</section>

        {/* 4. PRESTIGE & COMMUNITIES */}
        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
            <div className="lg:w-1/3">
              <span className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Footprint</span>
              <h2 className="text-4xl md:text-5xl font-abhre text-[#111827] leading-tight">
                Trusted across <br /> Hyderabad's most <br />
                <span className="text-[#8B5CF6] italic">premier</span> addresses.
              </h2>
            </div>
            <div className="lg:w-2/3 flex flex-wrap gap-4 md:gap-5">
              {["Aparna Zicon", "ASBL Spire", "Cyber Wood", "EIPL Cornerstone", "ASBL Spectra", "& Many More"].map((community, index) => (
                <m.span
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6", color: "#ffffff", borderColor: "#8B5CF6" }}
                  className="px-6 md:px-8 py-3 md:py-4 border-[3px] border-gray-100 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 cursor-default transition-colors shadow-sm"
                >
                  {community}
                </m.span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. THE FOUNDER */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <m.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden relative z-10">
                <img 
                  src="/founder.avif" 
                  alt="Nikhil - Founder of Interior Illusion Studio" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="1000"
                  className="w-full h-full object-center object-cover transition-all duration-700 bg-gray-200" 
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-[#8B5CF6] p-6 md:p-8 rounded-[2rem] shadow-xl text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90 mb-1">Founder</p>
                <h3 className="text-3xl font-serif leading-none m-0">Nikhil.</h3>
              </div>
            </m.div>

            <div className="lg:col-span-7 space-y-8">
              <header>
                <span className="text-[#8B5CF6] text-[10px] font-abhre md:text-xs font-black uppercase tracking-[0.3em] block mb-3">The Visionary</span>
                <h2 className="text-4xl md:text-6xl font-abhre text-[#111827] leading-tight">
                  Design is an act of <br /> <span className="italic text-[#8B5CF6]">soulful curation.</span>
                </h2>
              </header>

              <div className="space-y-4 text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                <p>With a profound understanding of spatial dynamics and luxury aesthetics, Nikhil founded Interior Illusion to bridge the gap between architectural precision and lived-in warmth.</p>
                <p>Having delivered exclusive projects across Hyderabad's elite communities, his approach is deeply personal. He believes that true luxury isn't just about expensive materials—it's about creating an environment that intuitively aligns with how a family moves, rests, and connects.</p>
              </div>

              <m.a 
                href="https://wa.me/918317503596" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ x: 10 }} 
                className="inline-flex items-center gap-4 bg-[#1F2937] hover:bg-[#8B5CF6] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg transition-all duration-300 group mt-4"
                aria-label="Start a direct WhatsApp chat with Nikhil"
              >
                Direct Chat with Nikhil
                <span aria-hidden="true" className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/30 flex items-center justify-center transition-colors">→</span>
              </m.a>
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="px-6 py-16 md:py-24">
          <m.div
            whileHover={{ scale: 1.01 }}
            className="max-w-5xl mx-auto bg-[#1F2937] rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-16 py-14 md:py-16 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
          >
            <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-60 h-[3px] bg-[#8B5CF6] rounded-full shadow-[0_0_25px_rgba(196,181,253,0.7)]" />
            
            <span className="inline-block text-[#8B5CF6] text-[10px] md:text-xs font-black uppercase tracking-[0.35em] mb-5">
              Let’s Build Something Timeless
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-abhre ">
              Ready to create your <br />
              <span className="text-[#8B5CF6] italic">dream interior?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed font-medium">
              From luxury villas to modern apartments, we craft elegant interiors
              tailored to your lifestyle with refined detailing and timeless aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link 
                to="/contact"
                aria-label="Navigate to contact page to book a consultation"
                className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#8B5CF6] text-white font-black uppercase tracking-[0.18em] text-[10px] md:text-xs rounded-2xl hover:shadow-[0_10px_30px_rgba(196,181,253,0.4)] hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center"
              >
                Book Consultation
              </Link>
              <Link 
                to="/projects"
                aria-label="Navigate to the portfolio page to explore projects"
                className="w-full sm:w-auto px-8 md:px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-black uppercase tracking-[0.18em] text-[10px] md:text-xs rounded-2xl hover:border-[#8B5CF6]/60 hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center"
              >
                Explore Portfolio
              </Link>
            </div>
          </m.div>
        </section>
      </main>
    </LazyMotion>
  );
};

export default AboutPage;
