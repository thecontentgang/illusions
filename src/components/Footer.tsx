import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        rounded-t-[3rem] 
        md:rounded-t-[4rem]
        bg-[#0D0518]
        pt-20
        pb-10
        px-6
        md:px-12
        lg:px-20
        z-0
      "
    >
      {/* SHADER EFFECT GLOW 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#8B5CF6]/20 blur-[100px] rounded-full pointer-events-none" />

      {/* SHADER EFFECT GLOW 2 */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#6D28D9]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center md:grid md:grid-cols-3 md:gap-12 md:items-start md:text-left">
          
          {/* BRAND */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link to="/" className="group">
              {/* Added explicit width and height, lazy loading, and async decoding */}
              <img
                src="/illusion-white.png" 
                alt="Illusion Interior Studio"
                width="240"
                height="69"
                loading="lazy"
                decoding="async"
                className="w-[180px] md:w-[240px] h-auto object-contain group-hover:scale-105 transition-all duration-300"
              />
            </Link>
            <p className="mt-5 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#9CA3AF] leading-relaxed">
              Luxury Interior Design Studio <br />
              Hyderabad, India
            </p>
          </div>

          {/* FOOTER BUTTON LINKS */}
          <div className="grid grid-cols-2 gap-4 mt-10 items-center text-center px-5 md:mt-0 md:justify-start">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-sm md:text-base font-bold text-[#D1D5DB] hover:bg-[#8B5CF6] hover:border-[#8B5CF6] hover:text-white hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CONTACT INFO */}
          <div className="mt-10 text-center md:mt-0 md:text-left">
            <p className="text-sm md:text-base font-bold text-[#C4B5FD] leading-relaxed">
              Suncity, Hyderabad
            </p>
            <a href="mailto:nikhil@interiorillusions.co.in" className="mt-3 block text-sm md:text-base font-semibold text-[#F3F4F6] hover:text-[#C4B5FD] transition-colors break-all">
              nikhil@interiorillusions.co.in 
            </a>
            <a href="tel:+918317503596" className="mt-3 block text-sm md:text-base font-semibold text-[#F3F4F6] hover:text-[#C4B5FD] transition-colors">
              +91 83175 03596
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-10" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF] max-w-3xl mx-auto">
          <p>© 2026 Illusion</p>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <a href="https://thecontentgang.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span>Built by</span>
            <span className="text-white font-black tracking-[0.2em]">TheContentGang</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;