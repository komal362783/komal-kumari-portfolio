import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface FooterProps {
  onCopyEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070A12] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-300">
              Data Analytics Enthusiast • CSE Undergraduate
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0E1422] border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0E1422] border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={onCopyEmail}
              className="p-2.5 rounded-xl bg-[#0E1422] border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-colors cursor-pointer"
              aria-label="Copy Email"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0E1422] border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Komal Kumari. All projects linked to verified open-source repositories.
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-300">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
