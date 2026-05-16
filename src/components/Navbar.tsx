import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import { LeadModal } from './LeadModal';
import Logo from '../assets/illusion-logo.png';

const MotionLink = motion(Link);

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Portfolio', href: '/projects' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const path = location.pathname;

  // 1. FIXED PATH MATCHING
  const activeLink =
    path === '/projects' || path.startsWith('/projects/')
      ? 'projects'
      : path === '/contact'
      ? 'contact'
      : path === '/about'
      ? 'about'
      : 'home';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.nav-logo', '.nav-link-item', '.nav-cta', '.nav-toggle'],
        { y: -15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  const openModal = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`
          fixed top-0 left-0 w-full
          flex items-center justify-between
          px-6 md:px-12 py-4
          z-[100]
          transition-all duration-500 ease-in-out
          ${
            isScrolled || menuOpen
              ? 'bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_10px_40px_rgba(0,0,0,0.06)]'
              : 'bg-transparent'
          }
        `}
      >
        {/* LOGO */}
        <MotionLink
          to="/"
          className="nav-logo z-50 flex items-center group relative cursor-pointer"
        >
          <div className="relative w-[180px] md:w-[220px] lg:w-[240px] aspect-[4/1] overflow-hidden">
            <img
              src={Logo}
              alt="Luxury Interior Studio"
              width="240"
              height="60"
              className="
                w-full h-full object-contain
                transition-all duration-300
                group-hover:scale-[1.03]
              "
            />
          </div>
        </MotionLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <MotionLink
              key={link.id}
              to={link.href}
              className="
                nav-link-item
                relative
                px-6 py-2.5
                group
                transition-colors duration-300
              "
            >
              <span
                className={`
                  relative z-10
                  text-sm font-semibold tracking-wider
                  transition-colors duration-300
                  ${
                    activeLink === link.id
                      ? 'text-[#8B5CF6]'
                      : 'text-[#6B7280]'
                  }
                `}
              >
                {link.label}
              </span>

              {activeLink === link.id && (
                <motion.div
                  layoutId="desktop-active-pill"
                  className="
                    absolute inset-0
                    bg-[#8B5CF6]/10
                    border border-[#8B5CF6]/20
                    rounded-xl
                  "
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {activeLink !== link.id && (
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    bg-[#8B5CF6]/5
                    rounded-xl
                    pointer-events-none /* 2. FIXED HOVER INTERCEPTION */
                    transition-opacity duration-300
                  "
                />
              )}
            </MotionLink>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block nav-cta">
          <motion.button
            onClick={openModal}
            whileHover={{
              scale: 1.02,
              backgroundColor: '#7C3AED',
            }}
            whileTap={{ scale: 0.98 }}
            className="
              px-8 py-2.5
              text-sm font-semibold tracking-wide
              text-white
              rounded-full
              bg-[#8B5CF6]
              shadow-[0_10px_30px_rgba(139,92,246,0.25)]
              hover:shadow-[0_14px_35px_rgba(139,92,246,0.35)]
              transition-all duration-300
            "
          >
            Start a Project
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="nav-toggle z-50 md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col justify-center items-end gap-[5px] w-6">
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7, width: '24px' }
                  : { rotate: 0, y: 0, width: '24px' }
              }
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ width: 24 }}
              className="block h-[1.5px] bg-[#1F2937] rounded-full origin-center"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0, x: 6 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] bg-[#8B5CF6] rounded-full"
              style={{ width: 16 }}
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -7, width: '24px' }
                  : { rotate: 0, y: 0, width: '24px' }
              }
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ width: 24 }}
              className="block h-[1.5px] bg-[#1F2937] rounded-full origin-center"
            />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 w-full h-[100dvh] md:hidden z-40" // 3. FIXED Z-INDEX
            >
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-white" />

              {/* PURPLE GLOW */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute -top-20 -right-20
                  w-80 h-80
                  bg-[#C4B5FD]/20
                  rounded-full
                  blur-3xl
                  pointer-events-none
                "
              />

              <div className="relative z-50 flex flex-col h-full pt-20 pb-10 px-8">
                {/* MENU LABEL */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                  }}
                  className="flex items-center gap-3 mb-auto"
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-[#8B5CF6]/50 to-transparent" />
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.25em]
                      text-[#8B5CF6]
                      uppercase
                    "
                  >
                    Menu
                  </span>
                </motion.div>

                {/* MOBILE LINKS */}
                <div className="flex-1 flex flex-col items-center justify-center -mt-10">
                  <div className="flex flex-col items-center w-full relative z-50">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 14 }}
                        transition={{
                          delay: 0.1 + i * 0.08,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full flex flex-col items-center relative z-50"
                      >
                        {/* 4. FIXED HITBOX AND ROUTING */}
                        <Link
                          to={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="
                            group relative
                            flex items-center justify-center
                            py-5 w-full z-50 cursor-pointer
                          "
                        >
                          <span
                            className="
                              absolute left-0
                              text-[11px]
                              font-mono
                              text-[#9CA3AF]
                              select-none
                              pointer-events-none
                            "
                          >
                            0{i + 1}
                          </span>

                          <span
                            className={`
                              text-[2.6rem]
                              leading-none
                              font-light
                              tracking-tight
                              transition-all duration-300
                              ${
                                activeLink === link.id
                                  ? 'text-[#8B5CF6]'
                                  : 'text-[#1F2937] group-active:text-[#8B5CF6]/60'
                              }
                            `}
                          >
                            {link.label}
                          </span>

                          {activeLink === link.id && (
                            <motion.span
                              layoutId="active-dot"
                              className="
                                absolute right-0
                                w-2 h-2
                                rounded-full
                                bg-[#8B5CF6]
                                pointer-events-none
                              "
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 28,
                              }}
                            />
                          )}
                        </Link>

                        {i < navLinks.length - 1 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              delay: 0.18 + i * 0.08,
                              duration: 0.4,
                            }}
                            className="
                              w-full h-px
                              bg-[#E5E7EB]
                              origin-left
                              pointer-events-none
                            "
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* MOBILE CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.48,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={openModal}
                    className="
                      mt-12
                      w-full max-w-[280px]
                      py-4 rounded-2xl
                      text-sm font-semibold
                      tracking-[0.12em]
                      uppercase
                      text-white
                      bg-[#8B5CF6]
                      shadow-[0_12px_32px_-6px_rgba(139,92,246,0.4)]
                      hover:bg-[#7C3AED]
                      active:scale-[0.97]
                      transition-all duration-300
                      relative z-50
                    "
                  >
                    Start a Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MODAL */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Navbar;