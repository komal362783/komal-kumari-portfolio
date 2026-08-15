import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const EducationCard: React.FC = () => {
  const { education, location } = PERSONAL_INFO;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.09] relative overflow-hidden bg-[#0E1422]/90">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">Academic Foundation</div>
          <h3 className="text-lg font-bold text-white leading-tight">Formal Engineering Education</h3>
        </div>
      </div>

      <div className="space-y-4">
        {/* Degree */}
        <div className="p-4 rounded-xl bg-[#090D16] border border-white/[0.08]">
          <div className="text-sm font-bold text-white mb-1">
            {education.degree}
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-medium">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>{education.duration} • Expected Graduation: {education.expectedGraduation}</span>
          </div>
        </div>

        {/* Institution Details */}
        <div className="space-y-2.5 text-xs text-slate-200">
          <div className="flex items-start gap-2.5">
            <Building2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold block">{education.institution}</span>
              <span className="text-slate-300">{education.university}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-300 pt-1">
            <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="pt-3 border-t border-slate-800">
          <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curriculum Focus</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Computer Science & Engineering', 'Data Structures & Algorithms', 'Database Systems', 'Statistical Methods'].map((subject) => (
              <span
                key={subject}
                className="text-[11px] px-2.5 py-1 rounded-md bg-[#141C30] border border-slate-700 text-slate-200 font-mono font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
