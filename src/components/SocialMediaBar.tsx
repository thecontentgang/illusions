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
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.672.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.165.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.672-1.62-.922-2.205-.24-.585-.485-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.075-.797.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.15.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.615.715.225 1.365.195 1.876.12.576-.09 1.767-.72 2.016-1.425.25-.705.25-1.29.175-1.41-.075-.135-.275-.21-.575-.36zM12.004 21.6c-1.605 0-3.178-.426-4.557-1.233l-.326-.192-3.385.885.904-3.303-.211-.336c-.886-1.407-1.353-3.033-1.353-4.704 0-4.947 4.029-8.973 8.985-8.973 2.397 0 4.65 .933 6.345 2.628 1.693 1.692 2.625 3.945 2.625 6.345.002 4.947-4.028 8.976-8.986 8.976zM12.004 0h-.018C5.385 0 .003 5.37.003 11.979c0 2.115.553 4.185 1.605 6.006L.003 24l6.168-1.614c1.748.948 3.705 1.446 5.717 1.449h.016c6.603 0 11.979-5.373 11.979-11.982C23.882 5.373 18.513 0 12.004 0z"/>
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

      {/* SOCIAL ICONS */}
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
            className="
              group relative
              w-11 h-11 sm:w-12 sm:h-12
              rounded-2xl
              flex items-center justify-center
              bg-white/90
              backdrop-blur-xl
              border border-[#E5E7EB]
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              text-[#6B7280]
              hover:text-white
              hover:bg-[#8B5CF6]
              hover:border-[#8B5CF6]
              hover:shadow-[0_12px_35px_rgba(139,92,246,0.35)]
              transition-all duration-300
            "
          >
            <span
              className="
                absolute inset-0
                rounded-2xl
                ring-0
                ring-[#8B5CF6]/20
                group-hover:ring-4
                transition-all duration-300
              "
            />
            <span className="relative z-10">
              {social.icon}
            </span>
          </motion.a>
        ))}
      </div>

      {/* CONNECTOR */}
      <div className="w-px h-12 bg-gradient-to-b from-[#8B5CF6]/40 via-[#8B5CF6]/20 to-transparent" />

      {/* SCROLL TO TOP */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.4,
        }}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          group relative
          w-11 h-11 sm:w-12 sm:h-12
          rounded-2xl
          flex items-center justify-center
          bg-[#8B5CF6]
          border border-[#8B5CF6]
          shadow-[0_12px_35px_rgba(139,92,246,0.35)]
          text-white
          hover:bg-[#7C3AED]
          hover:border-[#7C3AED]
          transition-all duration-300
        "
      >
        <span
          className="
            absolute inset-0
            rounded-2xl
            ring-0
            ring-[#8B5CF6]/20
            group-hover:ring-4
            transition-all duration-300
          "
        />
        <svg
          className="relative z-10 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default SocialMediaBar;