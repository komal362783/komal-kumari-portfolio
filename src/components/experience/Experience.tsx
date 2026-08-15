import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#0B101C] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INTERNSHIP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical Project Experience
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on data analytics internship applying Python, NLP sentiment evaluation, exploratory data analysis, and dashboard development.
          </p>
        </ScrollReveal>

        {/* Experience Timeline Item */}
        <div className="relative pl-6 sm:pl-8 border-l border-emerald-500/30 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ScrollReveal key={index} direction="left" distance={35} delay={0.15}>
              <div className="relative group">
                {/* Glowing Timeline Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090D16] border-2 border-emerald-400 group-hover:scale-125 transition-transform flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Main Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.09] bg-[#0E1422]/95 relative overflow-hidden shadow-xl">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl font-extrabold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <Badge variant="emerald" size="sm">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="text-base font-bold text-emerald-400 font-mono">
                        {exp.company}
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-slate-200 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-2">
                      Key Practical Deliverables:
                    </div>
                    {exp.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies used in internship */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-300 mr-2 flex items-center gap-1 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Stack:</span>
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#141C30] border border-slate-700 text-slate-200 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
