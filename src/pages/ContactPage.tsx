import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [activeService, setActiveService] = useState('Residential');

  const services = ['Residential', 'Commercial', 'Consultation'];

  return (
    <div className="bg-[#F9FAFB] pt-32 pb-20 min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] -z-10" />

      {/* PURPLE GLOW */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* PAGE HEADER */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-[#8B5CF6]
              text-[10px]
              md:text-xs
              font-black
              uppercase
              tracking-[0.4em]
              mb-4
              block
            "
          >
            Start the Dialogue
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6
            }}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-milchella
              font-semibold
              tracking-wider
              text-[#1F2937]
              leading-[1.1]
            "
          >
            Let's discuss your <br className="hidden md:block" />

            <span className="text-[#8B5CF6] italic">
              future space.
            </span>
          </motion.h1>
        </div>

        {/* MAIN SPLIT LAYOUT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-16
            lg:gap-12
            items-start
          "
        >

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            className="
              lg:col-span-5
              space-y-12
              pr-0
              lg:pr-8
            "
          >

            {/* STUDIO */}
            <div className="space-y-4">

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-[#1F2937]
                "
              >
                Interior Illustrations
              </h3>

              <p
                className="
                  text-[#6B7280]
                  font-medium
                  leading-relaxed
                  max-w-sm
                "
              >
                H.no 7-31/16, <br />
                Laxmi Narsimha colony, <br />
                Suncity Hyderabad
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-[#1F2937]
                "
              >
                Direct Contact
              </h3>

              <div className="flex flex-col gap-3">

                <a
                  href="mailto:Interiorillusions1@outlook.com"
                  className="
                    text-[#6B7280]
                    font-medium
                    hover:text-[#8B5CF6]
                    transition-colors
                    w-fit
                  "
                >
                  Interiorillusions1@outlook.com
                </a>

                <a
                  href="tel:+918317503596"
                  className="
                    text-[#6B7280]
                    font-medium
                    hover:text-[#8B5CF6]
                    transition-colors
                    w-fit
                  "
                >
                  +91 83175 03596
                </a>
              </div>
            </div>

            {/* MAP CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                h-[320px]
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                mt-8
                group
                border
                border-[#E5E7EB]
              "
            >

              {/* MAP */}
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243710.23946883448!2d78.0901336669922!3d17.365056641899134!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e032e71c0b%3A0x347126a37060cd26!2sInterior%20Illusions!5e0!3m2!1sen!2sin!4v1778670596783!5m2!1sen!2sin"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  border-0
                "
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-5
                "
              >

                <div
                  className="
                    rounded-[1.5rem]
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    px-5
                    py-4
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-[#C4B5FD]
                      mb-2
                    "
                  >
                    Visit Our Studio
                  </p>

                  <h3
                    className="
                      text-xl
                      text-white
                      leading-tight
                    "
                  >
                    Interior Illustrations <br />

                    <span className="text-gray-300 text-base">
                      Suncity, Hyderabad
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6
            }}
            className="lg:col-span-7"
          >

            <div
              className="
                bg-white
                p-8
                md:p-12
                rounded-[2.5rem]
                md:rounded-[3rem]
                shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                border
                border-[#E5E7EB]
                relative
                overflow-hidden
              "
            >

              {/* PURPLE GLOW IN CARD */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#8B5CF6]/5
                  via-transparent
                  to-[#8B5CF6]/10
                "
              />

              {/* TOP ACCENT */}
              <div
                className="
                  absolute
                  top-0
                  right-12
                  w-24
                  h-2
                  bg-[#8B5CF6]
                  rounded-b-lg
                "
              />

              <form
                className="relative z-10 space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >

                {/* NAME & PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* NAME */}
                  <div className="space-y-2">

                    <label
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-[#9CA3AF]
                        pl-2
                      "
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      pattern="^[A-Za-z\s]+$"
                      title="Only letters are allowed"
                      className="
                        w-full
                        bg-transparent
                        border-2
                        border-[#E5E7EB]
                        rounded-2xl
                        px-5
                        py-4
                        text-sm
                        font-medium
                        text-[#1F2937]
                        focus:outline-none
                        focus:border-[#8B5CF6]
                        transition-all
                        placeholder:text-[#9CA3AF]
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-2">

                    <label
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-[#9CA3AF]
                        pl-2
                      "
                    >
                      Phone Number
                    </label>

                    <div
                      className="
                        flex
                        items-center
                        overflow-hidden
                        rounded-2xl
                        border-2
                        border-[#E5E7EB]
                        bg-transparent
                        focus-within:border-[#8B5CF6]
                        transition-all
                      "
                    >

                      {/* COUNTRY CODE */}
                      <div
                        className="
                          px-4
                          py-4
                          text-sm
                          font-semibold
                          text-[#1F2937]
                          border-r
                          border-[#E5E7EB]
                          bg-[#F3F4F6]
                        "
                      >
                        +91
                      </div>

                      {/* INPUT */}
                      <input
                        type="tel"
                        placeholder="9876543210"
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        title="Please enter a valid 10-digit number"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/[^0-9]/g, "")
                            .slice(0, 10);
                        }}
                        className="
                          w-full
                          px-5
                          py-4
                          bg-transparent
                          text-sm
                          font-medium
                          text-[#1F2937]
                          focus:outline-none
                          placeholder:text-[#9CA3AF]
                        "
                      />
                    </div>

                    <p className="text-xs text-[#9CA3AF] pl-2">
                      Enter a valid 10-digit mobile number
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">

                  <label
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#9CA3AF]
                      pl-2
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="
                      w-full
                      bg-transparent
                      border-2
                      border-[#E5E7EB]
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-medium
                      text-[#1F2937]
                      focus:outline-none
                      focus:border-[#8B5CF6]
                      transition-all
                      placeholder:text-[#9CA3AF]
                    "
                  />
                </div>

                {/* SERVICES */}
                <div className="space-y-3">

                  <label
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#9CA3AF]
                      pl-2
                    "
                  >
                    I am interested in
                  </label>

                  <div className="flex flex-wrap gap-3">

                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setActiveService(service)}
                        className={`
                          px-6
                          py-3
                          rounded-xl
                          text-xs
                          font-bold
                          tracking-widest
                          uppercase
                          transition-all
                          duration-300
                          border

                          ${activeService === service
                            ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)]'
                            : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#6B7280] hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6]'
                          }
                        `}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="space-y-2">

                  <label
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#9CA3AF]
                      pl-2
                    "
                  >
                    Project Details
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your space, location (e.g., Aparna Zicon), and timeline..."
                    className="
                      w-full
                      bg-transparent
                      border-2
                      border-[#E5E7EB]
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-medium
                      text-[#1F2937]
                      focus:outline-none
                      focus:border-[#8B5CF6]
                      transition-all
                      placeholder:text-[#9CA3AF]
                      resize-none
                    "
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="
                    w-full
                    bg-[#8B5CF6]
                    text-white
                    rounded-2xl
                    py-5
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    shadow-[0_15px_40px_rgba(139,92,246,0.3)]
                    hover:bg-[#7C3AED]
                    transition-all
                    duration-300
                  "
                >
                  Submit Inquiry
                </motion.button>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;