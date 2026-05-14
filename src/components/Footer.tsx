import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#111111]
        text-white
        pt-20
        pb-10
        px-6
        md:px-12
        lg:px-20
        
      "
    >

     

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#111111]/95
          via-[#1A1A1A]/92
          to-[#111111]
        "
      />

      {/* GOLD GLOW */}
      <div
        className="
          absolute
          top-[-150px]
          left-1/2
          -translate-x-1/2
          w-[350px]
          h-[350px]
          md:w-[500px]
          md:h-[500px]
          bg-[#C9A227]/15
          blur-3xl
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* RESPONSIVE FOOTER LAYOUT */}
        <div
          className="
            flex
            flex-col
            items-center
            text-center

            md:grid
            md:grid-cols-3
            md:gap-12
            md:items-start
            md:text-left
          "
        >

          {/* BRAND */}
          <div
            className="
              flex
              flex-col
              items-center
              text-center

              md:items-start
              md:text-left
            "
          >

            {/* LOGO */}
            <Link to="/" className="group">

              <img
                src="/illusion-white.png"
                alt="Illusion Interior Studio"
                className="
                  w-[180px]
                  md:w-[240px]
                  object-contain
                  group-hover:scale-105
                  transition-all
                  duration-300
                "
              />
            </Link>

            {/* TAGLINE */}
            <p
              className="
                mt-5
                text-xs
                md:text-sm
                uppercase
                tracking-[0.3em]
                text-[#A1A1AA]
                leading-relaxed
              "
            >
              Luxury Interior Design Studio <br />

              Hyderabad, India
            </p>
          </div>

          {/* FOOTER BUTTON LINKS */}
          <div
            className="
              grid
              grid-cols-2
              gap-4
              mt-10
              items-center
              text-center
              px-5
              md:mt-0
              md:justify-start
            "
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-black/20
                  backdrop-blur-xl
                  border
                  border-[#C9A227]/10
                  text-sm
                  md:text-base
                  font-medium
                  text-[#D1D5DB]
                  hover:bg-[#C9A227]
                  hover:border-[#C9A227]
                  hover:text-black
                  transition-all
                  duration-300
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div
            className="
              mt-10
              text-center

              md:mt-0
              md:text-left
            "
          >

            <p
              className="
                text-sm
                md:text-base
                text-[#A1A1AA]
                leading-relaxed
              "
            >
              Suncity, Hyderabad
            </p>

            <a
              href="mailto:hello@illusioninteriors.com"
              className="
                mt-3
                block
                text-sm
                md:text-base
                text-[#D1D5DB]
                hover:text-[#C9A227]
                transition-colors
                break-all
              "
            >
              hello@illusioninteriors.com
            </a>

            <a
              href="tel:+918317503596"
              className="
                mt-3
                block
                text-sm
                md:text-base
                text-[#D1D5DB]
                hover:text-[#C9A227]
                transition-colors
              "
            >
              +91 83175 03596
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            w-full
            h-[1px]
            bg-[#C9A227]/10
            my-8
          "
        />

        {/* COPYRIGHT */}
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#666666]
            text-center
          "
        >
          © 2026 Illusion Interior Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;