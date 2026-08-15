import React from 'react';
import { MessageSquareText, BrainCircuit, Lightbulb, CheckCheck, Clock, Users2 } from 'lucide-react';
import { SOFT_SKILLS } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SoftSkills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    MessageSquareText: <MessageSquareText className="w-5 h-5 text-cyan-400" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
    CheckCheck: <CheckCheck className="w-5 h-5 text-teal-400" />,
    Clock: <Clock className="w-5 h-5 text-cyan-300" />,
    Users2: <Users2 className="w-5 h-5 text-emerald-300" />,
  };

  return (
    <div className="mt-16">
      <ScrollReveal direction="up" distance={20} className="flex flex-col items-start mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Professional Attributes</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Core Professional & Collaborative Competencies
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SOFT_SKILLS.map((skill, idx) => (
          <ScrollReveal
            key={skill.name}
            direction="up"
            distance={25}
            delay={idx * 0.06}
          >
            <div className="glass-card rounded-xl p-5 border border-white/[0.08] bg-[#0E1422]/90 hover:border-emerald-500/40 transition-all group h-full shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#090D16] border border-white/[0.08] flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                  {iconMap[skill.iconName] || <BrainCircuit className="w-5 h-5 text-emerald-400" />}
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
