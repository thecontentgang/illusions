import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden relative z-0 pb-24">
      
      {/* BACKGROUND GRADIENT */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />

      {/* SOFT PURPLE GLOW (Top Right) */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#C4B5FD]/15 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* SOFT PURPLE GLOW (Bottom Left) */}
      <div className="fixed bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 md:pt-40">
        
        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="
              inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]
              text-[#6B7280] hover:text-[#8B5CF6] transition-colors
            "
          >
            <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
          </Link>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[#8B5CF6] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#1F2937] leading-tight mb-6">
            Privacy <span className="italic text-[#8B5CF6]">Policy</span>
          </h1>
          <p className="text-[#6B7280] font-medium text-sm md:text-base leading-relaxed">
            Last Updated: May 2026. We respect your privacy and are committed to protecting your personal data.
          </p>
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            bg-white/80 backdrop-blur-xl
            border border-[#E5E7EB]
            rounded-[2rem] md:rounded-[3rem]
            p-8 md:p-12 lg:p-16
            shadow-[0_15px_40px_rgba(139,92,246,0.06)]
            prose prose-sm md:prose-base max-w-none
            prose-headings:font-serif prose-headings:text-[#1F2937] prose-headings:font-semibold
            prose-p:text-[#6B7280] prose-p:leading-relaxed
            prose-li:text-[#6B7280]
            prose-a:text-[#8B5CF6] prose-a:no-underline hover:prose-a:text-[#7C3AED]
            prose-strong:text-[#1F2937]
          "
        >
          {/* SECTION 1 */}
          <h2>1. Introduction</h2>
          <p>
            At <strong>Illusion Interior Studio</strong>, protecting your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, process, and safeguard your personal information when you visit our website, interact with our content, or inquire about our interior design and architectural services.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 2 */}
          <h2>2. Information We Collect</h2>
          <p>
            We only collect information that is necessary to provide you with our services and improve your experience on our platform:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> When you fill out a lead form or contact us, we collect your name, email address, phone number, and project details.</li>
            <li><strong>Usage Data:</strong> We automatically collect anonymous data regarding how you interact with our website, including your IP address, browser type, pages visited, and the time spent on those pages.</li>
          </ul>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 3 */}
          <h2>3. How We Use Your Information</h2>
          <p>
            The information we collect is used in the following ways:
          </p>
          <ul>
            <li>To respond to your inquiries and provide personalized design consultations.</li>
            <li>To send you administrative information, such as updates to our terms or project-related communications.</li>
            <li>To improve our website's functionality, aesthetics, and user experience based on aggregated usage data.</li>
          </ul>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 4 */}
          <h2>4. Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our trusted analytics partners. 
          </p>
          <p>
            We adopt appropriate data collection, storage, and processing practices, as well as security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 5 */}
          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 6 */}
          <h2>6. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, to ask that your personal data be corrected, updated, or deleted. If you would like to exercise this right, please contact us using the information provided below.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 7 */}
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
          </p>
          <p className="font-medium text-[#1F2937]">
            Illusion Interior Studio<br />
            H.no 7-31/16, Laxmi Narsimha Colony,<br />
            Suncity, Hyderabad, India<br />
            <a href="mailto:hello@illusioninteriors.com" className="font-bold">hello@illusioninteriors.com</a>
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;