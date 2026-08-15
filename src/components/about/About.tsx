import React from 'react';
import { User, Target, Compass, Sparkles, Database, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { EducationCard } from './EducationCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data-Driven Mindset, Engineering Foundation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging analytical reasoning with practical programming to extract clarity from complex datasets.
          </p>
        </ScrollReveal>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Short Professional Introduction & Role Alignment */}
          <ScrollReveal direction="right" distance={30} delay={0.1} className="lg:col-span-7 space-y-6">
            
            {/* Primary Bio Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.09] relative bg-[#0E1422]/90">
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-400/60 shadow-md flex-shrink-0">
                  <img
                    src="/komal-kumari.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 font-semibold">
                    B.Tech CSE Undergraduate • Aspiring Data Analyst
                  </p>
                </div>
              </div>
              
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                "{PERSONAL_INFO.bio}"
              </p>

              {/* Seeking Opportunities Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#0E1B2E] to-cyan-950/30 border border-emerald-500/40">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Actively Seeking Immediate Opportunities</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {PERSONAL_INFO.roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#090D16]/90 border border-emerald-500/30 text-xs font-bold text-white shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Working Principles Visual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/90">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">Data Integrity</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous sanitization, type checks, and validation before formulating insights.
                </p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/90">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">Visual Clarity</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Eliminating clutter to highlight trends, KPIs, and outliers clearly.
                </p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/90">
                <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono">Actionability</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ensuring analysis directly informs business operations and strategy.
                </p>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Education Card */}
          <ScrollReveal direction="left" distance={30} delay={0.2} className="lg:col-span-5">
            <EducationCard />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
