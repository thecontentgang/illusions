import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsConditionsPage = () => {
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
            Terms & <span className="italic text-[#8B5CF6]">Conditions</span>
          </h1>
          <p className="text-[#6B7280] font-medium text-sm md:text-base leading-relaxed">
            Last Updated: May 2026. Please read these terms carefully before using our services.
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
            prose-a:text-[#8B5CF6] prose-a:no-underline hover:prose-a:text-[#7C3AED]
            prose-strong:text-[#1F2937]
          "
        >
          {/* SECTION 1 */}
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Illusion Interior Studio</strong> ("we," "our," or "us"). These Terms & Conditions govern your use of our website, services, and consultations. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 2 */}
          <h2>2. Services & Consultations</h2>
          <p>
            Illusion Interior Studio provides luxury interior design, architectural planning, and execution services. All designs, 3D renders, layouts, and materials proposed remain the intellectual property of Illusion Interior Studio until a formal agreement is signed and full payment is completed.
          </p>
          <ul>
            <li>Initial consultations booked via our platform are subject to availability.</li>
            <li>We reserve the right to decline projects that do not align with our studio's capacity or design philosophy.</li>
            <li>Timelines discussed during initial consultations are estimates and are subject to change based on project complexities.</li>
          </ul>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 3 */}
          <h2>3. User Responsibilities</h2>
          <p>
            When utilizing our website or submitting a lead form, you agree to provide accurate, current, and complete information (including your name, phone number, and project details). You agree not to use our website for any unlawful purpose or in a way that could damage, disable, or impair our servers or networks.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 4 */}
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, images, graphics, logos, project portfolios, and design concepts, is the exclusive property of Illusion Interior Studio or its content creators. You may not reproduce, distribute, or use our content for commercial purposes without our express written consent.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 5 */}
          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Illusion Interior Studio shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our website or reliance on any information provided herein. While we strive for accuracy in our portfolio and project descriptions, errors or omissions may occur.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 6 */}
          <h2>6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms & Conditions at any time without prior notice. The updated date at the top of this page will indicate when changes were last made. Your continued use of the website following any changes constitutes acceptance of the new terms.
          </p>

          <hr className="border-[#E5E7EB] my-8" />

          {/* SECTION 7 */}
          <h2>7. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms & Conditions, please contact us at:
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

export default TermsConditionsPage;