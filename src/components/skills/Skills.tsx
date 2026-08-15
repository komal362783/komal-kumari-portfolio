import React from 'react';
import { Layers, Database, LayoutDashboard, Code2, GitBranch, TrendingUp, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SoftSkills } from './SoftSkills';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'TrendingUp': <TrendingUp className="w-5 h-5 text-emerald-400" />,
    'LayoutDashboard': <LayoutDashboard className="w-5 h-5 text-cyan-400" />,
    'Code2': <Code2 className="w-5 h-5 text-teal-400" />,
    'Database': <Database className="w-5 h-5 text-emerald-400" />,
    'GitBranch': <GitBranch className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical Toolkit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Proficiencies across exploratory data analysis, business intelligence modeling, relational databases, and Python data libraries.
          </p>
        </ScrollReveal>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <ScrollReveal
              key={category.id}
              direction="up"
              distance={30}
              delay={idx * 0.08}
            >
              <div className="glass-card rounded-2xl p-6 border border-white/[0.08] bg-[#0E1422]/90 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group h-full shadow-lg">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#090D16] border border-white/[0.09] flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                        {categoryIcons[category.iconName]}
                      </div>
                      <h3 className="text-sm font-extrabold text-white tracking-wider font-mono">
                        {category.categoryName}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#090D16]/80 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          )}
                        </div>
                        {skill.levelDescription && (
                          <p className="text-[11px] text-slate-300 leading-snug">
                            {skill.levelDescription}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Specific SQL Foundations Callout */}
                    {category.sqlSpecialTopics && (
                      <div className="pt-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5 font-bold">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>Core Query Clauses Mastered:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {category.sqlSpecialTopics.map((topic) => (
                            <span
                              key={topic}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 font-bold"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Soft Skills Section */}
        <SoftSkills />

      </div>
    </section>
  );
};
