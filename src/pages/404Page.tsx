import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden relative z-0 px-6">
      
      {/* BACKGROUND GRADIENT */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />

      {/* SOFT PURPLE GLOW (Top Right) */}
      <div className="fixed top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#C4B5FD]/20 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* SOFT PURPLE GLOW (Bottom Left) */}
      <div className="fixed bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#8B5CF6]/15 blur-3xl rounded-full -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative
          w-full max-w-lg
          bg-white/80 backdrop-blur-2xl
          border border-[#E5E7EB]
          rounded-[2.5rem] md:rounded-[3.5rem]
          p-10 md:p-16
          text-center
          shadow-[0_20px_60px_rgba(139,92,246,0.08)]
        "
      >
        {/* INNER GLOW ACCENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/5 rounded-[3.5rem] pointer-events-none" />

        <div className="relative z-10">
          {/* TAG */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#8B5CF6] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Page Not Found
          </motion.span>

          {/* 404 FLOATING TEXT */}
          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-8xl md:text-9xl font-serif font-bold text-[#1F2937] leading-none mb-6 tracking-tighter drop-shadow-sm"
          >
            404
          </motion.h1>

          {/* SUBHEADING */}
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#1F2937] leading-tight mb-4">
            Looks like this space <br />
            <span className="italic text-[#8B5CF6]">is empty.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#6B7280] font-medium text-sm md:text-base leading-relaxed mb-10 max-w-xs mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* BACK TO HOME BUTTON */}
          <Link
            to="/"
            className="
              inline-flex items-center justify-center gap-3
              px-8 py-4 w-full sm:w-auto
              bg-[#8B5CF6] text-white
              text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]
              rounded-2xl
              shadow-[0_12px_35px_rgba(139,92,246,0.35)]
              hover:bg-[#7C3AED] hover:-translate-y-1
              transition-all duration-300
            "
          >
            <span className="text-lg leading-none mb-[2px]">←</span> Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;