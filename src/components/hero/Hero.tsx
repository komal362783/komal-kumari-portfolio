import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Sparkles, Database, FileSpreadsheet, BarChart2, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroVisual3D } from './HeroVisual3D';
import { Badge } from '../ui/Badge';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface HeroProps {
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  const skillIcons: Record<string, React.ReactNode> = {
    'Python': <Code className="w-3.5 h-3.5 text-yellow-300" />,
    'SQL': <Database className="w-3.5 h-3.5 text-cyan-300" />,
    'Excel': <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />,
    'Power BI': <BarChart2 className="w-3.5 h-3.5 text-amber-300" />,
    'Data Visualization': <Sparkles className="w-3.5 h-3.5 text-teal-300" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#090D16]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 data-dot-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Candidate Identity Card with Professional Headshot */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-6 p-2.5 sm:p-3 sm:pr-6 rounded-2xl bg-[#0E1422]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
              {/* Headshot with glowing gradient frame */}
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/40 via-teal-400/30 to-cyan-500/40 blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-emerald-400/70 shadow-2xl bg-[#090D16]">
                  <img
                    src="/komal-kumari.jpg"
                    alt="Komal Kumari - Aspiring Data Analyst"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Active Status Pulse Badge */}
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#090D16] border-2 border-emerald-400 flex items-center justify-center shadow-md"
                  title="Available for Internship & Entry-Level Roles"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Identity & Status */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold">
                    CSE '27
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-200 mb-1.5">
                  <span className="text-cyan-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span>•</span>
                  <span className="text-slate-300">AKTU Lucknow</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-bold">Seeking: Data Analytics Intern | Fresher Analyst</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              Turning Data Into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Meaningful Insights
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.secondaryText}
            </p>

            {/* Hero Visual Skill Badges */}
            <div className="w-full mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <span className="font-bold text-emerald-400">Core Analytical Toolkit</span>
                <span className="h-px bg-slate-800 flex-1" />
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.heroSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="neutral"
                    size="md"
                    icon={skillIcons[skill]}
                    className="border-slate-700 bg-[#0E1422] text-white hover:border-emerald-500/50 hover:bg-[#141C30]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Main CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E1422] border border-emerald-500/50 text-emerald-200 hover:text-white hover:border-emerald-300 hover:bg-[#141C30] text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <span>View Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E1422] border border-slate-700 text-white hover:text-white hover:border-cyan-400 hover:bg-[#141C30] text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-cyan-300" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800/90 w-full">
              <span className="text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <button
                onClick={onCopyEmail}
                className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Data Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-lg lg:max-w-none relative rounded-2xl bg-gradient-to-b from-[#0E1422]/90 to-[#090D16]/95 border border-white/[0.1] p-2 shadow-2xl backdrop-blur-xl">
              {/* Header bar simulating a clean analytics studio viewport */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] bg-[#0A0F1A]/90 rounded-t-xl text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-300 ml-1">mesh_spatial_viz.3d</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Realtime Analytics View</span>
                </div>
              </div>

              {/* Three.js Canvas Container */}
              <HeroVisual3D />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
