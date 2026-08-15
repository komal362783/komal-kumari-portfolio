import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, AlertCircle } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { GithubIcon } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.09] bg-[#0E1422]/95 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 relative group overflow-hidden shadow-xl"
    >
      {/* Subtle hover corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

      <div>
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <Badge variant="emerald" size="sm">
            {project.category}
          </Badge>

          {project.isSyntheticData && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/35 text-amber-300 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3 h-3" />
              <span>Synthetic Dataset</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2.5 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5 font-normal">
          {project.shortDescription}
        </p>

        {/* Key Capabilities */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
            Key Project Capabilities:
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            {project.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="truncate">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#141C30] border border-slate-700 text-slate-200 group-hover:text-white transition-colors font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.08] text-slate-300 font-semibold">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 py-1.5 transition-colors group/btn cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C30] border border-slate-700 hover:border-cyan-400 hover:text-white text-slate-200 text-xs font-mono font-medium transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5 text-cyan-300" />
          <span>GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};
