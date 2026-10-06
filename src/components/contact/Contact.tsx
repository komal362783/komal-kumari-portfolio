import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ContactProps {
  onCopyEmail: () => void;
}

// Success animation styles (only transform/opacity, so it stays light on phones).
const SUCCESS_CSS = `
.contact-success { animation: cs-panel 0.4s ease-out both; }
.cs-badge { animation: cs-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
.cs-tick { stroke-dasharray: 24; stroke-dashoffset: 24; animation: cs-draw 0.4s ease-out 0.25s forwards; }
.cs-ring { animation: cs-ring 0.9s ease-out 0.2s both; }
.cs-dot { opacity: 0; animation: cs-burst 0.8s ease-out 0.3s both; }
.cs-text { animation: cs-rise 0.4s ease-out both; }
@keyframes cs-panel { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes cs-pop { from { transform: scale(0.3); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes cs-draw { to { stroke-dashoffset: 0; } }
@keyframes cs-ring { from { transform: scale(0.8); opacity: 0.9; } to { transform: scale(2); opacity: 0; } }
@keyframes cs-burst { 0% { opacity: 1; transform: rotate(var(--a)) translateY(0) scale(1); } 100% { opacity: 0; transform: rotate(var(--a)) translateY(-36px) scale(0.4); } }
@keyframes cs-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .contact-success, .cs-badge, .cs-text { animation: none; }
  .cs-tick { animation: none; stroke-dashoffset: 0; }
  .cs-ring, .cs-dot { display: none; }
}
`;

export const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
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
                <div className="contact-success p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3" role="status" aria-live="polite">
                  <style>{SUCCESS_CSS}</style>
                  <div className="relative w-14 h-14 mx-auto flex items-center justify-center">
                    <span className="cs-ring absolute inset-0 rounded-full border border-emerald-400/60" />
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <span
                        key={i}
                        className="cs-dot absolute left-1/2 top-1/2 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-emerald-300"
                        style={{ '--a': `${i * 45}deg` } as React.CSSProperties}
                      />
                    ))}
                    <div className="cs-badge w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path className="cs-tick" d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="cs-text text-lg font-extrabold text-white" style={{ animationDelay: '0.35s' }}>Message sent</h4>
                  <p className="cs-text text-xs text-slate-200 max-w-md mx-auto leading-relaxed" style={{ animationDelay: '0.45s' }}>
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
                    style={{ animationDelay: '0.55s' }}
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


