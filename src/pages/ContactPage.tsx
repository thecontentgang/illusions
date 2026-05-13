import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [activeService, setActiveService] = useState('Residential');

  const services = ['Residential', 'Commercial', 'Consultation'];

  return (
    <div className="bg-[#FDFDFF] pt-32 pb-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Page Header */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8B5CF6] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Start the Dialogue
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#374151] leading-[1.1] tracking-tight"
          >
            Let's discuss your <br className="hidden md:block" />
            <span className="text-[#8B5CF6] italic">future space.</span>
          </motion.h1>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info & Trust Signals (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-12 pr-0 lg:pr-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#374151]">Interior Illustrations</h3>
              <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                 H.no 7-31/16, <br />
Laxmi Narsimha colony,
Suncity Hyderabad

              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#374151]">Direct Contact</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@illusioninteriors.com" className="text-gray-500 font-medium hover:text-[#8B5CF6] transition-colors w-fit">
                  hello@illusioninteriors.com
                </a>
                <a href="tel:+919876543210" className="text-gray-500 font-medium hover:text-[#8B5CF6] transition-colors w-fit">
                  +91 83175 03596
                </a>
              </div>
            </div>

            {/* Thick Trust Block */}
            <div className="bg-[#1F2937] p-8 rounded-3xl shadow-xl mt-8">
              <p className="text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                What's Next?
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Once you submit this form, Nikhil or our lead design team will reach out within <strong className="text-white">24 hours</strong> to schedule your initial discovery call.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Conversion Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-[6px] border-gray-50 relative">
              
              {/* Subtle Form Header Accent */}
              <div className="absolute top-0 right-12 w-24 h-2 bg-[#8B5CF6] rounded-b-lg" />

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Responsive Row: Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium text-[#374151] focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91"
                      className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium text-[#374151] focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium text-[#374151] focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Custom Interactive Pill Selector for Project Type */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-2">I am interested in</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setActiveService(service)}
                        className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
                          activeService === service 
                            ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-md' 
                            : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-2">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your space, location (e.g., Aparna Zicon), and timeline..."
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium text-[#374151] focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#1F2937] text-white rounded-2xl py-5 text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#8B5CF6] transition-colors duration-300"
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