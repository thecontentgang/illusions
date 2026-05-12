import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialIcon = ({ path }: { path: string }) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d={path} />
  </svg>
);

const socialLinks = [
  { id: 'instagram', href: '#', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { id: 'youtube', href: '#', path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { id: 'whatsapp', href: '#', path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.19 1.603 6.04L0 24l6.104-1.602a11.803 11.803 0 0 0 5.94 1.603h.005c6.638 0 12.039-5.403 12.042-12.041a11.78 11.78 0 0 0-3.489-8.552z" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2937] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-6xl mx-auto">
        
        {/* Responsive Grid: Stacks sections vertically on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 mb-16">
          
          {/* 1. Brand Section: Centered at the top on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link to="/" className="inline-block group">
              <div className="w-[180px] h-[45px] relative">
                 <img 
                   src="/illusion-white.png" 
                   alt="Illusion Interior Studio" 
                   className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300" 
                 />
              </div>
            </Link>
            <p className="text-gray-400 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
              Interior Design Studio <br />
              Hyderabad, India.
            </p>
            
            <div className="flex gap-8 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  whileHover={{ scale: 1.15, color: '#C4B5FD' }}
                  className="text-gray-500 transition-colors"
                  aria-label={social.id}
                >
                  <SocialIcon path={social.path} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider for Mobile (Optional for Cleanliness) */}
          <div className="col-span-2 h-[1px] bg-gray-800 md:hidden" />

          {/* 2. Page Links: Left side of mobile row */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C4B5FD]">Pages</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-sm font-bold text-gray-300 hover:text-[#C4B5FD] transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Connect: Right side of mobile row */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C4B5FD]">Connect</h4>
            <div className="space-y-6">
              <p className="text-[12px] md:text-sm font-medium text-gray-400 leading-relaxed">
                H.no 7-31/16, <br />
Laxmi Narsimha colony,
Suncity Hyderabad
              </p>
              <a 
                href="mailto:hello@illusioninteriors.com" 
                className="inline-block text-[13px] md:text-sm font-bold text-[#C4B5FD] border-b-2 border-[#C4B5FD]/20 hover:border-[#C4B5FD] transition-all pb-1"
              >
                hello@illusioninteriors.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 order-2 md:order-1">
            © 2026 Illusion Interior Studio
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#C4B5FD] order-1 md:order-2"
          >
            Back to Top
            <span className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center group-hover:bg-[#C4B5FD] group-hover:text-[#1F2937] transition-all">
              ↑
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;