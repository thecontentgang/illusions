import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import Logo from '../assets/illusion-logo.png'; // Ensure this path is correct based on your project structure  

const MotionLink = motion(Link);

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Portfolio', href: '/projects' }, // Renamed for a premium feel
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// Social Media Icons (Clean SVGs)
const socialLinks = [
  {
    id: 'instagram',
    href: '#',
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  },
  {
    id: 'pinterest',
    href: '#',
    icon: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.622.002 12.017 0z" />
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const path = location.pathname;
  const activeLink = path.startsWith('/projects') ? 'projects'
    : path.startsWith('/contact') ? 'contact'
      : path.startsWith('/about') ? 'about'
        : 'home';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.nav-logo', '.nav-link-item', '.nav-cta', '.nav-toggle'],
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50 transition-all duration-500 ease-in-out ${isScrolled || isOpen
          ? 'bg-white/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#C4B5FD]/20'
          : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <MotionLink
        to="/"
        className="nav-logo z-50 flex items-center group relative cursor-pointer"
      >
        {/* UI/UX Best Practice: Wrapper for image stabilization */}
        <div className="relative w-[180px] md:w-[220px] lg:w-[240px] aspect-[4/1] overflow-hidden">
          <img
            src={Logo}
            alt="Interior Illusions - Luxury Home Design"
            width="240"
            height="60"
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.03]"
          />
        </div>


      </MotionLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-1">
        {navLinks.map((link) => (
          <MotionLink
            key={link.id}
            to={link.href}
            className="nav-link-item relative px-6 py-2.5 group transition-colors duration-300"
          >
            <span
              className={`relative z-10 text-sm font-semibold tracking-wider transition-colors duration-300 ${activeLink === link.id ? 'text-[#6D28D9]' : 'text-[#4B5563]'
                }`}
            >
              {link.label}
            </span>

            {/* Soft Floating Pill Background */}
            {activeLink === link.id && (
              <motion.div
                layoutId="desktop-active-pill"
                className="absolute inset-0 bg-[#C4B5FD]/15 border border-[#C4B5FD]/20 rounded-xl"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }}
              />
            )}

            {/* Subtle Hover State (Only for non-active) */}
            {activeLink !== link.id && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gray-100/50 rounded-xl transition-opacity duration-300" />
            )}
          </MotionLink>
        ))}
      </div>
      {/* Desktop CTA */}
      <div className="hidden md:block nav-cta">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#b3a1fa' }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-2.5 text-sm font-medium tracking-wide text-white rounded-full bg-[#8B5CF6] shadow-[0_4px_14px_0_rgba(196,181,253,0.39)] transition-all duration-300"
        >
          Start a Project
        </motion.button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="nav-toggle z-50 md:hidden text-[#4B5563] p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <motion.svg
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 17h16" />
          )}
        </motion.svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-[#F9FAFB] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            {/* Links Section */}
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <div key={link.id} className="overflow-hidden">
                  <MotionLink
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center group"
                  >
                    <span
                      className={`font-serif text-4xl tracking-tight transition-colors duration-300 ${activeLink === link.id ? 'text-[#C4B5FD]' : 'text-[#374151]'
                        }`}
                    >
                      {link.label}
                    </span>
                    {activeLink === link.id && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="ml-4 w-2 h-2 rounded-full bg-[#C4B5FD]"
                      />
                    )}
                  </MotionLink>
                </div>
              ))}
            </div>

            {/* Bottom Section: CTA & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-8 w-full"
            >
              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E5E7EB]" />

              {/* Social Links */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-[#9CA3AF] uppercase">Follow Us</span>
                <div className="flex gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      className="text-[#9CA3AF] hover:text-[#C4B5FD] transition-colors duration-300"
                      aria-label={social.id}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <button className="w-full py-4 rounded-xl text-sm font-medium tracking-wide text-white bg-[#374151] hover:bg-[#111827] transition-colors duration-300">
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;