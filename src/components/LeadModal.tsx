import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/* ─── Types ─── */
type ProjectType = 'Residential' | 'Commercial' | null;
type BHK = '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK+' | 'Villa';
type Size = 'Under 500' | '500–1000' | '1000–2000' | '2000+';

interface LeadForm {
  name: string;
  phone: string;
  projectType: ProjectType;
  bhk: BHK | null;
  size: Size | null;
  message: string;
}

/* ─── Pill Button ─── */
const Pill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-200 whitespace-nowrap ${active
        ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-[0_2px_10px_rgba(139,92,246,0.35)]'
        : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#C4B5FD] hover:text-[#8B5CF6]'
      }`}
  >
    {label}
  </button>
);

/* ─── Label ─── */
const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase mb-1.5">
    {children}
  </p>
);

/* ══════════════════════════════
     LEAD CAPTURE MODAL
   ══════════════════════════════ */
interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [form, setForm] = useState<LeadForm>({
    name: '',
    phone: '',
    projectType: null,
    bhk: null,
    size: null,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof LeadForm>(key: K, value: LeadForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggle = <T,>(current: T | null, value: T): T | null =>
    current === value ? null : value;

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.projectType) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', projectType: null, bhk: null, size: null, message: '' });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed inset-0 z-[999]
              flex items-center justify-center
              px-4
            "
          >
            <div
              className="
                relative w-full max-w-md
                bg-white rounded-3xl
                shadow-[0_32px_80px_rgba(0,0,0,0.12)]
                border border-[#F3F4F6]
                overflow-hidden
              "
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#6D28D9]" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="
                  absolute top-4 right-4 z-10
                  w-8 h-8 rounded-xl
                  flex items-center justify-center
                  bg-[#F9FAFB] border border-[#E5E7EB]
                  text-[#9CA3AF] hover:text-[#111827]
                  hover:bg-[#F3F4F6]
                  transition-all duration-200
                "
              >
                <X size={14} strokeWidth={2} />
              </button>

              {/* ── SUCCESS STATE ── */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center px-8 py-14 gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 border border-[#C4B5FD]/30 flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] tracking-tight">
                      We'll be in touch soon!
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed max-w-[260px]">
                      Thank you, <span className="text-[#8B5CF6] font-medium">{form.name.split(' ')[0]}</span>. Our design team will reach out within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-2 px-8 py-3 rounded-xl bg-[#8B5CF6] text-white text-sm font-semibold tracking-wide shadow-[0_6px_20px_rgba(139,92,246,0.4)] hover:bg-[#7C3AED] transition-all duration-200"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (

                  /* ── FORM STATE ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-6 pt-6 pb-5"
                  >
                    {/* Header */}
                    <div className="mb-5 pr-6">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#8B5CF6] uppercase">
                        Free Consultation
                      </span>
                      <h2 className="mt-0.5 text-xl font-semibold text-[#111827] tracking-tight leading-snug">
                        Transform Your Space
                      </h2>
                      <p className="mt-0.5 text-xs text-[#9CA3AF]">
                        Fill in the details — we'll respond within 24 hrs.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">

                      {/* Row 1: Name + Phone */}
                      {/* Row 1: Name + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {/* NAME */}
                        <div>
                          <FieldLabel>Name</FieldLabel>

                          <input
                            type="text"
                            placeholder="Your Full Name"
                            value={form.name}
                            onChange={(e) =>
                              setField(
                                'name',
                                e.target.value.replace(/[^A-Za-z\s]/g, '')
                              )
                            }
                            required
                            className="
        w-full
        px-3
        py-2.5
        rounded-xl
        text-sm
        text-[#111827]
        placeholder-[#D1D5DB]
        bg-[#FAFAFA]
        border
        border-[#E5E7EB]
        focus:outline-none
        focus:border-[#8B5CF6]
        focus:bg-white
        transition-all
        duration-200
      "
                          />
                        </div>

                        {/* PHONE */}
                        <div>
                          <FieldLabel>Phone</FieldLabel>

                          <div
                            className="
        flex
        items-center
        overflow-hidden
        rounded-xl
        border
        border-[#E5E7EB]
        bg-[#FAFAFA]
        focus-within:border-[#8B5CF6]
        focus-within:bg-white
        transition-all
        duration-200
      "
                          >

                            {/* COUNTRY CODE */}
                            <div
                              className="
          px-3
          py-2.5
          text-sm
          font-semibold
          text-[#111827]
          border-r
          border-[#E5E7EB]
          bg-white
        "
                            >
                              +91
                            </div>

                            {/* INPUT */}
                            <input
                              type="tel"
                              placeholder="9876543210"
                              value={form.phone}
                              required
                              maxLength={10}
                              inputMode="numeric"
                              onChange={(e) => {
                                const value = e.target.value
                                  .replace(/\D/g, '')
                                  .slice(0, 10);

                                setField('phone', value);
                              }}
                              className="
          w-full
          px-3
          py-2.5
          text-sm
          text-[#111827]
          placeholder-[#D1D5DB]
          bg-transparent
          focus:outline-none
        "
                            />
                          </div>

                          {/* ERROR */}
                          {form.phone.length > 0 && form.phone.length < 10 && (
                            <p className="text-[11px] text-red-500 mt-1 pl-1">
                              Enter a valid 10-digit phone number
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Project Type */}
                      <div>
                        <FieldLabel>Project Type</FieldLabel>
                        <div className="flex gap-2">
                          {(['Residential', 'Commercial'] as ProjectType[]).map((t) => (
                            <Pill
                              key={t!}
                              label={t!}
                              active={form.projectType === t}
                              onClick={() => {
                                setField('projectType', toggle(form.projectType, t));
                                setField('bhk', null);
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Row 3: BHK (Residential only) */}
                      <AnimatePresence>
                        {form.projectType === 'Residential' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <FieldLabel>Configuration</FieldLabel>
                            <div className="flex flex-wrap gap-2">
                              {(['1 BHK', '2 BHK', '3 BHK', '4 BHK+', 'Villa'] as BHK[]).map((b) => (
                                <Pill
                                  key={b}
                                  label={b}
                                  active={form.bhk === b}
                                  onClick={() => setField('bhk', toggle(form.bhk, b))}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Row 4: Space Size */}
                      <div>
                        <FieldLabel>Space Size <span className="normal-case font-normal text-[#C4B5FD]">(optional)</span></FieldLabel>
                        <div className="flex flex-wrap gap-2">
                          {([
                            ['Under 500', '< 500 sq ft'],
                            ['500–1000', '500–1000'],
                            ['1000–2000', '1000–2000'],
                            ['2000+', '2000+ sq ft'],
                          ] as [Size, string][]).map(([val, display]) => (
                            <Pill
                              key={val}
                              label={display}
                              active={form.size === val}
                              onClick={() => setField('size', toggle(form.size, val))}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Row 5: Message */}
                      <div>
                        <FieldLabel>Your Vision <span className="normal-case font-normal text-[#C4B5FD]">(optional)</span></FieldLabel>
                        <textarea
                          rows={2}
                          placeholder="Describe your dream space..."
                          value={form.message}
                          onChange={(e) => setField('message', e.target.value)}
                          className="
                            w-full px-3 py-2.5 rounded-xl resize-none
                            text-sm text-[#111827] placeholder-[#D1D5DB]
                            bg-[#FAFAFA] border border-[#E5E7EB]
                            focus:outline-none focus:border-[#8B5CF6] focus:bg-white
                            transition-all duration-200
                          "
                        />
                      </div>
                      {/* TERMS & CONDITIONS */}
                      <label
                        className="
    flex
    items-start
    gap-3
    text-[11px]
    text-[#6B7280]
    leading-relaxed
    cursor-pointer
    select-none
  "
                      >
                        <input
                          type="checkbox"
                          required
                          className="
      mt-0.5
      w-4
      h-4
      rounded
      border-[#D1D5DB]
      text-[#8B5CF6]
      focus:ring-[#8B5CF6]
    "
                        />

                        <span>
                          I agree to the{" "}

                          <span className="text-[#8B5CF6] font-medium">
                            Terms & Conditions
                          </span>{" "}

                          and consent to being contacted regarding my inquiry.
                        </span>
                      </label>

                      {/* CTA */}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!form.name.trim() || !form.phone.trim() || !form.projectType}
                        className="
                          w-full py-3.5 rounded-2xl
                          text-sm font-semibold tracking-wide text-white
                          bg-[#8B5CF6]
                          shadow-[0_8px_24px_-4px_rgba(139,92,246,0.45)]
                          hover:bg-[#7C3AED]
                          hover:shadow-[0_10px_28px_-4px_rgba(139,92,246,0.55)]
                          disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                          active:scale-[0.98]
                          transition-all duration-250
                        "
                      >
                        Request a Free Consultation
                      </button>

                      {/* Privacy + Trust */}
                      <div className="flex flex-col items-center gap-3 pt-0.5">
                        <p className="text-[11px] text-[#9CA3AF] flex items-center gap-1.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Your details are private and will never be shared.
                        </p>

                        <div className="w-full h-px bg-[#F3F4F6]" />

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                          {[
                            '100+ Projects',
                            '1-on-1 Service',
                            '24hr Response',
                          ].map((badge) => (
                            <span key={badge} className="flex items-center gap-1 text-[10px] font-semibold text-[#9CA3AF] tracking-wide">
                              <span className="text-[#C4B5FD]">✦</span>
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ── Demo wrapper so it's previewable ── */
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #F8FAFC 50%, #EEF2FF 100%)',
      }}
    >
      <button
        onClick={() => setOpen(true)}
        className="
          px-8 py-3.5 rounded-2xl
          text-sm font-semibold tracking-wide text-white
          bg-[#8B5CF6]
          shadow-[0_8px_24px_-4px_rgba(139,92,246,0.45)]
          hover:bg-[#7C3AED] hover:shadow-[0_10px_28px_-4px_rgba(139,92,246,0.55)]
          transition-all duration-300
        "
      >
        Get a Free Consultation
      </button>

      <LeadModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export { LeadModal };