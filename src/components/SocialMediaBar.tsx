import { motion } from "framer-motion";

const socialLinks = [
  {
    id: "instagram",
    href: "https://www.instagram.com/interiorillusions_india/",
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    href: "https://wa.me/918317503596",
    label: "WhatsApp",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    ),
  },
  {
    id: "phone",
    href: "tel:+918317503596",
    label: "Call Us",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@Interiorillusions_",
    label: "YouTube",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const SocialMediaBar = () => {
  return (
    <div className="fixed right-3 sm:right-5 bottom-10 z-[999] flex flex-col items-center gap-6">
      {/* 1. SOCIAL MEDIA ICONS CONTAINER */}
      <div className="flex flex-col gap-2.5">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.08, x: -4 }}
            whileTap={{ scale: 0.94 }}
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-[#A1A1AA] hover:text-black hover:bg-[#C9A227] hover:border-[#C9A227] hover:shadow-[0_12px_35px_rgba(201,162,39,0.35)] transition-all duration-300 backdrop-blur-xl"
          >
            <span className="absolute inset-0 rounded-2xl ring-0 ring-[#C9A227]/30 group-hover:ring-4 transition-all duration-300" />
            <span className="relative z-10">{social.icon}</span>
          </motion.a>
        ))}
      </div>

      {/* 2. CONNECTOR LINE - Positioned between groups */}
      <div className="w-px h-12 bg-gradient-to-b from-[#C9A227]/40 via-[#C9A227]/20 to-transparent" />

      {/* 3. SCROLL TO TOP BUTTON - Now at the very bottom */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4 }}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-[#C9A227] border border-[#C9A227] shadow-[0_12px_35px_rgba(201,162,39,0.35)] text-black hover:bg-[#E5C76B] hover:border-[#E5C76B] transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-2xl ring-0 ring-[#C9A227]/30 group-hover:ring-4 transition-all duration-300" />
        <svg
          className="relative z-10 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default SocialMediaBar;