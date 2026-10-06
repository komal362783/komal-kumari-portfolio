import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ContactProps {
  onCopyEmail: () => void;
}

// Success animation styles (only transform/opacity/filter on a few elements, so it stays light on phones).
const SUCCESS_CSS = `
.contact-success { position: relative; overflow: hidden; animation: cs-panel 0.45s ease-out both; box-shadow: 0 0 40px -8px rgba(52, 211, 153, 0.45), inset 0 0 40px -20px rgba(34, 211, 238, 0.4); }
.cs-glow { position: absolute; left: 50%; top: 70px; width: 220px; height: 220px; margin: -110px 0 0 -110px; border-radius: 9999px; background: radial-gradient(circle, rgba(52,211,153,0.45) 0%, rgba(34,211,238,0.18) 45%, transparent 70%); animation: cs-glow 2.4s ease-in-out infinite; pointer-events: none; }
.cs-badge { animation: cs-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both; box-shadow: 0 0 0 4px rgba(52,211,153,0.15), 0 0 28px 6px rgba(52,211,153,0.65); }
.cs-tick { stroke-dasharray: 24; stroke-dashoffset: 24; animation: cs-draw 0.5s ease-out 0.35s forwards; filter: drop-shadow(0 0 4px rgba(110,231,183,0.9)); }
.cs-ring { animation: cs-ring 1.1s ease-out 0.25s both; }
.cs-ring2 { animation: cs-ring 1.1s ease-out 0.55s both; }
.cs-dot { opacity: 0; animation: cs-burst 0.95s ease-out 0.35s both; }
.cs-spark { position: absolute; opacity: 0; color: #fde68a; filter: drop-shadow(0 0 4px rgba(253,230,138,0.9)); animation: cs-twinkle 1.8s ease-in-out infinite; pointer-events: none; }
.cs-text { animation: cs-rise 0.5s ease-out both; }
.cs-title { background: linear-gradient(90deg, #6ee7b7, #67e8f9, #fde68a, #6ee7b7); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: cs-rise 0.5s ease-out both, cs-shine 3s linear infinite; }
@keyframes cs-panel { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: none; } }
@keyframes cs-pop { 0% { transform: scale(0.2); opacity: 0; } 70% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
@keyframes cs-draw { to { stroke-dashoffset: 0; } }
@keyframes cs-ring { from { transform: scale(0.8); opacity: 0.9; } to { transform: scale(2.6); opacity: 0; } }
@keyframes cs-burst { 0% { opacity: 1; transform: rotate(var(--a)) translateY(0) scale(1); } 100% { opacity: 0; transform: rotate(var(--a)) translateY(-56px) scale(0.4); } }
@keyframes cs-twinkle { 0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); } 50% { opacity: 1; transform: scale(1.1) rotate(45deg); } }
@keyframes cs-glow { 0%, 100% { opacity: 0.6; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.08); } }
@keyframes cs-shine { to { background-position: 250% 0; } }
@keyframes cs-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .contact-success, .cs-badge, .cs-text, .cs-glow { animation: none; }
  .cs-title { animation: none; background-position: 0 0; }
  .cs-tick { animation: none; stroke-dashoffset: 0; }
  .cs-ring, .cs-ring2, .cs-dot { display: none; }
  .cs-spark { animation: none; opacity: 0.8; transform: none; }
}
`;

const CONFETTI_COLORS = ['#34d399', '#2dd4bf', '#22d3ee', '#fde047', '#f472b6', '#a78bfa', '#fb923c'];

// Fires a colourful confetti burst. Skipped when the visitor prefers reduced motion.
const fireConfetti = async (canvas: HTMLCanvasElement) => {
  if (typeof window === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    const { default: confetti } = await import('canvas-confetti');
    if (!canvas.isConnected) return;
    const burst = confetti.create(canvas, { resize: true, disableForReducedMotion: true });
    const small = window.innerWidth < 640;
    const base = { colors: CONFETTI_COLORS, zIndex: 9999, disableForReducedMotion: true, ticks: 200 };
    burst({ ...base, particleCount: small ? 60 : 110, spread: 85, startVelocity: 48, origin: { x: 0.5, y: 0.6 } });
    setTimeout(() => canvas.isConnected && burst({ ...base, particleCount: small ? 25 : 45, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } }), 250);
    setTimeout(() => canvas.isConnected && burst({ ...base, particleCount: small ? 25 : 45, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } }), 250);
  } catch {
    // Confetti is decoration only; ignore failures.
  }
};

