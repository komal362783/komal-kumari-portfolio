import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ContactProps {
  onCopyEmail: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#10B981', '#06B6D4', '#34D399', '#F8FAFC'],
    });

    setFormSubmitted(true);
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
                  <p className="text-xs text-slate-300">Fastest response within 24 hours</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-extrabold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-emerald-300 font-bold">{formData.name}</span>! You can also reach Komal directly at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline font-bold">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#141C30] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white cursor-pointer"
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Komal, I reviewed your analytics projects and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D16] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
