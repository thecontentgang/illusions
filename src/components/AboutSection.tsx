import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFDFF] px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Visual Side (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Container */}
            <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden  relative z-10">
              <img 
                src="/about-image.png" 
                alt="Our Design Studio" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Thick Floating Stat - The "Designer" Touch */}
           <motion.div 
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, ease: "easeOut" }}
  /* 
     - Reduced padding (p-4 md:p-5)
     - Sharper tracking for a "boutique" look
     - Glassmorphism effect added for a sleek finish
  */
  className="absolute -bottom-4 -right-2 md:-right-6 z-20 bg-[#C4B5FD] backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_20px_40px_rgba(196,181,253,0.4)] border border-white/20 text-white flex items-center gap-4"
>
  {/* The Number: Reduced size but kept 'Black' weight for thickness */}
  <div className="flex flex-col items-center border-r border-white/30 pr-4">
    <p className="text-3xl md:text-4xl font-black leading-none tracking-tighter">08</p>
    <p className="text-[8px] font-black uppercase">Plus</p>
  </div>

  {/* The Text: High tracking, ultra-compact */}
  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] leading-tight opacity-90">
    Years of<br/>
    <span className="text-white">Expertise</span>
  </p>
</motion.div>
          </motion.div>

          {/* Content Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <header>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#8972e7] text-[10px] md:text-xs font-black uppercase mb-3 block"
              >
                Interios Illustrations
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-milchella font-semibold text-[#374151] leading-[1.1] tracking-wider"
              >
                Where heritage <br/> meets <span className="text-[#8B5CF6] italic">modernity.</span>
              </motion.h2>
            </header>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-xl font-medium"
            >
              Based in the heart of Hyderabad, we specialize in creating homes that tell a story. We blend honest materials with intentional, thick lines to craft spaces that breathe.
            </motion.p>

            {/* Features Grid - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Bespoke Curation", desc: "Tailored to your lifestyle." },
                { title: "Native Roots", desc: "Indian warmth, global style." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 bg-white rounded-2xl border-l-[5px] border-[#C4B5FD] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <h4 className="font-bold text-[#374151] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-tight">{item.desc}</p>
                </motion.div>
              ))}
            </div>
                <Link to="/about">
            <motion.button 
              whileHover={{ x: 5 }}
              className="mt-4 flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#374151] group"
            >
              Learn our process
              <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#C4B5FD] group-hover:text-white transition-all duration-300">
                →
              </span>
            </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;