const SPARKLES: { left: string; top: string; size: number; delay: string }[] = [
  { left: '8%', top: '14%', size: 18, delay: '0s' },
  { left: '88%', top: '10%', size: 22, delay: '0.4s' },
  { left: '16%', top: '62%', size: 14, delay: '0.9s' },
  { left: '82%', top: '58%', size: 16, delay: '0.2s' },
  { left: '50%', top: '6%', size: 12, delay: '1.1s' },
  { left: '30%', top: '32%', size: 12, delay: '0.7s' },
  { left: '70%', top: '34%', size: 14, delay: '1.4s' },
];

export const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (formSubmitted && confettiCanvasRef.current) fireConfetti(confettiCanvasRef.current);
  }, [formSubmitted]);

  const handleCopyEmail = () => {
    onCopyEmail();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || sending) return;

    setSending(true);
    setSendError('');
    try {
      const res = await fetch('https://formspree.io/f/xyekkzbg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio message from ${formData.name}`,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setFormSubmitted(true);
      } else {
        setSendError('Could not send your message. Please try again or email me directly.');
      }
    } catch {
      setSendError('Network problem. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090D16]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Turn Data Into Insights.
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-3 max-w-2xl font-normal">
            Open to <span className="text-emerald-300 font-bold">Data Analytics Intern</span> and <span className="text-cyan-300 font-bold">Fresher Data Analyst</span> opportunities.
          </p>
        </ScrollReveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & CTAs */}
          <ScrollReveal direction="right" distance={30} delay={0.1} className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.09] bg-[#0E1422]/90 hover:border-emerald-500/40 transition-all shadow-lg">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-[#090D16] border border-slate-700 text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">Direct Email</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base font-extrabold text-white hover:text-emerald-300 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.09] bg-[#0E1422]/90 hover:border-emerald-500/40 transition-all shadow-lg">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-[#090D16] border border-slate-700 text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-teal-400" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-1">Phone Number</div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base font-extrabold text-white hover:text-teal-300 transition-colors font-mono"
              >
                +91 {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location & Social Buttons */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.09] bg-[#0E1422]/90 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Location</div>
                  <div className="text-sm font-extrabold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#141C30] border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#141C30] border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-white text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Direct Contact Form */}
          <ScrollReveal direction="left" distance={30} delay={0.2} className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.09] bg-[#0E1422]/90 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#090D16] border border-white/[0.09] flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Send Direct Message</h3>
                  <p className="text-xs text-slate-300">Your message goes straight to my inbox</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="contact-success p-8 rounded-xl bg-emerald-950/40 border border-emerald-400/50 text-center space-y-3" role="status" aria-live="polite">
                  <style>{SUCCESS_CSS}</style>
                  <canvas ref={confettiCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
                  <span className="cs-glow" aria-hidden="true" />
                  {SPARKLES.map((sp, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className="cs-spark"
                      style={{ left: sp.left, top: sp.top, width: sp.size, height: sp.size, animationDelay: sp.delay }}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                    </svg>
                  ))}
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    <span className="cs-ring absolute inset-0 rounded-full border-2 border-emerald-400/70" />
                    <span className="cs-ring2 absolute inset-0 rounded-full border-2 border-cyan-300/60" />
                    {Array.from({ length: 14 }, (_, i) => (
                      <span
                        key={i}
                        className="cs-dot absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full"
                        style={{ '--a': `${i * (360 / 14)}deg`, backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length] } as React.CSSProperties}
                      />
                    ))}
                    <div className="cs-badge relative w-[72px] h-[72px] rounded-full bg-emerald-500/25 text-emerald-300 flex items-center justify-center border border-emerald-300/60">
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path className="cs-tick" d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="cs-title text-xl sm:text-2xl font-extrabold" style={{ animationDelay: '0.4s, 0s' }}>
                    Congratulations! Your message has been sent.
                  </h4>
                  <p className="cs-text text-xs sm:text-sm text-slate-100 max-w-md mx-auto leading-relaxed" style={{ animationDelay: '0.55s' }}>
                    Thanks, <span className="text-emerald-300 font-bold">{formData.name}</span>! Your message has been sent and I will get back to you soon. You can also email Komal directly at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline font-bold">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="cs-text mt-4 px-4 py-2 rounded-lg bg-[#141C30] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white cursor-pointer"
                    style={{ animationDelay: '0.7s' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-200 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D16] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-200 mb-1.5 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D16] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-200 mb-1.5 font-semibold">
                      Subject / Role Discussion
                    </label>
                    <input
                      type="text"
                      name="subject"
                        value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analytics Intern Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D16] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-200 mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Komal, I reviewed your analytics projects and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D16] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {sendError && (
                    <p role="alert" className="text-xs text-red-300 font-semibold">{sendError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="disabled:opacity-60 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};



