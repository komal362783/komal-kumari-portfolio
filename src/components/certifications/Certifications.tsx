import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Formal simulations and industry-recognized foundational certifications validating practical analytics competency.
          </p>
        </ScrollReveal>

        {/* Certifications Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              direction="up"
              distance={30}
              delay={idx * 0.1}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.09] bg-[#0E1422]/90 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden h-full shadow-xl">
                {/* Subtle ambient accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#090D16] border border-white/[0.09] flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <Badge variant="slate" size="sm">
                      {cert.date}
                    </Badge>
                  </div>

                  <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-1 font-bold">
                    {cert.issuer}
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug mb-3 group-hover:text-emerald-200 transition-colors">
                    {cert.title}
                  </h3>

                  {cert.verificationNote && (
                    <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                      {cert.verificationNote}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Completion</span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">{cert.badgeType}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
