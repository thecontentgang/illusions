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
    className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 whitespace-nowrap ${
      active
        ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-[0_6px_20px_rgba(139,92,246,0.25)]'
        : 'bg-[#F8FAFC] border-[#E5E7EB] text-[#6B7280] hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6]'
    }`}
  >
    {label}
  </button>
);

/* ─── Label ─── */
const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold tracking-widest text-[#8B5CF6] uppercase mb-1.5">
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

  const setField = <K extends keyof LeadForm>(
    key: K,
    value: LeadForm[K]
  ) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggle = <T,>(
    current: T | null,
    value: T
  ): T | null => (current === value ? null : value);

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.projectType) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();

    setTimeout(() => {
      setSubmitted(false);

      setForm({
        name: '',
        phone: '',
        projectType: null,
        bhk: null,
        size: null,
        message: '',
      });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-md"
          />

          {/* MODAL WRAPPER */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={handleClose}
            className="
              fixed inset-0 z-[999]
              flex items-center justify-center
              px-4
            "
          >
            {/* ACTUAL MODAL CARD (Glass / Light Premium) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative w-full max-w-md
                bg-white/90 backdrop-blur-xl
                rounded-[2rem]
                shadow-[0_30px_90px_rgba(139,92,246,0.15)]
                border border-[#E5E7EB]
                overflow-hidden
              "
            >
              {/* PURPLE GRADIENT TOP BAR */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#6D28D9]" />

              {/* CLOSE BUTTON */}
              <button
                onClick={handleClose}
                className="
                  absolute top-4 right-4 z-50
                  w-9 h-9 rounded-xl
                  flex items-center justify-center
                  bg-[#F8FAFC]
                  border border-[#E5E7EB]
                  text-[#6B7280]
                  hover:text-[#8B5CF6]
                  hover:border-[#8B5CF6]/30
                  transition-all duration-200
                "
              >
                <X size={14} strokeWidth={2.5} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-14 gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 flex items-center justify-center mb-1">
                      <svg
                        className="w-7 h-7 text-[#8B5CF6]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1F2937] tracking-tight">
                      We'll be in touch soon!
                    </h3>

                    <p className="text-sm text-[#6B7280] leading-relaxed max-w-[260px]">
                      Thank you,{' '}
                      <span className="text-[#8B5CF6] font-bold">
                        {form.name.split(' ')[0]}
                      </span>
                      . Our design team will reach out within 24 hours.
                    </p>

                    <button
                      onClick={handleClose}
                      className="
                        mt-2 px-8 py-3 rounded-2xl
                        bg-[#8B5CF6]
                        text-white
                        text-sm font-semibold tracking-wide
                        shadow-[0_12px_35px_rgba(139,92,246,0.35)]
                        hover:bg-[#7C3AED]
                        transition-all duration-200
                      "
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 px-6 pt-6 pb-5"
                  >
                    {/* HEADER */}
                    <div className="mb-5 pr-6">
                      <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#8B5CF6] uppercase">
                        Free Consultation
                      </span>

                      <h2 className="mt-0.5 text-2xl font-bold text-[#1F2937] tracking-tight leading-snug">
                        Transform Your Space
                      </h2>

                      <p className="mt-1 text-xs text-[#6B7280]">
                        Fill in the details — we'll respond within 24 hrs.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* NAME + PHONE */}
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
                              w-full px-3 py-3 rounded-xl
                              text-sm text-[#1F2937] font-medium
                              placeholder-[#9CA3AF]
                              bg-[#F8FAFC]
                              border border-[#E5E7EB]
                              focus:outline-none
                              focus:border-[#8B5CF6]
                              focus:bg-white
                              transition-all
                            "
                          />
                        </div>

                        {/* PHONE */}
                        <div>
                          <FieldLabel>Phone</FieldLabel>

                          <div className="flex items-center overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] focus-within:border-[#8B5CF6] focus-within:bg-white transition-all">
                            <div className="px-3 py-3 text-sm font-bold text-[#8B5CF6] border-r border-[#E5E7EB] bg-[#EEF2FF]">
                              +91
                            </div>

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
                                w-full px-3 py-3 text-sm font-medium
                                text-[#1F2937]
                                placeholder-[#9CA3AF]
                                bg-transparent
                                focus:outline-none
                              "
                            />
                          </div>

                          {form.phone.length > 0 &&
                            form.phone.length < 10 && (
                              <p className="text-[11px] text-red-500 mt-1 pl-1 font-medium">
                                Enter a valid 10-digit phone number
                              </p>
                            )}
                        </div>
                      </div>

                      {/* PROJECT TYPE */}
                      <div>
                        <FieldLabel>Project Type</FieldLabel>

                        <div className="flex gap-2">
                          {(['Residential', 'Commercial'] as ProjectType[]).map((t) => (
                            <Pill
                              key={t!}
                              label={t!}
                              active={form.projectType === t}
                              onClick={() => {
                                setField(
                                  'projectType',
                                  toggle(form.projectType, t)
                                );
                                setField('bhk', null);
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* BHK */}
                      <AnimatePresence>
                        {form.projectType === 'Residential' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <FieldLabel>Configuration</FieldLabel>

                            <div className="flex flex-wrap gap-2">
                              {(['1 BHK', '2 BHK', '3 BHK', '4 BHK+', 'Villa'] as BHK[]).map((b) => (
                                <Pill
                                  key={b}
                                  label={b}
                                  active={form.bhk === b}
                                  onClick={() =>
                                    setField('bhk', toggle(form.bhk, b))
                                  }
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* SPACE SIZE */}
                      <div>
                        <FieldLabel>
                          Space Size{' '}
                          <span className="normal-case font-normal text-[#6D28D9]">
                            (optional)
                          </span>
                        </FieldLabel>

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
                              onClick={() =>
                                setField('size', toggle(form.size, val))
                              }
                            />
                          ))}
                        </div>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <FieldLabel>
                          Your Vision{' '}
                          <span className="normal-case font-normal text-[#6D28D9]">
                            (optional)
                          </span>
                        </FieldLabel>

                        <textarea
                          rows={2}
                          placeholder="Describe your dream space..."
                          value={form.message}
                          onChange={(e) => setField('message', e.target.value)}
                          className="
                            w-full px-3 py-3 rounded-xl resize-none
                            text-sm text-[#1F2937] font-medium
                            placeholder-[#9CA3AF]
                            bg-[#F8FAFC]
                            border border-[#E5E7EB]
                            focus:outline-none
                            focus:border-[#8B5CF6]
                            focus:bg-white
                            transition-all
                          "
                        />
                      </div>

                      {/* TERMS */}
                      <label className="flex items-start gap-3 text-[11px] text-[#6B7280] leading-relaxed cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          className="
                            mt-0.5 w-4 h-4 rounded
                            border-[#E5E7EB]
                            text-[#8B5CF6]
                            focus:ring-[#8B5CF6]
                            bg-[#F8FAFC]
                          "
                        />

                        <span>
                          I agree to the{' '}
                          <span className="text-[#8B5CF6] font-bold">
                            Terms & Conditions
                          </span>{' '}
                          and consent to being contacted regarding my inquiry.
                        </span>
                      </label>

                      {/* CTA */}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          !form.name.trim() ||
                          !form.phone.trim() ||
                          !form.projectType
                        }
                        className="
                          w-full py-4 rounded-2xl
                          text-sm font-semibold tracking-wide
                          text-white
                          bg-[#8B5CF6]
                          shadow-[0_12px_35px_rgba(139,92,246,0.3)]
                          hover:bg-[#7C3AED]
                          disabled:opacity-40
                          disabled:cursor-not-allowed
                          active:scale-[0.98]
                          transition-all duration-250
                        "
                      >
                        Request a Free Consultation
                      </button>
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

/* DEMO App Container */
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#1F2937]">
      {/* BACKGROUND GRADIENT GRID */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#F8FAFC] via-white to-[#EEF2FF] -z-10" />

      {/* SOFT PURPLE GLOW ACCENT */}
      <div className="fixed bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C4B5FD]/15 blur-3xl rounded-full -z-10" />

      <button
        onClick={() => setOpen(true)}
        className="
          px-8 py-4 rounded-2xl
          text-sm font-bold tracking-wide
          text-white
          bg-[#8B5CF6]
          shadow-[0_12px_35px_rgba(139,92,246,0.3)]
          hover:bg-[#7C3AED]
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