import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import { LeadModal } from './LeadModal';
import Logo from '../assets/illusion-white.png';

const MotionLink = motion(Link);

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Portfolio', href: '/projects' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    id: 'instagram',
    href: '#',
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
  },
  {
    id: 'pinterest',
    href: '#',
    icon: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439z" />
  },
];

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const path = location.pathname;

  const activeLink =
    path.startsWith('/projects')
      ? 'projects'
      : path.startsWith('/contact')
      ? 'contact'
      : path.startsWith('/about')
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
          z-50
          transition-all duration-500 ease-in-out
          ${
            isScrolled || menuOpen
              ? 'bg-[#111111]/95 backdrop-blur-xl border-b border-[#C9A227]/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
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
                      ? 'text-[#E5C76B]'
                      : 'text-[#A1A1AA]'
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
                    bg-[#C9A227]/10
                    border border-[#C9A227]/20
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
                    bg-[#1F1F1F]
                    rounded-xl
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
              backgroundColor: '#E5C76B',
            }}
            whileTap={{ scale: 0.98 }}
            className="
              px-8 py-2.5
              text-sm font-semibold tracking-wide
              text-black
              rounded-full
              bg-[#C9A227]
              shadow-[0_10px_30px_rgba(201,162,39,0.35)]
              hover:shadow-[0_14px_35px_rgba(201,162,39,0.45)]
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
              className="block h-[1.5px] bg-[#F5F5F5] rounded-full origin-center"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0, x: 6 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] bg-[#C9A227] rounded-full"
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
              className="block h-[1.5px] bg-[#F5F5F5] rounded-full origin-center"
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
              className="fixed inset-0 w-full h-[100dvh] md:hidden"
            >
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-[#111111]" />

              {/* GLOW */}
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
                  bg-[#C9A227]/10
                  rounded-full
                  blur-3xl
                  pointer-events-none
                "
              />

              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute -bottom-16 -left-16
                  w-64 h-64
                  bg-[#8B7355]/10
                  rounded-full
                  blur-3xl
                  pointer-events-none
                "
              />

              <div className="relative z-10 flex flex-col h-full pt-20 pb-10 px-8">

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
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/50 to-transparent" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.25em]
                      text-[#C9A227]
                      uppercase
                    "
                  >
                    Menu
                  </span>
                </motion.div>

                {/* MOBILE LINKS */}
                <div className="flex-1 flex flex-col items-center justify-center -mt-10">
                  <div className="flex flex-col items-center w-full">
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
                        className="w-full flex flex-col items-center"
                      >
                        <Link
                          to={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="
                            group relative
                            flex items-center justify-center
                            py-4 w-full
                          "
                        >
                          <span
                            className="
                              absolute left-0
                              text-[11px]
                              font-mono
                              text-[#666666]
                              select-none
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
                                  ? 'text-[#C9A227]'
                                  : 'text-[#F5F5F5] group-hover:text-[#C9A227]/60 group-hover:translate-x-1'
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
                                bg-[#C9A227]
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
                              bg-[#222222]
                              origin-left
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
                      text-black
                      bg-[#C9A227]
                      shadow-[0_12px_32px_-6px_rgba(201,162,39,0.5)]
                      hover:bg-[#E5C76B]
                      hover:shadow-[0_16px_36px_-6px_rgba(201,162,39,0.6)]
                      active:scale-[0.97]
                      transition-all duration-300
                    "
                  >
                    Start a Project
                  </motion.button>
                </div>

                {/* SOCIALS */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.55,
                    duration: 0.4,
                  }}
                  className="
                    flex items-center justify-center
                    gap-5 pt-6
                  "
                >
                  <div className="h-px w-8 bg-[#333333]" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.22em]
                      text-[#666666]
                      uppercase
                    "
                  >
                    Follow Us
                  </span>

                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.id}
                      className="
                        w-9 h-9 rounded-xl
                        flex items-center justify-center
                        bg-[#1A1A1A]
                        border border-[#333333]
                        text-[#A1A1AA]
                        hover:bg-[#C9A227]
                        hover:border-[#C9A227]
                        hover:text-black
                        hover:shadow-[0_4px_14px_rgba(201,162,39,0.3)]
                        transition-all duration-300
                      "
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}

                  <div className="h-px w-8 bg-[#333333]" />
                </motion.div>
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