import { motion } from 'framer-motion';

const HeroIllustration = () => {
  return (
    // The wrapper creates the "slanty" isometric effect and floating animation
    <motion.div 
      initial={{ opacity: 0, x: 50, rotate: -15, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: -2, scale: 1.05 }}
      className="relative w-full max-w-lg mx-auto drop-shadow-2xl cursor-pointer"
    >
      {/* Background ambient glow matching your Lilac color */}
      <div className="absolute inset-0 bg-[#C4B5FD] blur-[80px] opacity-30 rounded-full" />

      {/* The Vector Illustration */}
      <svg 
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-auto drop-shadow-xl"
      >
        {/* Floor Base */}
        <path d="M100 450 L500 450 L450 550 L50 550 Z" fill="#F3F4F6" />
        <path d="M100 450 L500 450 L450 550 L50 550 Z" fill="url(#floorGradient)" opacity="0.5" />

        {/* Back Wall (Charcoal) */}
        <rect x="100" y="150" width="400" height="300" rx="20" fill="#1F2937" />

        {/* Abstract Architectural Arch (Lilac) */}
        <path d="M200 450 V 250 A 100 100 0 0 1 400 250 V 450 Z" fill="#C4B5FD" opacity="0.9" />

        {/* Floating Lamp / Sun / Sphere */}
        <circle cx="300" cy="200" r="40" fill="#FDFDFF" />
        <circle cx="300" cy="200" r="60" fill="#FDFDFF" opacity="0.1" />

        {/* Abstract Sofa Block 1 */}
        <rect x="150" y="380" width="200" height="60" rx="10" fill="#374151" />
        {/* Abstract Sofa Block 2 (Seat) */}
        <path d="M130 420 L370 420 L350 480 L110 480 Z" fill="#4B5563" />

        {/* Minimalist Coffee Table */}
        <rect x="250" y="460" width="150" height="15" rx="5" fill="#E5E7EB" />
        <rect x="270" y="475" width="8" height="30" fill="#9CA3AF" />
        <rect x="370" y="475" width="8" height="30" fill="#9CA3AF" />

        {/* Accent Plant/Decor */}
        <rect x="420" y="350" width="40" height="100" rx="20" fill="#C4B5FD" opacity="0.7" />
        <circle cx="440" cy="330" r="25" fill="#9CA3AF" opacity="0.8" />

        {/* SVG Gradients & Definitions */}
        <defs>
          <linearGradient id="floorGradient" x1="50" y1="550" x2="500" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4B5FD" stopOpacity="0.2"/>
            <stop offset="1" stopColor="#1F2937" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default HeroIllustration;